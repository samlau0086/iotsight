import "dotenv/config";
import express from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer } from "vite";
import http from "http";

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT || 3005);
  const quoteFormEndpoint = "https://crms.geekmt.com/api/public/customer-forms/form_1780670393030_531/submit";
  const quoteRequestTimeoutMs = Number(process.env.QUOTE_REQUEST_TIMEOUT_MS || 15000);
  const quoteMinimumSubmitTimeMs = 3000;
  const liveChatApiBaseUrl = "https://chat.iotedges.com";

  console.log(`Live chat API proxy target: ${liveChatApiBaseUrl}`);

  const server = http.createServer(app);

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

  const copyLiveChatCookies = (res: express.Response, upstream: Response) => {
    const headersWithSetCookie = upstream.headers as Headers & { getSetCookie?: () => string[] };
    const cookies = headersWithSetCookie.getSetCookie?.() || [];
    const fallbackCookie = upstream.headers.get("set-cookie");
    const upstreamCookies = cookies.length ? cookies : fallbackCookie ? [fallbackCookie] : [];

    upstreamCookies.forEach((cookie) => {
      res.append("Set-Cookie", cookie.replace(/;\s*Domain=[^;]+/gi, ""));
    });
  };

  const liveChatProxyHeaders = (req: express.Request, contentType?: string) => ({
    Accept: req.headers.accept || "application/json",
    ...(contentType ? { "Content-Type": contentType } : {}),
    ...(req.headers.cookie ? { Cookie: req.headers.cookie } : {}),
    ...(req.headers["user-agent"] ? { "User-Agent": req.headers["user-agent"] } : {}),
  });

  const forwardLiveChat = async (req: express.Request, res: express.Response, upstreamPath: string) => {
    try {
      const hasBody = !["GET", "HEAD"].includes(req.method);
      const upstream = await fetch(`${liveChatApiBaseUrl}${upstreamPath}`, {
        method: req.method,
        headers: liveChatProxyHeaders(req, hasBody ? "application/json" : undefined),
        body: hasBody ? JSON.stringify(req.body || {}) : undefined,
      });

      const text = await upstream.text();

      copyLiveChatCookies(res, upstream);
      res.status(upstream.status);
      res.type(upstream.headers.get("content-type") || "application/json");
      res.send(text);
    } catch (error) {
      console.error("Live chat upstream request failed:", error);
      res.status(502).json({ error: "Live chat service is unavailable" });
    }
  };

  app.get("/api/live-chat/stream", async (req, res) => {
    const controller = new AbortController();
    req.on("close", () => controller.abort());

    try {
      const upstream = await fetch(`${liveChatApiBaseUrl}/api/chat/stream`, {
        method: "GET",
        headers: liveChatProxyHeaders(req, "text/event-stream"),
        signal: controller.signal,
      });

      copyLiveChatCookies(res, upstream);
      res.status(upstream.status);
      res.setHeader("Content-Type", upstream.headers.get("content-type") || "text/event-stream");
      res.setHeader("Cache-Control", "no-cache, no-transform");
      res.setHeader("Connection", "keep-alive");

      if (!upstream.ok || !upstream.body) {
        res.end(await upstream.text());
        return;
      }

      const reader = upstream.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(Buffer.from(value));
      }
      res.end();
    } catch (error) {
      if (!controller.signal.aborted) {
        console.error("Live chat upstream stream failed:", error);
        res.status(502).json({ error: "Live chat stream is unavailable" });
      }
    }
  });

  app.all(/^\/api\/live-chat\/(widget-config|conversation|profile|messages|end|rating|transcript)$/, async (req, res) => {
    await forwardLiveChat(req, res, `/api/chat/${req.params[0]}`);
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    const notFoundHtmlPath = path.join(distPath, "404.html");

    app.get(/^\/admin$/, (req, res) => {
      const query = req.url.includes("?") ? req.url.slice(req.url.indexOf("?")) : "";
      res.redirect(308, `/admin/${query}`);
    });

    app.get("/admin/", (_req, res) => {
      res.sendFile(path.join(distPath, "admin", "index.html"));
    });

    app.use(express.static(distPath, { redirect: false }));

    const resolvePrerenderedHtml = (requestPath: string) => {
      const normalizedPath = requestPath
        .replace(/^\/+/, "")
        .replace(/\/+$/, "");

      return normalizedPath
        ? path.join(distPath, normalizedPath, "index.html")
        : path.join(distPath, "index.html");
    };

    app.get("*", (req, res) => {
      const prerenderedPath = resolvePrerenderedHtml(req.path);
      if (fs.existsSync(prerenderedPath)) {
        res.sendFile(prerenderedPath);
        return;
      }

      if (fs.existsSync(notFoundHtmlPath)) {
        res.status(404).sendFile(notFoundHtmlPath);
        return;
      }

      res.status(404).type("text/plain").send("404 Not Found");
    });
  }

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
