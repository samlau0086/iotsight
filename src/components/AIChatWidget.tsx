import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { io, Socket } from 'socket.io-client';

interface LiveChatMessage {
  id: string;
  sessionId: string;
  role: 'visitor' | 'agent' | 'operator' | 'system';
  senderName: string;
  body: string;
  metadata?: any;
  createdAt: string;
}

const mergeLiveChatMessage = (
  currentMessages: LiveChatMessage[],
  incomingMessage: LiveChatMessage,
  optimisticMessageId?: string
) => {
  let messages = optimisticMessageId
    ? currentMessages.filter(message => message.id !== optimisticMessageId)
    : currentMessages;

  if (messages.some(message => message.id === incomingMessage.id)) {
    return messages;
  }

  const optimisticMatchIndex = messages.findIndex(message =>
    message.id.startsWith('temp_') &&
    message.sessionId === incomingMessage.sessionId &&
    message.role === incomingMessage.role &&
    message.body === incomingMessage.body
  );

  if (optimisticMatchIndex >= 0) {
    const nextMessages = [...messages];
    nextMessages[optimisticMatchIndex] = incomingMessage;
    return nextMessages;
  }

  return [...messages, incomingMessage];
};

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [sessionInfo, setSessionInfo] = useState<{ id: string, token: string } | null>(() => {
    const saved = localStorage.getItem('iotSightChatSession');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return null;
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(() => {
    return !!sessionInfo;
  });
  
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('iotSightChatUser');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return { name: '', email: '', phone: '', company: '' };
  });

  const [messages, setMessages] = useState<LiveChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [socket, setSocket] = useState<Socket | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && isFormSubmitted) {
      scrollToBottom();
    }
  }, [messages, isOpen, isFormSubmitted]);

  // Setup Socket and fetch initial messages
  useEffect(() => {
    if (!sessionInfo?.id || !sessionInfo?.token || !isOpen) return;

    const newSocket = io("/", {
      path: "/socket.io",
      transports: ["websocket", "polling"],
    });

    newSocket.on("connect", () => {
      newSocket.emit("live_chat:visitor_auth", {
        sessionId: sessionInfo.id,
        visitorToken: sessionInfo.token
      }, (res: any) => {
        if (res?.ok) {
          // Fetch initial messages once authenticated
          fetch(`/api/live-chat/public/sessions/${sessionInfo.id}/messages?token=${sessionInfo.token}`)
            .then(r => {
              if (!r.ok) throw new Error("Invalid session");
              return r.json();
            })
            .then(data => {
              if (Array.isArray(data)) setMessages(data);
            })
            .catch((e) => {
              console.warn("Session verification failed via fetch:", e);
              localStorage.removeItem('iotSightChatSession');
              setSessionInfo(null);
              setIsFormSubmitted(false);
            });
        } else {
          console.warn("Socket auth failed, resetting session:", res?.error);
          localStorage.removeItem('iotSightChatSession');
          setSessionInfo(null);
          setIsFormSubmitted(false);
        }
      });
    });

    newSocket.on("live_chat:message", (message: LiveChatMessage) => {
      setMessages(prev => {
        return mergeLiveChatMessage(prev, message);
      });
      // Optionally end loading on agent reply
      if (message.role === 'agent' || message.role === 'operator') {
        setIsLoading(false);
      }
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [sessionInfo, isOpen]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setIsLoading(true);
    setErrorMessage('');
    
    localStorage.setItem('iotSightChatUser', JSON.stringify(formData));
    
    try {
      const response = await fetch('/api/live-chat/public/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitorName: formData.name,
          visitorEmail: formData.email,
          visitorPhone: formData.phone,
          pageUrl: window.location.href,
          metadata: {
            source: "website-widget",
            company: formData.company
          }
        })
      });

      if (!response.ok) throw new Error('Failed to create session');
      
      const data = await response.json();
      
      const newSessionInfo = { id: data.session.id, token: data.token };
      setSessionInfo(newSessionInfo);
      localStorage.setItem('iotSightChatSession', JSON.stringify(newSessionInfo));
      setIsFormSubmitted(true);
      
    } catch (error) {
      console.error('Error starting chat session:', error);
      setErrorMessage('Unable to connect to live chat. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading || !sessionInfo) return;

    const msgText = inputValue.trim();
    setInputValue('');
    setErrorMessage('');
    
    // Optimistic update
    const optimisticMsg: LiveChatMessage = {
      id: `temp_${Date.now()}`,
      sessionId: sessionInfo.id,
      role: 'visitor',
      senderName: formData.name,
      body: msgText,
      createdAt: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, optimisticMsg]);
    setIsLoading(true);

    if (socket && socket.connected) {
      socket.emit("live_chat:visitor_message", {
        body: msgText
      }, (response: any) => {
        if (response?.message) {
          setMessages(prev => {
            return mergeLiveChatMessage(prev, response.message, optimisticMsg.id);
          });
        }
        if (response?.agentMessage) {
          setMessages(prev => {
            return mergeLiveChatMessage(prev, response.agentMessage);
          });
          setIsLoading(false);
        }
      });
    } else {
      // Fallback to REST
      try {
        const response = await fetch(`/api/live-chat/public/sessions/${sessionInfo.id}/messages`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            token: sessionInfo.token,
            senderName: formData.name,
            body: msgText
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        setMessages(prev => {
          let newMsgs = data.message
            ? mergeLiveChatMessage(prev, data.message, optimisticMsg.id)
            : prev.filter(m => m.id !== optimisticMsg.id);
          if (data.agentMessage) {
            newMsgs = mergeLiveChatMessage(newMsgs, data.agentMessage);
          }
          return newMsgs;
        });
        
      } catch (error) {
        console.error('Error sending message:', error);
        setMessages(prev => prev.filter(m => m.id !== optimisticMsg.id));
        setErrorMessage('Message failed to send. Please try again.');
        
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className={`w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-2xl transition transform hover:scale-105 border border-blue-400/30 ${isOpen ? 'hidden' : 'block'}`}
          aria-label="Open AI Chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[380px] h-[580px] max-h-[85vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">IoTSight Live Chat</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span className="text-xs text-slate-400">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!isFormSubmitted ? (
              /* Pre-chat Form */
              <div className="flex-1 overflow-y-auto p-5 bg-slate-900/50 flex flex-col">
                <div className="mb-6 text-center mt-2">
                  <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                     <MessageCircle className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-white font-medium text-lg mb-2">Welcome to Live Chat</h4>
                  <p className="text-sm text-slate-400">Please fill out the form below to start chatting with our team.</p>
                </div>
                
                <form onSubmit={handleFormSubmit} className="space-y-4 flex-1">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Name *</label>
                    <input 
                      required 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" 
                      placeholder="John Doe"
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Email *</label>
                    <input 
                      required 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                      placeholder="john@example.com"
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Phone *</label>
                    <input 
                      required 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                      placeholder="+1 (555) 000-0000"
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Company (Optional)</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                      placeholder="Acme Corp"
                      disabled={isLoading}
                    />
                  </div>
                  
                  <div className="pt-2 mt-auto pb-2">
                    {errorMessage && (
                      <p className="text-xs text-red-300 mb-3" role="alert">{errorMessage}</p>
                    )}
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg transition disabled:opacity-70 flex justify-center items-center gap-2"
                    >
                      {isLoading && <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>}
                      Start Chat
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Chat Interface */
              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
                  {messages.length === 0 && !isLoading && (
                    <div className="text-center text-slate-500 text-sm mt-10">
                      No messages yet. Send a message to begin!
                    </div>
                  )}
                  {messages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className={`flex ${msg.role === 'visitor' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-2 max-w-[85%] ${msg.role === 'visitor' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center mt-1 border ${
                          msg.role === 'visitor' 
                            ? 'bg-slate-700 border-slate-600' 
                            : 'bg-blue-600/20 border-blue-500/30'
                        }`}>
                          {msg.role === 'visitor' ? (
                            <User className="w-3.5 h-3.5 text-slate-300" />
                          ) : (
                            <Bot className="w-3.5 h-3.5 text-blue-400" />
                          )}
                        </div>
                        <div className={`px-4 py-2.5 rounded-2xl text-sm ${
                          msg.role === 'visitor'
                            ? 'bg-blue-600 text-white rounded-tr-none'
                            : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none'
                        }`}>
                          {msg.body}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-2 max-w-[85%] flex-row">
                        <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center mt-1 border bg-blue-600/20 border-blue-500/30">
                          <Bot className="w-3.5 h-3.5 text-blue-400" />
                        </div>
                        <div className="px-4 py-3 rounded-2xl text-sm bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none flex gap-1.5 items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-3 bg-slate-800 border-t border-slate-700 shrink-0">
                  {errorMessage && (
                    <p className="text-xs text-red-300 mb-2 px-1" role="alert">{errorMessage}</p>
                  )}
                  <form onSubmit={handleSendMessage} className="flex gap-2 relative">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-full px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 pr-12"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={!inputValue.trim() || isLoading}
                      className="absolute right-1 top-1 w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center disabled:opacity-50 disabled:hover:bg-blue-600 transition"
                    >
                      <Send className="w-4 h-4 ml-0.5" />
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
