import "dotenv/config";
import express from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Server as SocketIOServer } from "socket.io";
import { io as createSocketClient, Socket as ClientSocket } from "socket.io-client";
import http from "http";

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT || 3005);
  const quoteFormEndpoint = "https://crms.geekmt.com/api/public/customer-forms/form_1780670393030_531/submit";
  const quoteRequestTimeoutMs = Number(process.env.QUOTE_REQUEST_TIMEOUT_MS || 15000);
  const quoteMinimumSubmitTimeMs = 3000;
  const liveChatApiToken = process.env.LIVE_CHAT_API_TOKEN;
  const liveChatApiBaseUrl = process.env.LIVE_CHAT_API_BASE_URL?.replace(/\/+$/, "");

  if ((!liveChatApiToken || !liveChatApiBaseUrl) && process.env.NODE_ENV === "production") {
    console.warn("LIVE_CHAT_API_TOKEN or LIVE_CHAT_API_BASE_URL is not configured. Live chat API proxy is disabled.");
  }

  const server = http.createServer(app);
  const io = new SocketIOServer(server, {
    path: "/socket.io",
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  app.use(express.json());

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/chat", (req, res) => {
    res.status(410).json({ error: "This chat endpoint has been replaced by live chat." });
  });

  app.post("/api/quote-request", async (req, res) => {
    const startedAt = Date.now();
    const {
      name,
      company,
      email,
      whatsapp,
      country,
      message,
      application_type: applicationType,
      _formStartedAt: formStartedAt,
      website_url: websiteUrl,
    } = req.body || {};

    if (String(websiteUrl || "").trim()) {
      res.json({ ok: true });
      return;
    }

    const normalizedFormStartedAt = Number(formStartedAt);
    if (!Number.isFinite(normalizedFormStartedAt) || Date.now() - normalizedFormStartedAt < quoteMinimumSubmitTimeMs) {
      res.status(400).json({ error: "Form submitted too quickly" });
      return;
    }

    if (!name || !company || !email || !whatsapp || !country || !message || !applicationType) {
      res.status(400).json({ error: "Missing required quote request fields" });
      return;
    }

    const payload = {
      name,
      company,
      email,
      whatsapp,
      country,
      message,
      application_type: applicationType,
      _formStartedAt: normalizedFormStartedAt,
      website_url: "",
    };

    res.status(202).json({ ok: true, queued: true });

    const forwardQuoteRequest = async () => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), quoteRequestTimeoutMs);

      try {
        const upstream = await fetch(quoteFormEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        const text = await upstream.text();
        const durationMs = Date.now() - startedAt;

        if (!upstream.ok) {
          console.error(`Quote request CRM rejected: ${upstream.status} in ${durationMs}ms: ${text.slice(0, 500)}`);
          return;
        }

        console.log(`Quote request CRM accepted: ${upstream.status} in ${durationMs}ms`);
      } catch (error) {
        const durationMs = Date.now() - startedAt;
        const isTimeout = error instanceof Error && error.name === "AbortError";

        console.error(`Quote request CRM ${isTimeout ? "timeout" : "failure"} after ${durationMs}ms:`, error);
      } finally {
        clearTimeout(timeout);
      }
    };

    void forwardQuoteRequest();
  });

  const requireLiveChatConfig = (res: express.Response) => {
    if (liveChatApiToken && liveChatApiBaseUrl) return true;
    res.status(503).json({ error: "Live chat service is not configured" });
    return false;
  };

  const forwardLiveChatJson = async (res: express.Response, pathAndQuery: string, init: RequestInit) => {
    if (!liveChatApiBaseUrl) {
      res.status(503).json({ error: "Live chat service is not configured" });
      return;
    }

    try {
      const upstream = await fetch(`${liveChatApiBaseUrl}${pathAndQuery}`, {
        ...init,
        headers: {
          "Content-Type": "application/json",
          ...(init.headers || {}),
        },
      });
      const text = await upstream.text();

      res.status(upstream.status);
      res.type(upstream.headers.get("content-type") || "application/json");
      res.send(text);
    } catch (error) {
      console.error("Live chat upstream request failed:", error);
      res.status(502).json({ error: "Live chat service is unavailable" });
    }
  };

  app.post("/api/live-chat/public/sessions", async (req, res) => {
    if (!requireLiveChatConfig(res)) return;

    await forwardLiveChatJson(res, "/api/live-chat/public/sessions", {
      method: "POST",
      body: JSON.stringify({
        ...req.body,
        apiToken: liveChatApiToken,
      }),
    });
  });

  app.get("/api/live-chat/public/sessions/:id/messages", async (req, res) => {
    if (!requireLiveChatConfig(res)) return;

    const sessionId = encodeURIComponent(req.params.id);
    const token = encodeURIComponent(String(req.query.token || ""));
    await forwardLiveChatJson(res, `/api/live-chat/public/sessions/${sessionId}/messages?token=${token}`, {
      method: "GET",
    });
  });

  app.post("/api/live-chat/public/sessions/:id/messages", async (req, res) => {
    if (!requireLiveChatConfig(res)) return;

    const sessionId = encodeURIComponent(req.params.id);
    await forwardLiveChatJson(res, `/api/live-chat/public/sessions/${sessionId}/messages`, {
      method: "POST",
      body: JSON.stringify(req.body),
    });
  });

  io.on("connection", (socket) => {
    let upstreamSocket: ClientSocket | null = null;
    let authCallbackSent = false;

    const sendAuthCallback = (cb: ((response: any) => void) | undefined, response: any) => {
      if (authCallbackSent) return;
      authCallbackSent = true;
      if (cb) cb(response);
    };

    socket.on("live_chat:visitor_auth", (data, cb) => {
      if (!liveChatApiBaseUrl) {
        sendAuthCallback(cb, { ok: false, error: "Live chat service is not configured" });
        return;
      }

      upstreamSocket?.disconnect();
      authCallbackSent = false;

      upstreamSocket = createSocketClient(liveChatApiBaseUrl, {
        path: "/socket.io",
        transports: ["websocket", "polling"],
      });

      upstreamSocket.on("connect", () => {
        upstreamSocket?.emit("live_chat:visitor_auth", data, (response: any) => {
          if (response?.ok && data.sessionId) {
            socket.join(data.sessionId);
          }
          sendAuthCallback(cb, response);
        });
      });

      upstreamSocket.on("connect_error", (error) => {
        console.error("Live chat upstream socket connection failed:", error.message);
        sendAuthCallback(cb, { ok: false, error: "Live chat service is unavailable" });
      });

      upstreamSocket.on("live_chat:message", (message) => {
        socket.emit("live_chat:message", message);
      });

      upstreamSocket.on("live_chat:session_updated", (session) => {
        socket.emit("live_chat:session_updated", session);
      });
    });

    socket.on("live_chat:visitor_message", (data, cb) => {
      if (!upstreamSocket?.connected) {
        if (cb) cb({ ok: false, error: "Live chat socket is not authenticated" });
        return;
      }

      upstreamSocket.emit("live_chat:visitor_message", data, cb);
    });

    socket.on("disconnect", () => {
      upstreamSocket?.disconnect();
    });
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath, { redirect: false }));

    const resolvePrerenderedHtml = (requestPath: string) => {
      const normalizedPath = requestPath
        .replace(/^\/+/, "")
        .replace(/\/+$/, "");

      return normalizedPath
        ? path.join(distPath, normalizedPath, "index.html")
        : path.join(distPath, "index.html");
    };

    app.get(["/admin", "/admin/"], (_req, res) => {
      res.sendFile(path.join(distPath, "admin", "index.html"));
    });

    app.get("*", (req, res) => {
      const prerenderedPath = resolvePrerenderedHtml(req.path);
      const fallbackPath = fs.existsSync(prerenderedPath)
        ? prerenderedPath
        : path.join(distPath, "index.html");

      res.sendFile(fallbackPath);
    });
  }

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
