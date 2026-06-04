import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Server as SocketIOServer } from "socket.io";
import http from "http";

async function startServer() {
  const app = express();
  const PORT = 3000;
  
  const server = http.createServer(app);
  const io = new SocketIOServer(server, {
    path: "/socket.io",
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // In-memory store for demo
  const mockSessions: Record<string, any> = {};
  const mockMessages: Record<string, any[]> = {};

  // Mock CRM AI Chat Endpoint (Old)
  app.post("/api/chat", (req, res) => {
    // ...
  });

  // Start new live chat session
  app.post("/api/live-chat/public/sessions", (req, res) => {
    const { visitorName, visitorEmail, visitorPhone } = req.body;
    const sessionId = `lc_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const token = `visitor-session-token-${Date.now()}`;
    
    mockSessions[sessionId] = {
      id: sessionId,
      visitorName,
      visitorEmail,
      visitorPhone,
      status: "open",
    };
    
    mockMessages[sessionId] = [
      {
        id: `lcm_${Date.now()}_init`,
        sessionId,
        role: "agent",
        senderName: "Live Chat Agent",
        body: `Hi ${visitorName}, thanks for reaching out. How can I assist you with our industrial IoT solutions today?`,
        createdAt: new Date().toISOString(),
      }
    ];

    res.json({
      session: mockSessions[sessionId],
      token
    });
  });

  // Get session messages
  app.get("/api/live-chat/public/sessions/:id/messages", (req, res) => {
    const sessionId = req.params.id;
    if (!mockSessions[sessionId]) {
      return res.status(404).json({ error: "Session not found" });
    }
    const messages = mockMessages[sessionId] || [];
    res.json(messages);
  });

  // Send visitor message
  app.post("/api/live-chat/public/sessions/:id/messages", (req, res) => {
    const sessionId = req.params.id;
    const { senderName, body } = req.body;
    
    if (!mockMessages[sessionId]) {
      mockMessages[sessionId] = [];
    }
    
    const userMessage = {
      id: `lcm_${Date.now()}_user`,
      sessionId,
      role: "visitor",
      senderName: senderName || "Visitor",
      body,
      createdAt: new Date().toISOString(),
    };
    
    mockMessages[sessionId].push(userMessage);

    let mockReply = "I understand you need assistance. Please let me know how I can help with your CRM implementation.";
    
    if (body.toLowerCase().includes("pricing")) {
      mockReply = "Our pricing varies based on the gateway quantities and customized SaaS dashboard requirements. Could you let me know how many gateways you plan to deploy?";
    } else if (body.toLowerCase().includes("hardware") || body.toLowerCase().includes("gateway")) {
      mockReply = "Our industrial Modbus MQTT gateways support RS485/RS232, are DIN-rail mountable, and operate in harsh environments (-40 to 85°C). Do you have specific protocol requirements?";
    } else if (body.toLowerCase().includes("demo") || body.toLowerCase().includes("dashboard")) {
      mockReply = "Our cloud dashboard provides real-time visualization, threshold alerting, and historical reporting. Would you like a guided tour of the demo platform?";
    }

    const agentMessage = {
      id: `lcm_${Date.now()}_agent`,
      sessionId,
      role: "agent",
      senderName: "Live Chat Agent",
      body: mockReply,
      createdAt: new Date().toISOString(),
      metadata: { escalate: false }
    };

    setTimeout(() => {
      mockMessages[sessionId].push(agentMessage);
    }, 1000);

    // Immediate response to visitor POST
    res.json({
      message: userMessage,
      agentMessage: null // The agent message will be fetched by polling, or we could return it here if we want immediate synchronous simulation (but polling tests real-world async)
    });
  });

  io.on("connection", (socket) => {
    socket.on("live_chat:visitor_auth", (data, cb) => {
      // Very basic mock auth matching our endpoints
      if (data.sessionId && mockSessions[data.sessionId]) {
        socket.join(data.sessionId);
        if (cb) cb({ ok: true });
      } else {
        if (cb) cb({ ok: false, error: "Invalid session" });
      }
    });

    socket.on("live_chat:visitor_message", (data, cb) => {
      // Find which session this socket belongs to
      const rooms = Array.from(socket.rooms);
      const sessionId = rooms.find(r => r.startsWith("lc_"));
      
      if (!sessionId || !mockMessages[sessionId]) {
        if (cb) cb({ ok: false, error: "Not authenticated" });
        return;
      }

      const userMessage = {
        id: `lcm_${Date.now()}_user_ws`,
        sessionId,
        role: "visitor",
        senderName: "Visitor",
        body: data.body,
        createdAt: new Date().toISOString(),
      };
      
      mockMessages[sessionId].push(userMessage);

      let mockReply = "I understand you need assistance. Please let me know how I can help with your CRM implementation.";
      
      if (data.body.toLowerCase().includes("pricing")) {
        mockReply = "Our pricing varies based on the gateway quantities and customized SaaS dashboard requirements. Could you let me know how many gateways you plan to deploy?";
      } else if (data.body.toLowerCase().includes("hardware") || data.body.toLowerCase().includes("gateway")) {
        mockReply = "Our industrial Modbus MQTT gateways support RS485/RS232, are DIN-rail mountable, and operate in harsh environments (-40 to 85°C). Do you have specific protocol requirements?";
      } else if (data.body.toLowerCase().includes("demo") || data.body.toLowerCase().includes("dashboard")) {
        mockReply = "Our cloud dashboard provides real-time visualization, threshold alerting, and historical reporting. Would you like a guided tour of the demo platform?";
      }

      const agentMessage = {
        id: `lcm_${Date.now()}_agent_ws`,
        sessionId,
        role: "agent",
        senderName: "Live Chat Agent",
        body: mockReply,
        createdAt: new Date().toISOString(),
        metadata: { escalate: false }
      };

      setTimeout(() => {
        mockMessages[sessionId].push(agentMessage);
        io.to(sessionId).emit("live_chat:message", agentMessage);
      }, 1000);

      // Tell sender about their message immediately
      if (cb) cb({ message: userMessage, agentMessage: null });
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
