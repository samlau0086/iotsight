import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import React, { createContext, useState, useEffect, useMemo, useContext, Fragment, useRef } from "react";
import { renderToString } from "react-dom/server";
import { useLocation, Link, useSearchParams, useParams, Routes, Route, Navigate, MemoryRouter } from "react-router-dom";
import { Moon, Sun, X, Menu, Bell, ArrowRight, Bot, Server, Activity, Zap, Cloud, ShieldCheck, RadioTower, Droplets, Wifi, Network, LayoutDashboard, GitMerge, SlidersHorizontal, KeyRound, Database, Settings, AlertTriangle, TerminalSquare, CheckCircle2, BarChart3, Gauge, Power, Router, Workflow, Radio, Cpu, Send, MapPin, Phone, Mail, Tag, Calendar, User, ThermometerSnowflake, Sprout, ArrowLeft, Cable, DoorOpen, BookOpen, Monitor, SearchX, MessageCircle } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "motion/react";
import { parse } from "yaml";
import Markdown from "react-markdown";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const THEME_STORAGE_KEY = "iotedges-theme";
const ThemeContext = createContext(null);
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);
  const value = useMemo(() => ({
    theme,
    toggleTheme: () => {
      setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");
    }
  }), [theme]);
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value, children });
}
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Products", href: "/products" },
    { name: "Accessories", href: "/accessories" },
    { name: "Knowledge", href: "/knowledge" },
    { name: "Demo", href: "/demo" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" }
  ];
  const isActive = (path) => {
    if (path === "/blog" && location.pathname.startsWith("/blog")) {
      return true;
    }
    if (path === "/solutions" && location.pathname.startsWith("/solutions")) {
      return true;
    }
    if (path === "/products" && (location.pathname.startsWith("/products") || location.pathname === "/gateway")) {
      return true;
    }
    if (path === "/accessories" && location.pathname.startsWith("/accessories")) {
      return true;
    }
    if (path === "/knowledge" && location.pathname.startsWith("/knowledge")) {
      return true;
    }
    return location.pathname === path;
  };
  return /* @__PURE__ */ jsxs("nav", { className: "border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50 shrink-0", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center h-full gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex shrink-0 items-center", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white", children: "I" }),
        /* @__PURE__ */ jsxs("span", { className: "text-xl font-bold tracking-tight text-white", children: [
          "IoT",
          /* @__PURE__ */ jsx("span", { className: "text-blue-500", children: "Edges" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-end lg:gap-5", children: [
        /* @__PURE__ */ jsx("nav", { className: "flex min-w-0 items-center gap-4 text-[11px] font-semibold text-slate-400 uppercase tracking-[0.16em] xl:gap-6 xl:text-xs", children: navigation.map((item) => /* @__PURE__ */ jsx(
          Link,
          {
            to: item.href,
            className: cn(
              "whitespace-nowrap transition-colors",
              isActive(item.href) ? "text-white border-b-2 border-blue-500 pb-1" : "hover:text-white"
            ),
            children: item.name
          },
          item.name
        )) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: toggleTheme,
            "aria-label": theme === "light" ? "Switch to dark theme" : "Switch to light theme",
            title: theme === "light" ? "Switch to dark theme" : "Switch to light theme",
            className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 transition-all hover:bg-slate-800 hover:text-white",
            children: theme === "light" ? /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/contact",
            "data-analytics-event": "cta_click",
            "data-analytics-category": "navigation",
            "data-analytics-label": "Request Quote",
            "data-analytics-destination": "/contact",
            className: "shrink-0 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold uppercase tracking-[0.16em] rounded transition-all",
            children: "Request Quote"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 lg:hidden", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: toggleTheme,
            "aria-label": theme === "light" ? "Switch to dark theme" : "Switch to light theme",
            title: theme === "light" ? "Switch to dark theme" : "Switch to light theme",
            className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 transition-all hover:bg-slate-800 hover:text-white",
            children: theme === "light" ? /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsOpen(!isOpen),
            className: "text-slate-400 hover:text-white focus:outline-none",
            children: isOpen ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
          }
        )
      ] })
    ] }) }),
    isOpen && /* @__PURE__ */ jsx("div", { className: "lg:hidden border-t border-slate-800 bg-slate-950", children: /* @__PURE__ */ jsxs("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg", children: [
      navigation.map((item) => /* @__PURE__ */ jsx(
        Link,
        {
          to: item.href,
          onClick: () => setIsOpen(false),
          className: cn(
            "block px-3 py-2 rounded-md text-base font-medium uppercase tracking-widest",
            isActive(item.href) ? "text-white bg-blue-500/10 border border-blue-500/20" : "text-slate-400 hover:text-white hover:bg-slate-900"
          ),
          children: item.name
        },
        item.name
      )),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/contact",
          onClick: () => setIsOpen(false),
          "data-analytics-event": "cta_click",
          "data-analytics-category": "mobile_navigation",
          "data-analytics-label": "Request Quote",
          "data-analytics-destination": "/contact",
          className: "block px-3 py-2 rounded-md text-base font-medium uppercase tracking-widest text-blue-400 hover:bg-slate-900",
          children: "Request Quote"
        }
      )
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-slate-900 border-t border-slate-800 flex flex-col px-12 pt-12 pb-8 shrink-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white", children: "I" }),
          /* @__PURE__ */ jsxs("span", { className: "text-xl font-bold tracking-tight text-white", children: [
            "IoT",
            /* @__PURE__ */ jsx("span", { className: "text-blue-500", children: "Edges" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 leading-relaxed font-medium", children: "Make industrial energy and equipment visible from anywhere. AI-powered monitoring platform for modern factories." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-4 block", children: "Solutions" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-xs font-semibold text-slate-300", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/solutions", className: "hover:text-white transition-colors", children: "All Solutions" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/solutions/factory-energy", className: "hover:text-white transition-colors", children: "Factory Energy" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/solutions/solar-energy", className: "hover:text-white transition-colors", children: "Solar & Renewable" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/solutions/smart-agriculture", className: "hover:text-white transition-colors", children: "Smart Agriculture" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/solutions/gate-access-control", className: "hover:text-white transition-colors", children: "Gate Access Control" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/products", className: "hover:text-white transition-colors", children: "Products" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-4 block", children: "Products" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-xs font-semibold text-slate-300", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/products/ai-iot-dashboard-industrial-operations-platform", className: "hover:text-white transition-colors", children: "AI IoT Dashboard" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/products/ieg-100-ethernet-industrial-iot-gateway", className: "hover:text-white transition-colors", children: "IEG-100 Gateway" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/products/ieio-100-modbus-remote-io-module", className: "hover:text-white transition-colors", children: "IEIO-100 Remote IO" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/products/ier-100-ethernet-industrial-rtu", className: "hover:text-white transition-colors", children: "IER-100 RTU" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/products/ieg-120-wifi-industrial-iot-gateway", className: "hover:text-white transition-colors", children: "IEG-120 WiFi Gateway" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/products/ier-140-4g-remote-relay-rtu", className: "hover:text-white transition-colors", children: "IER-140 4G Relay RTU" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/products/ier-141-4g-pump-valve-rtu", className: "hover:text-white transition-colors", children: "IER-141 Pump RTU" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/products/ier-142-4g-power-cabinet-rtu", className: "hover:text-white transition-colors", children: "IER-142 Cabinet RTU" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/products/ieac-140-4g-gsm-gate-opener", className: "hover:text-white transition-colors", children: "IEAC-140 Gate Opener" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-4 block", children: "Resources" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsx(Link, { to: "/knowledge", className: "text-xs font-semibold text-slate-300 hover:text-white transition-colors", children: "Knowledge Base" }),
          /* @__PURE__ */ jsx(Link, { to: "/knowledge/modbus", className: "text-xs font-semibold text-slate-300 hover:text-white transition-colors", children: "Modbus Guide" }),
          /* @__PURE__ */ jsx(Link, { to: "/knowledge/mqtt", className: "text-xs font-semibold text-slate-300 hover:text-white transition-colors", children: "MQTT Guide" }),
          /* @__PURE__ */ jsx(Link, { to: "/knowledge/rs485", className: "text-xs font-semibold text-slate-300 hover:text-white transition-colors", children: "RS485 Guide" }),
          /* @__PURE__ */ jsx(Link, { to: "/knowledge/4g-gsm-gate-opener-europe", className: "text-xs font-semibold text-slate-300 hover:text-white transition-colors", children: "4G Gate Opener Guide" }),
          /* @__PURE__ */ jsx(Link, { to: "/accessories", className: "text-xs font-semibold text-slate-300 hover:text-white transition-colors", children: "Project Accessories" }),
          /* @__PURE__ */ jsx(Link, { to: "/about", className: "text-xs font-semibold text-slate-300 hover:text-white transition-colors", children: "About Us" }),
          /* @__PURE__ */ jsx(Link, { to: "/blog", className: "text-xs font-semibold text-slate-300 hover:text-white transition-colors", children: "Blog" }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "text-xs font-semibold text-slate-300 hover:text-white transition-colors", children: "Contact" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto w-full border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-widest font-semibold", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " IoTEdges Solutions"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-6 mt-4 md:mt-0", children: [
        /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "hover:text-slate-300 transition-colors", children: "Privacy" }),
        /* @__PURE__ */ jsx(Link, { to: "/terms", className: "hover:text-slate-300 transition-colors", children: "Terms" })
      ] })
    ] })
  ] });
}
const __vite_glob_0_0$5 = `---
id: aboutpage
heroTitle: We Build Remote Equipment Monitoring Solutions
heroDescription: IoTEdges provides industrial-grade edge hardware, Modbus MQTT gateways, and cloud platforms to make legacy industrial equipment visible, measurable, and manageable remotely.
missionTitle: Our Mission in Industrial IoT
missionParagraphs:
  - Industrial facilities worldwide are struggling with rising energy costs and unexpected machine downtime. While modern IT systems have dashboards for everything, operational technology often remains in the dark.
  - Our mission is to bridge this gap simply, securely, and affordably with practical industrial IoT hardware, gateway architecture, and monitoring workflows. We believe in open standards, robust engineering, and reducing friction in deployment.
missionBullets:
  - text: End-to-End Solutions
  - text: Industrial Grade Reliability
  - text: True IT/OT Convergence Focus
imageUrl: /uploads/about/about-industrial-iot.svg
imageOverlayTitle: Driven by Engineering
imageOverlayDescription: Building hardware that survives the workshop floor.
stats:
  - value: "4"
    label: Product Families
  - value: Modbus
    label: Core Protocol Focus
  - value: MQTT
    label: Primary Cloud Protocol
  - value: Separate
    label: Wireless Uplink Strategy
reasonsTitle: Why Choose IoTEdges as your IoT Partner?
reasons:
  - title: Architecture First
    description: We plan hardware, dashboard, and alert workflows together so the industrial IoT gateway, RTU, or Remote IO module fits the monitoring architecture instead of becoming an isolated box.
  - title: Engineering-Led Hardware
    description: Our product pages focus on practical configurations, field interfaces, communication options and application fit, with final project specifications confirmed through engineering review.
  - title: Partner-Friendly Roadmap
    description: We plan product paths for system integrators, EPC contractors, and software teams, including branded dashboard workflows and configurable hardware positioning once model specifications are confirmed.
partnerTitle: Partner with an Industrial IoT Manufacturer
partnerDescription: Are you a system integrator, EPC contractor, or software team looking to integrate reliable, scalable hardware into your operational stack? Let's work together to build the future of industry.
partnerCtaLabel: Become a Partner
partnerCtaHref: /contact
---

This file keeps About page copy editable while preserving the existing layout, stats band, mission block, and partner call-to-action under code control.
`;
const __vite_glob_0_1$4 = "---\nid: contactpage\nheroTitle: Request a Quote\nheroDescription: Partner with us to build your next-generation industrial IoT infrastructure.\nheroImageUrl: /uploads/contact/contact-industrial-iot.svg\nintroTitle: Get a Quote for Your Industrial IoT Project\nintroDescription: Tell us about your factory energy monitoring system or remote equipment tracking requirements. Our engineering team usually responds with a technical proposal within 24 hours.\ncontactInfo:\n  - title: Email Us\n    value: sales@iotedges.com\n    iconKey: mail\n  - title: Call Us\n    value: +1 (555) 123-4567\n    iconKey: phone\n  - title: Global HQ\n    value: |-\n      123 Innovation Drive,\n      Tech City, TC 10010\n    iconKey: map-pin\nfaqTitle: Frequently Asked Questions\nfaqs:\n  - question: Do I have to use your cloud dashboard?\n    answer: No. While we offer a fully integrated cloud dashboard for convenience, our standard Modbus to MQTT gateways can be configured to publish telemetry data to any third-party MQTT broker, including private infrastructure.\n  - question: What is the lead time for hardware orders?\n    answer: For standard non-customized gateways, we normally aim to ship quickly from available stock. Bulk orders and OEM or ODM projects depend on quantity, branding scope, and configuration requirements.\n  - question: Are your energy monitoring solutions difficult to install?\n    answer: For factory energy monitoring, split-core CT options can reduce installation friction because they are designed to clamp around cables without forcing a full shutdown. Final installation method still depends on site wiring, local safety practice, and meter architecture.\n  - question: Can I get a trial unit?\n    answer: Yes. Evaluation units can be discussed for qualified system integrators, distributors, and enterprise projects. Include the target application, quantity, and expected timeline in your inquiry so the team can respond efficiently.\n---\n\nThis file controls Contact-page copy only. The request form workflow, CRM endpoint, validation rules, anti-spam fields, analytics events, and inquiry-context locking stay in code.\n";
const __vite_glob_0_2$4 = "---\nid: demopage\neyebrow: AI IoT Dashboard Preview\nheroTitle: AI Industrial Operations Dashboard\nheroDescription: A read-only preview of an industrial IoT operations platform for devices, telemetry, SCADA views, workflow automation, remote control, and AI-assisted troubleshooting.\nheroCtaLabel: Request Dashboard Consultation\nheroCtaHref: /contact\nheroCtaAnalyticsLabel: Request AI Dashboard Consultation\noverviewLabel: Overview\noverviewStatus: Live telemetry\noverviewDescription: IoTEdges Demo Site / Pump, factory, energy, access and environmental assets\noverviewBadges:\n  - HTTP Push\n  - MQTT Subscriber\n  - PostgreSQL\nbottomLeftTitle: AI IoT Dashboard for Industrial Operations\nbottomLeftParagraphs:\n  - The IoTEdges dashboard is designed as an operations layer above RTUs, MQTT gateways, LoRa gateways, PLCs, smart meters, sensors, remote IO modules, and access controllers. Field devices collect Modbus, RS485, DI/DO, AI/AO and serial data, then send normalized telemetry to the cloud through HTTP or MQTT.\n  - Instead of building a fixed single-purpose monitoring screen, the platform combines device asset management, raw telemetry storage, SCADA-style visualization, analytics widgets, workflow automation, command auditing, and AI Copilot assistance into one industrial dashboard.\nbottomRightTitle: Platform Architecture and Capabilities\nbottomRightItems:\n  - title: Device and telemetry binding\n    description: External Device ID, MQTT topic, HTTP ingest token and register or metric maps help match real field data to dashboard assets.\n  - title: Remote command delivery\n    description: Control actions can be published to MQTT command topics or stored in a pending queue for gateways to pull and acknowledge.\n  - title: Workflow automation\n    description: Triggers, conditions and actions can respond to offline devices, alarms, schedules, access events, MQTT messages and AI anomaly detection.\n  - title: AI operations assistant\n    description: Operators can ask natural-language questions about alarms, energy usage, device behavior, maintenance risk and suggested response actions.\n---\n\nThis file controls Demo-page explanatory copy only. The mock dashboard layout, KPI tiles, sample telemetry bars, device examples, SCADA illustration, and other simulated operating data stay under code control.\n";
const __vite_glob_0_3$4 = "---\nid: gatewaypage\neyebrow: IoTEdges Gateway Family\nheroTitle: Industrial IoT Gateways\nheroDescription: Start from practical Ethernet, WiFi and cellular gateway models, then match the uplink, field protocol and dashboard requirements to the project.\ngatewayModels:\n  - title: IEG-100 Ethernet Industrial IoT Gateway\n    model: IEG-100\n    href: /products/ieg-100-ethernet-industrial-iot-gateway\n    ctaLabel: View model details\n    iconKey: server\n    text: Ethernet-only gateway for Modbus RTU/TCP data collection and MQTT telemetry.\n  - title: IEG-120 WiFi Industrial IoT Gateway\n    model: IEG-120\n    href: /products/ieg-120-wifi-industrial-iot-gateway\n    ctaLabel: View model details\n    iconKey: wifi\n    text: Indoor WiFi gateway for Modbus data collection and MQTT telemetry where a reliable wireless LAN is available.\n  - title: IEG-140 4G Industrial IoT Gateway\n    model: IEG-140\n    href: /products\n    ctaLabel: Browse gateway options\n    iconKey: radio-tower\n    text: 4G gateway family for remote sites where wired LAN is not available.\nprincipleCards:\n  - title: Separate uplink models\n    text: Ethernet, WiFi, 4G LTE, and LoRaWAN are kept as separate model families.\n    iconKey: network\n  - title: Specification discipline\n    text: Public product pages stay aligned with the released hardware scope, protocol fit, and deployment environment.\n    iconKey: shield-check\n  - title: Modbus and MQTT baseline\n    text: Baseline gateways focus on Modbus RTU and Modbus TCP collection plus MQTT telemetry for industrial data projects.\n    iconKey: server\nbottomCtaTitle: Need a gateway for a specific site?\nbottomCtaDescription: Tell us your field devices, protocol, uplink method, and deployment environment. We will map your project to the right gateway or RTU path.\nbottomCtaLabel: Request Gateway Quote\nbottomCtaHref: /contact\n---\n\nThis file controls Gateway-page copy only. The layout, card structure, icon system, and route behavior stay under code control.\n";
const __vite_glob_0_4$4 = '---\nid: homepage\nheroEyebrow: Next-Gen Industrial Monitoring\nheroTitle: Industrial IoT for Factories, Energy & Remote Assets\nheroHighlight: Factories\nheroDescription: Monitor energy usage, machines, solar farms, and remote equipment in real time with industrial gateways, AI-powered dashboards, and smart alerts.\nheroPrimaryCtaLabel: View Live Demo\nheroPrimaryCtaHref: /demo\nheroSecondaryCtaLabel: View Products\nheroSecondaryCtaHref: /products\nstats:\n  - value: "10"\n    label: Product Models\n  - value: "4"\n    label: Core Protocol Topics\n  - value: EU\n    label: Access Control Focus\ntrustEyebrow: Enterprise Grade\ntrustPills:\n  - text: OEM / ODM Support\n  - text: Modbus / MQTT Compatible\n  - text: Private Cloud Deployment\n  - text: Custom Branding\nproblemsTitle: Manufacturing Problems We Solve\nproblemsDescription: Lack of visibility leads to unnecessary costs and machine downtime.\nproblemCards:\n  - title: High electricity costs\n    description: No way to track real-time consumption and identify waste.\n    iconKey: zap\n  - title: No real-time visibility\n    description: Hard to know if machines are running optimally.\n    iconKey: activity\n  - title: Unexpected downtime\n    description: Machines break down without prior warning or load data.\n    iconKey: shield-check\n  - title: No remote alert system\n    description: Issues are only discovered when operators are on-site.\n    iconKey: bell\nsolutionTitle: The Complete Monitoring Solution\nsolutionDescription: Everything you need from hardware data collection to AI-driven insights.\nsolutionSteps:\n  - title: |-\n      Energy Meter\n      Data Collection\n    iconKey: activity\n  - title: |-\n      Industrial IoT\n      Gateway\n    iconKey: server\n  - title: |-\n      Cloud Dashboard\n      & AI Insights\n    iconKey: cloud\nproductsTitle: Core Hardware & Software\nproductsDescription: Industrial gateways, RTUs, Remote IO modules, remote relay controllers, access controllers, and AI dashboard software.\nproductsBrowseLabel: View all products\nproductsBrowseHref: /products\nbottomCtaTitle: Make industrial energy and equipment visible from anywhere.\nbottomCtaDescription: Tell us your monitoring project. Get a customized solution proposal within 24 hours.\nbottomPrimaryCtaLabel: Request Quote\nbottomPrimaryCtaHref: /contact\nbottomSecondaryCtaLabel: View Dashboard Preview\nbottomSecondaryCtaHref: /demo\n---\n\nInternal note: keep homepage copy editable while layout, product cards, dashboard illustration, and section order stay code-controlled.\n';
function parseFrontmatter(markdown) {
  var _a;
  const normalizedMarkdown = markdown.replace(/^\uFEFF/, "");
  if (!normalizedMarkdown.startsWith("---")) {
    return {
      metadata: {},
      content: normalizedMarkdown.trim()
    };
  }
  const lines = normalizedMarkdown.split(/\r?\n/);
  if (((_a = lines[0]) == null ? void 0 : _a.trim()) !== "---") {
    return {
      metadata: {},
      content: normalizedMarkdown.trim()
    };
  }
  let closingLineIndex = -1;
  for (let index = 1; index < lines.length; index += 1) {
    if (/^(---|\.{3})\s*$/.test(lines[index] ?? "")) {
      closingLineIndex = index;
      break;
    }
  }
  if (closingLineIndex === -1) {
    return {
      metadata: {},
      content: normalizedMarkdown.trim()
    };
  }
  const frontmatterSource = lines.slice(1, closingLineIndex).join("\n");
  const contentSource = lines.slice(closingLineIndex + 1).join("\n");
  const parsedMetadata = parse(frontmatterSource);
  return {
    metadata: parsedMetadata && typeof parsedMetadata === "object" ? parsedMetadata : {},
    content: contentSource.trim()
  };
}
function readString(value, fallback = "") {
  return typeof value === "string" ? value : fallback;
}
function readOptionalString(value) {
  return typeof value === "string" && value.trim() ? value : void 0;
}
function readNumber(value, fallback = 0) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return fallback;
}
function readStringArray(value) {
  if (Array.isArray(value)) {
    return value.map((item) => typeof item === "string" ? item.trim() : "").filter(Boolean);
  }
  if (typeof value === "string") {
    return value.split(",").map((item) => item.trim()).filter(Boolean);
  }
  return [];
}
const markdownModules$5 = /* @__PURE__ */ Object.assign({
  "../content/site-copy/aboutpage.md": __vite_glob_0_0$5,
  "../content/site-copy/contactpage.md": __vite_glob_0_1$4,
  "../content/site-copy/demopage.md": __vite_glob_0_2$4,
  "../content/site-copy/gatewaypage.md": __vite_glob_0_3$4,
  "../content/site-copy/homepage.md": __vite_glob_0_4$4
});
function readStats(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const entry = item;
    const statValue = readString(entry.value);
    const label = readString(entry.label);
    return statValue && label ? { value: statValue, label } : null;
  }).filter((item) => Boolean(item));
}
function readFeaturePills(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const entry = item;
    const text = readString(entry.text);
    return text ? { text } : null;
  }).filter((item) => Boolean(item));
}
function readBulletItems(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const entry = item;
    const text = readString(entry.text);
    return text ? { text } : null;
  }).filter((item) => Boolean(item));
}
function readPartnerReasons(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const entry = item;
    const title = readString(entry.title);
    const description = readString(entry.description);
    return title && description ? { title, description } : null;
  }).filter((item) => Boolean(item));
}
function readContactInfoItems(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const entry = item;
    const title = readString(entry.title);
    const valueText = readString(entry.value);
    const iconKey = readString(entry.iconKey, "mail");
    return title && valueText ? { title, value: valueText, iconKey } : null;
  }).filter((item) => Boolean(item));
}
function readFaqItems(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const entry = item;
    const question = readString(entry.question);
    const answer = readString(entry.answer);
    return question && answer ? { question, answer } : null;
  }).filter((item) => Boolean(item));
}
function readGatewayModelCards(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const entry = item;
    const title = readString(entry.title);
    const model = readString(entry.model);
    const href = readString(entry.href);
    const ctaLabel = readString(entry.ctaLabel);
    const iconKey = readString(entry.iconKey, "server");
    const text = readString(entry.text);
    return title && model && href && ctaLabel && text ? { title, model, href, ctaLabel, iconKey, text } : null;
  }).filter((item) => Boolean(item));
}
function readGatewayPrincipleCards(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const entry = item;
    const title = readString(entry.title);
    const text = readString(entry.text);
    const iconKey = readString(entry.iconKey, "network");
    return title && text ? { title, text, iconKey } : null;
  }).filter((item) => Boolean(item));
}
function readDemoCapabilityItems(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const entry = item;
    const title = readString(entry.title);
    const description = readString(entry.description);
    return title && description ? { title, description } : null;
  }).filter((item) => Boolean(item));
}
function readProblemCards(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const entry = item;
    const title = readString(entry.title);
    const description = readString(entry.description);
    const iconKey = readString(entry.iconKey, "activity");
    return title && description ? { title, description, iconKey } : null;
  }).filter((item) => Boolean(item));
}
function readSolutionSteps(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const entry = item;
    const title = readString(entry.title);
    const iconKey = readString(entry.iconKey, "activity");
    return title ? { title, iconKey } : null;
  }).filter((item) => Boolean(item));
}
function createHomeSiteCopy(markdown) {
  const { metadata } = parseFrontmatter(markdown);
  return {
    id: readString(metadata.id, "homepage"),
    heroEyebrow: readString(metadata.heroEyebrow, "Next-Gen Industrial Monitoring"),
    heroTitle: readString(metadata.heroTitle, "Industrial IoT for Factories, Energy & Remote Assets"),
    heroHighlight: readString(metadata.heroHighlight, "Factories"),
    heroDescription: readString(
      metadata.heroDescription,
      "Monitor energy usage, machines, solar farms, and remote equipment in real time with industrial gateways, AI-powered dashboards, and smart alerts."
    ),
    heroPrimaryCtaLabel: readString(metadata.heroPrimaryCtaLabel, "View Live Demo"),
    heroPrimaryCtaHref: readString(metadata.heroPrimaryCtaHref, "/demo"),
    heroSecondaryCtaLabel: readString(metadata.heroSecondaryCtaLabel, "View Products"),
    heroSecondaryCtaHref: readString(metadata.heroSecondaryCtaHref, "/products"),
    stats: readStats(metadata.stats),
    trustEyebrow: readString(metadata.trustEyebrow, "Enterprise Grade"),
    trustPills: readFeaturePills(metadata.trustPills),
    problemsTitle: readString(metadata.problemsTitle, "Manufacturing Problems We Solve"),
    problemsDescription: readString(metadata.problemsDescription, "Lack of visibility leads to unnecessary costs and machine downtime."),
    problemCards: readProblemCards(metadata.problemCards),
    solutionTitle: readString(metadata.solutionTitle, "The Complete Monitoring Solution"),
    solutionDescription: readString(metadata.solutionDescription, "Everything you need from hardware data collection to AI-driven insights."),
    solutionSteps: readSolutionSteps(metadata.solutionSteps),
    productsTitle: readString(metadata.productsTitle, "Core Hardware & Software"),
    productsDescription: readString(
      metadata.productsDescription,
      "Industrial gateways, RTUs, Remote IO modules, remote relay controllers, access controllers, and AI dashboard software."
    ),
    productsBrowseLabel: readString(metadata.productsBrowseLabel, "View all products"),
    productsBrowseHref: readString(metadata.productsBrowseHref, "/products"),
    bottomCtaTitle: readString(metadata.bottomCtaTitle, "Make industrial energy and equipment visible from anywhere."),
    bottomCtaDescription: readString(
      metadata.bottomCtaDescription,
      "Tell us your monitoring project. Get a customized solution proposal within 24 hours."
    ),
    bottomPrimaryCtaLabel: readString(metadata.bottomPrimaryCtaLabel, "Request Quote"),
    bottomPrimaryCtaHref: readString(metadata.bottomPrimaryCtaHref, "/contact"),
    bottomSecondaryCtaLabel: readString(metadata.bottomSecondaryCtaLabel, "View Dashboard Preview"),
    bottomSecondaryCtaHref: readString(metadata.bottomSecondaryCtaHref, "/demo")
  };
}
function createAboutSiteCopy(markdown) {
  const { metadata } = parseFrontmatter(markdown);
  return {
    id: readString(metadata.id, "aboutpage"),
    heroTitle: readString(metadata.heroTitle, "We Build Remote Equipment Monitoring Solutions"),
    heroDescription: readString(
      metadata.heroDescription,
      "IoTEdges provides industrial-grade edge hardware, Modbus MQTT gateways, and cloud platforms to make legacy industrial equipment visible, measurable, and manageable remotely."
    ),
    missionTitle: readString(metadata.missionTitle, "Our Mission in Industrial IoT"),
    missionParagraphs: Array.isArray(metadata.missionParagraphs) ? metadata.missionParagraphs.map((item) => readString(item)).filter(Boolean) : [],
    missionBullets: readBulletItems(metadata.missionBullets),
    imageUrl: readString(metadata.imageUrl, "/uploads/about/about-industrial-iot.svg"),
    imageOverlayTitle: readString(metadata.imageOverlayTitle, "Driven by Engineering"),
    imageOverlayDescription: readString(metadata.imageOverlayDescription, "Building hardware that survives the workshop floor."),
    stats: readStats(metadata.stats),
    reasonsTitle: readString(metadata.reasonsTitle, "Why Choose IoTEdges as your IoT Partner?"),
    reasons: readPartnerReasons(metadata.reasons),
    partnerTitle: readString(metadata.partnerTitle, "Partner with an Industrial IoT Manufacturer"),
    partnerDescription: readString(
      metadata.partnerDescription,
      "Are you a system integrator, EPC contractor, or software team looking to integrate reliable, scalable hardware into your operational stack? Let's work together to build the future of industry."
    ),
    partnerCtaLabel: readString(metadata.partnerCtaLabel, "Become a Partner"),
    partnerCtaHref: readString(metadata.partnerCtaHref, "/contact")
  };
}
function createContactSiteCopy(markdown) {
  const { metadata } = parseFrontmatter(markdown);
  return {
    id: readString(metadata.id, "contactpage"),
    heroTitle: readString(metadata.heroTitle, "Request a Quote"),
    heroDescription: readString(
      metadata.heroDescription,
      "Partner with us to build your next-generation industrial IoT infrastructure."
    ),
    heroImageUrl: readString(metadata.heroImageUrl, "/uploads/contact/contact-industrial-iot.svg"),
    introTitle: readString(metadata.introTitle, "Get a Quote for Your Industrial IoT Project"),
    introDescription: readString(
      metadata.introDescription,
      "Tell us about your factory energy monitoring system or remote equipment tracking requirements. Our engineering team usually responds with a technical proposal within 24 hours."
    ),
    contactInfo: readContactInfoItems(metadata.contactInfo),
    faqTitle: readString(metadata.faqTitle, "Frequently Asked Questions"),
    faqs: readFaqItems(metadata.faqs)
  };
}
function createGatewaySiteCopy(markdown) {
  const { metadata } = parseFrontmatter(markdown);
  return {
    id: readString(metadata.id, "gatewaypage"),
    eyebrow: readString(metadata.eyebrow, "IoTEdges Gateway Family"),
    heroTitle: readString(metadata.heroTitle, "Industrial IoT Gateways"),
    heroDescription: readString(
      metadata.heroDescription,
      "Start from practical Ethernet, WiFi and cellular gateway models, then match the uplink, field protocol and dashboard requirements to the project."
    ),
    gatewayModels: readGatewayModelCards(metadata.gatewayModels),
    principleCards: readGatewayPrincipleCards(metadata.principleCards),
    bottomCtaTitle: readString(metadata.bottomCtaTitle, "Need a gateway for a specific site?"),
    bottomCtaDescription: readString(
      metadata.bottomCtaDescription,
      "Tell us your field devices, protocol, uplink method, and deployment environment. We will map your project to the right gateway or RTU path."
    ),
    bottomCtaLabel: readString(metadata.bottomCtaLabel, "Request Gateway Quote"),
    bottomCtaHref: readString(metadata.bottomCtaHref, "/contact")
  };
}
function createDemoSiteCopy(markdown) {
  const { metadata } = parseFrontmatter(markdown);
  return {
    id: readString(metadata.id, "demopage"),
    eyebrow: readString(metadata.eyebrow, "AI IoT Dashboard Preview"),
    heroTitle: readString(metadata.heroTitle, "AI Industrial Operations Dashboard"),
    heroDescription: readString(
      metadata.heroDescription,
      "A read-only preview of an industrial IoT operations platform for devices, telemetry, SCADA views, workflow automation, remote control, and AI-assisted troubleshooting."
    ),
    heroCtaLabel: readString(metadata.heroCtaLabel, "Request Dashboard Consultation"),
    heroCtaHref: readString(metadata.heroCtaHref, "/contact"),
    heroCtaAnalyticsLabel: readString(metadata.heroCtaAnalyticsLabel, "Request AI Dashboard Consultation"),
    overviewLabel: readString(metadata.overviewLabel, "Overview"),
    overviewStatus: readString(metadata.overviewStatus, "Live telemetry"),
    overviewDescription: readString(
      metadata.overviewDescription,
      "IoTEdges Demo Site / Pump, factory, energy, access and environmental assets"
    ),
    overviewBadges: Array.isArray(metadata.overviewBadges) ? metadata.overviewBadges.map((item) => readString(item)).filter(Boolean) : [],
    bottomLeftTitle: readString(metadata.bottomLeftTitle, "AI IoT Dashboard for Industrial Operations"),
    bottomLeftParagraphs: Array.isArray(metadata.bottomLeftParagraphs) ? metadata.bottomLeftParagraphs.map((item) => readString(item)).filter(Boolean) : [],
    bottomRightTitle: readString(metadata.bottomRightTitle, "Platform Architecture and Capabilities"),
    bottomRightItems: readDemoCapabilityItems(metadata.bottomRightItems)
  };
}
const fallbackHomeCopy = {
  heroEyebrow: "Next-Gen Industrial Monitoring",
  heroTitle: "Industrial IoT for Factories, Energy & Remote Assets",
  heroHighlight: "Factories",
  heroDescription: "Monitor energy usage, machines, solar farms, and remote equipment in real time with industrial gateways, AI-powered dashboards, and smart alerts.",
  heroPrimaryCtaLabel: "View Live Demo",
  heroPrimaryCtaHref: "/demo",
  heroSecondaryCtaLabel: "View Products",
  heroSecondaryCtaHref: "/products",
  stats: [],
  trustEyebrow: "Enterprise Grade",
  trustPills: [],
  problemsTitle: "Manufacturing Problems We Solve",
  problemsDescription: "Lack of visibility leads to unnecessary costs and machine downtime.",
  problemCards: [],
  solutionTitle: "The Complete Monitoring Solution",
  solutionDescription: "Everything you need from hardware data collection to AI-driven insights.",
  solutionSteps: [],
  productsTitle: "Core Hardware & Software",
  productsDescription: "Industrial gateways, RTUs, Remote IO modules, remote relay controllers, access controllers, and AI dashboard software.",
  productsBrowseLabel: "View all products",
  productsBrowseHref: "/products",
  bottomCtaTitle: "Make industrial energy and equipment visible from anywhere.",
  bottomCtaDescription: "Tell us your monitoring project. Get a customized solution proposal within 24 hours.",
  bottomPrimaryCtaLabel: "Request Quote",
  bottomPrimaryCtaHref: "/contact",
  bottomSecondaryCtaLabel: "View Dashboard Preview",
  bottomSecondaryCtaHref: "/demo"
};
const homeMarkdown = markdownModules$5["../content/site-copy/homepage.md"] || Object.values(markdownModules$5)[0];
const aboutMarkdown = markdownModules$5["../content/site-copy/aboutpage.md"];
const contactMarkdown = markdownModules$5["../content/site-copy/contactpage.md"];
const gatewayMarkdown = markdownModules$5["../content/site-copy/gatewaypage.md"];
const demoMarkdown = markdownModules$5["../content/site-copy/demopage.md"];
const homeSiteCopy = homeMarkdown ? createHomeSiteCopy(homeMarkdown) : fallbackHomeCopy;
const aboutSiteCopy = aboutMarkdown ? createAboutSiteCopy(aboutMarkdown) : {
  heroTitle: "We Build Remote Equipment Monitoring Solutions",
  heroDescription: "IoTEdges provides industrial-grade edge hardware, Modbus MQTT gateways, and cloud platforms to make legacy industrial equipment visible, measurable, and manageable remotely.",
  missionTitle: "Our Mission in Industrial IoT",
  missionParagraphs: [],
  missionBullets: [],
  imageUrl: "/uploads/about/about-industrial-iot.svg",
  imageOverlayTitle: "Driven by Engineering",
  imageOverlayDescription: "Building hardware that survives the workshop floor.",
  stats: [],
  reasonsTitle: "Why Choose IoTEdges as your IoT Partner?",
  reasons: [],
  partnerTitle: "Partner with an Industrial IoT Manufacturer",
  partnerDescription: "Are you a system integrator, EPC contractor, or software team looking to integrate reliable, scalable hardware into your operational stack? Let's work together to build the future of industry.",
  partnerCtaLabel: "Become a Partner",
  partnerCtaHref: "/contact"
};
const contactSiteCopy = contactMarkdown ? createContactSiteCopy(contactMarkdown) : {
  heroTitle: "Request a Quote",
  heroDescription: "Partner with us to build your next-generation industrial IoT infrastructure.",
  heroImageUrl: "/uploads/contact/contact-industrial-iot.svg",
  introTitle: "Get a Quote for Your Industrial IoT Project",
  introDescription: "Tell us about your factory energy monitoring system or remote equipment tracking requirements. Our engineering team usually responds with a technical proposal within 24 hours.",
  contactInfo: [],
  faqTitle: "Frequently Asked Questions",
  faqs: []
};
const gatewaySiteCopy = gatewayMarkdown ? createGatewaySiteCopy(gatewayMarkdown) : {
  eyebrow: "IoTEdges Gateway Family",
  heroTitle: "Industrial IoT Gateways",
  heroDescription: "Start from practical Ethernet, WiFi and cellular gateway models, then match the uplink, field protocol and dashboard requirements to the project.",
  gatewayModels: [],
  principleCards: [],
  bottomCtaTitle: "Need a gateway for a specific site?",
  bottomCtaDescription: "Tell us your field devices, protocol, uplink method, and deployment environment. We will map your project to the right gateway or RTU path.",
  bottomCtaLabel: "Request Gateway Quote",
  bottomCtaHref: "/contact"
};
const demoSiteCopy = demoMarkdown ? createDemoSiteCopy(demoMarkdown) : {
  eyebrow: "AI IoT Dashboard Preview",
  heroTitle: "AI Industrial Operations Dashboard",
  heroDescription: "A read-only preview of an industrial IoT operations platform for devices, telemetry, SCADA views, workflow automation, remote control, and AI-assisted troubleshooting.",
  heroCtaLabel: "Request Dashboard Consultation",
  heroCtaHref: "/contact",
  heroCtaAnalyticsLabel: "Request AI Dashboard Consultation",
  overviewLabel: "Overview",
  overviewStatus: "Live telemetry",
  overviewDescription: "IoTEdges Demo Site / Pump, factory, energy, access and environmental assets",
  overviewBadges: [],
  bottomLeftTitle: "AI IoT Dashboard for Industrial Operations",
  bottomLeftParagraphs: [],
  bottomRightTitle: "Platform Architecture and Capabilities",
  bottomRightItems: []
};
const homeIcons = {
  activity: Activity,
  bell: Bell,
  cloud: Cloud,
  "shield-check": ShieldCheck,
  server: Server,
  zap: Zap
};
function getHomeIcon(iconKey) {
  return homeIcons[iconKey] || Activity;
}
function renderHeroTitle() {
  const { heroTitle, heroHighlight } = homeSiteCopy;
  const highlightIndex = heroTitle.indexOf(heroHighlight);
  if (!heroHighlight || highlightIndex === -1) {
    return heroTitle;
  }
  const before = heroTitle.slice(0, highlightIndex);
  const after = heroTitle.slice(highlightIndex + heroHighlight.length);
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    before,
    /* @__PURE__ */ jsx("span", { className: "text-blue-500", children: heroHighlight }),
    after
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-950 text-slate-200 font-sans flex flex-col", children: [
    /* @__PURE__ */ jsxs("section", { className: "flex flex-col md:flex-row overflow-hidden max-w-7xl mx-auto w-full py-12 md:py-24", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "w-full md:w-1/2 p-4 md:p-12 flex flex-col justify-center gap-6",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex max-w-max items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest", children: [
              /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-blue-500 animate-pulse" }),
              homeSiteCopy.heroEyebrow
            ] }),
            /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl lg:text-5xl font-extrabold leading-[1.1] text-white tracking-tight", children: renderHeroTitle() }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-lg max-w-md leading-relaxed font-medium", children: homeSiteCopy.heroDescription }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 pt-4", children: [
              /* @__PURE__ */ jsx(Link, { to: homeSiteCopy.heroPrimaryCtaHref, "data-analytics-event": "cta_click", "data-analytics-category": "hero", "data-analytics-label": homeSiteCopy.heroPrimaryCtaLabel, "data-analytics-destination": homeSiteCopy.heroPrimaryCtaHref, className: "px-8 py-4 bg-white text-slate-950 font-bold rounded shadow-lg shadow-white/5 hover:bg-slate-200 transition-all uppercase tracking-widest text-xs flex items-center justify-center", children: homeSiteCopy.heroPrimaryCtaLabel }),
              /* @__PURE__ */ jsx(Link, { to: homeSiteCopy.heroSecondaryCtaHref, "data-analytics-event": "cta_click", "data-analytics-category": "hero", "data-analytics-label": homeSiteCopy.heroSecondaryCtaLabel, "data-analytics-destination": homeSiteCopy.heroSecondaryCtaHref, className: "px-8 py-4 border border-slate-700 font-bold rounded hover:bg-slate-900 transition-all uppercase tracking-widest text-xs flex items-center justify-center text-white", children: homeSiteCopy.heroSecondaryCtaLabel })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-6 pt-8 border-t border-slate-800 mt-4", children: homeSiteCopy.stats.map((stat) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-white", children: stat.value }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-500 uppercase tracking-widest font-bold", children: stat.label })
            ] }, stat.label)) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5, delay: 0.2 },
          className: "w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center",
          children: /* @__PURE__ */ jsxs("div", { className: "w-full aspect-[4/3] bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden flex flex-col relative w-full h-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "h-10 bg-slate-800/50 border-b border-slate-700 flex items-center px-4 justify-between shrink-0", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-red-500/50" }),
                /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-amber-500/50" }),
                /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-emerald-500/50" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-500 font-mono tracking-tighter uppercase hidden sm:block", children: "Live Terminal: Unit_07A_Energy" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] text-emerald-500 font-mono tracking-widest font-bold", children: "● ONLINE" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 grid grid-cols-2 gap-4 overflow-hidden flex-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "col-span-2 bg-slate-950 border border-slate-800 p-4 rounded-lg flex flex-col", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mb-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 font-medium tracking-wide", children: "Real-time Power Curve (kW)" }),
                  /* @__PURE__ */ jsx("span", { className: "text-xl font-mono text-emerald-400", children: "142.58 kW" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 w-full flex items-end gap-1 px-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-blue-500/20 h-[50%] rounded-t" }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-blue-500/30 h-[66%] rounded-t" }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-blue-500/40 h-[75%] rounded-t" }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-blue-500/60 h-[80%] rounded-t" }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-blue-500/80 h-[100%] rounded-t" }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-blue-500 h-[90%] rounded-t" }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-blue-500/90 h-[85%] rounded-t" }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-blue-500/60 h-[50%] rounded-t" }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-blue-500/40 h-[33%] rounded-t" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-950 border border-slate-800 p-3 rounded-lg flex flex-col", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-500 uppercase font-bold mb-1 tracking-widest", children: "Alert Status" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2 mt-auto", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center bg-red-500/10 p-2 rounded border border-red-500/20", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[10px] text-red-400 font-medium whitespace-nowrap overflow-hidden text-ellipsis mr-2", children: "Phase B Voltage Drop" }),
                    /* @__PURE__ */ jsx("span", { className: "text-[9px] font-mono opacity-50 text-red-400 shrink-0", children: "12:04" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center bg-slate-900 border border-slate-800 p-2 rounded", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-medium", children: "Normal Operation" }),
                    /* @__PURE__ */ jsx("span", { className: "text-[9px] font-mono opacity-50 text-slate-400", children: "11:45" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-950 border border-slate-800 p-3 rounded-lg flex flex-col", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-500 uppercase font-bold mb-1 tracking-widest", children: "Efficiency AI" }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col justify-center items-center gap-2", children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-2xl lg:text-3xl font-mono text-white", children: [
                    "94.2",
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-500", children: "%" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "w-full h-1.5 bg-slate-800 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-blue-500 w-[94%]" }) }),
                  /* @__PURE__ */ jsx("span", { className: "text-[8px] lg:text-[9px] text-blue-400 mt-1 uppercase tracking-tighter font-semibold", children: "Optimized by AI Engine" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "px-4 py-2 flex gap-4 text-[10px] border-t border-slate-800 bg-slate-950/50 font-medium text-slate-400 uppercase tracking-widest shrink-0", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-slate-500" }),
                " Modbus"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500" }),
                " MQTT"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "ml-auto opacity-40 font-mono hidden sm:block", children: "v2.4.1" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-4 -left-4 bg-slate-950 border border-slate-800 p-3 md:p-4 rounded-lg shadow-xl shadow-slate-950 flex items-start gap-4 z-10 hidden sm:flex", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 shrink-0", children: /* @__PURE__ */ jsx(Bell, { className: "w-4 h-4" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-xs tracking-wide", children: "Abnormal Consumption Detected" }),
                /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-medium", children: "CNC Machine #4 power spike (+45%)" })
              ] })
            ] })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-8 bg-slate-900 border-y border-slate-800 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-12 shrink-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 text-center md:text-left", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-2", children: homeSiteCopy.trustEyebrow }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center md:justify-start gap-6 items-center opacity-80", children: homeSiteCopy.trustPills.map((pill) => /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-slate-300", children: pill.text }, pill.text)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-slate-950", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mb-16 text-center mx-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight", children: homeSiteCopy.problemsTitle }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-400 leading-relaxed font-medium", children: homeSiteCopy.problemsDescription })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: homeSiteCopy.problemCards.map((item) => {
        const Icon = getHomeIcon(item.iconKey);
        return /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition flex flex-col", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-2", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: item.description })
        ] }, item.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-slate-900 border-y border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mb-16 mx-auto text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight", children: homeSiteCopy.solutionTitle }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-400 font-medium", children: homeSiteCopy.solutionDescription })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-8 items-center text-center", children: homeSiteCopy.solutionSteps.map((step, index) => {
        const Icon = getHomeIcon(step.iconKey);
        const isLast = index === homeSiteCopy.solutionSteps.length - 1;
        const isEmphasized = isLast;
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("div", { className: `mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border ${isEmphasized ? "border-blue-500/20 bg-blue-500/10 text-blue-400" : "border-slate-800 bg-slate-950 text-blue-400"}`, children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8" }) }),
            /* @__PURE__ */ jsx("h3", { className: "whitespace-pre-line text-xs font-bold uppercase tracking-widest text-white", children: step.title })
          ] }),
          !isLast ? /* @__PURE__ */ jsx("div", { className: "hidden text-slate-600 md:block", children: /* @__PURE__ */ jsx(ArrowRight, { className: "mx-auto" }) }) : null
        ] }, step.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-slate-950", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight", children: homeSiteCopy.productsTitle }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-400 font-medium", children: homeSiteCopy.productsDescription })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: homeSiteCopy.productsBrowseHref, className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300", children: [
          homeSiteCopy.productsBrowseLabel,
          " ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
        { title: "AI IoT Dashboard", desc: "Industrial operations dashboard for telemetry, SCADA, workflows, remote control and AI Copilot.", metaA: "Software platform", metaB: "Best for multi-site operations", icon: Bot, href: "/products/ai-iot-dashboard-industrial-operations-platform" },
        { title: "IEG-100 Ethernet Gateway", desc: "Ethernet gateway for Modbus data collection and MQTT telemetry.", metaA: "Ethernet", metaB: "Best for LAN cabinets", icon: Server, href: "/products/ieg-100-ethernet-industrial-iot-gateway" },
        { title: "IEIO-100 Remote IO", desc: "Modbus Remote IO family for DI, DO/relay, AI, and AO expansion.", metaA: "RS485 Modbus RTU", metaB: "Best for I/O expansion", icon: Activity, href: "/products/ieio-100-modbus-remote-io-module" },
        { title: "IER-100 Ethernet RTU", desc: "Wired RTU with local IO and Modbus connectivity targets.", metaA: "Ethernet", metaB: "4DI / 2DO / 2AI", icon: Zap, href: "/products/ier-100-ethernet-industrial-rtu" },
        { title: "IEG-120 WiFi Gateway", desc: "Indoor WiFi gateway for Modbus-to-MQTT applications.", metaA: "WiFi", metaB: "Best for indoor retrofit", icon: Cloud, href: "/products/ieg-120-wifi-industrial-iot-gateway" },
        { title: "IEAC-140 Gate Opener", desc: "4G-first remote access controller for European gate and door projects.", metaA: "4G", metaB: "Best for gates and barriers", icon: ShieldCheck, href: "/products/ieac-140-4g-gsm-gate-opener" },
        { title: "IER-140 4G Relay RTU", desc: "4G LTE Cat1 remote relay RTU with 2DI, 2DO, RS485 and MQTT control.", metaA: "4G LTE Cat1", metaB: "2DI / 2DO / RS485", icon: RadioTower, href: "/products/ier-140-4g-remote-relay-rtu" },
        { title: "IER-141 Pump & Valve RTU", desc: "4G RTU for pump, valve and irrigation cabinets with 4DI, 4DO and 2AI.", metaA: "4G LTE Cat1", metaB: "4DI / 4DO / 2AI", icon: Droplets, href: "/products/ier-141-4g-pump-valve-rtu" },
        { title: "IER-142 Power Cabinet RTU", desc: "4G cabinet RTU for dry-contact alarms, generator rooms and power panels.", metaA: "4G LTE Cat1", metaB: "8DI / 4DO / RS485", icon: Activity, href: "/products/ier-142-4g-power-cabinet-rtu" }
      ].map((item, i) => /* @__PURE__ */ jsxs(Link, { to: item.href, className: "bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition block", children: [
        /* @__PURE__ */ jsx(item.icon, { className: "w-8 h-8 text-blue-400 mb-6" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300", children: item.metaA }),
          /* @__PURE__ */ jsx("span", { className: "rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300", children: item.metaB })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-white mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: item.desc })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-blue-600", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-extrabold mb-6 tracking-tight", children: homeSiteCopy.bottomCtaTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-blue-100 text-lg mb-10 max-w-2xl mx-auto font-medium", children: homeSiteCopy.bottomCtaDescription }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-4", children: [
        /* @__PURE__ */ jsx(Link, { to: homeSiteCopy.bottomPrimaryCtaHref, "data-analytics-event": "cta_click", "data-analytics-category": "bottom_cta", "data-analytics-label": homeSiteCopy.bottomPrimaryCtaLabel, "data-analytics-destination": homeSiteCopy.bottomPrimaryCtaHref, className: "px-8 py-4 rounded border border-stone-200/80 bg-stone-50 text-stone-950 font-bold uppercase tracking-widest text-xs flex justify-center items-center shadow-lg shadow-black/10 transition-all hover:bg-white", children: homeSiteCopy.bottomPrimaryCtaLabel }),
        /* @__PURE__ */ jsx(Link, { to: homeSiteCopy.bottomSecondaryCtaHref, "data-analytics-event": "cta_click", "data-analytics-category": "bottom_cta", "data-analytics-label": homeSiteCopy.bottomSecondaryCtaLabel, "data-analytics-destination": homeSiteCopy.bottomSecondaryCtaHref, className: "px-8 py-4 rounded border border-stone-300/30 bg-transparent text-stone-50 font-bold uppercase tracking-widest text-xs flex justify-center items-center transition-all hover:border-stone-200/60 hover:bg-white/6", children: homeSiteCopy.bottomSecondaryCtaLabel })
      ] })
    ] }) })
  ] });
}
const gatewayIcons = {
  network: Network,
  "radio-tower": RadioTower,
  server: Server,
  "shield-check": ShieldCheck,
  wifi: Wifi
};
function getGatewayIcon(iconKey) {
  return gatewayIcons[iconKey] || Server;
}
function Gateway() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-950 text-slate-200", children: [
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-slate-900 border-b border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.24em] text-blue-400 mb-5", children: gatewaySiteCopy.eyebrow }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6", children: gatewaySiteCopy.heroTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-400 font-medium leading-relaxed", children: gatewaySiteCopy.heroDescription })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: gatewaySiteCopy.gatewayModels.map((item) => {
      const Icon = getGatewayIcon(item.iconKey);
      return /* @__PURE__ */ jsxs("article", { className: "bg-slate-900 border border-slate-800 rounded-lg p-7 flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 mb-6", children: [
          /* @__PURE__ */ jsx(Icon, { className: "w-7 h-7 text-blue-400" }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold", children: item.model })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-4", style: { fontFamily: "var(--font-display)" }, children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed mb-8 flex-1", children: item.text }),
        /* @__PURE__ */ jsxs(Link, { to: item.href, className: "inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-blue-400 hover:text-blue-300", children: [
          item.ctaLabel,
          " ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] }, item.model);
    }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-slate-900 border-y border-slate-800", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: gatewaySiteCopy.principleCards.map((item) => {
      const Icon = getGatewayIcon(item.iconKey);
      return /* @__PURE__ */ jsxs("div", { className: "border border-slate-800 bg-slate-950 p-6 rounded-lg", children: [
        /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-blue-400 mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 leading-relaxed", children: item.text })
      ] }, item.title);
    }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 text-center px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold text-white mb-6", style: { fontFamily: "var(--font-display)" }, children: gatewaySiteCopy.bottomCtaTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-lg mb-10", children: gatewaySiteCopy.bottomCtaDescription }),
      /* @__PURE__ */ jsx(Link, { to: gatewaySiteCopy.bottomCtaHref, className: "inline-block px-8 py-4 bg-white text-slate-950 text-xs font-bold uppercase tracking-widest rounded transition-all hover:bg-slate-200", children: gatewaySiteCopy.bottomCtaLabel })
    ] }) })
  ] });
}
const navItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Devices", icon: Server },
  { label: "Workflows", icon: GitMerge },
  { label: "Control", icon: SlidersHorizontal },
  { label: "SCADA", icon: Network },
  { label: "Access", icon: KeyRound },
  { label: "Analytics", icon: Activity },
  { label: "Raw Data", icon: Database },
  { label: "Alerts", icon: Bell },
  { label: "AI Insights", icon: Bot },
  { label: "Settings", icon: Settings }
];
const kpis = [
  { label: "Online Devices", value: "128", unit: "/ 136", icon: Server, tone: "text-emerald-400" },
  { label: "Active Alerts", value: "7", unit: "events", icon: AlertTriangle, tone: "text-amber-400" },
  { label: "Commands Today", value: "42", unit: "sent", icon: TerminalSquare, tone: "text-blue-400" },
  { label: "Data Points", value: "2.8M", unit: "24h", icon: Database, tone: "text-cyan-400" }
];
const telemetryBars = [34, 48, 42, 63, 76, 58, 70, 86, 68, 74, 54, 61, 79, 92, 73, 64, 82, 88];
const devices = [
  { id: "IER-141", name: "Pump Station RTU", type: "4G Remote Relay RTU", metric: "4.8 bar / 126 m3/h", status: "Online" },
  { id: "IEG-100", name: "Factory Edge Gateway", type: "Ethernet IoT Gateway", metric: "MQTT / OPC UA bridge", status: "Online" },
  { id: "IEIO-100", name: "Remote IO Cabinet", type: "Modbus Remote IO", metric: "12 DI / 8 DO active", status: "Online" },
  { id: "IEAC-140", name: "Gate Access Controller", type: "4G Access RTU", metric: "2 relays / 38 users", status: "Warning" }
];
const workflowSteps = [
  "Trigger: pump pressure below 2.8 bar",
  "Condition: standby pump available",
  "Action: publish MQTT command",
  "Action: notify maintenance team"
];
function Demo() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-slate-950 pt-8 pb-20 text-slate-300", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-400", children: demoSiteCopy.eyebrow }),
        /* @__PURE__ */ jsx("h1", { className: "mb-2 text-3xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: demoSiteCopy.heroTitle }),
        /* @__PURE__ */ jsx("p", { className: "max-w-2xl text-slate-400", children: demoSiteCopy.heroDescription })
      ] }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: demoSiteCopy.heroCtaHref,
          "data-analytics-event": "cta_click",
          "data-analytics-category": "demo",
          "data-analytics-label": demoSiteCopy.heroCtaAnalyticsLabel,
          "data-analytics-destination": demoSiteCopy.heroCtaHref,
          className: "inline-flex items-center justify-center gap-2 rounded bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600",
          children: [
            /* @__PURE__ */ jsx(Bot, { className: "h-4 w-4" }),
            demoSiteCopy.heroCtaLabel
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl border border-slate-800 bg-[#10141b] shadow-2xl", children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-[760px] flex-col lg:flex-row", children: [
      /* @__PURE__ */ jsxs("aside", { className: "hidden w-60 shrink-0 border-r border-slate-800 bg-[#16191f] lg:block", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex h-16 items-center border-b border-slate-800 px-5", children: [
          /* @__PURE__ */ jsx(Bot, { className: "mr-2 h-6 w-6 text-orange-400" }),
          /* @__PURE__ */ jsx("span", { className: "text-base font-bold tracking-tight text-white", children: "AI IoT Dashboard" })
        ] }),
        /* @__PURE__ */ jsx("nav", { className: "space-y-1 px-3 py-5", children: navItems.map((item) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium ${item.active ? "bg-orange-500/10 text-orange-400" : "text-slate-400"}`,
            children: [
              /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4 shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: item.label })
            ]
          },
          item.label
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "mx-3 mt-4 rounded-lg border border-slate-800 bg-slate-900/60 p-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-slate-200", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4 text-emerald-400" }),
            "Tenant secure"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs leading-relaxed text-slate-500", children: "Role-based access, command audit log, and token-protected telemetry ingest." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("main", { className: "min-w-0 flex-1 bg-slate-50 text-slate-900", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 border-b border-slate-200 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-slate-950", children: demoSiteCopy.overviewLabel }),
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200", children: demoSiteCopy.overviewStatus })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-slate-500", children: demoSiteCopy.overviewDescription })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 text-xs", children: demoSiteCopy.overviewBadges.map((badge) => /* @__PURE__ */ jsx("span", { className: "rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-600", children: badge }, badge)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-5 p-4 lg:p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4", children: kpis.map((stat) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-slate-200 bg-white p-4 shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-slate-500", children: stat.label }),
              /* @__PURE__ */ jsx(stat.icon, { className: `h-4 w-4 ${stat.tone}` })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold tracking-tight text-slate-950", children: stat.value }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-500", children: stat.unit })
            ] })
          ] }, stat.label)) }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.75fr)]", children: [
            /* @__PURE__ */ jsxs("section", { className: "rounded-lg border border-slate-200 bg-white p-4 shadow-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-wrap items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-slate-950", children: "Realtime Telemetry Trend" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-slate-500", children: "Aggregated pressure, flow, power and signal quality from active gateways." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-2 text-xs text-slate-500", children: [
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-orange-400" }),
                    " Flow"
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-blue-500" }),
                    " Pressure"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex h-64 items-end gap-2 border-b border-l border-slate-200 px-2 pb-2", children: telemetryBars.map((height, index) => /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 flex-col items-center justify-end gap-1", children: [
                /* @__PURE__ */ jsx("div", { className: "w-full rounded-t bg-orange-400/85", style: { height: `${height}%` } }),
                /* @__PURE__ */ jsx("div", { className: "w-full rounded-t bg-blue-500/80", style: { height: `${Math.max(18, height - 26)}%` } })
              ] }, index)) }),
              /* @__PURE__ */ jsxs("div", { className: "mt-2 flex justify-between text-xs text-slate-400", children: [
                /* @__PURE__ */ jsx("span", { children: "00:00" }),
                /* @__PURE__ */ jsx("span", { children: "06:00" }),
                /* @__PURE__ */ jsx("span", { children: "12:00" }),
                /* @__PURE__ */ jsx("span", { children: "18:00" }),
                /* @__PURE__ */ jsx("span", { children: "Now" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("section", { className: "rounded-lg border border-slate-200 bg-white p-4 shadow-sm", children: [
              /* @__PURE__ */ jsxs("h3", { className: "mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950", children: [
                /* @__PURE__ */ jsx(Bot, { className: "h-4 w-4 text-orange-500" }),
                "AI Copilot"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-slate-50 p-3 text-sm text-slate-600", children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-slate-900", children: "Why did Pump Station RTU-03 trigger alarms?" }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 leading-relaxed", children: "Pressure dropped 22% while current increased 18%. The pattern looks like partial pipe blockage or valve position drift." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-2 text-xs text-slate-600", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 rounded border border-orange-200 bg-orange-50 px-3 py-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-600" }),
                  "Suggested action: start standby pump and send inspection task."
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 rounded border border-slate-200 px-3 py-2", children: [
                  /* @__PURE__ */ jsx(BarChart3, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500" }),
                  "Generate weekly exception report for operations team."
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]", children: [
            /* @__PURE__ */ jsxs("section", { className: "rounded-lg border border-slate-200 bg-white p-4 shadow-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-slate-950", children: "Device Fleet" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-500", children: "External Device ID matched telemetry" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded border border-slate-200", children: devices.map((device) => /* @__PURE__ */ jsxs("div", { className: "grid gap-3 border-b border-slate-100 px-3 py-3 text-sm last:border-b-0 md:grid-cols-[90px_minmax(0,1fr)_140px]", children: [
                /* @__PURE__ */ jsx("div", { className: "font-mono text-xs font-semibold text-slate-500", children: device.id }),
                /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsx("div", { className: "truncate font-medium text-slate-950", children: device.name }),
                  /* @__PURE__ */ jsx("div", { className: "truncate text-xs text-slate-500", children: device.type })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 md:block", children: [
                  /* @__PURE__ */ jsx("div", { className: "truncate text-xs text-slate-500", children: device.metric }),
                  /* @__PURE__ */ jsx("span", { className: `mt-1 inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${device.status === "Online" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`, children: device.status })
                ] })
              ] }, device.id)) })
            ] }),
            /* @__PURE__ */ jsxs("section", { className: "rounded-lg border border-slate-200 bg-white p-4 shadow-sm", children: [
              /* @__PURE__ */ jsx("h3", { className: "mb-3 text-sm font-semibold text-slate-950", children: "SCADA Operations View" }),
              /* @__PURE__ */ jsxs("div", { className: "relative h-64 overflow-hidden rounded-lg border border-slate-200 bg-slate-900 p-4 text-slate-200", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute left-6 top-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-blue-400/70 bg-blue-500/10", children: /* @__PURE__ */ jsx(Droplets, { className: "h-8 w-8 text-blue-300" }) }),
                /* @__PURE__ */ jsx("div", { className: "absolute left-28 top-14 h-2 w-28 rounded bg-blue-400/70" }),
                /* @__PURE__ */ jsxs("div", { className: "absolute left-56 top-9 rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-xs", children: [
                  /* @__PURE__ */ jsx(Gauge, { className: "mb-1 h-5 w-5 text-orange-300" }),
                  "4.8 bar"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "absolute bottom-8 left-16 rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-xs", children: [
                  /* @__PURE__ */ jsx(Power, { className: "mb-1 h-5 w-5 text-emerald-300" }),
                  "Pump ON"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 right-8 flex h-24 w-24 items-center justify-center rounded-lg border border-slate-600 bg-slate-800", children: /* @__PURE__ */ jsx(Router, { className: "h-8 w-8 text-orange-300" }) }),
                /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 left-40 h-2 w-44 rounded bg-blue-400/70" }),
                /* @__PURE__ */ jsx("div", { className: "absolute right-6 top-6 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200", children: "Realtime telemetry" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-5 xl:grid-cols-3", children: [
            /* @__PURE__ */ jsxs("section", { className: "rounded-lg border border-slate-200 bg-white p-4 shadow-sm", children: [
              /* @__PURE__ */ jsxs("h3", { className: "mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950", children: [
                /* @__PURE__ */ jsx(Workflow, { className: "h-4 w-4 text-orange-500" }),
                "Workflow Automation"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-2", children: workflowSteps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded border border-slate-200 px-3 py-2 text-xs text-slate-600", children: [
                /* @__PURE__ */ jsx("span", { className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[10px] font-bold text-orange-600", children: index + 1 }),
                /* @__PURE__ */ jsx("span", { children: step })
              ] }, step)) })
            ] }),
            /* @__PURE__ */ jsxs("section", { className: "rounded-lg border border-slate-200 bg-white p-4 shadow-sm", children: [
              /* @__PURE__ */ jsxs("h3", { className: "mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950", children: [
                /* @__PURE__ */ jsx(Cloud, { className: "h-4 w-4 text-blue-500" }),
                "Data Ingest"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded border border-slate-200 px-3 py-2", children: [
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Radio, { className: "h-4 w-4 text-slate-500" }),
                    " MQTT Subscriber"
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-emerald-600", children: "Connected" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded border border-slate-200 px-3 py-2", children: [
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(TerminalSquare, { className: "h-4 w-4 text-slate-500" }),
                    " HTTP Telemetry API"
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-emerald-600", children: "Token protected" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded border border-slate-200 px-3 py-2", children: [
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Cpu, { className: "h-4 w-4 text-slate-500" }),
                    " Edge Gateway Binding"
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-500", children: "Modbus / PLC / LoRa" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("section", { className: "rounded-lg border border-slate-200 bg-white p-4 shadow-sm", children: [
              /* @__PURE__ */ jsxs("h3", { className: "mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950", children: [
                /* @__PURE__ */ jsx(SlidersHorizontal, { className: "h-4 w-4 text-slate-600" }),
                "Control Command Log"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs", children: [
                /* @__PURE__ */ jsx("div", { className: "rounded border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-800", children: "Relay pulse sent to IEAC-140 / gate opened" }),
                /* @__PURE__ */ jsx("div", { className: "rounded border border-blue-200 bg-blue-50 px-3 py-2 text-blue-800", children: "MQTT command queued for IER-141 / pump schedule" }),
                /* @__PURE__ */ jsx("div", { className: "rounded border border-slate-200 px-3 py-2 text-slate-600", children: "AO setpoint updated / valve position 62%" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "mt-20 border-t border-slate-800 pt-16", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-6 text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: demoSiteCopy.bottomLeftTitle }),
        demoSiteCopy.bottomLeftParagraphs.map((paragraph, index) => /* @__PURE__ */ jsx("p", { className: `${index === 0 ? "mb-6" : ""} leading-relaxed text-slate-400`, children: paragraph }, paragraph))
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-6 text-xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: demoSiteCopy.bottomRightTitle }),
        /* @__PURE__ */ jsx("div", { className: "space-y-5", children: demoSiteCopy.bottomRightItems.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-white", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm leading-relaxed text-slate-400", children: item.description })
          ] })
        ] }, item.title)) })
      ] })
    ] }) })
  ] }) });
}
function About() {
  return /* @__PURE__ */ jsx("div", { className: "bg-slate-900 min-h-screen pt-20 pb-20 text-slate-300", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6", style: { fontFamily: "var(--font-display)" }, children: aboutSiteCopy.heroTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto", children: aboutSiteCopy.heroDescription })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-6", style: { fontFamily: "var(--font-display)" }, children: aboutSiteCopy.missionTitle }),
        aboutSiteCopy.missionParagraphs.map((paragraph) => /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-400 mb-6 leading-relaxed", children: paragraph }, paragraph)),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4 text-slate-400", children: aboutSiteCopy.missionBullets.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-blue-500" }),
          " ",
          item.text
        ] }, item.text)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700", children: [
        /* @__PURE__ */ jsx("img", { src: aboutSiteCopy.imageUrl, alt: "IoTEdges industrial IoT architecture", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8", children: /* @__PURE__ */ jsxs("div", { className: "text-white", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl mb-1", children: aboutSiteCopy.imageOverlayTitle }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-sm", children: aboutSiteCopy.imageOverlayDescription })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-24", children: aboutSiteCopy.stats.map((stat) => /* @__PURE__ */ jsxs("div", { className: "text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50", children: [
      /* @__PURE__ */ jsx("div", { className: "text-3xl lg:text-4xl font-bold text-white mb-2", style: { fontFamily: "var(--font-display)" }, children: stat.value }),
      /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-slate-500 uppercase tracking-widest", children: stat.label })
    ] }, stat.label)) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800 border border-slate-700 rounded-2xl p-10 lg:p-12 shadow-2xl mb-24", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl lg:text-3xl font-bold text-white mb-10 text-center", style: { fontFamily: "var(--font-display)" }, children: aboutSiteCopy.reasonsTitle }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-10", children: aboutSiteCopy.reasons.map((reason) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-white mb-4", children: reason.title }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed", children: reason.description })
      ] }, reason.title)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-blue-900/20 border border-blue-500/30 rounded-2xl p-10 lg:p-16 text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl lg:text-3xl font-bold text-white mb-6", style: { fontFamily: "var(--font-display)" }, children: aboutSiteCopy.partnerTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-400 mb-8 max-w-2xl mx-auto", children: aboutSiteCopy.partnerDescription }),
      /* @__PURE__ */ jsx(Link, { to: aboutSiteCopy.partnerCtaHref, className: "inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded text-sm font-bold uppercase tracking-widest transition shadow-lg shadow-blue-500/20", children: aboutSiteCopy.partnerCtaLabel })
    ] })
  ] }) });
}
function trackEvent(eventName, properties = {}) {
  if (typeof window === "undefined") return;
  const cleanProperties = Object.fromEntries(
    Object.entries(properties).filter(([, value]) => value !== void 0 && value !== null && value !== "")
  );
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...cleanProperties
  });
}
const QUOTE_REQUEST_ENDPOINT = "/api/quote-request";
const MIN_SUBMIT_TIME_MS = 3e3;
const countries = [
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Belgium",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Poland",
  "Czech Republic",
  "Austria",
  "Switzerland",
  "Ireland",
  "Portugal",
  "Greece",
  "Romania",
  "Hungary",
  "Bulgaria",
  "Croatia",
  "Slovakia",
  "Slovenia",
  "Estonia",
  "Latvia",
  "Lithuania",
  "Turkey",
  "United Arab Emirates",
  "Saudi Arabia",
  "South Africa",
  "Australia",
  "New Zealand",
  "Canada",
  "Mexico",
  "Brazil",
  "Chile",
  "India",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Vietnam",
  "Indonesia",
  "Philippines",
  "Japan",
  "South Korea",
  "China"
];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const whatsappPattern = /^\+?[0-9][0-9\s().-]{6,24}$/;
function QuoteRequestForm({
  lockedInquiryType = "",
  lockedInquirySubject = "",
  lockedInquirySource = "",
  submitLabel = "Submit Request",
  successTitle = "Request Received",
  successMessage = "Thank you! We'll review your IoT requirements and respond shortly.",
  successChecklist = [
    "Your inquiry is linked to the current page context and queued for internal review.",
    "We will normally reply with the next technical questions, configuration fit, or quotation path.",
    "If the project is urgent, include target quantity, market, and required protocols in your next message."
  ],
  analyticsFormName = "contact_quote",
  onSubmitted,
  onSuccessSecondaryAction,
  successSecondaryLabel = "Close"
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());
  const countryOptions = useMemo(() => countries, []);
  const hasLockedInquiryContext = Boolean(lockedInquiryType || lockedInquirySubject);
  const resolvedApplicationType = lockedInquiryType || "";
  const resetSuccessState = () => {
    setSubmitted(false);
    setSubmitError("");
    setFormStartedAt(Date.now());
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const whatsapp = String(formData.get("whatsapp") || "").trim();
    const country = String(formData.get("country") || "").trim();
    const applicationType = String(formData.get("application_type") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const websiteUrl = String(formData.get("website_url") || "").trim();
    const enrichedMessage = hasLockedInquiryContext ? [
      "Inquiry Context",
      lockedInquiryType ? `Type: ${lockedInquiryType}` : "",
      lockedInquirySubject ? `Subject: ${lockedInquirySubject}` : "",
      lockedInquirySource ? `Source: ${lockedInquirySource}` : "",
      "",
      message
    ].filter(Boolean).join("\n") : message;
    setSubmitError("");
    if (websiteUrl) {
      setSubmitted(true);
      return;
    }
    if (Date.now() - formStartedAt < MIN_SUBMIT_TIME_MS) {
      setSubmitError("Please take a moment to complete the form before submitting.");
      return;
    }
    if (!emailPattern.test(email)) {
      setSubmitError("Please enter a valid business email address.");
      return;
    }
    if (!whatsappPattern.test(whatsapp)) {
      setSubmitError("Please enter a valid WhatsApp or phone number, including country code when possible.");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(QUOTE_REQUEST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          email,
          whatsapp,
          country,
          message: enrichedMessage,
          application_type: applicationType,
          _formStartedAt: formStartedAt,
          website_url: websiteUrl
        })
      });
      if (!response.ok) {
        throw new Error(`CRM form submission failed with status ${response.status}`);
      }
      setIsSubmitting(false);
      setSubmitted(true);
      setFormStartedAt(Date.now());
      form.reset();
      trackEvent("lead_form_submit", {
        event_category: "lead",
        form_name: analyticsFormName,
        application_type: applicationType,
        country,
        inquiry_subject: lockedInquirySubject || void 0
      });
      onSubmitted == null ? void 0 : onSubmitted();
    } catch (error) {
      console.error("Quote request submission failed:", error);
      setSubmitError("Unable to submit the request right now. Please try again or email sales@iotedges.com.");
      setIsSubmitting(false);
    }
  };
  if (submitted) {
    return /* @__PURE__ */ jsxs("div", { className: "text-center py-10", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20", children: /* @__PURE__ */ jsx(Send, { className: "w-8 h-8" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: successTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400", children: successMessage }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-6 max-w-xl rounded-lg border border-slate-700 bg-slate-900/80 p-5 text-left", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400", children: "What Happens Next" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-2", children: successChecklist.map((item) => /* @__PURE__ */ jsx("div", { className: "rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm leading-relaxed text-slate-300", children: item }, item)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-4", children: [
        onSuccessSecondaryAction ? /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: onSuccessSecondaryAction,
            className: "rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800",
            children: successSecondaryLabel
          }
        ) : null,
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: resetSuccessState,
            className: "text-blue-400 font-medium hover:text-blue-300",
            children: "Submit another inquiry"
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsx("input", { type: "text", name: "website_url", tabIndex: -1, autoComplete: "off", className: "hidden", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("input", { type: "hidden", name: "_formStartedAt", value: formStartedAt }),
    hasLockedInquiryContext && /* @__PURE__ */ jsxs("section", { className: "rounded-lg border border-blue-500/20 bg-blue-500/10 p-5", children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Inquiry Context" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
        lockedInquirySubject && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "mb-1 block text-xs font-bold uppercase tracking-widest text-blue-300", children: "Subject" }),
          /* @__PURE__ */ jsx("div", { className: "rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white", children: lockedInquirySubject })
        ] }),
        lockedInquiryType && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "mb-1 block text-xs font-bold uppercase tracking-widest text-blue-300", children: "Inquiry Type" }),
          /* @__PURE__ */ jsx("div", { className: "rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white", children: lockedInquiryType })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-slate-300", children: "This inquiry is linked to the current page and cannot be changed here." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-slate-300 mb-1", children: "Name *" }),
        /* @__PURE__ */ jsx("input", { required: true, name: "name", type: "text", autoComplete: "name", className: "w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-slate-300 mb-1", children: "Company *" }),
        /* @__PURE__ */ jsx("input", { required: true, name: "company", type: "text", autoComplete: "organization", className: "w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-slate-300 mb-1", children: "Email *" }),
        /* @__PURE__ */ jsx("input", { required: true, name: "email", type: "email", inputMode: "email", autoComplete: "email", pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$", className: "w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-slate-300 mb-1", children: "WhatsApp / Phone *" }),
        /* @__PURE__ */ jsx("input", { required: true, name: "whatsapp", type: "tel", inputMode: "tel", autoComplete: "tel", placeholder: "+14155550123", pattern: "^\\+?[0-9][0-9\\s().-]{6,24}$", className: "w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-slate-300 mb-1", children: "Country *" }),
        /* @__PURE__ */ jsx("input", { required: true, name: "country", type: "search", list: "country-options", autoComplete: "country-name", placeholder: "Search country...", className: "w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500" }),
        /* @__PURE__ */ jsx("datalist", { id: "country-options", children: countryOptions.map((country) => /* @__PURE__ */ jsx("option", { value: country }, country)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-slate-300 mb-1", children: "Application Type *" }),
        resolvedApplicationType ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
          /* @__PURE__ */ jsx("input", { type: "hidden", name: "application_type", value: resolvedApplicationType }),
          /* @__PURE__ */ jsx("div", { className: "w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-white", children: resolvedApplicationType })
        ] }) : /* @__PURE__ */ jsxs("select", { required: true, name: "application_type", className: "w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none", children: [
          /* @__PURE__ */ jsx("option", { value: "", children: "Select target application..." }),
          /* @__PURE__ */ jsx("option", { value: "Factory Energy Monitoring", children: "Factory Energy Monitoring" }),
          /* @__PURE__ */ jsx("option", { value: "Solar Monitoring", children: "Solar Monitoring" }),
          /* @__PURE__ */ jsx("option", { value: "Water Monitoring", children: "Water Monitoring" }),
          /* @__PURE__ */ jsx("option", { value: "Smart Agriculture", children: "Smart Agriculture" }),
          /* @__PURE__ */ jsx("option", { value: "Gate Access Control", children: "Gate Access Control" }),
          /* @__PURE__ */ jsx("option", { value: "Remote IO / RTU Project", children: "Remote IO / RTU Project" }),
          /* @__PURE__ */ jsx("option", { value: "Modbus MQTT Gateway", children: "Modbus MQTT Gateway" }),
          /* @__PURE__ */ jsx("option", { value: "Other IoT Use Case", children: "Other IoT Use Case" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-slate-300 mb-1", children: "Project Message *" }),
      /* @__PURE__ */ jsx("textarea", { required: true, name: "message", rows: 5, className: "w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500", placeholder: "Tell us about your equipment, protocols, network type, expected quantity, timeline, and target market..." })
    ] }),
    submitError && /* @__PURE__ */ jsx("p", { className: "rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200", role: "alert", children: submitError }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: isSubmitting,
        className: "w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-500 transition flex justify-center items-center gap-2 disabled:bg-blue-800 disabled:text-slate-400",
        children: isSubmitting ? "Sending Request..." : /* @__PURE__ */ jsxs(Fragment$1, { children: [
          submitLabel,
          " ",
          /* @__PURE__ */ jsx(Send, { className: "w-4 h-4" })
        ] })
      }
    )
  ] });
}
const contactIcons = {
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin
};
function getContactIcon(iconKey) {
  return contactIcons[iconKey] || Mail;
}
function Contact() {
  const [searchParams] = useSearchParams();
  const lockedInquiryType = String(searchParams.get("type") || "").trim();
  const lockedInquirySubject = String(searchParams.get("subject") || "").trim();
  const lockedInquirySource = String(searchParams.get("source") || "").trim();
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 min-h-screen text-slate-300", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative w-full h-[30vh] min-h-[300px] lg:h-[40vh]", children: [
      /* @__PURE__ */ jsx("img", { src: contactSiteCopy.heroImageUrl, alt: "IoTEdges industrial IoT contact", className: "w-full h-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-slate-900/70 bg-gradient-to-t from-slate-900 to-transparent flex flex-col justify-center px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto w-full", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4", style: { fontFamily: "var(--font-display)" }, children: contactSiteCopy.heroTitle }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-slate-300 max-w-2xl", children: contactSiteCopy.heroDescription })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-4", style: { fontFamily: "var(--font-display)" }, children: contactSiteCopy.introTitle }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-400 mb-12", children: contactSiteCopy.introDescription }),
        /* @__PURE__ */ jsx("div", { className: "space-y-8", children: contactSiteCopy.contactInfo.map((item) => {
          const Icon = getContactIcon(item.iconKey);
          return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-blue-400" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 whitespace-pre-line text-slate-400", children: item.value })
            ] })
          ] }, item.title);
        }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-slate-800 rounded-xl border border-slate-700 p-8 shadow-2xl", children: /* @__PURE__ */ jsx(
        QuoteRequestForm,
        {
          lockedInquiryType,
          lockedInquirySubject,
          lockedInquirySource,
          analyticsFormName: "contact_quote"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-slate-950 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-12 text-center", style: { fontFamily: "var(--font-display)" }, children: contactSiteCopy.faqTitle }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: contactSiteCopy.faqs.map((faq) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 border border-slate-700 rounded-xl p-6 md:p-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3", children: faq.question }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed", children: faq.answer })
      ] }, faq.question)) })
    ] }) })
  ] });
}
const __vite_glob_0_0$4 = `---
id: energy-monitoring-iso-50001
title: Achieving ISO 50001 with Real-Time Energy Monitoring
excerpt: >-
  Learn how implementing a robust factory energy monitoring system can
  streamline your path to ISO 50001 certification and significant cost savings.
date: 'May 18, 2024'
author: Customer Success
category: Case Studies
imageUrl: /uploads/blog/energy-monitoring-iso-50001.svg
relatedProducts:
  - ieg-100-ethernet-industrial-iot-gateway
  - ier-100-ethernet-industrial-rtu
  - ieio-100-modbus-remote-io-module
relatedResources:
  - /solutions/factory-energy
  - /knowledge/modbus
  - /blog/how-to-choose-modbus-mqtt-gateway
order: 3
---
# Achieving ISO 50001 with Real-Time Energy Monitoring

With energy costs constantly fluctuating and a growing global emphasis on sustainability, achieving the ISO 50001 standard for Energy Management Systems (EnMS) has become a strategic priority for manufacturing facilities. But establishing an effective EnMS requires more than just policy changes; it requires accurate, continuous data.

## What is ISO 50001?

ISO 50001 is a voluntary international standard that provides a framework for organizations to manage and improve their energy performance. It follows the "Plan-Do-Check-Act" (PDCA) cycle for continuous improvement. Achieving certification demonstrates a commitment to sustainable practices and reducing environmental impact.

## The Role of Real-Time Monitoring

You cannot manage what you cannot measure. Traditionally, energy audits relied on monthly utility bills, which only provided a high-level, retrospective view. Real-time factory energy monitoring systems fundamentally change this dynamic.

### Granular Visibility

By installing Modbus-enabled power meters on individual machines or production lines and connecting them through an IoT gateway, facility managers gain granular visibility. You can see exactly which processes are consuming the most power and when. For Ethernet-based cabinet deployments, the [IEG-100 Ethernet Industrial IoT Gateway](/products/ieg-100-ethernet-industrial-iot-gateway) is the relevant IoTEdges gateway model to review first.

### Identifying Hidden Waste

Real-time dashboards often uncover hidden inefficiencies. For instance, you might discover that heavy machinery is left idling during shift changes or weekends, drawing significant baseline power. Identifying these anomalies is the first step toward corrective action.

### Automated Reporting and Verification

The "Check" phase of the ISO 50001 PDCA cycle requires verifying that energy efficiency measures are actually working. A modern cloud dashboard automates this process, generating custom historical reports that validate energy savings; essential documentation for ISO auditors.

## Implementing a System

Implementing a monitoring system does not require overhauling your entire factory. It can be done incrementally:

1. **Pilot Phase:** Start with high-energy-consuming equipment, such as HVAC and compressors.
2. **Data Collection:** Use an IoTEdges gateway or RTU path to collect meter data and publish telemetry to the dashboard.
3. **Analysis:** Set baselines and identify optimization opportunities via the dashboard.
4. **Scale:** Roll out monitoring to the rest of the facility.

If the project needs local dry-contact status, relay output, or analog signal capture in addition to meter polling, compare the [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu) and [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module) before finalizing the architecture.

## Take the First Step

Achieving ISO 50001 is a journey, and accurate data is your compass. Contact IoTEdges today to learn how our hardware and cloud solutions can support your energy management goals.
`;
const __vite_glob_0_1$3 = `---
id: how-to-choose-4g-gate-opener-europe
title: How to Choose a 4G Gate Opener for Europe
excerpt: >-
  A buyer-focused checklist for European installers comparing GSM gate openers,
  4G access controllers, intercom workflows, SIM plans, and LTE band planning.
date: 'June 09, 2026'
author: Product Management
category: Buyer Guide
imageUrl: /uploads/blog/how-to-choose-4g-gate-opener-europe.svg
relatedProducts:
  - ieac-140-4g-gsm-gate-opener
relatedResources:
  - /solutions/gate-access-control
  - /knowledge/4g-gsm-gate-opener-europe
order: 4
---
# How to Choose a 4G Gate Opener for Europe

European gate and door access projects still often begin with GSM gate opener search terms, but new installations usually fit better with a 4G-first remote access controller.

## 1. Start With The Access Job

Before choosing hardware, define what the controller must actually do:

- open a gate, door, barrier or lock through a relay
- read gate position or door contact status
- authorize users by phone, SMS, app, dashboard or API
- record access events
- support installers across different sites
- retrofit a legacy GSM gate opener

If the main requirement is simply remote relay control, a compact 4G access controller may be enough. If the site needs multiple IO points, monitoring, alarms, or dashboard workflows, the product starts to look more like an RTU door controller.

## 2. Treat GSM As A Legacy Keyword, Not The Default Architecture

Buyers still search for "GSM gate opener", but new European products should not assume GSM is the long-term network path. 2G/GSM availability varies by country and operator, and 3G has already been retired in many markets.

Mention GSM replacement demand only as a search term. The product itself should still be presented as a 4G-first controller unless the target market requires a specific GSM fallback.

The technical background is covered in [GSM vs 4G Gate Opener for Europe](/knowledge/4g-gsm-gate-opener-europe).

## 3. Check LTE Bands And SIM Behavior

A European 4G gate opener should be evaluated against the target countries and operators. Check:

- LTE bands supported by the module.
- SIM and APN behavior with local operators.
- fallback behavior if LTE signal is weak.
- antenna location and cable loss in the cabinet.
- roaming SIM or local SIM requirements.
- data, SMS and voice plan requirements if those features are used.

Do not copy generic "Europe compatible" wording into a datasheet until these checks are complete.

## 4. Validate Relay And Input Behavior

Gate and door projects depend on simple but important IO behavior. Confirm:

- relay output count and contact rating
- pulse duration or latch behavior
- dry contact input behavior
- status input filtering or debounce behavior
- wiring limits for gate controllers, locks and barriers
- surge, ESD and grounding requirements

The [IEAC-140 4G GSM Gate Opener](/products/ieac-140-4g-gsm-gate-opener) fits this 4G-first access controller direction, while relay rating, input mode, and enclosure details should match the selected version and installation.

## 5. Separate Gate Opener From Intercom Claims

"4G intercom" can mean several different things:

- remote relay trigger from an intercom panel
- voice call access through a cellular module
- SIP or VoLTE audio workflow
- app-based visitor approval
- dashboard-based access management

Do not claim VoLTE, SIP, voice quality, emergency access or finished intercom audio behavior until hardware, firmware, SIM/operator behavior and regulatory requirements have been tested.

## 6. Match The Product To The Project

For IoTEdges selection:

- Use [IEAC-140 4G GSM Gate Opener](/products/ieac-140-4g-gsm-gate-opener) for Europe-focused gate, door, barrier, and access cabinet installations.
- Review [Gate Access Control](/solutions/gate-access-control) when the site needs a solution-level architecture.
- Use [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu) or [IER-120 WiFi Remote Monitoring RTU](/products/ier-120-wifi-remote-monitoring-rtu) when the application is more about local I/O and monitoring than cellular access control.

## Final Recommendation

For new European installations, use a 4G remote access controller as the base product direction. Keep GSM fallback, LTE bands, country compatibility, relay ratings, intercom behavior, enclosure rating, and CE/RED status aligned to the selected version and market.
`;
const __vite_glob_0_2$3 = "---\nid: how-to-choose-modbus-mqtt-gateway\ntitle: How to Choose the Right Modbus to MQTT Gateway\nexcerpt: >-\n  A practical guide for selecting an industrial gateway that connects Modbus\n  field equipment to MQTT dashboards in real industrial deployments.\ndate: 'April 02, 2024'\nauthor: Product Management\ncategory: Hardware Guide\nimageUrl: /uploads/blog/how-to-choose-modbus-mqtt-gateway.svg\nrelatedProducts:\n  - ieg-100-ethernet-industrial-iot-gateway\n  - ieg-120-wifi-industrial-iot-gateway\n  - ier-100-ethernet-industrial-rtu\n  - ieio-100-modbus-remote-io-module\nrelatedResources:\n  - /knowledge/modbus\n  - /knowledge/mqtt\n  - /knowledge/rs485\norder: 2\n---\n# How to Choose the Right Modbus to MQTT Gateway\n\nFor many industrial facilities, bridging legacy equipment and cloud dashboards starts with a Modbus to MQTT gateway. The right choice depends on the field protocol, uplink method, cabinet environment, and security workflow of the deployment.\n\n## Step 1: Understand Your Protocol Requirements\n\nStart by identifying the protocols used by your existing equipment. For energy meters, PLCs, inverters, and remote IO modules, the practical baseline is often Modbus RTU over RS485 or Modbus TCP over Ethernet.\n\nIf your site also requires OPC UA, BACnet, PROFINET, or EtherNet/IP, treat that as an advanced gateway requirement instead of assuming every Modbus MQTT gateway supports it by default. The [IEG-100 Ethernet Industrial IoT Gateway](/products/ieg-100-ethernet-industrial-iot-gateway) is positioned around Modbus RTU/TCP collection and MQTT telemetry.\n\n## Step 2: Assess the Physical Environment\n\nIndustrial gateways are usually installed in control cabinets, machine panels, pump stations, or energy monitoring boxes. Before choosing a model, check:\n\n- **DIN-rail mounting** for clean cabinet installation.\n- **Industrial enclosure and terminal layout** suitable for wiring and maintenance.\n- **Documented power input and grounding design** for the installation environment.\n- **Stable serial and Ethernet behavior** under the expected device count and polling interval.\n\nTemperature range, isolation design, EMC performance, and surge protection should be taken from the released datasheet and test report, not copied from a generic gateway checklist.\n\n## Step 3: Choose One Uplink Path\n\nHow will the gateway send data to the dashboard or cloud broker? Depending on the site, you may need:\n\n- **Ethernet** for reliable hardwired connections.\n- **WiFi** for indoor sites where cable installation is difficult.\n- **4G/LTE cellular** for remote stations where local networks are unavailable.\n\nKeep wireless uplinks separated by model. A practical product matrix should avoid mixing WiFi, 4G, and LoRa in one device unless there is a specific engineering reason. IoTEdges currently separates the [IEG-100 Ethernet gateway](/products/ieg-100-ethernet-industrial-iot-gateway) and [IEG-120 WiFi gateway](/products/ieg-120-wifi-industrial-iot-gateway), while 4G and LoRa models should be published with their own clear hardware scope.\n\n## Step 4: Treat Security as a Deployment Workflow\n\nSecurity is not just one checkbox. Check whether the gateway firmware, cloud broker, and deployment process can support the security model your customer requires, including authenticated MQTT connections, credential rotation, device identity management, and network segmentation.\n\nDo not treat TLS, VPN, firewall, or certificate-management language as marketing filler. These features should be listed publicly according to released firmware behavior and onboarding flow.\n\n## Step 5: Consider Cloud Compatibility and Edge Processing\n\nSome gateways only push raw data, while others support filtering, aggregation, local buffering, or rule-based alerts. Decide which functions belong in the gateway and which belong in the dashboard before finalizing hardware.\n\nFor applications that also need local digital and analog IO, compare the gateway with an RTU or remote IO path, such as the [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu) or [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module).\n\n## Product Fit\n\nUse the [public product family](/products) to compare Ethernet gateway, WiFi gateway, RTU, Modbus remote IO, and dashboard options, then match each deployment requirement to the right product.\n";
const __vite_glob_0_3$3 = "---\nid: how-to-choose-power-cabinet-monitoring-rtu\ntitle: How to Choose a Power Cabinet Monitoring RTU\nexcerpt: >-\n  A practical checklist for selecting a power cabinet RTU for breaker status,\n  door alarms, ATS panels, generator rooms, RS485 meters and remote event\n  logging.\ndate: 'June 17, 2026'\nauthor: Product Management\ncategory: Hardware Guide\nimageUrl: /uploads/blog/how-to-choose-power-cabinet-monitoring-rtu.svg\nrelatedProducts:\n  - ier-142-4g-power-cabinet-rtu\n  - ier-140-4g-remote-relay-rtu\n  - ier-100-ethernet-industrial-rtu\nrelatedResources:\n  - /knowledge/rs485\n  - /knowledge/mqtt\n  - /knowledge/rtu-vs-gateway-vs-remote-io\norder: 6\n---\n# How to Choose a Power Cabinet Monitoring RTU\n\nPower cabinet monitoring projects look simple on paper, but they can involve many signal types at once: breaker status, door contacts, SPD alarms, ATS events, generator-room alarms, RS485 energy meters and a few relay outputs for reset or annunciation.\n\n## 1. Count Inputs Before You Count Protocols\n\nMany cabinet projects need a lot of dry-contact monitoring and only a small amount of control. Start by listing:\n\n- breaker or switch status\n- ATS state\n- door open or tamper alarm\n- generator fault alarms\n- horn, lamp or reset outputs\n- any RS485 meters or controllers\n\nThis immediately tells you whether the site needs a DI-heavy RTU instead of a small relay controller.\n\n## 2. Decide If The Site Needs Wired Or Cellular Uplink\n\nIf the cabinet already has reliable LAN access, a wired RTU can be the cleanest approach. If it is a remote utility cabinet, telecom cabinet or generator room without reliable local network access, 4G is often the better architecture.\n\nThe [IER-142 4G Power Cabinet RTU](/products/ier-142-4g-power-cabinet-rtu) fits remote cabinet and alarm-panel monitoring.\n\n## 3. Check Whether RS485 Devices Must Also Be Read\n\nA cabinet monitoring RTU becomes more valuable when it can combine digital alarms with Modbus telemetry from:\n\n- energy meters\n- ATS controllers\n- generator controllers\n- alarm modules\n\nThat combination gives operators both event-level visibility and deeper meter or controller data.\n\n## 4. Keep Protection Separate From Monitoring\n\nAn RTU can monitor and report electrical status, but it should not be confused with certified protection equipment. Protection relays, shutdown systems and critical safety behavior remain separate functions in the electrical design.\n\n## 5. Match The Product To The Cabinet\n\nUse a compact RTU when the job is mostly a few alarms and a few outputs. Use a DI-heavy cabinet RTU when the site needs many status signals, event logging and RS485 meter integration in one device.\n\n## Practical Recommendation\n\nFor cabinet applications with many dry-contact alarms and remote event visibility requirements, start with a power cabinet RTU architecture. It gives you a cleaner fit than forcing the site into a small relay controller or a pure gateway.\n";
const __vite_glob_0_4$3 = "---\nid: industrial-iot-trends-2024\ntitle: Top Industrial IoT Trends to Watch in 2024\nexcerpt: >-\n  Explore the emerging trends in Industrial IoT, from edge computing to\n  AI-driven predictive maintenance, and how they are shaping the future of\n  manufacturing.\ndate: 'March 15, 2024'\nauthor: Engineering Team\ncategory: Industry Trends\nimageUrl: /uploads/blog/industrial-iot-trends-2024.svg\nrelatedProducts:\n  - ieg-100-ethernet-industrial-iot-gateway\n  - ieg-120-wifi-industrial-iot-gateway\n  - ier-100-ethernet-industrial-rtu\nrelatedResources:\n  - /knowledge/modbus\n  - /knowledge/mqtt\n  - /products\norder: 1\n---\n# Top Industrial IoT Trends to Watch in 2024\n\nThe Industrial Internet of Things (IIoT) is rapidly evolving, bringing unprecedented connectivity and intelligence to the factory floor. As we move deeper into 2024, several key trends are emerging that promise to further transform industrial operations.\n\n## 1. Edge Computing Takes Center Stage\n\nWhile cloud computing has been the backbone of IIoT, the shift toward edge computing is accelerating. Processing selected data locally at the edge can reduce bandwidth usage, improve response time, and make remote monitoring systems more resilient. For many deployments, the first step is still practical data acquisition through a gateway such as the [IEG-100 Ethernet Industrial IoT Gateway](/products/ieg-100-ethernet-industrial-iot-gateway) or [IEG-120 WiFi Industrial IoT Gateway](/products/ieg-120-wifi-industrial-iot-gateway).\n\n## 2. AI-Driven Predictive Maintenance\n\nPredictive maintenance has transitioned from a buzzword to a core requirement. By applying artificial intelligence and machine learning algorithms to the vast amounts of telemetry data collected from machines, plant managers can accurately forecast equipment failures before they happen. This drastically reduces unexpected downtime and lowers maintenance costs.\n\n## 3. The IT/OT Convergence\n\nThe historical divide between Information Technology (IT) and Operational Technology (OT) is dissolving. Modern factory energy monitoring systems are now designed to seamlessly integrate plant floor data with enterprise IT systems (like ERP and CRM). This convergence allows executives to have a holistic view of the business, aligning production metrics directly with financial performance.\n\n## 4. Enhanced Cybersecurity Measures\n\nAs more industrial systems come online, they become targets for cyber threats. Consequently, securing IIoT architectures is paramount. We are seeing a heightened focus on authenticated device access, encrypted telemetry paths, credential management, and clear IT/OT network boundaries. Public product pages should describe these capabilities according to released firmware behavior, broker onboarding flow, and operating procedures.\n\n## Conclusion\n\nThe future of manufacturing relies on the successful integration of these IIoT trends. At IoTEdges, our product path starts with practical [industrial IoT gateways, RTUs, and remote IO modules](/products), then expands each public specification through released hardware, software, and integration paths.\n";
const __vite_glob_0_5$3 = "---\nid: when-to-use-wifi-industrial-gateway\ntitle: When to Use a WiFi Industrial Gateway Instead of Ethernet or 4G\nexcerpt: >-\n  A buyer-focused guide to choosing WiFi for indoor industrial telemetry\n  projects, and knowing when Ethernet or 4G is the safer architecture.\ndate: 'June 17, 2026'\nauthor: Engineering Team\ncategory: Buyer Guide\nimageUrl: /uploads/blog/when-to-use-wifi-industrial-gateway.svg\nrelatedProducts:\n  - ieg-120-wifi-industrial-iot-gateway\n  - ieg-100-ethernet-industrial-iot-gateway\n  - ier-120-wifi-remote-monitoring-rtu\nrelatedResources:\n  - /knowledge/wifi-industrial-iot-gateway\n  - /knowledge/modbus\n  - /knowledge/mqtt\norder: 5\n---\n# When to Use a WiFi Industrial Gateway Instead of Ethernet or 4G\n\nWiFi sits in an awkward middle zone for industrial IoT. It is easier to deploy than Ethernet, but it is not the right answer for every remote site. Buyers often know they want wireless connectivity, but they have not yet decided whether the site should use WiFi or 4G.\n\n## Start With The Network You Already Have\n\nWiFi is most effective when the site already has stable indoor wireless coverage. That usually means:\n\n- a building, plant or equipment room with managed WiFi\n- a cabinet located within reliable signal range\n- IT approval for the gateway to join the network\n- a project that does not need outdoor long-distance wireless\n\nIf the customer already trusts the local LAN and only wants to avoid pulling new cable, WiFi can be the most practical option.\n\n## Choose Ethernet When Reliability Comes First\n\nEthernet is still the safer default for many control cabinets. If the project already has a LAN drop, a wired path is usually easier to support over the long term.\n\nThe [IEG-100 Ethernet Industrial IoT Gateway](/products/ieg-100-ethernet-industrial-iot-gateway) is a better fit when the job is fixed-cabinet telemetry with predictable networking.\n\n## Choose 4G When The Site Is Truly Remote\n\nIf the site is a pump station, gate entrance, rural utility cabinet or distributed field asset, WiFi is often the wrong starting point. Those projects usually need cellular uplink instead of dependence on a nearby building network.\n\n## Gateway Or RTU?\n\nSome buyers actually need a WiFi RTU rather than a WiFi gateway. If the site needs local digital inputs, relay outputs or analog inputs, compare a WiFi RTU such as the [IER-120 WiFi Remote Monitoring RTU](/products/ier-120-wifi-remote-monitoring-rtu) instead of using a gateway by default.\n\n## Practical Recommendation\n\nUse a WiFi industrial gateway when the site is indoors, the network is already there, and the main job is Modbus data collection plus MQTT or dashboard telemetry. If the project needs maximum network stability, choose Ethernet. If it needs remote independence, choose 4G.\n";
const DEFAULT_PRODUCT_IMAGE_URL = "/uploads/placeholders/product-cover.svg";
const DEFAULT_SOLUTION_IMAGE_URL = "/uploads/placeholders/solution-cover.svg";
const DEFAULT_BLOG_IMAGE_URL = "/uploads/placeholders/blog-cover.svg";
const DEFAULT_KNOWLEDGE_IMAGE_URL = "/uploads/placeholders/knowledge-cover.svg";
function normalizeImageUrl(value) {
  return typeof value === "string" && value.trim() ? value.trim() : "";
}
function resolveProductImageUrl(imageUrl) {
  return normalizeImageUrl(imageUrl) || DEFAULT_PRODUCT_IMAGE_URL;
}
function resolveSolutionImageUrl(imageUrl) {
  return normalizeImageUrl(imageUrl) || DEFAULT_SOLUTION_IMAGE_URL;
}
function resolveBlogImageUrl(imageUrl) {
  return normalizeImageUrl(imageUrl) || DEFAULT_BLOG_IMAGE_URL;
}
function resolveKnowledgeImageUrl(imageUrl) {
  return normalizeImageUrl(imageUrl) || DEFAULT_KNOWLEDGE_IMAGE_URL;
}
const EDITORIAL_PUBLIC_STATUS = "Published";
const editorialStatuses = ["Draft", "Review", "Published"];
const productStatuses = ["Draft", "Preview", "Available for project inquiry", "Published"];
function isAllowedStatus(value, allowed) {
  return allowed.includes(value);
}
function resolveEditorialStatus(value) {
  const normalized = typeof value === "string" ? value.trim() : "";
  return isAllowedStatus(normalized, editorialStatuses) ? normalized : EDITORIAL_PUBLIC_STATUS;
}
function resolveProductStatus(value) {
  const normalized = typeof value === "string" ? value.trim() : "";
  return isAllowedStatus(normalized, productStatuses) ? normalized : EDITORIAL_PUBLIC_STATUS;
}
function isPublicEditorialStatus(status) {
  return resolveEditorialStatus(status) === EDITORIAL_PUBLIC_STATUS;
}
function isPublicProductStatus(status) {
  return resolveProductStatus(status) !== "Draft";
}
const markdownModules$4 = /* @__PURE__ */ Object.assign({
  "../content/blog/energy-monitoring-iso-50001.md": __vite_glob_0_0$4,
  "../content/blog/how-to-choose-4g-gate-opener-europe.md": __vite_glob_0_1$3,
  "../content/blog/how-to-choose-modbus-mqtt-gateway.md": __vite_glob_0_2$3,
  "../content/blog/how-to-choose-power-cabinet-monitoring-rtu.md": __vite_glob_0_3$3,
  "../content/blog/industrial-iot-trends-2024.md": __vite_glob_0_4$3,
  "../content/blog/when-to-use-wifi-industrial-gateway.md": __vite_glob_0_5$3
});
function createBlogPost(path, markdown) {
  var _a;
  const { metadata, content } = parseFrontmatter(markdown);
  const fallbackId = ((_a = path.split("/").pop()) == null ? void 0 : _a.replace(/\.md$/, "")) || "blog-post";
  return {
    id: readString(metadata.id, fallbackId),
    title: readString(metadata.title, "Untitled Article"),
    excerpt: readString(metadata.excerpt),
    content,
    status: resolveEditorialStatus(metadata.status),
    date: readString(metadata.date),
    author: readString(metadata.author),
    category: readString(metadata.category),
    imageUrl: resolveBlogImageUrl(readOptionalString(metadata.imageUrl)),
    relatedProducts: readStringArray(metadata.relatedProducts),
    relatedResources: readStringArray(metadata.relatedResources),
    order: readNumber(metadata.order)
  };
}
const blogPosts = Object.entries(markdownModules$4).map(([path, markdown]) => createBlogPost(path, markdown)).filter((post) => isPublicEditorialStatus(post.status)).sort((a, b) => a.order - b.order).map(({ order, ...post }) => post);
function BlogList() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 min-h-screen pt-24 pb-20 text-slate-300", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-slate-800 bg-slate-900/70", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.24em] text-blue-400 mb-5", children: "IoTEdges Blog" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6", style: { fontFamily: "var(--font-display)" }, children: "Industrial IoT Blog" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-400 leading-relaxed", children: "Practical articles on product selection, deployment decisions, wiring, connectivity, and buyer-facing guidance for industrial gateways, RTUs, Remote IO, and accessories." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: blogPosts.map((post) => /* @__PURE__ */ jsxs("article", { className: "bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-xl hover:border-blue-500/50 transition-colors flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "h-56 shrink-0", children: /* @__PURE__ */ jsx(Link, { to: `/blog/${post.id}`, className: "block h-full", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: post.imageUrl,
          alt: post.title,
          className: "w-full h-full object-cover",
          referrerPolicy: "no-referrer"
        }
      ) }) }),
      /* @__PURE__ */ jsxs("div", { className: "p-7 flex-1 flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Tag, { className: "w-3.5 h-3.5 text-blue-400" }),
            post.category
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "w-3.5 h-3.5 text-blue-400" }),
            post.date
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(User, { className: "w-3.5 h-3.5 text-blue-400" }),
            post.author
          ] })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors", style: { fontFamily: "var(--font-display)" }, children: /* @__PURE__ */ jsx(Link, { to: `/blog/${post.id}`, children: post.title }) }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-6 leading-relaxed flex-1", children: post.excerpt }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Link, { to: `/blog/${post.id}`, className: "inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors", children: [
          "Read Article ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] }) })
      ] })
    ] }, post.id)) }) })
  ] });
}
const __vite_glob_0_0$3 = "---\nid: 4-20ma-pressure-sensor-rtu-wiring\ntitle: 4-20mA Pressure Sensor Wiring for RTU and Remote IO Projects\nexcerpt: >-\n  How 4-20mA pressure transmitters connect to industrial RTUs and Remote IO\n  modules for pump, tank, water and irrigation monitoring deployments.\ncategory: Sensor Wiring Guide\nprimaryKeyword: 4-20mA pressure sensor RTU wiring\nrelatedProducts:\n  - ier-141-4g-pump-valve-rtu\n  - ieio-100-modbus-remote-io-module\n  - ier-100-ethernet-industrial-rtu\norder: 15\n---\n# 4-20mA Pressure Sensor Wiring for RTU and Remote IO Projects\n\n4-20mA pressure transmitters are common in pump stations, water systems, irrigation cabinets, tanks and industrial process monitoring. An RTU or Remote IO module reads the analog signal, converts it into engineering units and sends the value to MQTT or a dashboard.\n\n## Typical Applications\n\n- pump discharge pressure monitoring\n- pipeline pressure monitoring\n- tank or reservoir level by hydrostatic pressure\n- irrigation system pressure feedback\n- filter differential pressure monitoring\n- booster pump station alarms\n\n## What To Confirm Before Wiring\n\n| Item | Why It Matters |\n| --- | --- |\n| Sensor output | Confirm 4-20mA, 0-10V or other signal type |\n| Power supply | Many transmitters need loop power from 12V or 24V DC |\n| Input type | RTU analog input must support the selected signal |\n| Measurement range | Pressure range must fit the application |\n| Scaling | Dashboard must map current value to engineering units |\n| Cable and shielding | Long analog cables may need shielding and careful grounding |\n\n## Wiring Notes\n\nThe exact wiring depends on whether the transmitter is two-wire, three-wire or four-wire. Do not assume every 4-20mA sensor is wired the same way.\n\nFor deployment planning, document:\n\n- sensor model and pressure range\n- RTU analog input type\n- loop power source\n- cable length\n- scaling formula\n- alarm thresholds\n- calibration or field verification method\n\n## Related Products\n\n- [IER-141 4G Pump and Valve RTU](/products/ier-141-4g-pump-valve-rtu)\n- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)\n- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu)\n- [Industrial IoT Accessories](/accessories)\n\n## FAQ\n\n### Is 4-20mA better than 0-10V?\n\n4-20mA is often preferred for industrial field wiring because it is more suitable for longer cable runs and current-loop measurement, but the best choice depends on the sensor and input module.\n\n### Can a Remote IO module read a pressure sensor?\n\nYes, if the Remote IO analog input supports the sensor signal type and power requirements.\n\n### Should pressure sensors be sold with the RTU?\n\nFor export deployments, it is useful to offer recommended pressure sensor options or at least a clear wiring and specification checklist.\n";
const __vite_glob_0_1$2 = "---\nid: 4g-antenna-industrial-rtu\ntitle: How to Choose a 4G Antenna for Industrial RTU and Gate Opener Projects\nexcerpt: >-\n  Practical 4G antenna selection notes for industrial RTUs, 4G gate openers,\n  cabinet installations, SIM/APN setup and weak-signal remote sites.\ncategory: Accessory Guide\nprimaryKeyword: 4G antenna for industrial RTU\nrelatedProducts:\n  - ier-140-4g-remote-relay-rtu\n  - ier-141-4g-pump-valve-rtu\n  - ier-142-4g-power-cabinet-rtu\n  - ieac-140-4g-gsm-gate-opener\norder: 11\n---\n# How to Choose a 4G Antenna for Industrial RTU and Gate Opener Projects\n\n4G RTUs and 4G gate openers often work in metal cabinets, pump rooms, gate pillars, rural sites, and utility enclosures. In these deployments, the antenna is not a small detail. A weak or poorly placed antenna can cause unstable MQTT connections, delayed alarms, failed remote commands, and difficult commissioning.\n\nCheck these antenna points before shipping or installing a 4G industrial IoT device.\n\n## When an External Antenna Is Recommended\n\nUse an external antenna when:\n\n- the RTU or controller is installed inside a metal cabinet\n- the site is rural, underground, behind thick walls or near electrical noise\n- the device must keep stable MQTT or dashboard connectivity\n- the gate opener is inside a roadside or outdoor access-control box\n- the installer needs flexible placement away from the controller\n\nSmall internal antennas may work for plastic enclosures and strong-signal indoor locations, but cabinet and outdoor deployments usually need more careful RF planning.\n\n## Key Selection Factors\n\n| Item | Why It Matters |\n| --- | --- |\n| LTE band support | Must match the module, country and operator |\n| Connector type | SMA is common, but the connector should match the device design |\n| Cable length | Long cable can reduce signal strength |\n| Mounting method | Magnetic, adhesive, screw mount or panel mount should match the cabinet design |\n| Outdoor rating | Outdoor antennas need weather-resistant materials and mounting |\n| Placement | Antenna should avoid being blocked by metal, concrete, or electrical equipment |\n\n## SIM, APN and Operator Checks\n\nA good antenna cannot solve an unsuitable SIM or operator plan. Before blaming the device, check:\n\n- the SIM is active and supports data service\n- APN settings are correct\n- local 4G coverage is available at the installation point\n- roaming SIM behavior is allowed for the target country\n- private APN or fixed IP requirements are known before deployment\n\n## Related Products\n\n- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)\n- [IER-141 4G Pump and Valve RTU](/products/ier-141-4g-pump-valve-rtu)\n- [IER-142 4G Power Cabinet RTU](/products/ier-142-4g-power-cabinet-rtu)\n- [IEAC-140 4G GSM Gate Opener](/products/ieac-140-4g-gsm-gate-opener)\n- [Industrial IoT Accessories](/accessories)\n\n## FAQ\n\n### Can I use any 4G antenna?\n\nNo. The antenna should match the LTE bands, connector, mounting method, and installation environment.\n\n### Is antenna gain always better?\n\nNot always. Placement, cable loss, matching and local coverage are often more important than only looking at gain.\n\n### Should I include antenna notes in a quotation?\n\nYes. For export deployments, antenna type, cable length, connector, and mounting method should be included in the BOM.\n";
const __vite_glob_0_2$2 = "---\nid: 4g-gsm-gate-opener-europe\ntitle: GSM vs 4G Gate Opener for Europe\nexcerpt: >-\n  A practical guide for European gate opener projects comparing legacy GSM\n  access control, 4G LTE remote access controllers, SIM selection, carrier risk\n  and deployment considerations.\ncategory: Access Control Guide\nprimaryKeyword: GSM vs 4G gate opener Europe\nrelatedProducts:\n  - ieac-140-4g-gsm-gate-opener\norder: 4\n---\n# GSM vs 4G Gate Opener for Europe\n\nGate openers, door controllers, and remote access panels have historically used GSM modules because a phone call or SMS trigger is simple for installers and end users. For new European access-control projects, a 4G-first design is usually the better direction.\n\n## Why GSM Still Appears In Search\n\nMany buyers still search for:\n\n- GSM gate opener\n- GSM door opener\n- GSM relay controller\n- GSM intercom\n- SIM gate opener\n\nThese keywords often describe the job to be done rather than the ideal network technology. The buyer wants to open a gate remotely, authorize users, trigger a relay, receive status, or retrofit an existing access-control cabinet.\n\n## Why 4G Is Safer For New European Products\n\nEuropean mobile operators have been retiring older 2G and 3G networks at different speeds. Some markets keep 2G longer for M2M and IoT devices, while others prioritize newer networks. Because this varies by country and operator, a new product for Europe should normally be designed around 4G LTE first.\n\nThis lets the page answer GSM gate opener search intent while still presenting the hardware as a 4G remote access controller unless GSM fallback is specifically required for the target market.\n\n## Gate Opener Requirements\n\nBefore committing to a country rollout, confirm:\n\n- LTE bands required for the target European countries.\n- SIM and APN behavior with common local operators.\n- Whether 2G/GSM fallback is needed and available.\n- Relay output rating for the gate, lock, barrier or access panel.\n- Digital input behavior for gate status, door contact or alarm signals.\n- Antenna design for metal cabinets or outdoor installations.\n- CE/RED and other regulatory requirements.\n- Access method: authorized call, SMS, app, dashboard, API or intercom workflow.\n\n## 4G Intercom And Voice Claims\n\n4G intercom is a useful commercial keyword, but it can mean different things:\n\n- remote gate relay control from an intercom panel\n- voice call access over a cellular module\n- SIP or VoLTE intercom behavior\n- app-based visitor access\n- dashboard-based access approval\n\nDo not present SIP, VoLTE, voice quality, audio intercom, emergency calling, or certified access behavior as baseline features unless the hardware, firmware, SIM/operator behavior, and regulatory requirements support them.\n\n## Product Fit\n\nThe [IEAC-140 4G GSM Gate Opener](/products/ieac-140-4g-gsm-gate-opener) fits this product direction. It is positioned as a Europe-focused 4G remote access controller with country-specific 2G availability.\n\n## Related Product Terms\n\nRelated terms:\n\n- 4G gate opener\n- GSM gate opener replacement\n- 4G intercom access controller\n- remote access controller\n- RTU door controller\n- cellular relay controller\n- SIM-based gate access controller\n\n## Deployment Notes\n\nCountry compatibility, LTE bands, GSM fallback, relay ratings, enclosure rating, antenna performance, CE/RED status, and intercom behavior should match the target market and deployment environment.\n";
const __vite_glob_0_3$2 = "---\nid: 4g-lte-cat1\ntitle: 4G LTE Cat1 for Industrial IoT RTUs\nexcerpt: >-\n  A practical guide to LTE Cat1 for remote RTUs, pump controllers, power\n  cabinets, MQTT telemetry and field devices that need cellular connectivity.\ncategory: Connectivity Guide\nprimaryKeyword: 4G LTE Cat1 RTU\nrelatedProducts:\n  - ier-140-4g-remote-relay-rtu\n  - ier-141-4g-pump-valve-rtu\n  - ier-142-4g-power-cabinet-rtu\n  - ieac-140-4g-gsm-gate-opener\norder: 5\n---\n# 4G LTE Cat1 for Industrial IoT RTUs\n\n4G LTE Cat1 is a common cellular option for industrial IoT devices that need reliable remote connectivity without the cost and complexity of high-bandwidth routers. It is suitable for RTUs, relay controllers, pump stations, power cabinets, gate controllers and remote monitoring devices that send small amounts of data to MQTT or a web dashboard.\n\n## Why LTE Cat1 Fits Remote RTUs\n\nMost RTU deployments do not need video streaming or high data rates. They need stable connection, low enough latency for control commands, support for SIM/APN configuration, and enough bandwidth for telemetry, alarms, and OTA updates.\n\nLTE Cat1 is a practical fit for:\n\n- remote pump and valve control\n- power cabinet alarm monitoring\n- gate and door relay control\n- generator status monitoring\n- agricultural irrigation equipment\n- remote Modbus data collection\n\n## What To Confirm Before Deployment\n\nBefore selecting a 4G RTU, check:\n\n- country and carrier\n- LTE bands supported by the module\n- SIM type, APN and private network requirements\n- antenna location and cabinet material\n- expected data volume and reporting interval\n- remote command and alarm workflow\n- fallback behavior when the network is offline\n\n## LTE Cat1 vs WiFi vs LoRa\n\n| Connectivity | Best Fit | Notes |\n| --- | --- | --- |\n| LTE Cat1 | remote sites without local internet | Good for RTUs, cabinets and pump stations |\n| WiFi | indoor sites with reliable WLAN | Useful for equipment rooms and factories |\n| LoRa / LoRaWAN | low-power long-range sensor networks | Better for low-data sensor telemetry than relay-heavy control |\n| Ethernet | cabinets with wired LAN | Stable and simple when LAN is available |\n\n## LTE Cat1 And MQTT\n\nMQTT works well over LTE Cat1 because it can publish compact telemetry and receive control commands using a persistent connection. For RTU deployments, define:\n\n- heartbeat topic\n- DI/DO status topic\n- Modbus value topic\n- alarm event topic\n- command topic\n- acknowledgement topic\n\n## Related IoTEdges Products\n\n- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)\n- [IER-141 4G Pump & Valve RTU](/products/ier-141-4g-pump-valve-rtu)\n- [IER-142 4G Power Cabinet RTU](/products/ier-142-4g-power-cabinet-rtu)\n- [IEAC-140 4G GSM Gate Opener](/products/ieac-140-4g-gsm-gate-opener)\n\n## Selection Notes\n\nLTE Cat1 is a strong fit when the site needs cellular connectivity, remote configuration, alarm push, MQTT telemetry, or remote relay control. For sites with stable wired LAN, an Ethernet model may be simpler. For indoor equipment rooms with existing wireless infrastructure, a WiFi model may be suitable.\n";
const __vite_glob_0_4$2 = "---\nid: analog-input\ntitle: Analog Input for 4-20mA and 0-10V Industrial Sensors\nexcerpt: >-\n  Understand analog input in RTUs and Remote IO modules for pressure, level,\n  flow, temperature and current signal monitoring.\ncategory: IO Guide\nprimaryKeyword: analog input RTU\nrelatedProducts:\n  - ier-100-ethernet-industrial-rtu\n  - ier-120-wifi-remote-monitoring-rtu\n  - ier-141-4g-pump-valve-rtu\n  - ieio-100-modbus-remote-io-module\norder: 8\n---\n# Analog Input for 4-20mA and 0-10V Industrial Sensors\n\nAnalog input is used when the value is not simply on or off. Many industrial sensors output a continuous signal such as 4-20mA or 0-10V. RTUs and Remote IO modules read these signals and convert them into engineering values for dashboards, alarms and reports.\n\n## Common Analog Signals\n\nAnalog input is used for:\n\n- pressure transmitters\n- tank level sensors\n- flow transmitters\n- temperature transmitters\n- humidity transmitters\n- current transducers\n- voltage transducers\n\n## 4-20mA vs 0-10V\n\n| Signal Type | Common Use | Notes |\n| --- | --- | --- |\n| 4-20mA | industrial transmitters, long cable runs | Better noise immunity and fault detection |\n| 0-10V | short-distance control and building signals | Easier but more sensitive to voltage drop and noise |\n| 0-5V | sensor modules and local electronics | Less common in industrial cabinets |\n\n## What The RTU Needs To Know\n\nTo display analog values correctly, define:\n\n- signal type\n- scaling range\n- engineering unit\n- sensor power requirement\n- alarm threshold\n- filtering or averaging requirement\n- wiring and grounding method\n\nExample: a pressure transmitter may output 4mA at 0 bar and 20mA at 10 bar. The RTU or platform must apply that scaling before the dashboard can show useful pressure values.\n\n## Analog Input In Pump And Water Projects\n\nAnalog inputs are useful in pump and valve applications because they can monitor pressure, level, or flow. This is why IER-141 includes a 2AI profile, while simple relay applications can use IER-140.\n\n## Related IoTEdges Products\n\n- [IER-141 4G Pump & Valve RTU](/products/ier-141-4g-pump-valve-rtu)\n- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu)\n- [IER-120 WiFi Remote Monitoring RTU](/products/ier-120-wifi-remote-monitoring-rtu)\n- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)\n";
const __vite_glob_0_5$2 = "---\nid: digital-io\ntitle: Digital Input and Digital Output in RTU and Remote IO Devices\nexcerpt: >-\n  Learn how DI and DO are used for dry contacts, alarms, relay control, pump\n  feedback, valve status, cabinet monitoring and remote RTU deployments.\ncategory: IO Guide\nprimaryKeyword: digital input digital output RTU\nrelatedProducts:\n  - ier-100-ethernet-industrial-rtu\n  - ier-140-4g-remote-relay-rtu\n  - ier-141-4g-pump-valve-rtu\n  - ier-142-4g-power-cabinet-rtu\n  - ieio-100-modbus-remote-io-module\norder: 6\n---\n# Digital Input and Digital Output in RTU and Remote IO Devices\n\nDigital input and digital output are the basic building blocks of many industrial monitoring and control deployments. A digital input reads a binary state. A digital output drives a relay, signal or control circuit.\n\n## What Is Digital Input?\n\nDigital input is used to read on/off status. Common examples include:\n\n- pump running feedback\n- pump fault contact\n- valve open or closed status\n- cabinet door contact\n- breaker auxiliary contact\n- float switch or level switch\n- generator alarm contact\n- gate or door position signal\n\n## What Is Digital Output?\n\nDigital output is used to send an on/off control signal. Depending on the device design, it may be transistor output, relay output or dry contact output.\n\nCommon uses include:\n\n- pump start or stop signal\n- valve open or close command\n- remote reset output\n- alarm horn or lamp output\n- gate trigger relay\n- street light contactor control\n\n## DI and DO in Remote RTUs\n\nIn a cellular RTU, DI and DO allow remote equipment to be monitored and controlled from a dashboard or MQTT platform. For example:\n\n- IER-140 uses a compact 2DI + 2DO profile for simple relay deployments.\n- IER-141 expands to 4DI + 4DO for pump and valve control.\n- IER-142 uses an 8DI + 4DO profile for cabinet alarm monitoring.\n\n## Key Engineering Questions\n\nBefore wiring DI and DO, check:\n\n- dry contact or wet contact input mode\n- input voltage and isolation\n- pulse counting requirement\n- relay contact rating\n- load type and interposing relay requirement\n- fail-safe behavior when communication is lost\n- manual override and local control requirements\n\n## Related IoTEdges Products\n\n- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)\n- [IER-141 4G Pump & Valve RTU](/products/ier-141-4g-pump-valve-rtu)\n- [IER-142 4G Power Cabinet RTU](/products/ier-142-4g-power-cabinet-rtu)\n- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)\n\n## Practical Rule\n\nUse DI for status and alarms. Use DO or relay outputs for control signals. For motors, pumps, and high-power equipment, the RTU should normally control an external contactor or control circuit rather than switching the load directly.\n";
const __vite_glob_0_6$1 = "---\nid: din-rail-power-supply-industrial-iot\ntitle: DIN Rail Power Supply Guide for Industrial IoT Gateways and RTUs\nexcerpt: >-\n  How to plan 12V and 24V DC power supplies, cabinet wiring, fuses and backup\n  power for industrial IoT gateways, RTUs and Remote IO modules.\ncategory: Accessory Guide\nprimaryKeyword: DIN rail power supply industrial IoT\nrelatedProducts:\n  - ieg-100-ethernet-industrial-iot-gateway\n  - ier-100-ethernet-industrial-rtu\n  - ier-140-4g-remote-relay-rtu\n  - ieio-100-modbus-remote-io-module\norder: 13\n---\n# DIN Rail Power Supply Guide for Industrial IoT Gateways and RTUs\n\nIndustrial IoT gateways, RTUs, and Remote IO modules usually need a stable low-voltage DC supply inside a cabinet. The power accessory plan should be defined together with the main device, because field failures are often caused by unstable power, poor grounding, missing protection, or cabinet wiring errors.\n\n## Common Power Planning Questions\n\nBefore selecting a power supply, check:\n\n- device input voltage range\n- total current requirement for gateway, RTU, sensors and relays\n- whether sensors need separate loop power\n- cabinet AC input voltage and local electrical standards\n- fuse, breaker and terminal distribution plan\n- backup power or UPS requirement\n\n## 12V vs 24V DC\n\n| Voltage | Common Use |\n| --- | --- |\n| 12V DC | Small controllers, access devices, some communication modules |\n| 24V DC | Industrial cabinets, sensors, RTUs, Remote IO and control panels |\n\nThe final voltage must match the device datasheet and cabinet design. Do not assume every accessory can share the same supply without reviewing current draw and isolation needs.\n\n## Useful Cabinet Accessories\n\n- DIN rail power supply\n- fuse holder or miniature breaker\n- terminal distribution block\n- cable ferrules and labels\n- surge protection where required\n- small DC UPS or backup battery for critical remote monitoring\n\n## Related Products\n\n- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)\n- [IEG-100 Ethernet Industrial IoT Gateway](/products/ieg-100-ethernet-industrial-iot-gateway)\n- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)\n- [Industrial IoT Accessories](/accessories)\n\n## FAQ\n\n### Can one power supply feed the RTU and sensors?\n\nSometimes yes, but current capacity, sensor loop power, noise, grounding, and isolation should be checked first.\n\n### Should I include a UPS?\n\nFor remote alarm, gate access, water, and power cabinet monitoring, backup power can be useful when the site requires outage reporting.\n\n### Is DIN rail mounting required?\n\nNot always, but DIN rail power supplies and terminals are common in industrial cabinets and easier for installers to service.\n";
const __vite_glob_0_7$1 = "---\nid: dry-contact-relay-wiring-gate-opener\ntitle: Dry Contact Relay Wiring for 4G Gate Openers and Remote Access Controllers\nexcerpt: >-\n  A practical guide to dry-contact relay wiring for 4G gate openers, access\n  controllers, exit buttons, door contacts and existing gate motor inputs.\ncategory: Wiring Guide\nprimaryKeyword: dry contact relay wiring gate opener\nrelatedProducts:\n  - ieac-140-4g-gsm-gate-opener\n  - ier-140-4g-remote-relay-rtu\norder: 14\n---\n# Dry Contact Relay Wiring for 4G Gate Openers and Remote Access Controllers\n\nMost 4G gate openers and remote access controllers do not power the gate motor directly. Instead, they trigger an existing gate controller input through a dry-contact relay. This is the normal approach for integrating a cellular controller with an existing gate motor, barrier, garage door or access-control panel.\n\n## Typical Wiring Concept\n\n| Existing Gate Controller Terminal | Access Controller Connection |\n| --- | --- |\n| Push button input | Relay COM and NO |\n| Open / step-by-step input | Relay COM and NO |\n| Gate status contact | Digital input |\n| Exit button | Digital input or local parallel wiring |\n| Alarm or tamper contact | Digital input |\n\nThe exact terminal names vary by gate motor brand and controller model. Always follow the gate controller manual.\n\n## Normally Open vs Normally Closed\n\nMost gate trigger inputs use a normally-open dry contact that closes briefly to simulate a push button. Some access or alarm circuits may use normally-closed behavior. Before wiring, confirm:\n\n- whether the input expects NO or NC contact\n- required pulse duration\n- relay contact rating\n- whether the circuit is dry contact or powered input\n- whether local safety devices remain independent\n\n## Accessories Commonly Used\n\n- relay terminal wiring kit\n- gate status magnetic contact\n- exit button\n- weatherproof enclosure\n- 4G external antenna\n- DIN rail power supply\n- cable glands and labels\n\n## Related Products\n\n- [IEAC-140 4G GSM Gate Opener](/products/ieac-140-4g-gsm-gate-opener)\n- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)\n- [Industrial IoT Accessories](/accessories)\n\n## FAQ\n\n### Can a 4G gate opener power the gate motor?\n\nNo. It should trigger the existing gate controller through a suitable dry-contact input. Motor power and safety control remain with the gate controller.\n\n### Can the same relay control a barrier or garage door?\n\nOften yes, if the equipment provides a compatible external trigger input. The wiring method must be confirmed from the equipment manual.\n\n### Is dry-contact wiring safe?\n\nIt is a common integration method, but safety circuits, photocells, emergency stops and local controls must remain independent and compliant with the project requirements.\n";
const __vite_glob_0_8$1 = "---\nid: modbus\ntitle: Modbus for Industrial IoT Gateways and RTUs\nexcerpt: >-\n  A practical explanation of Modbus RTU, Modbus TCP, RS485 wiring, polling,\n  register maps, and how Modbus data connects to IoT gateways.\ncategory: Protocol Guide\nprimaryKeyword: Modbus\nrelatedProducts:\n  - ieg-100-ethernet-industrial-iot-gateway\n  - ier-100-ethernet-industrial-rtu\n  - ieio-100-modbus-remote-io-module\norder: 1\n---\n# Modbus for Industrial IoT Gateways and RTUs\n\nModbus is one of the most common industrial communication protocols used by energy meters, PLCs, inverters, VFDs, sensors, and Remote IO modules. For many industrial IoT deployments, the first architecture question is simple: how do we read Modbus data reliably and publish it to a dashboard?\n\n## Modbus RTU vs Modbus TCP\n\n**Modbus RTU** usually runs over RS485. It is common in cabinets, pump stations, power meter networks, solar inverter chains, and distributed IO systems.\n\n**Modbus TCP** runs over Ethernet. It is common when PLCs, gateways, meters, or controllers already connect to a local LAN.\n\nAn industrial IoT gateway often needs to collect data from both Modbus RTU and Modbus TCP devices, normalize the values, and publish selected telemetry to MQTT or another platform interface.\n\n## What a Gateway Needs to Know\n\nBefore selecting a Modbus gateway, define:\n\n- Device protocol: Modbus RTU, Modbus TCP, or both.\n- Serial wiring: RS485 bus layout, baud rate, parity, and device address.\n- Register map: function codes, register addresses, data types, scaling, and units.\n- Polling interval: how often each value needs to be read.\n- Data destination: local dashboard, MQTT broker, cloud platform, or SCADA system.\n\nThe [IEG-100 Ethernet Industrial IoT Gateway](/products/ieg-100-ethernet-industrial-iot-gateway) fits wired Modbus data collection and MQTT telemetry.\n\n## Modbus and Remote IO\n\nRemote IO modules often expose digital inputs, digital outputs, analog inputs, or analog outputs through Modbus registers. This makes them useful when a deployment needs to expand signals without replacing the main controller.\n\nThe [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module) fits wired Modbus Remote IO expansion in machine, utility, and cabinet deployments.\n\n## Modbus and RTUs\n\nAn RTU usually combines local IO with communication capability. It can read local DI/DO/AI signals, communicate with Modbus devices, and support remote monitoring architectures.\n\nThe [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu) fits an Ethernet RTU path with local IO and Modbus connectivity.\n\n## Deployment Notes\n\nDevice count, polling interval, register mapping, and environmental ratings should always be checked against the released datasheet of the selected device. Keep the focus on architecture and selection logic, then link into the most relevant product pages.\n";
const __vite_glob_0_9$1 = "---\nid: mqtt-downlink-control\ntitle: MQTT Downlink Control for Industrial RTUs\nexcerpt: >-\n  Learn how MQTT downlink commands can control relays, update schedules and\n  configure industrial RTUs while keeping acknowledgement and safety boundaries\n  clear.\ncategory: MQTT Guide\nprimaryKeyword: MQTT downlink control\nrelatedProducts:\n  - ier-140-4g-remote-relay-rtu\n  - ier-141-4g-pump-valve-rtu\n  - ier-142-4g-power-cabinet-rtu\norder: 10\n---\n# MQTT Downlink Control for Industrial RTUs\n\nMQTT is often used for telemetry upload, but industrial RTUs may also need downlink commands. Downlink means the platform sends a command to the device, such as relay on/off, pulse output, schedule update, or configuration change.\n\n## Uplink vs Downlink\n\n| Direction | Meaning | Example |\n| --- | --- | --- |\n| Uplink | device publishes data to platform | DI status, Modbus value, alarm event |\n| Downlink | platform sends command to device | relay command, schedule update, configuration |\n\nFor remote relay RTUs, both directions matter. The device must publish status, but it also needs to receive control commands in a controlled way.\n\n## Typical MQTT Downlink Commands\n\n- turn relay on or off\n- pulse relay for a fixed duration\n- update irrigation schedule\n- change alarm threshold\n- request device status\n- restart communication module\n- update reporting interval\n\n## Command Acknowledgement\n\nEvery control command should have an acknowledgement strategy. A practical command payload should include:\n\n- command ID\n- target device ID\n- target channel\n- action\n- timestamp\n- timeout\n- user or source reference\n\nThe RTU should publish an acknowledgement that shows whether the command was accepted, rejected, executed or timed out.\n\n## Relay Feedback\n\nIf the site needs confirmation that the field equipment actually changed state, use feedback:\n\n- DI feedback from contactor or valve\n- Modbus status from VFD or controller\n- analog value change such as pressure or flow\n- alarm state after command execution\n\n## Safety Boundary\n\nMQTT downlink should not replace local safety logic. Emergency stop, motor protection, access safety and electrical protection should remain local and independent.\n\n## Related IoTEdges Products\n\n- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)\n- [IER-141 4G Pump & Valve RTU](/products/ier-141-4g-pump-valve-rtu)\n- [IER-142 4G Power Cabinet RTU](/products/ier-142-4g-power-cabinet-rtu)\n";
const __vite_glob_0_10 = "---\nid: mqtt\ntitle: MQTT in Industrial IoT Monitoring\nexcerpt: >-\n  Learn how MQTT fits industrial IoT gateways, telemetry publishing, topic\n  design, payload structure, and industrial monitoring architecture.\ncategory: Protocol Guide\nprimaryKeyword: MQTT\nrelatedProducts:\n  - ieg-100-ethernet-industrial-iot-gateway\n  - ieg-120-wifi-industrial-iot-gateway\norder: 2\n---\n# MQTT in Industrial IoT Monitoring\n\nMQTT is widely used in industrial IoT because it provides a lightweight publish/subscribe model for sending telemetry from gateways to dashboards, brokers, and cloud platforms.\n\nIn a typical IoTEdges architecture, a gateway reads field data from Modbus devices, maps the values into a telemetry structure, and publishes the selected data to an MQTT broker.\n\n## Why MQTT Works Well for Gateways\n\nMQTT is useful for remote monitoring because:\n\n- Gateways can publish telemetry without every dashboard directly polling field devices.\n- Topic structure can separate sites, devices, measurement types, and events.\n- Payloads can be designed for dashboards, alarms, and data storage.\n- Reconnect behavior can be handled at the gateway and broker layer to improve system resilience.\n\nFor IoTEdges gateway pages, focus on Modbus collection and MQTT telemetry first. Describe certificate workflows, offline buffering, or exact throughput only when they are confirmed for the selected model and deployment design.\n\n## MQTT Topic Planning\n\nA practical topic structure should be predictable and easy to maintain. Example patterns include:\n\n| Topic Level | Example |\n| --- | --- |\n| Site | `factory-a` |\n| Device | `meter-01` |\n| Data Type | `telemetry` |\n| Event Type | `alarm` |\n\nThe exact topic format should match the dashboard, broker, and firmware implementation used in the deployment. Keep topic structures consistent across devices and sites.\n\n## Ethernet and WiFi Gateway Paths\n\nThe [IEG-100 Ethernet Industrial IoT Gateway](/products/ieg-100-ethernet-industrial-iot-gateway) is the best fit for wired LAN deployments.\n\nThe [IEG-120 WiFi Industrial IoT Gateway](/products/ieg-120-wifi-industrial-iot-gateway) is the WiFi model for indoor wireless LAN deployments.\n\n## MQTT and Security\n\nMQTT security depends on the full deployment workflow, not just the protocol name. Device identity, broker authentication, credential rotation, TLS configuration, firewall rules, and network segmentation must be implemented and tested as a system.\n\nPublic product pages should describe security capabilities according to the released firmware behavior, broker onboarding flow, and operating procedures.\n";
const __vite_glob_0_11 = '---\nid: pump-control-rtu\ntitle: "Pump Control RTU: Signals, Relays, Pressure Inputs and Remote Monitoring"\nexcerpt: A practical guide to pump control RTU architecture, including DI feedback, relay outputs, pressure transmitters, RS485 Modbus devices and remote alarms.\ncategory: Application Guide\nprimaryKeyword: pump control RTU\nrelatedProducts:\n  - ier-141-4g-pump-valve-rtu\n  - ier-140-4g-remote-relay-rtu\n  - ier-100-ethernet-industrial-rtu\norder: 11\n---\n\n# Pump Control RTU: Signals, Relays, Pressure Inputs and Remote Monitoring\n\nA pump control RTU is used when a project needs more than simple telemetry. In addition to remote visibility, the site may need run and fault feedback, relay-style start and stop control, pressure or level inputs, Modbus integration with a VFD, and alarm handling for abnormal conditions.\n\n## Typical Pump RTU Signals\n\n| Signal Type | Typical Source | Why It Matters |\n| --- | --- | --- |\n| Digital input | pump run, pump fault, float switch, local/remote selector | confirm operating state and alarm conditions |\n| Digital output | start, stop, valve open, valve close, alarm horn | perform relay-style control through the proper interface |\n| Analog input | pressure, level, flow or current transmitter | track process conditions and thresholds |\n| RS485 Modbus | VFD, energy meter, flow meter or local controller | add richer telemetry beyond dry contacts |\n\n## When A Basic Relay RTU Is Enough\n\nUse a compact relay RTU when the job is mostly:\n\n- one or two pump start-stop points\n- a few status feedback signals\n- simple alarms\n- basic remote switching\n\nThe [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu) is a good fit for this compact architecture.\n\n## When You Need A Pump And Valve RTU\n\nUse a larger RTU when the site also needs:\n\n- more digital inputs and outputs\n- pressure or level transmitters\n- scheduled control\n- pump and valve combinations\n- VFD or Modbus meter integration\n\nThe [IER-141 4G Pump & Valve RTU](/products/ier-141-4g-pump-valve-rtu) fits these projects.\n\n## Control Architecture Matters\n\nAn RTU should not be treated as a direct motor-power switch. In most pump projects, the RTU output works through the correct contactor, control relay or control circuit. Local motor protection, overload protection and fail-safe logic remain part of the electrical design.\n\n## Typical Remote Monitoring Workflow\n\n1. Read pump run, fault and tank or pressure status.\n2. Poll VFD or meter data over RS485 if required.\n3. Publish telemetry to MQTT or a dashboard.\n4. Trigger alarms on fault, offline status or process thresholds.\n5. Apply controlled remote commands or schedules where the site design allows it.\n\n## Related Products\n\n- [IER-141 4G Pump & Valve RTU](/products/ier-141-4g-pump-valve-rtu): multi-signal 4G RTU for pumps, valves, and irrigation cabinets\n- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu): compact relay RTU for simpler control points\n- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu): wired RTU for LAN-connected cabinets and local SCADA integration\n\n## Final Choice\n\nIf the project only needs simple remote switching, use a compact relay RTU. If it needs pressure, level, VFD data, multiple relays, and more field feedback, use a pump-control RTU.\n';
const __vite_glob_0_12 = "\uFEFF---\nid: relay-output-control\ntitle: Relay Output Control for Pumps, Gates, Valves and Cabinets\nexcerpt: A guide to relay output control in industrial RTUs, including remote relay triggering, MQTT downlink, scheduled control and safety boundaries.\ncategory: Control Guide\nprimaryKeyword: relay output control RTU\nrelatedProducts: ier-140-4g-remote-relay-rtu,ier-141-4g-pump-valve-rtu,ier-142-4g-power-cabinet-rtu,ieac-140-4g-gsm-gate-opener\norder: 7\n---\n\n# Relay Output Control for Pumps, Gates, Valves and Cabinets\n\nRelay output control is one of the most common reasons buyers search for a remote relay RTU. A relay output can trigger a control circuit, open a gate, start a pump through a contactor, switch a valve command, or reset a remote cabinet alarm.\n\n## Common Relay Control Applications\n\n- pump start and stop\n- valve open and close\n- gate or barrier trigger\n- cabinet reset output\n- generator auxiliary signal\n- street light contactor control\n- alarm horn or beacon output\n\n## Remote Relay Control Architecture\n\nA typical architecture includes:\n\n1. Field device or control circuit connected to the relay output.\n2. RTU connected through 4G, Ethernet or WiFi.\n3. Dashboard, MQTT broker or application sends a command.\n4. RTU drives the relay output.\n5. DI feedback confirms the result when available.\n\n## MQTT Downlink And Relay Control\n\nFor MQTT-based control, define:\n\n- command topic\n- device ID\n- relay channel\n- desired state or pulse duration\n- command ID\n- acknowledgement topic\n- timeout and retry behavior\n\nDo not rely only on the command message. Use feedback from DI, Modbus, or equipment status whenever the project requires confirmation.\n\n## Scheduled Control\n\nRelay RTUs often support schedule-based behavior, such as irrigation cycles or lighting schedules. Confirm:\n\n- timezone\n- time synchronization\n- holiday or seasonal schedule requirements\n- behavior after power loss\n- manual override rules\n- communication-loss behavior\n\n## Safety Boundary\n\nRemote relay control is not the same as safety control. Motor protection, emergency stop, overload protection, fire safety, access safety, and interlock circuits should be handled by certified local systems.\n\n## Related IoTEdges Products\n\n- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)\n- [IER-141 4G Pump & Valve RTU](/products/ier-141-4g-pump-valve-rtu)\n- [IER-142 4G Power Cabinet RTU](/products/ier-142-4g-power-cabinet-rtu)\n- [IEAC-140 4G GSM Gate Opener](/products/ieac-140-4g-gsm-gate-opener)\n\r\n";
const __vite_glob_0_13 = "---\nid: rs485-cable-shielding-guide\ntitle: RS485 Cable and Shielding Guide for Modbus RTU Installations\nexcerpt: A practical accessory guide for RS485 cable, shielding, grounding, termination and surge protection in Modbus RTU gateway, RTU and Remote IO deployments.\ncategory: Wiring Guide\nprimaryKeyword: RS485 cable shielding guide\nrelatedProducts:\n  - ieg-100-ethernet-industrial-iot-gateway\n  - ier-100-ethernet-industrial-rtu\n  - ieio-100-modbus-remote-io-module\norder: 12\n---\n\n# RS485 Cable and Shielding Guide for Modbus RTU Installations\n\nRS485 wiring quality directly affects Modbus RTU reliability. Many gateway problems that look like firmware issues are actually caused by poor cable selection, inconsistent A/B wiring, excessive stubs, missing termination or grounding mistakes.\n\nThis page covers accessory and installation decisions for RS485-based industrial IoT deployments.\n\n## Recommended Cable Characteristics\n\n| Cable Feature | Practical Recommendation |\n| --- | --- |\n| Pair type | Twisted pair for differential RS485 signals |\n| Shielding | Shielded cable is recommended in industrial cabinets or noisy sites |\n| Conductor size | Choose based on cabinet distance, terminal type and local standards |\n| Jacket | Match indoor, outdoor, oil-resistant or UV requirements |\n| Labeling | Mark A/B, shield and device address clearly during installation |\n\n## Shielding and Grounding Notes\n\nShielding should reduce noise without creating new grounding problems. In practice:\n\n- keep RS485 cable away from motor power cables and contactor wiring\n- avoid long uncontrolled stubs from the main bus\n- review shield grounding method based on the site electrical design\n- use surge protection where outdoor cable, long distance or lightning risk exists\n- document baud rate, parity and slave addresses together with the wiring diagram\n\n## Common Accessories\n\n- shielded RS485 twisted-pair cable\n- pluggable terminal blocks\n- RS485 surge protector\n- RS485 isolation module\n- end-of-line termination resistor\n- cabinet labels and wiring ferrules\n\n## Related Products\n\n- [IEG-100 Ethernet Industrial IoT Gateway](/products/ieg-100-ethernet-industrial-iot-gateway)\n- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu)\n- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)\n- [Industrial IoT Accessories](/accessories)\n\n## FAQ\n\n### Does every RS485 network need termination?\n\nTermination depends on bus length, baud rate, device design, and site wiring. Follow device manuals and site engineering requirements.\n\n### Can I use ordinary alarm cable for RS485?\n\nIt may work in short, quiet installations, but industrial Modbus RTU deployments should use suitable twisted-pair wiring and follow shielding guidance.\n\n### Should RS485 accessories be included in export quotations?\n\nYes. Cable, terminal blocks, labels, surge protection and isolation can prevent many commissioning problems.\n";
const __vite_glob_0_14 = "\uFEFF---\nid: rs485\ntitle: RS485 Wiring for Modbus RTU Devices\nexcerpt: A practical RS485 guide for industrial Modbus networks, including bus layout, addressing, baud rate, termination, and gateway selection.\ncategory: Wiring Guide\nprimaryKeyword: RS485\nrelatedProducts: ieg-100-ethernet-industrial-iot-gateway,ier-100-ethernet-industrial-rtu,ieio-100-modbus-remote-io-module\norder: 3\n---\n\n# RS485 Wiring for Modbus RTU Devices\n\nRS485 is the physical communication layer used by many Modbus RTU devices. It is common in energy meters, VFDs, water instruments, solar inverters, and Remote IO modules.\n\nFor industrial IoT deployments, RS485 details matter because wiring quality directly affects whether a gateway can read Modbus data reliably.\n\n## Practical RS485 Checklist\n\nBefore connecting a gateway or RTU, check:\n\n- All devices use the same baud rate, parity, stop bits, and Modbus address plan.\n- The RS485 pair is wired consistently across the bus.\n- The bus topology is kept clean, with unnecessary stubs avoided.\n- Termination and biasing follow the final hardware and site requirements.\n- Shielding and grounding match the cabinet environment.\n\nDo not use a generic RS485 article as a final wiring standard. The actual wiring method should follow the device datasheet, installation manual, and site electrical rules.\n\n## RS485 and Industrial IoT Gateways\n\nAn industrial gateway can poll RS485 Modbus RTU devices, convert selected registers into normalized telemetry, and publish the data to MQTT or a dashboard.\n\nThe [IEG-100 Ethernet Industrial IoT Gateway](/products/ieg-100-ethernet-industrial-iot-gateway) fits Ethernet-based gateway deployments where RS485 Modbus data is collected from field devices.\n\n## RS485 and Remote IO\n\nRemote IO modules often use RS485 Modbus RTU so a gateway, RTU, or controller can read distributed DI/DO/AI/AO signals.\n\nThe [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module) fits wired Modbus Remote IO expansion in distributed cabinet and machine-signal applications.\n\n## RS485 and RTUs\n\nRTUs can combine local IO and RS485 communication in the same cabinet. This makes them useful for pump stations, water systems, factory cabinets, and small remote monitoring panels.\n\nThe [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu) fits local IO plus wired telemetry.\n\n## Deployment Notes\n\nRS485 performance depends on wiring, device count, baud rate, noise environment, grounding, and firmware polling behavior. Exact point counts and distance claims should follow the device datasheet and the real site topology.\n\r\n";
const __vite_glob_0_15 = '\uFEFF---\nid: rtu-vs-gateway-vs-remote-io\ntitle: "RTU vs Gateway vs Remote IO: How to Choose the Right Device"\nexcerpt: Compare industrial RTUs, IoT gateways and Remote IO modules for Modbus, MQTT, local IO, relay control and remote monitoring projects.\ncategory: Selection Guide\nprimaryKeyword: RTU vs gateway vs remote IO\nrelatedProducts: ieg-100-ethernet-industrial-iot-gateway,ier-140-4g-remote-relay-rtu,ier-141-4g-pump-valve-rtu,ier-142-4g-power-cabinet-rtu,ieio-100-modbus-remote-io-module\norder: 9\n---\n\n# RTU vs Gateway vs Remote IO: How to Choose the Right Device\n\nIndustrial IoT buyers often compare RTUs, gateways and Remote IO modules. These devices overlap, but they solve different problems.\n\n## Quick Comparison\n\n| Device Type | Best For | Typical Interfaces |\n| --- | --- | --- |\n| IoT Gateway | collecting Modbus or device data and publishing to MQTT or dashboard | Ethernet, RS485, WiFi or 4G uplink |\n| RTU | local IO plus remote monitoring or control | DI, DO, AI, RS485, Ethernet, WiFi or 4G |\n| Remote IO | expanding signals for PLC, SCADA or gateway systems | DI, DO, AI, AO, RS485 Modbus |\n\n## When To Use A Gateway\n\nUse a gateway when the main job is protocol conversion or data collection. For example, a Modbus-to-MQTT gateway can read power meters, inverters or PLC data and publish selected values to a dashboard.\n\nGateway fit:\n\n- many Modbus devices\n- data publishing\n- protocol conversion\n- cloud connection\n- dashboard telemetry\n\n## When To Use An RTU\n\nUse an RTU when the site needs built-in IO and remote control. RTUs are common in pump stations, cabinets, generators, valves, gates and remote alarm systems.\n\nRTU fit:\n\n- local DI/DO/AI signals\n- relay output control\n- cellular remote sites\n- alarm push\n- scheduled control\n- Modbus device polling\n\n## When To Use Remote IO\n\nUse Remote IO when signals need to be added to an existing control system. Remote IO modules are often connected to PLCs, gateways or SCADA systems through RS485 Modbus.\n\nRemote IO fit:\n\n- distributed signals\n- PLC or SCADA expansion\n- Modbus IO map\n- local cabinet IO\n- digital and analog signal expansion\n\n## Related Products\n\n- [IEG-100 Ethernet Industrial IoT Gateway](/products/ieg-100-ethernet-industrial-iot-gateway): gateway path for Modbus data collection.\n- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu): compact cellular RTU for 2DI/2DO relay applications.\n- [IER-141 4G Pump & Valve RTU](/products/ier-141-4g-pump-valve-rtu): cellular RTU for pump, valve and irrigation cabinets.\n- [IER-142 4G Power Cabinet RTU](/products/ier-142-4g-power-cabinet-rtu): DI-heavy cellular RTU for cabinet and generator alarm monitoring.\n- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module): Remote IO path for Modbus signal expansion.\n\n## Final Choice\n\nIf you mainly need data conversion, choose a gateway. If you need local IO and remote control, choose an RTU. If you need signal expansion for another controller, choose Remote IO.\n\r\n';
const __vite_glob_0_16 = '---\nid: wifi-industrial-iot-gateway\ntitle: "WiFi Industrial IoT Gateway: When to Use WiFi Instead of Ethernet or 4G"\nexcerpt: Learn when a WiFi industrial IoT gateway is the right fit for indoor cabinets, machine monitoring, building utilities and retrofit telemetry deployments.\ncategory: Selection Guide\nprimaryKeyword: WiFi industrial IoT gateway\nrelatedProducts:\n  - ieg-120-wifi-industrial-iot-gateway\n  - ieg-100-ethernet-industrial-iot-gateway\n  - ier-120-wifi-remote-monitoring-rtu\norder: 10\n---\n\n# WiFi Industrial IoT Gateway: When to Use WiFi Instead of Ethernet or 4G\n\nA WiFi industrial IoT gateway is useful when a site needs wireless telemetry but does not need long-range outdoor communication or a cellular SIM. In practice, WiFi gateways fit indoor cabinets, equipment rooms, utility panels, and retrofit deployments where Ethernet cabling is inconvenient but a stable local wireless LAN already exists.\n\n## When WiFi Is The Right Uplink\n\nChoose a WiFi gateway when the site already has:\n\n- stable indoor WiFi coverage\n- a local router or industrial access point\n- power and cabinet space near the monitored equipment\n- a need to read Modbus devices and send telemetry to a dashboard or MQTT broker\n\nThis is common in building energy systems, compressor rooms, indoor machine monitoring, chilled-water plants, and small retrofit telemetry deployments.\n\n## When Ethernet Is Better\n\nEthernet is often the better choice when:\n\n- the cabinet already has wired LAN access\n- uptime is more important than installation convenience\n- the customer wants a predictable network path\n- the environment has RF noise or weak WiFi coverage\n\nThe [IEG-100 Ethernet Industrial IoT Gateway](/products/ieg-100-ethernet-industrial-iot-gateway) is the better fit for these wired deployments.\n\n## When 4G Is Better\n\n4G is a better fit when the site does not have a local network, or when the monitored asset is remote and distributed. Pump stations, roadside cabinets, remote access control, agricultural equipment and outdoor utility sites typically need a cellular RTU or gateway rather than WiFi.\n\n## Typical WiFi Gateway Architecture\n\n| Layer | Role |\n| --- | --- |\n| RS485 Modbus devices | meters, instruments, VFDs or Remote IO modules |\n| WiFi gateway | collect, normalize and publish telemetry |\n| Local WiFi network | wireless uplink to LAN, broker or dashboard |\n| Dashboard or MQTT broker | visualization, alarms and data storage |\n\n## Gateway Or RTU?\n\nIf the main job is reading Modbus devices and publishing telemetry, a gateway is usually the correct choice.\n\nIf the site also needs local DI, DO, or AI points, compare a WiFi RTU instead. The [IER-120 WiFi Remote Monitoring RTU](/products/ier-120-wifi-remote-monitoring-rtu) is the better fit when the deployment needs built-in I/O alongside wireless telemetry.\n\n## Related Products\n\n- [IEG-120 WiFi Industrial IoT Gateway](/products/ieg-120-wifi-industrial-iot-gateway): indoor WiFi gateway for Modbus data collection and MQTT telemetry\n- [IEG-100 Ethernet Industrial IoT Gateway](/products/ieg-100-ethernet-industrial-iot-gateway): wired Ethernet path for LAN-connected cabinets\n- [IER-120 WiFi Remote Monitoring RTU](/products/ier-120-wifi-remote-monitoring-rtu): WiFi RTU path when local IO is also required\n\n## Final Choice\n\nUse WiFi when the site is indoor, the wireless LAN is already reliable, and the goal is practical telemetry without pulling new Ethernet cable. If network reliability or site conditions are uncertain, Ethernet or 4G is often the safer architecture.\n';
const markdownModules$3 = /* @__PURE__ */ Object.assign({
  "../content/knowledge/4-20ma-pressure-sensor-rtu-wiring.md": __vite_glob_0_0$3,
  "../content/knowledge/4g-antenna-industrial-rtu.md": __vite_glob_0_1$2,
  "../content/knowledge/4g-gsm-gate-opener-europe.md": __vite_glob_0_2$2,
  "../content/knowledge/4g-lte-cat1.md": __vite_glob_0_3$2,
  "../content/knowledge/analog-input.md": __vite_glob_0_4$2,
  "../content/knowledge/digital-io.md": __vite_glob_0_5$2,
  "../content/knowledge/din-rail-power-supply-industrial-iot.md": __vite_glob_0_6$1,
  "../content/knowledge/dry-contact-relay-wiring-gate-opener.md": __vite_glob_0_7$1,
  "../content/knowledge/modbus.md": __vite_glob_0_8$1,
  "../content/knowledge/mqtt-downlink-control.md": __vite_glob_0_9$1,
  "../content/knowledge/mqtt.md": __vite_glob_0_10,
  "../content/knowledge/pump-control-rtu.md": __vite_glob_0_11,
  "../content/knowledge/relay-output-control.md": __vite_glob_0_12,
  "../content/knowledge/rs485-cable-shielding-guide.md": __vite_glob_0_13,
  "../content/knowledge/rs485.md": __vite_glob_0_14,
  "../content/knowledge/rtu-vs-gateway-vs-remote-io.md": __vite_glob_0_15,
  "../content/knowledge/wifi-industrial-iot-gateway.md": __vite_glob_0_16
});
function createKnowledgePage(path, markdown) {
  var _a;
  const { metadata, content } = parseFrontmatter(markdown);
  const fallbackId = ((_a = path.split("/").pop()) == null ? void 0 : _a.replace(/\.md$/, "")) || "knowledge-page";
  return {
    id: readString(metadata.id, fallbackId),
    title: readString(metadata.title, "Untitled Knowledge Page"),
    excerpt: readString(metadata.excerpt),
    content,
    status: resolveEditorialStatus(metadata.status),
    category: readString(metadata.category, "Industrial IoT Knowledge Base"),
    primaryKeyword: readString(metadata.primaryKeyword),
    imageUrl: resolveKnowledgeImageUrl(readOptionalString(metadata.imageUrl)),
    relatedProducts: readStringArray(metadata.relatedProducts),
    order: readNumber(metadata.order)
  };
}
const knowledgePages = Object.entries(markdownModules$3).map(([path, markdown]) => createKnowledgePage(path, markdown)).filter((page) => isPublicEditorialStatus(page.status)).sort((a, b) => a.order - b.order);
const __vite_glob_0_0$2 = '---\nid: "ai-iot-dashboard-industrial-operations-platform"\ntitle: "AI IoT Dashboard for Industrial Operations"\nexcerpt: "Industrial operations dashboard for device management, telemetry monitoring, SCADA visualization, workflow automation, remote control, and AI-assisted analysis."\ncategory: "Industrial IoT Software"\nmodel: "AI IoT Dashboard"\nstatus: "Preview"\nprimaryKeyword: "AI IoT dashboard for industrial monitoring"\nroute: "/products/ai-iot-dashboard-industrial-operations-platform"\norder: 0\nimageUrl: "/uploads/products/ai-iot-dashboard-industrial-operations-platform.svg"\nspecGroups:\n  - title: "Platform Scope"\n    specs:\n      - label: "Deployment"\n        value: "Cloud, private deployment, or OEM-branded dashboard"\n      - label: "Device Scope"\n        value: "RTUs, gateways, Remote IO, meters, PLCs, sensors"\n      - label: "Typical Users"\n        value: "Operations, maintenance, integrators, OEM support teams"\n      - label: "Configuration Method"\n        value: "Web application with role-based user access"\n  - title: "Telemetry & Control"\n    specs:\n      - label: "Telemetry Ingest"\n        value: "MQTT subscriber and HTTP API"\n      - label: "Remote Control"\n        value: "MQTT command topics and pending command queue"\n      - label: "Workflow Engine"\n        value: "Alarm, schedule, and event-triggered automation"\n  - title: "Operations Interface"\n    specs:\n      - label: "SCADA Views"\n        value: "Site views for pumps, tanks, cabinets, machines, and access points"\n      - label: "AI Layer"\n        value: "AI Copilot for alarms, trends, and maintenance analysis"\nselectionGuide:\n  chooseWhen:\n    - "You need one operations layer for gateways, RTUs, Remote IO, and distributed field assets."\n    - "You need dashboard views, alarms, reports, workflow automation, or remote command management."\n    - "You want cloud, private deployment, or OEM-branded software on top of IoT hardware."\n  notFitWhen:\n    - "You only need a field hardware device with no dashboard or software layer."\n    - "You expect the platform to replace local Modbus polling or direct fieldbus wiring by itself."\n    - "You need a pure SCADA runtime without MQTT, HTTP ingest, or cloud workflow requirements."\n  compareLinks:\n    - href: "/demo"\n      label: "View Dashboard Preview"\n    - href: "/products/ieg-100-ethernet-industrial-iot-gateway"\n      label: "Compare with IEG-100 Gateway"\n    - href: "/products/ier-140-4g-remote-relay-rtu"\n      label: "Compare with IER-140 RTU"\nbomGroups:\n  - title: "Platform Setup"\n    items:\n      - "Server or VPS environment for cloud or private deployment"\n      - "Domain, SSL, and deployment access plan"\n      - "Database backup and retention policy"\n      - "User roles and tenant structure checklist"\n  - title: "Device Integration"\n    items:\n      - "Gateway or RTU device inventory list"\n      - "MQTT topics or HTTP ingest token worksheet"\n      - "Register, metric, and alarm mapping sheet"\n      - "Site naming and device label convention"\npreSalesFaq:\n  - question: "Can this be deployed on our own VPS or cloud server?"\n    answer: "Yes. The platform supports cloud deployment, private deployment, and OEM-branded dashboard delivery."\n  - question: "Do you support OEM branding?"\n    answer: "Yes. OEM branding can include logo, domain, interface styling, and customer-facing user structure."\n  - question: "Can you import our existing devices and telemetry model?"\n    answer: "Yes. Existing devices and telemetry models can be imported through device binding, topic mapping, HTTP payload structure, and alarm model setup."\n---\n\n## AI Industrial Operations Platform\n\nThe IoTEdges AI IoT Dashboard is the software layer above industrial RTUs, MQTT gateways, LoRa gateways, Remote IO modules, smart meters, PLCs, sensors and access controllers. It is designed to help operators collect field data, visualize equipment status, respond to alarms and control remote assets from a single operations interface.\n\nThis platform is available as a cloud dashboard, private deployment, or OEM-branded operations dashboard.\n\n## Core Capabilities\n\n| Capability | Description | Typical Use |\n| --- | --- | --- |\n| Device management | Manage RTUs, gateways, meters, sensors, Remote IO and access controllers | Industrial asset visibility |\n| Telemetry ingest | Receive device data through HTTP API or MQTT subscriber | RTU and gateway data collection |\n| SCADA visualization | Build site views for pumps, tanks, cabinets, machines, meters and access points | Remote equipment monitoring |\n| Raw data storage | Store and inspect telemetry payloads, metrics, topics and timestamps | Troubleshooting and audit |\n| Workflow automation | Trigger actions from alarms, offline status, schedules, MQTT messages or AI anomaly detection | Automated response |\n| Remote control | Send commands through MQTT topics or gateway pending queues | Relay, DO, AO and setpoint control |\n| AI Copilot | Ask natural-language questions about alarms, abnormal trends and maintenance risk | Faster operations analysis |\n| Reports and analytics | Create charts, dashboards and operating reports from historical telemetry | Energy, uptime and compliance reporting |\n\n## Recommended Field Architecture\n\nThe dashboard does not replace the site gateway. Field protocols and weak-network handling should remain on the edge device side.\n\n| Layer | Role |\n| --- | --- |\n| Field devices | PLC, meter, sensor, pump controller, valve controller, door controller or Remote IO |\n| Edge hardware | IoTEdges RTU, MQTT gateway, LoRa gateway or Ethernet gateway collects local data |\n| Network uplink | Ethernet, WiFi, 4G LTE Cat1, or LoRaWAN gateway backhaul |\n| Dashboard backend | Receives telemetry through HTTP or MQTT, stores data and exposes APIs |\n| Dashboard frontend | Provides device views, SCADA screens, analytics, workflow builder and AI assistant |\n\n## Telemetry and Device Binding\n\nEach field device can be matched to dashboard assets by External Device ID, MQTT topic, HTTP ingest token or gateway-side register mapping. This allows Modbus registers, RS485 data, DI/DO states, AI/AO values and gateway health metrics to be normalized into a consistent telemetry model.\n\nCommon examples include:\n\n- `device_id`: external gateway or RTU ID\n- `metrics.pressure`: pump pressure in bar\n- `metrics.flow_rate`: water flow in m3/h\n- `metrics.power`: electrical load in W or kW\n- `metrics.relay_1`: relay or DO state\n- `metrics.signal`: 4G, WiFi or LoRa signal quality\n- `status`: online, warning, critical or offline\n\n## Remote Control Architecture\n\nRemote commands can be sent through MQTT command topics when the gateway is online. If MQTT publish is not available, commands can be stored in a pending queue for the gateway to pull and acknowledge.\n\nThis approach is suitable for:\n\n- relay pulse control\n- DO on/off control\n- AO setpoint update\n- pump start/stop command\n- valve open/close command\n- gate opener command\n- schedule update\n- remote configuration request\n\nFor Modbus write, PLC control, serial protocol control, or private device commands, the dashboard generates the command while the edge gateway performs protocol-specific execution.\n\n## Suitable Applications\n\n- factory equipment monitoring\n- energy monitoring and demand analysis\n- pump and valve station monitoring\n- water and wastewater remote monitoring\n- solar site monitoring\n- agricultural irrigation control\n- power cabinet and generator room monitoring\n- gate, door and access control monitoring\n- cold storage and environmental monitoring\n- OEM machine remote monitoring\n\n## Related IoTEdges Products\n\n- [IEG-100 Ethernet Industrial IoT Gateway](/products/ieg-100-ethernet-industrial-iot-gateway)\n- [IEG-120 WiFi Industrial IoT Gateway](/products/ieg-120-wifi-industrial-iot-gateway)\n- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)\n- [IER-141 4G Pump and Valve RTU](/products/ier-141-4g-pump-valve-rtu)\n- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)\n- [IEAC-140 4G GSM Gate Opener](/products/ieac-140-4g-gsm-gate-opener)\n\n## Related Knowledge\n\n- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)\n- [MQTT Downlink Control for Industrial Devices](/knowledge/mqtt-downlink-control)\n- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)\n- [RTU vs Gateway vs Remote IO](/knowledge/rtu-vs-gateway-vs-remote-io)\n- [Digital IO in Industrial Monitoring and Control](/knowledge/digital-io)\n\n## Deployment Options\n\n| Deployment Type | Best Fit |\n| --- | --- |\n| IoTEdges cloud dashboard | Fast project launch and remote monitoring |\n| Private cloud deployment | Customers who require their own server, domain, or data policy |\n| OEM dashboard | Hardware partners and solution providers needing custom branding |\n| Customized dashboard | Industrial deployments requiring custom widgets, device templates, and reports |\n\n## FAQ\n\n### Is this dashboard only for energy monitoring?\n\nNo. Energy monitoring is one application. The dashboard is designed for multi-device industrial operations, including pumps, valves, access control, environmental monitoring, power cabinets, machines and OEM equipment.\n\n### Does the dashboard directly read Modbus devices?\n\nThe recommended architecture is to let an RTU or gateway collect Modbus data locally and send normalized telemetry to the dashboard through HTTP or MQTT. This keeps serial polling, bus timing and weak-network recovery on the edge side.\n\n### Can it send commands back to devices?\n\nYes. Commands can be published to MQTT command topics or stored for gateways to pull from a pending command queue. The edge device is responsible for executing relay, Modbus write, AO setpoint or private protocol actions.\n\n### Can this be deployed on a customer\'s own server?\n\nYes. Private deployment is available for customers who need their own VPS, cloud server, domain, database, and access policy.\n\n### Is AI Copilot required for every project?\n\nNo. The dashboard can run as a standard industrial IoT monitoring and control platform, with AI Copilot enabled where it adds value.\n';
const __vite_glob_0_1$1 = '---\nid: "ieac-140-4g-gsm-gate-opener"\ntitle: "IEAC-140 4G GSM Gate Opener"\nexcerpt: "Europe-focused 4G remote access controller for gates, doors, barriers, intercom access and RTU-style remote relay control."\ncategory: "Remote Access Controller"\nmodel: "IEAC-140"\nstatus: "Available for project inquiry"\nprimaryKeyword: "4G GSM gate opener"\nroute: "/products/ieac-140-4g-gsm-gate-opener"\norder: 6\nimageUrl: "/uploads/products/ieac-140-4g-gsm-gate-opener.svg"\nspecGroups:\n  - title: "Hardware I/O"\n    specs:\n      - label: "Relay Outputs"\n        value: "2 dry-contact relay outputs"\n      - label: "Digital Inputs"\n        value: "2 digital inputs for gate, door, exit button, or alarm status"\n      - label: "Relay Type"\n        value: "Dry contact trigger output for gate motor or lock controller input"\n      - label: "Antenna"\n        value: "External cellular antenna path for cabinet or pillar installation"\n  - title: "Communication"\n    specs:\n      - label: "Primary Uplink"\n        value: "4G LTE for Europe-focused access control deployments"\n      - label: "Legacy Search Fit"\n        value: "GSM gate opener replacement positioning"\n  - title: "Protocols"\n    specs:\n      - label: "Access Methods"\n        value: "Authorized call, SMS, dashboard, app, or API workflow"\n      - label: "Primary Role"\n        value: "Remote gate, barrier, lock, and cabinet access control"\n  - title: "Power & Mounting"\n    specs:\n      - label: "Primary Market"\n        value: "European installers, distributors, OEM access-control brands"\n      - label: "Power Supply"\n        value: "12-24VDC for gate control cabinets"\n      - label: "Enclosure"\n        value: "Controller board or module for protected cabinet or enclosure integration"\n      - label: "Configuration Method"\n        value: "Installer setup by local app, web UI, or service tool"\nselectionGuide:\n  chooseWhen:\n    - "The site is a gate, barrier, garage door, or access-control retrofit in Europe."\n    - "You need dry-contact relay triggering with 4G remote access logic."\n    - "Buyers are searching for GSM gate opener replacement but should be guided toward 4G-first hardware."\n  notFitWhen:\n    - "The site needs broad industrial relay automation rather than access control."\n    - "You need a finished intercom audio product with fully confirmed SIP or VoLTE scope."\n    - "The site already has a local access controller and only needs generic cabinet telemetry."\n  compareLinks:\n    - href: "/products/ier-140-4g-remote-relay-rtu"\n      label: "Compare with IER-140 4G Relay RTU"\n    - href: "/knowledge/4g-gsm-gate-opener-europe"\n      label: "Read the Europe Gate Opener Guide"\n    - href: "/products"\n      label: "Browse Access and RTU Products"\nbomGroups:\n  - title: "Access Control BOM"\n    items:\n      - "12-24VDC power source from access cabinet"\n      - "External 4G antenna and cable path"\n      - "SIM card with APN and operator setup"\n      - "Protected enclosure or gate-side cabinet space"\n  - title: "Gate Interface"\n    items:\n      - "Dry-contact relay wiring to gate motor controller"\n      - "Gate status magnetic contact or sensor"\n      - "Exit button or local trigger input"\n      - "Installer commissioning checklist for authorized users"\npreSalesFaq:\n  - question: "Can this be sold under our access-control brand?"\n    answer: "Yes. OEM branding, installer packaging, and access-control partner documentation are available for distributor and private-label programs."\n  - question: "Do you provide setup guidance for European SIM and APN use?"\n    answer: "Yes. SIM, APN, operator, and installation guidance are part of normal deployment support for Europe-focused installations."\n  - question: "Can access methods be adjusted for call, SMS, app, or API workflows?"\n    answer: "Yes. Call, SMS, app, dashboard, and API workflows can be matched to the required access model."\n---\n\n## 4G Gate Opener For European Access Control Projects\n\nIEAC-140 is a Europe-focused remote access controller for gates, doors, barriers, equipment rooms and small access-control cabinets. It is positioned for buyers searching **GSM Gate Opener**, **4G Gate Opener**, **4G Intercom**, **Remote Access Controller** and **RTU Door Controller** solutions.\n\nFor installers, distributors, and OEM access-control brands, IEAC-140 is a 4G-first relay controller that can trigger existing gate motors, garage doors, road barriers, electric locks, and access panels through dry-contact relay output. It is suitable for retrofit sites where the customer wants remote opening without running a new network cable to the gate.\n\n## Why 4G First\n\nLegacy GSM gate openers are still searched for in Europe, but 2G/GSM availability varies by country and operator. IEAC-140 is positioned as a 4G-first access controller. Any 2G/GSM fallback should be treated as a country- and module-specific option.\n\nFor new European installations, 4G LTE should be the primary connectivity path.\n\n## Typical Buyer Requirements\n\nEuropean buyers and installers usually evaluate a 4G gate opener around a few practical questions:\n\n- Can it open an existing gate motor through a dry-contact relay?\n- Can authorized users open the gate by call, SMS, app, dashboard or API?\n- Can it read gate position, door contact, exit button or alarm status?\n- Does it work with local SIM cards and common APN settings?\n- Can an external antenna be used when the controller is inside a metal cabinet?\n- Can installers manage multiple customers, sites or access devices remotely?\n- Can the device replace older GSM gate openers affected by 2G/3G network retirement?\n- Can the product be OEM branded for distributors or access-control installers?\n\n## Product Role\n\n| Function Area | Role | Configuration Notes |\n| --- | --- | --- |\n| 4G LTE | Primary cellular uplink for European deployments | Suitable for remote entrances, gates and access cabinets |\n| GSM / 2G fallback | Legacy keyword and optional fallback by module and country | Use only where local network support exists |\n| Relay output | Gate, door, barrier, garage door, electric lock or access panel trigger | Dry-contact relay integration path |\n| Digital input | Gate position, door contact, exit button, alarm or auxiliary input | Suitable for status and trigger inputs |\n| Remote access logic | Authorized caller, SMS, app, dashboard, API, or scheduled access | Suitable for installer and property workflows |\n| User management | Installer, administrator, and authorized-user workflow | Suitable for managed site access |\n| Event logging | Access events, relay trigger history and device status records | Suitable for audit trail and service review |\n| Intercom integration | Access/intercom workflow positioning | Voice and SIP features depend on selected project scope |\n\n## Typical Applications\n\n- apartment and residential gate access\n- commercial barrier control\n- garage door remote opening\n- farm and rural gate opening\n- parking access control\n- industrial yard entrance control\n- gated community access\n- temporary construction site access\n- equipment room or utility cabinet door control\n- remote site access logging\n- retrofit projects replacing legacy GSM gate openers\n- OEM access-control panels for European installers\n\n## IO Baseline\n\nA practical I/O baseline is:\n\n| IO Type | Configuration Direction | Configuration Notes |\n| --- | --- | --- |\n| Relay output | 1 or 2 relay outputs for gate, lock or barrier triggering | Suitable for dry-contact trigger workflows |\n| Digital input | 1 or more status inputs for gate position, door contact or alarm | Suitable for state feedback and local triggers |\n| Local setup | USB, Bluetooth, local web UI or app-based setup | Selected by installer workflow and deployed variant |\n| Antenna | External cellular antenna path for cabinet installations | Recommended where the controller sits inside metal housing |\n\n## Dry Contact Relay Wiring\n\nMost gate openers and barrier controllers expose terminals for a push button, open input, step-by-step input or external access-control trigger. IEAC-140 should be wired as a dry-contact relay trigger rather than directly powering the motor or lock.\n\nTypical wiring concept:\n\n| Existing Controller Terminal | IEAC-140 Connection |\n| --- | --- |\n| Push button / OPEN input | Relay COM and NO |\n| Door contact / gate status sensor | Digital input |\n| Exit button | Digital input or parallel local wiring based on site design |\n| External power supply | Power input matched to the site voltage and protection design |\n\nRelay pulse duration, normally-open or normally-closed behavior, contact rating, isolation, and surge protection should match the gate motor or door controller in use.\n\n## SIM Card, APN And Antenna Notes\n\nFor European installations, the SIM and RF design are as important as the controller itself.\n\n- Use an IoT SIM, M2M SIM or local operator SIM with stable 4G coverage at the gate.\n- Confirm APN, username, password, and private-network requirements before installation.\n- Check LTE band support against the target country and operator.\n- Use an external antenna when the device is installed inside a metal cabinet or weak-signal location.\n- Avoid promising 2G/GSM fallback unless the module, operator and country have been validated.\n- Consider roaming SIM behavior carefully for distributors selling across multiple EU markets.\n\n## Access Methods\n\nIEAC-140 supports these common access-control workflows:\n\n| Method | Typical Use |\n| --- | --- |\n| Authorized caller opening | Simple user experience for residents, staff or recurring visitors |\n| SMS command | Installer-friendly backup control or simple legacy workflow |\n| Dashboard control | Remote operation by property manager, facility manager or support team |\n| Mobile app workflow | End-user opening, user management and site visibility when included in the project |\n| API integration | Integration with property management, parking, visitor or industrial systems |\n| Scheduled access | Time-window control for staff, suppliers or temporary visitors |\n\n## Installer And OEM Opportunities\n\nIEAC-140 is suitable for access-control installers, gate automation companies, distributors, and OEM brands that need a 4G-first gate opener product for European deployments.\n\nPotential commercial options include:\n\n- private label or OEM front label\n- custom enclosure or DIN-rail cabinet integration\n- installer dashboard for multi-site device management\n- custom user import/export workflow\n- SIM and APN presets matched to installer rollout needs\n- integration with access-control, parking or property-management platforms\n- multilingual documentation for target European markets\n\n## Comparison: GSM Gate Opener vs 4G Gate Opener\n\n| Topic | Legacy GSM Gate Opener | IEAC-140 4G Gate Opener Direction |\n| --- | --- | --- |\n| Network | Often relies on 2G/GSM | 4G LTE first |\n| Future availability | Country and operator dependent | Better direction for new European deployments |\n| Access logic | Usually call or SMS based | Call, SMS, dashboard, API or app workflow |\n| Remote management | Often limited | Designed for dashboard-based multi-site management |\n| Data visibility | Basic event records or none | Access logs, device status and alarm records can be added |\n| Expansion | Usually fixed relay behavior | RTU-style inputs, relay logic and cloud workflow options |\n\n## Europe Market Notes\n\nIEAC-140 should be presented to European buyers as a 4G remote access controller first. Country-specific 2G/GSM support, SIM compatibility, LTE bands, CE/RED requirements, antenna design, and enclosure rating should match the target deployment market.\n\nRecommended market positioning:\n\n- **Primary term:** 4G gate opener\n- **Secondary terms:** GSM gate opener replacement, remote access controller, 4G relay controller, RTU door controller\n- **Application terms:** apartment gate opener, farm gate opener, garage door opener, barrier controller, gate access control\n- **Careful terms:** 4G intercom, VoLTE intercom, SIP intercom, emergency access, safety controller, certified fire access\n\n## Compatible Accessories\n\n| Accessory | Project Use |\n| --- | --- |\n| 4G LTE external antenna | Gate pillar, roadside cabinet or weak-signal installation |\n| IoT SIM / M2M SIM | Cellular connectivity, APN setup and roaming planning |\n| Gate status contact | Read open/closed gate or door status |\n| Exit button | Local manual trigger or access workflow input |\n| Weatherproof enclosure and cable glands | Outdoor or gate-side installation protection |\n\nSee [Industrial IoT Accessories](/accessories), [4G Antenna Guide](/knowledge/4g-antenna-industrial-rtu), and [Dry Contact Relay Wiring Guide](/knowledge/dry-contact-relay-wiring-gate-opener) for gate opener accessory planning.\n\n## Related Products\n\n- [AI IoT Dashboard for Industrial Operations](/products/ai-iot-dashboard-industrial-operations-platform)\n- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)\n- [IER-120 WiFi Remote Monitoring RTU](/products/ier-120-wifi-remote-monitoring-rtu)\n- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu)\n- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)\n\n## Related Knowledge\n\n- [GSM vs 4G Gate Opener for Europe](/knowledge/4g-gsm-gate-opener-europe)\n- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)\n- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)\n\n## Product Boundary\n\nIEAC-140 should not be described as a certified emergency access system, safety controller, fire alarm interface, elevator controller, payment access terminal, or finished intercom audio product unless the relevant hardware, firmware, safety, telecom, and regulatory scope is included.\n\nExact LTE bands, VoLTE behavior, SIP intercom behavior, call quality, relay rating, IP rating, operating temperature, CE/RED status, and country compatibility should follow the released product version and target-market documentation.\n\n## FAQ\n\n### Is IEAC-140 a GSM gate opener?\n\nIt targets GSM gate opener replacement search intent, but it is positioned as a 4G-first gate opener for new European installations. GSM or 2G fallback depends on module choice and country-level network availability.\n\n### Does it support 4G intercom?\n\nIt supports access and intercom-style workflows, while voice, SIP, VoLTE, and audio features should be confirmed only for variants that explicitly include them.\n\n### Can it open a gate by phone call?\n\nAuthorized-caller access is one supported workflow. IEAC-140 can also use SMS, app, dashboard, or API control.\n\n### Can it connect to an existing gate motor?\n\nYes, the intended integration is through a dry-contact relay connected to the existing gate controller input, such as push button, open or step-by-step terminals. The controller should not be wired directly to motor power.\n\n### Does it need a SIM card?\n\nYes, a 4G cellular gate opener normally needs a SIM card or IoT SIM with a data plan and suitable local coverage. APN and operator settings should be checked before installation.\n\n### Can it manage multiple users?\n\nYes. User management is part of the access-control workflow and can include authorized phone numbers, dashboard users, app users and API-managed access lists.\n\n### Can it be used as a 4G relay controller?\n\nYes. IEAC-140 can be positioned as a 4G relay controller for gate, door, barrier and cabinet access. For broader industrial relay automation, [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu) may be a better fit.\n\n### Is it suitable for Europe?\n\nEurope is the primary target market. Country compatibility depends on LTE bands, SIM behavior, operator support, antenna design, and local regulatory requirements.\n';
const __vite_glob_0_2$1 = '---\nid: "ieg-100-ethernet-industrial-iot-gateway"\ntitle: "IEG-100 Ethernet Industrial IoT Gateway"\nexcerpt: "Ethernet-only industrial IoT gateway designed for Modbus RTU/TCP data collection and MQTT publishing."\ncategory: "Industrial IoT Gateway"\nmodel: "IEG-100"\nstatus: "Published"\nprimaryKeyword: "Ethernet industrial IoT gateway"\nroute: "/products/ieg-100-ethernet-industrial-iot-gateway"\norder: 1\nimageUrl: "/uploads/products/ieg-100-ethernet-industrial-iot-gateway.svg"\nspecGroups:\n  - title: "Hardware I/O"\n    specs:\n      - label: "Local I/O"\n        value: "No built-in DI/DO; gateway-focused architecture"\n      - label: "Field Interface"\n        value: "1 x RS485 for Modbus RTU devices"\n  - title: "Communication"\n    specs:\n      - label: "Uplink"\n        value: "Ethernet"\n      - label: "Best Fit"\n        value: "Control cabinets, LAN-connected factories, utility rooms"\n  - title: "Protocols"\n    specs:\n      - label: "Network Protocols"\n        value: "Modbus TCP and MQTT telemetry publishing"\n      - label: "Primary Role"\n        value: "Modbus data collection and MQTT telemetry"\n  - title: "Power & Mounting"\n    specs:\n      - label: "Power Supply"\n        value: "9-36VDC for cabinet deployment"\n      - label: "Operating Temperature"\n        value: "-20 to 70 C for industrial indoor panels"\n      - label: "Configuration Method"\n        value: "Local web configuration and remote parameter setup"\n      - label: "Mounting"\n        value: "DIN rail cabinet deployment"\nselectionGuide:\n  chooseWhen:\n    - "The site already has wired LAN or cabinet Ethernet available."\n    - "You need Modbus data collection and MQTT telemetry without local DI/DO control."\n    - "The application is centered on meters, inverters, instruments, or PLC data collection."\n  notFitWhen:\n    - "You need local digital or analog I/O on the same device."\n    - "The site has no wired internet and really needs 4G backhaul."\n    - "The deployment uses indoor WiFi instead of Ethernet."\n  compareLinks:\n    - href: "/products/ier-100-ethernet-industrial-rtu"\n      label: "Compare with IER-100 Ethernet RTU"\n    - href: "/products/ieg-120-wifi-industrial-iot-gateway"\n      label: "Compare with IEG-120 WiFi Gateway"\n    - href: "/products"\n      label: "Browse All Gateways and RTUs"\nbomGroups:\n  - title: "Cabinet Essentials"\n    items:\n      - "24VDC or 12VDC DIN rail power supply"\n      - "DIN rail and terminal block set"\n      - "Industrial Ethernet patch cable"\n      - "Labeling and panel wiring markers"\n  - title: "Field Connectivity"\n    items:\n      - "Shielded RS485 cable"\n      - "RS485 isolation or surge module"\n      - "Modbus meter, inverter, or instrument list"\n      - "MQTT broker and topic mapping worksheet"\npreSalesFaq:\n  - question: "Can you provide sample units for testing?"\n    answer: "Yes. Sample units can be arranged for evaluation, pilot use, and distributor review."\n  - question: "Can the MQTT payload or topic format be adjusted?"\n    answer: "Yes. Topic naming, payload mapping, and broker parameters can be adjusted for the target dashboard or OEM workflow."\n  - question: "Do you provide Modbus register mapping support?"\n    answer: "Yes. We can support device list review, register collection scope, and recommended polling structure for the deployment."\n---\n\n## Ethernet Gateway For Wired Industrial Sites\n\nIEG-100 is an Ethernet-only industrial IoT gateway for wired LAN and cabinet deployments. It is built to collect data from Modbus field devices and publish telemetry to MQTT-based monitoring systems in factory, energy, and utility-monitoring environments.\n\nThe page below describes the standard application fit, architecture and selection logic for buyers comparing Ethernet gateway options.\n\n## Architecture\n\n| Layer | Role | Configuration Notes |\n| --- | --- | --- |\n| Ethernet | Wired uplink and local network connection | Best fit for control cabinets, local LANs and equipment rooms |\n| RS485 | Modbus RTU field interface | Standard fieldbus path for meters, inverters and instruments |\n| Modbus TCP | Ethernet device polling | Suitable for PLCs, meters and networked controllers |\n| MQTT | Telemetry publishing | Suitable for dashboard, broker and cloud telemetry workflows |\n\nIEG-100 should not be positioned as a 4G, WiFi or LoRa gateway. Those uplinks belong to separate IoTEdges model families.\n\n## Suitable Applications\n\n- energy meter data collection\n- solar inverter monitoring through site LAN\n- factory utility monitoring\n- building equipment rooms\n- OEM equipment monitoring where Ethernet is available\n- water or environmental equipment cabinets with wired network access\n\n## Product Boundary\n\nIEG-100 is a baseline gateway, not an advanced multi-protocol edge computer. Buyers that need OPC UA, BACnet, CAN, remote write/control, advanced edge logic or larger protocol scope should evaluate a higher-tier edge gateway path.\n\n## Compatible Accessories\n\n| Accessory | Project Use |\n| --- | --- |\n| Shielded RS485 cable | Connect Modbus RTU meters, inverters, instruments or Remote IO modules |\n| Pluggable terminal blocks | Faster cabinet wiring and service replacement |\n| DIN rail power supply | Stable 12V or 24V DC supply for cabinet installations |\n| RS485 surge or isolation module | Recommended for noisy, long-cable or outdoor-connected fieldbus installations |\n| Modbus energy meter or instrument | Common data source for energy, solar and equipment monitoring |\n\nSee [Industrial IoT Accessories](/accessories), [RS485 Cable and Shielding Guide](/knowledge/rs485-cable-shielding-guide), and [DIN Rail Power Supply Guide](/knowledge/din-rail-power-supply-industrial-iot) for accessory planning.\n\n## Related Knowledge\n\n- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)\n- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)\n- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)\n\n## Model Comparison\n\n| Model | Uplink | Best Fit |\n| --- | --- | --- |\n| IEG-100 | Ethernet | Wired LAN and cabinet deployments |\n| IEG-120 | WiFi | Indoor WiFi deployments |\n| IEG-140 | 4G LTE | Remote sites without wired LAN |\n\n## FAQ\n\n### Is IEG-100 a 4G gateway?\n\nNo. IEG-100 is the Ethernet-only model. 4G gateway behavior belongs to IEG-140.\n\n### Does IEG-100 support WiFi or LoRa?\n\nNo. WiFi and LoRaWAN are separate product families.\n\n### Does IEG-100 support OPC UA?\n\nNot in the baseline IEG-100 scope. Advanced protocols belong to higher-tier edge gateway models.\n\n### What should I use for exact device count or polling speed planning?\n\nUse the released datasheet and the selected polling map for final sizing. Device count and polling interval depend on register scope, network layout, and reporting frequency.\n';
const __vite_glob_0_3$1 = '---\nid: "ieg-120-wifi-industrial-iot-gateway"\ntitle: "IEG-120 WiFi Industrial IoT Gateway"\nexcerpt: "indoor WiFi industrial IoT gateway for Modbus data collection and MQTT telemetry."\ncategory: "Industrial IoT Gateway"\nmodel: "IEG-120"\nstatus: "Published"\nprimaryKeyword: "WiFi industrial IoT gateway"\nroute: "/products/ieg-120-wifi-industrial-iot-gateway"\norder: 4\nimageUrl: "/uploads/products/ieg-120-wifi-industrial-iot-gateway.svg"\nspecGroups:\n  - title: "Hardware I/O"\n    specs:\n      - label: "Local I/O"\n        value: "No built-in DI/DO; gateway-focused architecture"\n      - label: "Field Interface"\n        value: "1 x RS485 for Modbus RTU devices"\n  - title: "Communication"\n    specs:\n      - label: "Uplink"\n        value: "WiFi"\n      - label: "Ethernet"\n        value: "Setup or local network interface if included"\n      - label: "Wireless Scope"\n        value: "Single uplink model, not 4G or LoRa"\n      - label: "Best Fit"\n        value: "Indoor industrial WiFi sites and retrofit monitoring"\n  - title: "Protocols"\n    specs:\n      - label: "Network Protocols"\n        value: "Modbus TCP and MQTT telemetry publishing"\n  - title: "Power & Mounting"\n    specs:\n      - label: "Power Supply"\n        value: "9-36VDC"\n      - label: "Operating Temperature"\n        value: "-20 to 70 C for indoor industrial cabinets"\n      - label: "Configuration Method"\n        value: "Local web setup for WiFi onboarding and device parameters"\n      - label: "Mounting"\n        value: "DIN rail cabinet deployment"\nselectionGuide:\n  chooseWhen:\n    - "The site has reliable indoor WiFi but no convenient Ethernet drop."\n    - "You need Modbus collection and MQTT telemetry without local I/O."\n    - "The device will stay in indoor cabinets, utility rooms, or OEM equipment areas."\n  notFitWhen:\n    - "The site needs outdoor long-range wireless or cellular backhaul."\n    - "You need built-in DI/DO/AI instead of a gateway-only device."\n    - "The site already has stable wired Ethernet and does not need WiFi onboarding."\n  compareLinks:\n    - href: "/products/ieg-100-ethernet-industrial-iot-gateway"\n      label: "Compare with IEG-100 Ethernet Gateway"\n    - href: "/products/ier-120-wifi-remote-monitoring-rtu"\n      label: "Compare with IER-120 WiFi RTU"\n    - href: "/knowledge/wifi-industrial-iot-gateway"\n      label: "When to Use WiFi in Industrial IoT"\nbomGroups:\n  - title: "Cabinet Essentials"\n    items:\n      - "24VDC or 12VDC DIN rail power supply"\n      - "DIN rail mounting hardware"\n      - "Panel labeling and terminal blocks"\n      - "WiFi onboarding and access credential checklist"\n  - title: "Wireless & Field Side"\n    items:\n      - "WiFi antenna or better antenna placement accessory"\n      - "Shielded RS485 cable"\n      - "Modbus device list and register worksheet"\n      - "MQTT broker and topic planning sheet"\npreSalesFaq:\n  - question: "Can WiFi credentials be configured locally?"\n    answer: "Yes. IEG-120 supports local WiFi onboarding and device parameter setup."\n  - question: "Is this suitable for export OEM projects?"\n    answer: "Yes. It is a good fit for indoor OEM or cabinet-based monitoring projects that need WiFi uplink and Modbus data collection."\n  - question: "Can you help adapt the MQTT structure to our platform?"\n    answer: "Yes. MQTT topic structure, payload fields, and broker parameters can be aligned to your platform requirements."\n---\n\n## WiFi Gateway For Indoor Industrial Sites\n\nIEG-120 is a WiFi industrial IoT gateway for indoor deployments where a reliable wireless LAN is available. It is built to collect Modbus data from industrial devices and publish telemetry to MQTT-based monitoring systems in building, factory, and OEM monitoring environments.\n\nThis page describes the standard application fit, architecture and product boundary for buyers comparing indoor WiFi gateway options.\n\n## Architecture\n\n| Layer | Role | Configuration Notes |\n| --- | --- | --- |\n| WiFi | Indoor wireless uplink | Best fit for sites with stable local WiFi coverage |\n| Ethernet | Setup or local network interface if included | Useful for setup, maintenance or hybrid cabinet networking |\n| RS485 | Modbus RTU field interface | Standard fieldbus path for meters, instruments and Remote IO |\n| Modbus TCP | Network device polling | Suitable for LAN-connected industrial devices |\n| MQTT | Telemetry publishing | Suitable for dashboard, broker and cloud telemetry workflows |\n\nIEG-120 should not be positioned as a 4G gateway, LoRa gateway or outdoor long-range wireless device.\n\n## Good-Fit Applications\n\n- building energy monitoring\n- factory utility monitoring\n- compressor room monitoring\n- chiller room monitoring\n- indoor OEM machine monitoring\n- retrofit data collection where Ethernet cabling is difficult\n\n## Poor-Fit Applications\n\n- remote sites without WiFi\n- cellular backhaul projects\n- long-range wireless sensor networks\n- hazardous areas without certification\n- outdoor installations without validated enclosure and RF design\n\n## Product Boundary\n\nIEG-120 is a baseline WiFi gateway. Buyers that need OPC UA, BACnet, CAN, advanced edge logic, larger protocol scope or specialized wireless certification should evaluate a higher-tier platform path.\n\n## Compatible Accessories\n\n| Accessory | Project Use |\n| --- | --- |\n| WiFi antenna | Indoor cabinet or equipment-room wireless connection planning |\n| Shielded RS485 cable | Modbus RTU wiring for meters, instruments or Remote IO modules |\n| DIN rail power supply | Stable cabinet power for the gateway and related field devices |\n| Terminal blocks and labels | Cleaner installation and service handover |\n| Modbus meter or instrument | Typical data source for factory, building and OEM monitoring |\n\nSee [Industrial IoT Accessories](/accessories), [RS485 Cable and Shielding Guide](/knowledge/rs485-cable-shielding-guide), and [DIN Rail Power Supply Guide](/knowledge/din-rail-power-supply-industrial-iot) for accessory selection notes.\n\n## Related Knowledge\n\n- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)\n- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)\n- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)\n- [WiFi Industrial IoT Gateway: When to Use WiFi Instead of Ethernet or 4G](/knowledge/wifi-industrial-iot-gateway)\n\n## Model Comparison\n\n| Model | Uplink | Best Fit |\n| --- | --- | --- |\n| IEG-100 | Ethernet | Wired LAN and cabinet deployments |\n| IEG-120 | WiFi | Indoor wireless LAN deployments |\n| IEG-140 | 4G LTE | Remote sites without wired LAN |\n\n## FAQ\n\n### Does IEG-120 include 4G?\n\nNo. 4G belongs to IEG-140.\n\n### Does IEG-120 include LoRa?\n\nNo. LoRaWAN products are separate model families.\n\n### Is IEG-120 suitable for outdoor long-range wireless?\n\nDo not position it that way. IEG-120 is best framed as an indoor WiFi gateway.\n\n### Does it support MQTT?\n\nYes. IEG-120 is positioned for MQTT telemetry publishing in indoor industrial monitoring deployments.\n';
const __vite_glob_0_4$1 = '---\nid: "ieio-100-modbus-remote-io-module"\ntitle: "IEIO-100 Modbus Remote IO Module"\nexcerpt: "Modbus Remote IO family with DI, DO/relay, AI and AO variants for industrial signal expansion."\ncategory: "Remote IO Module"\nmodel: "IEIO-100"\nstatus: "Published"\nprimaryKeyword: "Modbus Remote IO module"\nroute: "/products/ieio-100-modbus-remote-io-module"\norder: 2\nimageUrl: "/uploads/products/ieio-100-modbus-remote-io-module.svg"\nspecGroups:\n  - title: "Hardware I/O"\n    specs:\n      - label: "Variant 1"\n        value: "IEIO-100-DI8 with 8 digital inputs"\n      - label: "Variant 2"\n        value: "IEIO-100-DO8 with 8 digital or relay outputs"\n      - label: "Variant 3"\n        value: "IEIO-100-AI4 with 4 analog inputs"\n      - label: "Variant 4"\n        value: "IEIO-100-AO4 with 4 analog outputs"\n      - label: "Typical Signals"\n        value: "Dry contact, relay output, 4-20mA, or 0-10V by variant"\n  - title: "Communication"\n    specs:\n      - label: "Interface"\n        value: "RS485 Modbus RTU"\n      - label: "Primary Role"\n        value: "Distributed I/O expansion for RTU, gateway, PLC, and SCADA systems"\n  - title: "Power & Mounting"\n    specs:\n      - label: "Power Supply"\n        value: "24VDC industrial control power"\n      - label: "Operating Temperature"\n        value: "-20 to 70 C for cabinet installations"\n      - label: "Mounting"\n        value: "DIN rail cabinet installation"\nselectionGuide:\n  chooseWhen:\n    - "You already have an RTU, gateway, PLC, or SCADA master and only need extra field I/O."\n    - "Field signals are distributed and easier to collect near the cabinet or machine."\n    - "You want a clean Modbus RTU expansion path for DI, DO, AI, or AO."\n  notFitWhen:\n    - "You need direct MQTT, WiFi, or 4G connectivity from the I/O module itself."\n    - "You need local dashboard, cellular communication, or standalone edge logic."\n    - "You need one device that already includes uplink and control logic in the same box."\n  compareLinks:\n    - href: "/products/ier-100-ethernet-industrial-rtu"\n      label: "Compare with IER-100 RTU"\n    - href: "/products/ieg-100-ethernet-industrial-iot-gateway"\n      label: "Compare with IEG-100 Gateway"\n    - href: "/knowledge/modbus"\n      label: "Read the Modbus Buying Guide"\nbomGroups:\n  - title: "Control Panel BOM"\n    items:\n      - "24VDC control power supply"\n      - "DIN rail and enclosure space"\n      - "Terminal blocks for field signal landing"\n      - "Panel labels for DI, DO, AI, or AO channels"\n  - title: "Signal Interface"\n    items:\n      - "Shielded RS485 cable and termination"\n      - "Dry-contact field switches or alarm contacts"\n      - "Interposing relay for output-side isolation"\n      - "4-20mA or 0-10V sensors for analog variants"\npreSalesFaq:\n  - question: "Can I choose only the DI or AI variant instead of a mixed module?"\n    answer: "Yes. IEIO-100 is offered as focused DI, DO, AI, and AO variants so you can match the module to the actual signal type."\n  - question: "Can you provide a register map before bulk order?"\n    answer: "Yes. Variant-specific register maps can be provided for sample testing and technical review."\n  - question: "Do you support OEM labeling?"\n    answer: "Yes. OEM labeling and private-brand packaging can be reviewed based on the selected variant and order scope."\n---\n\n## Modbus Remote IO For Distributed Signals\n\nIEIO-100 is a wired Modbus Remote IO module family for distributed industrial signal collection and control. The product family separates I/O types into focused variants instead of forcing every signal type into one overloaded SKU.\n\nThe IEIO-100 family is a good fit for clean Modbus-based I/O expansion close to field devices, cabinets, and machine signals.\n\n## First-Generation Variants\n\n| Variant | I/O Profile | Configuration Notes |\n| --- | --- | --- |\n| IEIO-100-DI8 | 8 digital inputs | Best fit for contact, alarm and status monitoring |\n| IEIO-100-DO8 | 8 digital outputs or relay outputs | Best fit for output signaling and relay interfacing |\n| IEIO-100-AI4 | 4 analog inputs | Best fit for process transmitters and analog sensors |\n| IEIO-100-AO4 | 4 analog outputs | Best fit for analog setpoint and control output use |\n\nMixed digital I/O or mixed analog I/O variants can be reviewed separately when a project needs combined channel types.\n\n## Modbus Integration\n\nRS485 Modbus RTU is the baseline protocol for IEIO-100, making it suitable for RTUs, gateways, PLCs and SCADA masters that already use Modbus networks.\n\n## Where IEIO-100 Fits\n\n- factory machine status monitoring\n- pump station signal expansion\n- industrial alarm monitoring\n- SCADA Remote IO expansion\n- data center environmental signal collection\n- utility cabinet signal collection\n\n## Choosing A Variant\n\n| Need | Variant |\n| --- | --- |\n| Read contact or alarm status | IEIO-100-DI8 |\n| Drive alarm or output signals | IEIO-100-DO8 after output confirmation |\n| Read pressure, level or flow transmitters | IEIO-100-AI4 after analog confirmation |\n| Send analog setpoints | IEIO-100-AO4 after output confirmation |\n\n## Product Boundary\n\nIEIO-100 should not be described as an MQTT gateway, 4G telemetry device, WiFi device or LoRaWAN device. MQTT and cloud publishing belong to gateway products such as IEG-100.\n\n## Compatible Accessories\n\n| Accessory | Project Use |\n| --- | --- |\n| Shielded RS485 cable | Connect Remote IO modules to a Modbus master, RTU or gateway |\n| Pluggable terminal blocks | Speed up DI, DO, AI and AO wiring |\n| DIN rail enclosure or cabinet kit | Mount Remote IO close to field signals |\n| Interposing relay or contactor interface | Interface DO/relay outputs with field loads |\n| 4-20mA sensors | Connect pressure, level, flow or process transmitters to analog input variants |\n\nSee [Industrial IoT Accessories](/accessories), [RS485 Cable and Shielding Guide](/knowledge/rs485-cable-shielding-guide), and [4-20mA Pressure Sensor Wiring](/knowledge/4-20ma-pressure-sensor-rtu-wiring) for wiring guidance.\n\n## Related Knowledge\n\n- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)\n- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)\n\n## FAQ\n\n### Does IEIO-100 publish MQTT data directly?\n\nNo. IEIO-100 is designed as a Modbus Remote IO module. MQTT publishing belongs to gateway models.\n\n### Is the register map final?\n\nRegister details should follow the released register map for the selected variant.\n\n### Which variant is designed for 4-20mA sensors?\n\nIEIO-100-AI4 is the analog input variant for 4-20mA and similar process signals.\n\n### Can IEIO-100 control motors directly?\n\nIEIO-100 is designed for signal output and interposing relays, not direct motor power control.\n';
const __vite_glob_0_5$1 = '---\nid: "ier-100-ethernet-industrial-rtu"\ntitle: "IER-100 Ethernet Industrial RTU"\nexcerpt: "Ethernet industrial RTU with 4DI, 2DO/relay, 2AI, RS485, and Modbus connectivity for wired cabinet monitoring."\ncategory: "Industrial RTU"\nmodel: "IER-100"\nstatus: "Published"\nprimaryKeyword: "Ethernet industrial RTU"\nroute: "/products/ier-100-ethernet-industrial-rtu"\norder: 3\nimageUrl: "/uploads/products/ier-100-ethernet-industrial-rtu.svg"\nspecGroups:\n  - title: "Hardware I/O"\n    specs:\n      - label: "Digital Inputs"\n        value: "4DI"\n      - label: "Digital Outputs"\n        value: "2DO or relay outputs"\n      - label: "Analog Inputs"\n        value: "2AI for 4-20mA or 0-10V signals"\n      - label: "Field Interface"\n        value: "1 x RS485"\n  - title: "Communication"\n    specs:\n      - label: "Uplink"\n        value: "Ethernet"\n      - label: "Primary Role"\n        value: "Local I/O telemetry and relay-style control in wired cabinets"\n  - title: "Protocols"\n    specs:\n      - label: "Protocols"\n        value: "Modbus RTU, Modbus TCP, and MQTT telemetry"\n  - title: "Power & Mounting"\n    specs:\n      - label: "Power Supply"\n        value: "9-36VDC"\n      - label: "Operating Temperature"\n        value: "-20 to 70 C for industrial cabinets"\n      - label: "Configuration Method"\n        value: "Local web UI or engineering setup utility"\n      - label: "Mounting"\n        value: "DIN rail cabinet deployment"\nselectionGuide:\n  chooseWhen:\n    - "You need local DI, DO, and AI in the same wired Ethernet device."\n    - "The application is cabinet-based and already has LAN or SCADA network access."\n    - "You need RTU behavior for alarms, contacts, transmitters, and relay-style control."\n  notFitWhen:\n    - "You only need protocol conversion and no local I/O."\n    - "The site is remote and must rely on 4G instead of Ethernet."\n    - "The deployment is indoor wireless and better suited to WiFi."\n  compareLinks:\n    - href: "/products/ieg-100-ethernet-industrial-iot-gateway"\n      label: "Compare with IEG-100 Gateway"\n    - href: "/products/ier-120-wifi-remote-monitoring-rtu"\n      label: "Compare with IER-120 WiFi RTU"\n    - href: "/products/ier-140-4g-remote-relay-rtu"\n      label: "Compare with IER-140 4G RTU"\nbomGroups:\n  - title: "Core RTU BOM"\n    items:\n      - "24VDC or 12VDC DIN rail power supply"\n      - "Industrial Ethernet patch cable"\n      - "DIN rail and terminal block kit"\n      - "Local cabinet fuse and protection accessories"\n  - title: "Signal & Control Side"\n    items:\n      - "Door contact, float switch, or alarm dry contact"\n      - "4-20mA pressure, level, or flow transmitter"\n      - "Interposing relay or contactor interface for DO"\n      - "Shielded RS485 cable for downstream Modbus devices"\npreSalesFaq:\n  - question: "Can the I/O be customized for an OEM project?"\n    answer: "Yes. OEM versions can be reviewed for I/O combination, enclosure, labeling, and firmware scope."\n  - question: "Do you provide sample units and integration support?"\n    answer: "Yes. Sample units and integration support are available, especially for deployments that need Modbus mapping and field signal review."\n  - question: "Can this be branded with our logo?"\n    answer: "Yes. OEM branding and front-label customization are available for approved hardware versions."\n---\n\n## Ethernet RTU For Wired Monitoring\n\nIER-100 is an Ethernet-only industrial RTU for wired cabinet, LAN and SCADA-style monitoring applications. It combines local digital and analog IO with Modbus communications for pump stations, utility cabinets, building equipment rooms and factory telemetry points.\n\nThis page describes the standard I/O baseline, communication scope, and typical applications for deployments that need an RTU rather than a pure gateway.\n\n## Standard I/O Baseline\n\n| IO Type | Standard Count | Configuration Notes |\n| --- | --- | --- |\n| Digital input | 4 | Suitable for door contact, float switch, alarm and status signals |\n| Digital output or relay | 2 | Suitable for relay-style control and auxiliary outputs |\n| Analog input | 2 | Suitable for 4-20mA or 0-10V process signals |\n\n## Wired RTU Architecture\n\nField contacts and sensors connect to local RTU I/O. RS485 connects Modbus field devices. Ethernet connects the RTU to a local LAN, SCADA system, or gateway layer for upstream visibility.\n\n## Protocol Direction\n\n| Protocol | Role | Configuration Notes |\n| --- | --- | --- |\n| Modbus RTU | RS485 communication | Standard fieldbus path for downstream devices |\n| Modbus TCP | Ethernet communication | Suitable for LAN-based industrial integration |\n| MQTT | Optional telemetry | Suitable when RTU data needs dashboard or broker visibility |\n\nDNP3, IEC 60870, IEC 61850 and safety-controller functions are outside the baseline IER-100 positioning.\n\n## Suitable Applications\n\n- pump station monitoring\n- tank level and alarm monitoring\n- building equipment alarms\n- factory utility monitoring\n- local SCADA cabinet telemetry\n- generator room or compressor room monitoring\n\n## RTU vs Gateway vs Remote IO\n\n| Product Type | Best Fit |\n| --- | --- |\n| IER-100 Ethernet RTU | Local IO plus wired telemetry |\n| IEG-100 Gateway | Modbus data collection and MQTT publishing |\n| IEIO-100 Remote IO | Distributed IO expansion over Modbus |\n\n## Compatible Accessories\n\n| Accessory | Project Use |\n| --- | --- |\n| DIN rail power supply | Cabinet power for RTU, sensors and auxiliary devices |\n| Shielded RS485 cable | Connect Modbus field devices to the RTU |\n| Door contact, float switch or alarm contact | Typical digital input sources |\n| Interposing relay or contactor interface | Protect RTU output when controlling field loads |\n| 4-20mA pressure, level or flow transmitter | Typical analog input source for pump, tank and utility monitoring |\n\nSee [Industrial IoT Accessories](/accessories), [DIN Rail Power Supply Guide](/knowledge/din-rail-power-supply-industrial-iot), and [4-20mA Pressure Sensor Wiring](/knowledge/4-20ma-pressure-sensor-rtu-wiring) for accessory planning.\n\n## Related Knowledge\n\n- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)\n- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)\n- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)\n\n## FAQ\n\n### Is IER-100 the same as IEG-100?\n\nNo. IER-100 is an RTU with built-in IO. IEG-100 is a gateway focused on Modbus data collection and MQTT publishing.\n\n### Does IER-100 include 4G?\n\nNo. IER-100 is Ethernet-only. Cellular RTU behavior belongs to IER-140.\n\n### What is the standard I/O baseline?\n\nThe standard baseline is 4DI + 2DO/relay + 2AI.\n\n### Where should final relay and analog specifications be taken from?\n\nUse the released datasheet of the selected hardware version for final relay ratings, analog ranges, and installation limits.\n';
const __vite_glob_0_6 = '---\nid: "ier-120-wifi-remote-monitoring-rtu"\ntitle: "IER-120 WiFi Remote Monitoring RTU"\nexcerpt: "indoor WiFi RTU with 4DI, 2DO/relay, 2AI, RS485 and MQTT telemetry."\ncategory: "Industrial RTU"\nmodel: "IER-120"\nstatus: "Published"\nprimaryKeyword: "WiFi RTU"\nroute: "/products/ier-120-wifi-remote-monitoring-rtu"\norder: 5\nimageUrl: "/uploads/products/ier-120-wifi-remote-monitoring-rtu.svg"\nspecGroups:\n  - title: "Hardware I/O"\n    specs:\n      - label: "Digital Inputs"\n        value: "4DI"\n      - label: "Digital Outputs"\n        value: "2DO or relay outputs"\n      - label: "Analog Inputs"\n        value: "2AI for 4-20mA or 0-10V signals"\n      - label: "Field Interface"\n        value: "1 x RS485"\n  - title: "Communication"\n    specs:\n      - label: "Uplink"\n        value: "WiFi"\n      - label: "Best Fit"\n        value: "Indoor equipment rooms, utility panels, OEM monitoring"\n  - title: "Protocols"\n    specs:\n      - label: "Protocols"\n        value: "Modbus RTU and MQTT telemetry"\n  - title: "Power & Mounting"\n    specs:\n      - label: "Power Supply"\n        value: "9-36VDC"\n      - label: "Operating Temperature"\n        value: "-20 to 70 C for indoor equipment rooms and cabinets"\n      - label: "Configuration Method"\n        value: "Local web setup or service configuration utility"\n      - label: "Mounting"\n        value: "DIN rail cabinet deployment"\nselectionGuide:\n  chooseWhen:\n    - "You need local I/O and WiFi in the same indoor RTU."\n    - "The site uses alarm contacts, transmitters, or simple relay outputs in equipment rooms."\n    - "You want indoor wireless deployment without moving up to a cellular model."\n  notFitWhen:\n    - "The site is outdoor or remote and really needs 4G."\n    - "You only need a WiFi gateway with no local I/O."\n    - "The cabinet already has wired Ethernet and does not benefit from WiFi."\n  compareLinks:\n    - href: "/products/ier-100-ethernet-industrial-rtu"\n      label: "Compare with IER-100 Ethernet RTU"\n    - href: "/products/ieg-120-wifi-industrial-iot-gateway"\n      label: "Compare with IEG-120 WiFi Gateway"\n    - href: "/products/ier-140-4g-remote-relay-rtu"\n      label: "Compare with IER-140 4G RTU"\nbomGroups:\n  - title: "Core RTU BOM"\n    items:\n      - "24VDC or 12VDC DIN rail power supply"\n      - "DIN rail and terminal block set"\n      - "Local cabinet wiring labels"\n      - "WiFi setup and maintenance access checklist"\n  - title: "Signal & Control Side"\n    items:\n      - "Dry-contact alarm or status inputs"\n      - "4-20mA or 0-10V transmitter for analog channels"\n      - "Interposing relay for output-side protection"\n      - "RS485 cable for Modbus field devices"\npreSalesFaq:\n  - question: "Can I request sample testing with my sensors and contacts?"\n    answer: "Yes. Sample testing is available for sensor, contact, and I/O integration review."\n  - question: "Can the local setup flow be customized for OEM use?"\n    answer: "Yes. OEM projects can review branding, default parameters, and local setup flow requirements."\n  - question: "Do you support small-batch OEM runs?"\n    answer: "Yes. Small-batch OEM support can be reviewed based on labeling, firmware scope, and packaging requirements."\n---\n\n## WiFi RTU For Indoor Monitoring\n\nIER-120 is a WiFi remote monitoring RTU for indoor facilities, equipment rooms and cabinets where a reliable wireless LAN is available. It combines local IO and Modbus communications for alarm monitoring, utility telemetry and machine-status collection in indoor deployments.\n\nThis page describes the standard I/O baseline, network scope, and application fit for buyers that need a WiFi RTU rather than a pure gateway.\n\n## IO Baseline\n\n| IO Type | Standard Count | Configuration Notes |\n| --- | --- | --- |\n| Digital input | 4 | Suitable for status, alarm and contact monitoring |\n| Digital output or relay | 2 | Suitable for relay-style control and auxiliary outputs |\n| Analog input | 2 | Suitable for 4-20mA or 0-10V process signals |\n\n## Network And Protocol Direction\n\n| Layer | Role | Configuration Notes |\n| --- | --- | --- |\n| WiFi | Indoor wireless uplink | Best fit for sites with stable local WiFi coverage |\n| RS485 | Modbus RTU field communication | Standard fieldbus path for downstream devices |\n| MQTT | Telemetry upload | Suitable for dashboard, broker and cloud visibility |\n| Ethernet | Setup or local interface if included | Useful for setup or hybrid cabinet integration |\n\nIER-120 should not be positioned as a 4G RTU, LoRa RTU or outdoor long-range wireless product.\n\n## Suitable Applications\n\n- factory utility monitoring\n- building equipment alarms\n- compressor room monitoring\n- chiller room monitoring\n- indoor cabinet monitoring\n- OEM machine status monitoring\n\n## Model Comparison\n\n| Model | Uplink | Best Fit |\n| --- | --- | --- |\n| IER-100 | Ethernet | Wired LAN and cabinet deployments |\n| IER-120 | WiFi | Indoor WiFi-enabled sites |\n| IER-140 | 4G LTE | Remote sites without wired LAN |\n\n## Product Boundary\n\n4G, LoRa, 5G, outdoor long-range wireless behavior, hazardous-area certification and specialized industrial approvals are outside the baseline IER-120 scope.\n\n## Compatible Accessories\n\n| Accessory | Project Use |\n| --- | --- |\n| WiFi antenna | Improve indoor cabinet or equipment-room wireless placement |\n| DIN rail power supply | Stable RTU and sensor power |\n| Door contact, alarm contact or float switch | Typical digital input sources |\n| Interposing relay | Safer output interface for alarm lamps, horns or auxiliary control |\n| 4-20mA pressure or level sensor | Typical analog input accessory for indoor monitoring panels |\n\nSee [Industrial IoT Accessories](/accessories), [DIN Rail Power Supply Guide](/knowledge/din-rail-power-supply-industrial-iot), and [4-20mA Pressure Sensor Wiring](/knowledge/4-20ma-pressure-sensor-rtu-wiring) for accessory notes.\n\n## Related Knowledge\n\n- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)\n- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)\n- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)\n- [WiFi Industrial IoT Gateway: When to Use WiFi Instead of Ethernet or 4G](/knowledge/wifi-industrial-iot-gateway)\n\n## FAQ\n\n### Does IER-120 include 4G?\n\nNo. 4G belongs to IER-140.\n\n### Does IER-120 include LoRa?\n\nNo. LoRaWAN products are separate model families.\n\n### What is the IO Baseline?\n\nThe standard I/O baseline is 4DI + 2DO/relay + 2AI.\n\n### Can exact WiFi range be published now?\n\nWiFi range should always be checked against the installed antenna, enclosure, site layout and RF environment.\n';
const __vite_glob_0_7 = '---\nid: "ier-140-4g-remote-relay-rtu"\ntitle: "IER-140 4G Remote Relay RTU"\nexcerpt: "4G LTE Cat1 remote relay RTU with MQTT, web dashboard, 2DI, 2DO, RS485, Modbus Master/Slave, scheduled control, alarm push, and OTA upgrade."\ncategory: "4G Remote Relay RTU"\nmodel: "IER-140"\nstatus: "Available for project inquiry"\nprimaryKeyword: "IoT remote relay RTU"\nroute: "/products/ier-140-4g-remote-relay-rtu"\norder: 7\nimageUrl: "/uploads/products/ier-140-4g-remote-relay-rtu.svg"\nspecGroups:\n  - title: "Hardware I/O"\n    specs:\n      - label: "Digital Inputs"\n        value: "2DI"\n      - label: "Digital Outputs"\n        value: "2DO or relay outputs"\n      - label: "Field Interface"\n        value: "1 x RS485"\n  - title: "Communication"\n    specs:\n      - label: "Uplink"\n        value: "4G LTE Cat1"\n      - label: "Best Fit"\n        value: "Pump, valve, cabinet, street light, and remote relay control"\n  - title: "Protocols"\n    specs:\n      - label: "Protocols"\n        value: "MQTT, Modbus Master, Modbus Slave"\n      - label: "Local Features"\n        value: "Web dashboard, scheduled control, alarm push, OTA upgrade"\n  - title: "Power & Mounting"\n    specs:\n      - label: "Power Supply"\n        value: "9-36VDC"\n      - label: "Operating Temperature"\n        value: "-20 to 70 C for remote control cabinets"\n      - label: "Configuration Method"\n        value: "Local web UI with remote dashboard parameter management"\n      - label: "Mounting"\n        value: "DIN rail cabinet deployment"\nselectionGuide:\n  chooseWhen:\n    - "The site is remote and needs 4G plus basic local relay control."\n    - "You need 2DI and 2DO for status and switching without moving to a larger RTU."\n    - "The use case is pump, valve, cabinet, street light, or remote relay automation."\n  notFitWhen:\n    - "You need more local signals such as 4DI, 4DO, or analog inputs."\n    - "The device is mainly for gate or barrier access rather than general remote control."\n    - "The site already has Ethernet or WiFi and does not need cellular uplink."\n  compareLinks:\n    - href: "/products/ier-141-4g-pump-valve-rtu"\n      label: "Compare with IER-141 Pump and Valve RTU"\n    - href: "/products/ieac-140-4g-gsm-gate-opener"\n      label: "Compare with IEAC-140 Gate Opener"\n    - href: "/products/ier-100-ethernet-industrial-rtu"\n      label: "Compare with IER-100 Ethernet RTU"\nbomGroups:\n  - title: "Remote Cabinet BOM"\n    items:\n      - "9-36VDC power supply or site DC source"\n      - "External 4G antenna"\n      - "SIM card with APN settings"\n      - "DIN rail enclosure or protected control box"\n  - title: "Control Interface"\n    items:\n      - "Dry-contact status inputs"\n      - "Interposing relay or contactor for DO output"\n      - "RS485 cable to Modbus meter or instrument"\n      - "Alarm routing worksheet for dashboard, SMS, or email"\npreSalesFaq:\n  - question: "Can relay behavior and timing be adapted for our control workflow?"\n    answer: "Yes. Pulse logic, schedule behavior, alarm rules, and command mapping can be configured for the required control workflow."\n  - question: "Do you offer evaluation support for pump, valve, or cabinet projects?"\n    answer: "Yes. Evaluation support can include signal review, relay interface planning, and MQTT or dashboard workflow setup."\n  - question: "Can the product be OEM-branded?"\n    answer: "Yes. OEM labeling and product documentation are available for branding programs."\n---\n\n## 4G Remote Relay RTU For Field Control\n\nIER-140 is a 4G LTE Cat1 remote relay RTU for sites that need remote monitoring and relay-style control without wired internet. It combines digital inputs, relay outputs, RS485 Modbus integration and cloud connectivity for pumps, valves, cabinets, generators, alarms and remote equipment.\n\nThis page describes the standard product role, IO baseline and deployment fit for industrial buyers comparing 4G relay RTUs.\n\n## Product Role\n\n| Function Area | Role | Configuration Notes |\n| --- | --- | --- |\n| 4G LTE Cat1 | Primary wireless uplink for remote sites | Single-uplink cellular architecture for distributed deployments |\n| MQTT | Telemetry publishing and command workflow | Suitable for broker, dashboard and cloud telemetry workflows |\n| Web dashboard | Remote status, control and configuration | Suitable for fleet visibility and operator access |\n| Digital input | 2DI for status, alarm or dry-contact signals | Typical use: status feedback, alarm contact and cabinet signals |\n| Digital output | 2DO or relay outputs for remote control | Typical use: pump, valve, light or auxiliary relay control |\n| RS485 | Local fieldbus interface | Standard Modbus RTU integration path |\n| Modbus Master | Poll meters, IO modules, controllers or instruments | Suitable for local telemetry expansion |\n| Modbus Slave | Expose RTU data to local master systems | Suitable for local integration or supervisory polling |\n| Scheduled control | Time-based relay control | Suitable for routine control and timed operations |\n| Alarm push | Event notification for dashboard, email, SMS or webhook | Suitable for status change and exception handling |\n| OTA upgrade | Remote firmware upgrade | Suitable for remote lifecycle management |\n\n## Standard I/O Baseline\n\nThe standard baseline is:\n\n| IO Type | Standard Count | Typical Use |\n| --- | --- | --- |\n| Digital input | 2DI | Pump running feedback, valve position, cabinet door, alarm contact |\n| Digital output or relay | 2DO | Pump start/stop, valve open/close, light control, generator start signal |\n| RS485 | 1 port | Modbus meters, IO modules, VFDs, instruments or local controllers |\n\n## Remote Control Architecture\n\nField contacts connect to the 2DI inputs. Controlled equipment connects through the 2DO or relay outputs. RS485 connects local Modbus equipment when additional telemetry or control points are needed. The 4G LTE Cat1 uplink connects the RTU to MQTT and the web dashboard for remote visibility, command delivery, scheduled control, alarm push and OTA upgrade.\n\n## Target Applications\n\n- water pump remote control\n- water valve monitoring and control\n- power distribution cabinet monitoring\n- access control relay triggering\n- street light scheduling and remote switching\n- generator monitoring and start signal control\n- agricultural irrigation control\n- remote equipment alarm and status monitoring\n\n## Protocol And Control Direction\n\n| Capability | Configuration Direction |\n| --- | --- |\n| MQTT uplink | Publish DI, DO status, Modbus values, alarms and heartbeat |\n| MQTT downlink | Receive relay control, schedule updates and configuration commands |\n| Modbus Master | Poll downstream Modbus RTU devices over RS485 |\n| Modbus Slave | Allow local Modbus master to read status or write selected control registers |\n| Dashboard control | Remote relay control with user permission and operation logs |\n| Alarm push | Notify on DI change, offline status, Modbus exception or threshold rule |\n| OTA upgrade | Remote firmware update for lifecycle maintenance |\n\n## Product Boundary\n\nIER-140 should not be described as a safety PLC, emergency shutdown controller, certified fire alarm interface, elevator controller, medical device controller, or grid protection relay. High-risk control use must rely on local safety circuits and fail-safe design.\n\nExact LTE bands, relay contact rating, isolation voltage, surge level, IP rating, operating temperature, power input range, SIM compatibility, and MQTT security profile should follow the released hardware version and deployment design.\n\n## Compatible Accessories\n\n| Accessory | Project Use |\n| --- | --- |\n| 4G LTE external antenna | Improve cabinet, rural or weak-signal installations |\n| IoT SIM / M2M SIM | Cellular connectivity and APN setup |\n| DIN rail power supply | Stable RTU and relay control power |\n| Interposing relay or contactor interface | Pump, valve, light or generator auxiliary control |\n| Shielded RS485 cable | Connect Modbus meters, instruments or Remote IO modules |\n\nSee [Industrial IoT Accessories](/accessories), [4G Antenna Guide](/knowledge/4g-antenna-industrial-rtu), and [DIN Rail Power Supply Guide](/knowledge/din-rail-power-supply-industrial-iot) for accessory planning.\n\n## Related Products\n\n- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu)\n- [IER-120 WiFi Remote Monitoring RTU](/products/ier-120-wifi-remote-monitoring-rtu)\n- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)\n- [IEAC-140 4G GSM Gate Opener](/products/ieac-140-4g-gsm-gate-opener)\n\n## Related Knowledge\n\n- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)\n- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)\n- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)\n\n## FAQ\n\n### Is IER-140 a gateway or an RTU?\n\nIER-140 is positioned as an RTU because it includes local IO for direct field control. It can also act as a Modbus-to-MQTT edge device when polling RS485 Modbus equipment.\n\n### Does IER-140 support both uplink and downlink MQTT?\n\nYes. IER-140 is positioned for MQTT telemetry uplink and controlled downlink commands for relay control, schedule updates and configuration workflows.\n\n### Can it control pumps and valves directly?\n\nIt is designed for relay-style control of pumps, valves and similar equipment through the correct control circuit, contactor or interface layer.\n\n### Does it include WiFi or LoRa?\n\nNo. Following the IoTEdges model rule, IER-140 uses 4G LTE Cat1 as the single wireless uplink. WiFi and LoRa belong to separate model families.\n';
const __vite_glob_0_8 = '---\nid: "ier-141-4g-pump-valve-rtu"\ntitle: "IER-141 4G Pump & Valve RTU"\nexcerpt: "4G LTE Cat1 pump and valve RTU with 4DI, 4DO, 2AI, RS485, MQTT, Modbus Master/Slave, scheduled control, alarm push, and OTA upgrade."\ncategory: "4G Pump & Valve RTU"\nmodel: "IER-141"\nstatus: "Available for project inquiry"\nprimaryKeyword: "4G pump controller RTU"\nroute: "/products/ier-141-4g-pump-valve-rtu"\norder: 8\nimageUrl: "/uploads/products/ier-141-4g-pump-valve-rtu.svg"\nspecGroups:\n  - title: "Hardware I/O"\n    specs:\n      - label: "Digital Inputs"\n        value: "4DI"\n      - label: "Digital Outputs"\n        value: "4DO or relay outputs"\n      - label: "Analog Inputs"\n        value: "2AI for pressure, level, flow, or current transmitters"\n      - label: "Field Interface"\n        value: "1 x RS485"\n  - title: "Communication"\n    specs:\n      - label: "Uplink"\n        value: "4G LTE Cat1"\n      - label: "Best Fit"\n        value: "Pump stations, valve chambers, irrigation, and water cabinets"\n  - title: "Protocols"\n    specs:\n      - label: "Protocols"\n        value: "MQTT, Modbus Master, Modbus Slave"\n      - label: "Local Features"\n        value: "Scheduled control, alarm push, OTA upgrade"\n  - title: "Power & Mounting"\n    specs:\n      - label: "Power Supply"\n        value: "9-36VDC"\n      - label: "Operating Temperature"\n        value: "-20 to 70 C for water, utility, and irrigation cabinets"\n      - label: "Configuration Method"\n        value: "Local web UI with remote dashboard setup for alarms and schedules"\n      - label: "Mounting"\n        value: "DIN rail cabinet deployment"\nselectionGuide:\n  chooseWhen:\n    - "The site needs more field signals than a basic 2DI/2DO relay RTU."\n    - "You need 4DI, 4DO, and 2AI for pump, valve, irrigation, pressure, or level workflows."\n    - "The deployment is a water, utility, or agriculture cabinet that uses 4G as the uplink."\n  notFitWhen:\n    - "The application only needs a small relay RTU with minimal I/O."\n    - "The application is mainly dry-contact cabinet alarms and not analog process monitoring."\n    - "The site has wired Ethernet and does not need cellular deployment."\n  compareLinks:\n    - href: "/products/ier-140-4g-remote-relay-rtu"\n      label: "Compare with IER-140 Relay RTU"\n    - href: "/products/ier-142-4g-power-cabinet-rtu"\n      label: "Compare with IER-142 Power Cabinet RTU"\n    - href: "/knowledge/pump-control-rtu"\n      label: "Read the Pump Control RTU Guide"\nbomGroups:\n  - title: "Water Cabinet BOM"\n    items:\n      - "9-36VDC power supply"\n      - "External 4G antenna with cabinet feed-through"\n      - "SIM card and APN checklist"\n      - "DIN rail enclosure or irrigation cabinet space"\n  - title: "Pump & Valve Side"\n    items:\n      - "Pressure, level, or flow transmitter"\n      - "Float switch, run feedback, or fault contact"\n      - "Contactor or relay interface for pump and valve outputs"\n      - "RS485 cable for VFD, flow meter, or Modbus meter"\npreSalesFaq:\n  - question: "Can analog input scaling and alarm logic be matched to our sensors?"\n    answer: "Yes. Analog scaling, threshold logic, and dashboard display mapping can be configured for the selected pressure, level, or flow transmitters."\n  - question: "Do you support irrigation or water-project OEM variants?"\n    answer: "Yes. OEM and private-label options are available for agriculture, water, and utility deployments."\n  - question: "Can you help define the full pump control BOM?"\n    answer: "Yes. We can help define transmitter type, fault contact list, relay interface, RS485 devices, and cabinet-side accessory planning."\n---\n\n## 4G RTU For Pumps, Valves And Irrigation Cabinets\n\nIER-141 is a 4G LTE Cat1 pump and valve RTU for remote water, utility and agriculture sites that need more local signals than a basic 2DI/2DO relay controller. It combines dry-contact monitoring, analog transmitter inputs, relay outputs, RS485 Modbus integration and cloud connectivity for field control cabinets.\n\nThis page describes the standard product role, I/O baseline, and deployment fit for applications built around pumps, valves, pressure, and level signals.\n\n## Product Role\n\n| Function Area | Role | Configuration Notes |\n| --- | --- | --- |\n| 4G LTE Cat1 | Primary wireless uplink for remote pump and valve sites | Single-uplink cellular architecture for distributed assets |\n| MQTT | Telemetry publishing and command workflow | Suitable for broker, dashboard and cloud telemetry workflows |\n| Web dashboard | Remote status, control, alarms and schedule configuration | Suitable for operator visibility and remote management |\n| Digital input | 4DI for pump feedback, valve status, float switch or alarm contact | Typical use: run, fault, position and local status signals |\n| Digital output | 4DO or relay outputs for pump, valve, alarm or auxiliary control | Typical use: relay-style start, stop and open-close control |\n| Analog input | 2AI for pressure, level, flow or current transmitter | Typical use: process monitoring and threshold alarm logic |\n| RS485 | Local fieldbus interface for VFD, meter or controller data | Standard Modbus RTU integration path |\n| Modbus Master | Poll downstream Modbus RTU devices over RS485 | Suitable for local telemetry expansion |\n| Modbus Slave | Expose selected status and control registers to local systems | Suitable for local supervisory integration |\n| Scheduled control | Time-based pump or valve control | Suitable for routine control and irrigation workflows |\n| Alarm push | Event notification for abnormal status and thresholds | Suitable for exception and maintenance response |\n| OTA upgrade | Remote firmware upgrade | Suitable for remote lifecycle management |\n\n## Standard I/O Baseline\n\n| IO Type | Target Count | Typical Use |\n| --- | --- | --- |\n| Digital input | 4DI | Pump run feedback, pump fault, float switch, local/remote mode, valve position |\n| Digital output or relay | 4DO | Pump start/stop, valve open/close, alarm horn, auxiliary relay |\n| Analog input | 2AI | Pressure transmitter, tank level, flow signal or current sensor |\n| RS485 | 1 port | VFD, flow meter, energy meter, Modbus IO or local controller |\n\n## Target Applications\n\n- water pump station remote control\n- water valve chamber monitoring\n- irrigation pump and valve control\n- tank level and pump interlock monitoring\n- small water treatment cabinet telemetry\n- booster pump and pressure monitoring\n- agricultural irrigation scheduling\n\n## Pump And Valve Control Direction\n\n| Capability | Configuration Direction |\n| --- | --- |\n| Pump status | DI-based run/fault/local-auto status collection |\n| Valve status | DI-based open/close or position feedback |\n| Pressure/level | AI-based transmitter input |\n| VFD integration | RS485 Modbus polling for local drive telemetry |\n| Remote command | Dashboard or MQTT command with controlled permissions |\n| Schedule | Time-based pump or valve operation |\n| Alarm push | Pump fault, level alarm, pressure threshold, and offline notification |\n\n## Product Boundary\n\nIER-141 should not be described as a safety controller, certified pump protection relay, emergency shutdown system, fire pump controller, or grid protection device. Local safety circuits, motor protection, and site fail-safe logic should remain independent.\n\nExact relay rating, analog accuracy, LTE bands, IP rating, operating temperature, power input range, SIM compatibility, and MQTT security profile should follow the released hardware version and deployment design.\n\n## Compatible Accessories\n\n| Accessory | Project Use |\n| --- | --- |\n| 4G LTE external antenna | Remote pump stations, irrigation cabinets and rural sites |\n| 4-20mA pressure or level transmitter | Analog monitoring for pressure, tank level or flow-related signals |\n| Float switch or pump fault contact | Digital input feedback for pump and tank status |\n| Interposing relay or contactor interface | Pump start/stop, valve open/close or alarm output interface |\n| Shielded RS485 cable | Connect VFD, flow meter, energy meter or Modbus IO modules |\n\nSee [Industrial IoT Accessories](/accessories), [4G Antenna Guide](/knowledge/4g-antenna-industrial-rtu), and [4-20mA Pressure Sensor Wiring](/knowledge/4-20ma-pressure-sensor-rtu-wiring) for pump and valve accessory planning.\n\n## Related Products\n\n- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)\n- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu)\n- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)\n\n## Related Knowledge\n\n- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)\n- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)\n- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)\n- [Pump Control RTU: Signals, Relays, Pressure Inputs and Remote Monitoring](/knowledge/pump-control-rtu)\n\n## FAQ\n\n### How is IER-141 different from IER-140?\n\nIER-140 is the entry 2DI/2DO remote relay RTU. IER-141 is the pump and valve model with expanded I/O, including 4DI, 4DO, and 2AI for pressure, level, or flow signals.\n\n### Does IER-141 support MQTT downlink control?\n\nYes. IER-141 is positioned for MQTT command downlink covering relay control, schedule updates and remote configuration workflows.\n\n### Can it control a pump directly?\n\nIt is designed for relay-style pump control through the correct contactor or control circuit, not as a direct motor-power switch.\n\n### Does it include WiFi or LoRa?\n\nNo. IER-141 belongs to the 4G LTE Cat1 RTU family. WiFi and LoRa belong to separate IoTEdges model families.\n';
const __vite_glob_0_9 = '---\nid: "ier-142-4g-power-cabinet-rtu"\ntitle: "IER-142 4G Power Cabinet RTU"\nexcerpt: "4G LTE Cat1 power cabinet RTU with 8DI, 4DO, RS485, MQTT, Modbus Master/Slave, event alarms, scheduled control, and OTA upgrade."\ncategory: "4G Power Cabinet RTU"\nmodel: "IER-142"\nstatus: "Available for project inquiry"\nprimaryKeyword: "4G power cabinet RTU"\nroute: "/products/ier-142-4g-power-cabinet-rtu"\norder: 9\nimageUrl: "/uploads/products/ier-142-4g-power-cabinet-rtu.svg"\nspecGroups:\n  - title: "Hardware I/O"\n    specs:\n      - label: "Digital Inputs"\n        value: "8DI"\n      - label: "Digital Outputs"\n        value: "4DO or relay outputs"\n      - label: "Field Interface"\n        value: "1 x RS485"\n  - title: "Communication"\n    specs:\n      - label: "Uplink"\n        value: "4G LTE Cat1"\n      - label: "Best Fit"\n        value: "Power cabinets, ATS cabinets, generator rooms, alarm panels"\n  - title: "Protocols"\n    specs:\n      - label: "Protocols"\n        value: "MQTT, Modbus Master, Modbus Slave"\n      - label: "Local Features"\n        value: "Event alarms, heartbeat telemetry, OTA upgrade"\n  - title: "Power & Mounting"\n    specs:\n      - label: "Power Supply"\n        value: "9-36VDC"\n      - label: "Operating Temperature"\n        value: "-20 to 70 C for electrical cabinets and generator rooms"\n      - label: "Configuration Method"\n        value: "Local web UI with remote event and alarm configuration"\n      - label: "Mounting"\n        value: "DIN rail cabinet deployment"\nselectionGuide:\n  chooseWhen:\n    - "The cabinet needs many dry-contact inputs and a smaller number of outputs."\n    - "You need generator room, ATS, breaker, SPD, or alarm-panel event monitoring over 4G."\n    - "The application is centered on event capture and cabinet telemetry rather than analog process control."\n  notFitWhen:\n    - "You need analog transmitter inputs for pressure, level, or flow."\n    - "The application is mainly gate access control rather than cabinet status monitoring."\n    - "You only need simple protocol conversion with no local DI/DO."\n  compareLinks:\n    - href: "/products/ier-141-4g-pump-valve-rtu"\n      label: "Compare with IER-141 Pump and Valve RTU"\n    - href: "/products/ier-140-4g-remote-relay-rtu"\n      label: "Compare with IER-140 Relay RTU"\n    - href: "/blog/how-to-choose-power-cabinet-monitoring-rtu"\n      label: "Read the Power Cabinet RTU Guide"\nbomGroups:\n  - title: "Electrical Cabinet BOM"\n    items:\n      - "9-36VDC auxiliary power source"\n      - "External 4G antenna"\n      - "SIM card with stable remote-site coverage"\n      - "DIN rail mounting and terminal distribution"\n  - title: "Alarm & Metering Side"\n    items:\n      - "Breaker, ATS, SPD, or door dry-contact wiring"\n      - "Interposing relay for horn, lamp, or reset outputs"\n      - "RS485 cable for power meter or controller polling"\n      - "Alarm point list and event naming worksheet"\npreSalesFaq:\n  - question: "Can you help organize our alarm point list before ordering?"\n    answer: "Yes. We can help organize DI naming, event structure, controller connections, and alarm routing before deployment."\n  - question: "Is this suitable for OEM alarm-panel projects?"\n    answer: "Yes. It is suitable for OEM alarm-panel deployments that need a 4G telemetry layer for electrical cabinets, ATS panels, or generator-room status monitoring."\n  - question: "Can sample units be used with our existing power meter or ATS controller?"\n    answer: "Yes. Sample units can be used to verify RS485 polling, cabinet signals, and dashboard event flow with existing power meters or ATS controllers."\n---\n\n## 4G RTU For Power Cabinets, Generator Rooms And Dry-Contact Alarms\n\nIER-142 is a 4G LTE Cat1 power cabinet RTU for electrical cabinets, generator rooms, ATS cabinets and industrial alarm panels that need many dry-contact status inputs plus a smaller number of relay outputs. It combines cabinet alarm collection, breaker status, door contacts, generator alarms and RS485 Modbus data in one remote telemetry platform.\n\nThis page describes the standard product role, I/O baseline, and deployment fit for power-cabinet and alarm-panel monitoring applications.\n\n## Product Role\n\n| Function Area | Role | Configuration Notes |\n| --- | --- | --- |\n| 4G LTE Cat1 | Primary wireless uplink for cabinets without wired internet | Single-uplink cellular architecture for distributed cabinets |\n| MQTT | Event, status and heartbeat telemetry | Suitable for broker, dashboard and cloud event workflows |\n| Web dashboard | Cabinet status, event log, alarm and remote configuration | Suitable for alarm visibility and service review |\n| Digital input | 8DI for dry-contact status and alarm signals | Typical use: breaker, ATS, door, alarm and generator status |\n| Digital output | 4DO or relay outputs for reset, horn, lamp or auxiliary control | Typical use: reset, annunciation and auxiliary relay control |\n| RS485 | Local fieldbus interface for meters, generator controllers or ATS controllers | Standard Modbus RTU integration path |\n| Modbus Master | Poll cabinet meters or controllers over RS485 | Suitable for power and equipment telemetry expansion |\n| Modbus Slave | Expose cabinet status to local master systems | Suitable for local supervisory integration |\n| Event alarms | Push changes for DI status, offline status and Modbus exceptions | Suitable for event-driven monitoring and alerting |\n| OTA upgrade | Remote firmware upgrade | Suitable for remote lifecycle management |\n\n## IO Baseline\n\n| IO Type | Target Count | Typical Use |\n| --- | --- | --- |\n| Digital input | 8DI | Breaker status, door contact, SPD alarm, ATS status, generator alarm, dry-contact signals |\n| Digital output or relay | 4DO | Remote reset, horn, lamp, start signal or auxiliary relay |\n| RS485 | 1 port | Energy meter, generator controller, ATS controller or Modbus alarm module |\n\n## Target Applications\n\n- power distribution cabinet monitoring\n- generator room alarm collection\n- ATS cabinet status monitoring\n- transformer room auxiliary monitoring\n- industrial dry-contact alarm panel\n- telecom or utility cabinet status reporting\n- remote cabinet door and environmental alarm monitoring\n\n## Cabinet Monitoring Direction\n\n| Capability | Configuration Direction |\n| --- | --- |\n| DI event capture | Detect breaker, door, ATS, SPD, generator and alarm contact changes |\n| Event log | Store and publish alarm events for review and maintenance |\n| Modbus polling | Read power meters, generator controllers or ATS controllers over RS485 |\n| Remote output | Trigger reset, horn, lamp or auxiliary relay with controlled permissions |\n| MQTT telemetry | Publish status, events, heartbeat and Modbus values |\n| Dashboard alarm | Display active alarms and historical events |\n\n## Product Boundary\n\nIER-142 should not be described as a certified protection relay, arc-fault protection device, emergency shutdown controller, generator safety controller, fire alarm controller or grid protection system. Critical electrical protection should be handled by certified local protection equipment.\n\nExact relay rating, DI voltage range, isolation voltage, surge level, LTE bands, IP rating, operating temperature, power input range, SIM compatibility, and MQTT security profile should follow the released hardware version and deployment design.\n\n## Compatible Accessories\n\n| Accessory | Project Use |\n| --- | --- |\n| 4G LTE external antenna | Cabinet, generator room, telecom and utility site connectivity |\n| DIN rail power supply | Stable RTU and auxiliary sensor power |\n| Dry-contact alarm wiring kit | Breaker, ATS, SPD, door and generator alarm inputs |\n| Interposing relay | Horn, lamp, reset or auxiliary output interface |\n| Shielded RS485 cable | Connect power meters, generator controllers or ATS controllers |\n\nSee [Industrial IoT Accessories](/accessories), [4G Antenna Guide](/knowledge/4g-antenna-industrial-rtu), and [RS485 Cable and Shielding Guide](/knowledge/rs485-cable-shielding-guide) for power cabinet accessory planning.\n\n## Related Products\n\n- [IER-140 4G Remote Relay RTU](/products/ier-140-4g-remote-relay-rtu)\n- [IER-141 4G Pump & Valve RTU](/products/ier-141-4g-pump-valve-rtu)\n- [IER-100 Ethernet Industrial RTU](/products/ier-100-ethernet-industrial-rtu)\n- [IEIO-100 Modbus Remote IO Module](/products/ieio-100-modbus-remote-io-module)\n\n## Related Knowledge\n\n- [MQTT in Industrial IoT Monitoring](/knowledge/mqtt)\n- [Modbus for Industrial IoT Gateways and RTUs](/knowledge/modbus)\n- [RS485 Wiring for Modbus RTU Devices](/knowledge/rs485)\n- [How to Choose a Power Cabinet Monitoring RTU](/blog/how-to-choose-power-cabinet-monitoring-rtu)\n\n## FAQ\n\n### How is IER-142 different from IER-141?\n\nIER-141 is optimized for pump and valve control with analog inputs. IER-142 is optimized for power cabinets and alarm panels with more digital inputs and fewer analog requirements.\n\n### Can IER-142 read power meters?\n\nYes. IER-142 is positioned to read power meters, generator controllers and ATS controllers over RS485 Modbus.\n\n### Can it control a generator?\n\nIt is suitable for generator room monitoring and auxiliary relay output planning, but certified generator protection, start logic, and safety control require separate systems.\n\n### Does it include WiFi or LoRa?\n\nNo. IER-142 belongs to the 4G LTE Cat1 RTU family. WiFi and LoRa belong to separate IoTEdges model families.\n';
const markdownModules$2 = /* @__PURE__ */ Object.assign({
  "../content/products/ai-iot-dashboard-industrial-operations-platform.md": __vite_glob_0_0$2,
  "../content/products/ieac-140-4g-gsm-gate-opener.md": __vite_glob_0_1$1,
  "../content/products/ieg-100-ethernet-industrial-iot-gateway.md": __vite_glob_0_2$1,
  "../content/products/ieg-120-wifi-industrial-iot-gateway.md": __vite_glob_0_3$1,
  "../content/products/ieio-100-modbus-remote-io-module.md": __vite_glob_0_4$1,
  "../content/products/ier-100-ethernet-industrial-rtu.md": __vite_glob_0_5$1,
  "../content/products/ier-120-wifi-remote-monitoring-rtu.md": __vite_glob_0_6,
  "../content/products/ier-140-4g-remote-relay-rtu.md": __vite_glob_0_7,
  "../content/products/ier-141-4g-pump-valve-rtu.md": __vite_glob_0_8,
  "../content/products/ier-142-4g-power-cabinet-rtu.md": __vite_glob_0_9
});
function readProductSpecGroups(value) {
  if (!Array.isArray(value)) return [];
  return value.map((group) => {
    if (!group || typeof group !== "object") return null;
    const entry = group;
    const specs = Array.isArray(entry.specs) ? entry.specs.map((spec) => {
      if (!spec || typeof spec !== "object") return null;
      const specEntry = spec;
      const label = readString(specEntry.label);
      const specValue = readString(specEntry.value);
      return label && specValue ? { label, value: specValue } : null;
    }).filter((item) => Boolean(item)) : [];
    const title = readString(entry.title);
    return title && specs.length > 0 ? { title, specs } : null;
  }).filter((item) => Boolean(item));
}
function readProductSelectionGuide(value) {
  if (!value || typeof value !== "object") return void 0;
  const entry = value;
  const compareLinks = Array.isArray(entry.compareLinks) ? entry.compareLinks.map((link) => {
    if (!link || typeof link !== "object") return null;
    const linkEntry = link;
    const href = readString(linkEntry.href);
    const label = readString(linkEntry.label);
    return href && label ? { href, label } : null;
  }).filter((item) => Boolean(item)) : [];
  return {
    chooseWhen: Array.isArray(entry.chooseWhen) ? entry.chooseWhen.map((item) => readString(item)).filter(Boolean) : [],
    notFitWhen: Array.isArray(entry.notFitWhen) ? entry.notFitWhen.map((item) => readString(item)).filter(Boolean) : [],
    compareLinks
  };
}
function readProductBomGroups(value) {
  if (!Array.isArray(value)) return [];
  return value.map((group) => {
    if (!group || typeof group !== "object") return null;
    const entry = group;
    const title = readString(entry.title);
    const items = Array.isArray(entry.items) ? entry.items.map((item) => readString(item)).filter(Boolean) : [];
    return title && items.length > 0 ? { title, items } : null;
  }).filter((item) => Boolean(item));
}
function readProductFaq(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const entry = item;
    const question = readString(entry.question);
    const answer = readString(entry.answer);
    return question && answer ? { question, answer } : null;
  }).filter((item) => Boolean(item));
}
function createProductPage(path, markdown) {
  var _a;
  const { metadata, content } = parseFrontmatter(markdown);
  const fallbackId = ((_a = path.split("/").pop()) == null ? void 0 : _a.replace(/\.md$/, "")) || "product-page";
  const productId = readString(metadata.id, fallbackId);
  const specGroups = readProductSpecGroups(metadata.specGroups);
  const selectionGuide = readProductSelectionGuide(metadata.selectionGuide);
  const bomGroups = readProductBomGroups(metadata.bomGroups);
  const preSalesFaq = readProductFaq(metadata.preSalesFaq);
  return {
    id: productId,
    title: readString(metadata.title, "Untitled Product"),
    excerpt: readString(metadata.excerpt),
    content,
    imageUrl: resolveProductImageUrl(readOptionalString(metadata.imageUrl)),
    category: readString(metadata.category, "Industrial IoT Product"),
    model: readString(metadata.model),
    status: resolveProductStatus(readString(metadata.status)),
    primaryKeyword: readString(metadata.primaryKeyword),
    route: readString(metadata.route, `/products/${productId}`),
    order: readNumber(metadata.order),
    specGroups,
    specs: specGroups.flatMap((group) => group.specs),
    selectionGuide,
    bomGroups,
    preSalesFaq
  };
}
const productPages = Object.entries(markdownModules$2).map(([path, markdown]) => createProductPage(path, markdown)).filter((product) => isPublicProductStatus(product.status)).sort((a, b) => a.order - b.order);
const __vite_glob_0_0$1 = "---\nid: building-automation\ntitle: Building Automation\ndescription: Optimize building energy and equipment visibility through Modbus data collection and practical building monitoring architecture.\nimage: /uploads/solutions/building-automation-hero.svg\narchitectureImage: /uploads/solutions/building-automation-architecture.svg\nrecommendedProductType: Gateway\nrecommendedUplink: Ethernet first\ndeploymentEnvironment: HVAC rooms, building panels, equipment floors\niconKey: snowflake\nlink: /solutions/building-automation\norder: 5\ndetailedContent:\n  - Building automation projects often involve chillers, AHUs, thermostats, energy meters, IAQ monitors, and occupancy sensors. A practical starting point is to identify which devices already expose Modbus data and can be integrated quickly.\n  - By starting with Modbus data collection first, facility managers can build visibility over building performance without over-scoping the first hardware deployment.\n  - BACnet, OPC UA, and broader multi-protocol requirements can be reviewed as higher-tier integration paths when the project needs them.\nhardware:\n  - IEG-100 Ethernet gateway for Modbus device collection\n  - Edge gateway path for BACnet or OPC UA integration when required\n  - Smart HVAC thermostats\n  - Indoor Air Quality (IAQ) monitors\n  - Occupancy sensors\nsoftware:\n  - Floorplan layout visualization\n  - HVAC trend and schedule review\n  - Tenant energy report workflow\n  - Air quality index (AQI) dashboard\nrelatedProducts:\n  - title: IEG-100 Ethernet Industrial IoT Gateway\n    href: /products/ieg-100-ethernet-industrial-iot-gateway\n  - title: IER-142 4G Power Cabinet RTU\n    href: /products/ier-142-4g-power-cabinet-rtu\n  - title: IEIO-100 Modbus Remote IO Module\n    href: /products/ieio-100-modbus-remote-io-module\n---\n\n## Building Visibility\n\nStart with Modbus data collection for HVAC and energy devices, then expand into broader protocol integration when the building scope requires it.\n";
const __vite_glob_0_1 = "---\nid: factory-energy\ntitle: Factory Energy Monitoring\ndescription: Track power consumption across your entire production line to support energy management, reduce waste, and improve visibility.\nimage: /uploads/solutions/factory-energy-hero.svg\narchitectureImage: /uploads/solutions/factory-energy-architecture.svg\nrecommendedProductType: Gateway or RTU\nrecommendedUplink: Ethernet first\ndeploymentEnvironment: Factory cabinets and LAN-connected workshops\niconKey: zap\nlink: /solutions/factory-energy\norder: 1\ndetailedContent:\n  - In manufacturing environments, understanding and controlling energy consumption is critical. Factory energy monitoring connects Modbus power meters, production assets, and dashboards so teams can see peak demand, hidden waste, and operating patterns.\n  - By capturing real-time metrics across production lines, factory managers can optimize schedules, compare baseline consumption, and prepare better energy management reports.\n  - Integration starts with validated IoTEdges gateway, RTU, and Remote IO product paths. The final hardware selection should follow the meter protocol, cabinet layout, local IO needs, and uplink method of the project.\nhardware:\n  - IEG-100 Ethernet gateway for wired Modbus meter collection\n  - IER-100 Ethernet RTU when local DI/DO/AI signals are required\n  - IEIO-100 Remote IO modules for distributed signal expansion\n  - Split-core Current Transformers (CT)\n  - Modbus RTU / TCP power meters\nsoftware:\n  - Real-time energy consumption dashboard\n  - Energy baseline and peak demand trend analysis\n  - Automated energy reports\n  - Threshold alarms via configured notification channels\nrelatedProducts:\n  - title: IEG-100 Ethernet Industrial IoT Gateway\n    href: /products/ieg-100-ethernet-industrial-iot-gateway\n  - title: IER-142 4G Power Cabinet RTU\n    href: /products/ier-142-4g-power-cabinet-rtu\n  - title: IER-100 Ethernet Industrial RTU\n    href: /products/ier-100-ethernet-industrial-rtu\n  - title: IEIO-100 Modbus Remote IO Module\n    href: /products/ieio-100-modbus-remote-io-module\nrelatedResources:\n  - title: Achieving ISO 50001 with Real-Time Energy Monitoring\n    href: /blog/energy-monitoring-iso-50001\n  - title: How to Choose the Right Modbus to MQTT Gateway\n    href: /blog/how-to-choose-modbus-mqtt-gateway\n  - title: Modbus for Industrial IoT Gateways and RTUs\n    href: /knowledge/modbus\n---\n\n## Factory Energy Monitoring\n\nBuild a practical path from meters and cabinet wiring to dashboards, reporting, and energy visibility across workshops and production assets.\n";
const __vite_glob_0_2 = "---\nid: gate-access-control\ntitle: Gate Access Control\ndescription: Remote gate, door, barrier and access cabinet control for European installers using a validation-aware 4G-first controller path.\nimage: /uploads/solutions/gate-access-control-hero.svg\narchitectureImage: /uploads/solutions/gate-access-control-architecture.svg\nrecommendedProductType: Access controller or relay RTU\nrecommendedUplink: 4G first\ndeploymentEnvironment: Gate pillars, barriers, access cabinets, remote entrances\niconKey: shield\nlink: /solutions/gate-access-control\norder: 6\ndetailedContent:\n  - Gate access control projects often need a simple way to trigger a relay, authorize users, read door or gate status, and manage remote sites without running new network cables. In Europe, this search demand is often expressed as GSM gate opener, 4G gate opener, 4G intercom, remote access controller or RTU door controller.\n  - A practical architecture should start from 4G LTE rather than assuming long-term GSM availability. Country-level network support, SIM behavior, LTE bands, antenna performance and regulatory requirements must be checked before publishing final compatibility claims.\n  - IoTEdges positions this solution around a 4G-first remote access controller path, with GSM/2G described only as a possible legacy fallback after module and regional validation.\nhardware:\n  - IEAC-140 4G GSM Gate Opener for Europe-focused access projects\n  - Gate, door, barrier or lock relay interface after rating validation\n  - Door contact, gate status or alarm digital input path\n  - External antenna path for cabinets or remote entrances\n  - Local SIM and carrier validation for target European countries\nsoftware:\n  - Authorized access workflow planning\n  - Remote relay trigger and status monitoring concept\n  - Access event logging after firmware validation\n  - Installer setup workflow after product definition\n  - Optional dashboard, SMS, app or API workflow after validation\nrelatedProducts:\n  - title: IER-140 4G Remote Relay RTU\n    href: /products/ier-140-4g-remote-relay-rtu\n  - title: IEAC-140 4G GSM Gate Opener\n    href: /products/ieac-140-4g-gsm-gate-opener\nrelatedResources:\n  - title: How to Choose a 4G Gate Opener for Europe\n    href: /blog/how-to-choose-4g-gate-opener-europe\n  - title: GSM vs 4G Gate Opener for Europe\n    href: /knowledge/4g-gsm-gate-opener-europe\n---\n\n## Gate and Door Control\n\nUse a 4G-first architecture for gate, barrier, and remote entrance projects where installers need relay control, status feedback, and low-friction deployment without local LAN access.\n";
const __vite_glob_0_3 = "---\nid: smart-agriculture\ntitle: Smart Agriculture\ndescription: Track soil moisture, greenhouse climate, and irrigation equipment with an architecture that separates wired, LoRa, WiFi, and 4G paths.\nimage: /uploads/solutions/smart-agriculture-hero.svg\narchitectureImage: /uploads/solutions/smart-agriculture-architecture.svg\nrecommendedProductType: RTU or Remote IO\nrecommendedUplink: 4G or wired cabinet path\ndeploymentEnvironment: Greenhouses, irrigation cabinets, remote farm assets\niconKey: sprout\nlink: /solutions/smart-agriculture\norder: 4\ndetailedContent:\n  - Smart agriculture projects often combine soil sensors, greenhouse climate data, pump stations, irrigation valves, and remote dashboards. The right architecture depends heavily on distance, power availability, and whether the site can use wired cabinets, LoRa, WiFi, or cellular uplinks.\n  - For greenhouses and equipment rooms, wired Remote IO can be a practical first step. Field-wide LoRa or 4G products should remain validation-gated until wireless range, antenna, power, and regional frequency requirements are confirmed.\n  - IoTEdges should publish agriculture pages by application first, then connect them to product pages only after each wireless model has engineering evidence.\nhardware:\n  - Future LoRa or 4G RTU path after wireless and power validation\n  - IEIO-100 Remote IO modules for wired greenhouse cabinets\n  - Multi-depth soil moisture probes\n  - Environmental temperature and humidity sensors\n  - Solenoid valve controllers\nsoftware:\n  - Irrigation schedule dashboard\n  - Crop stress warning notifications\n  - Weather data integration after project scoping\n  - Historical sensor trend reporting\nrelatedProducts:\n  - title: IER-141 4G Pump & Valve RTU\n    href: /products/ier-141-4g-pump-valve-rtu\n  - title: IER-140 4G Remote Relay RTU\n    href: /products/ier-140-4g-remote-relay-rtu\n  - title: IEIO-100 Modbus Remote IO Module\n    href: /products/ieio-100-modbus-remote-io-module\n---\n\n## Smart Agriculture Deployment\n\nSeparate greenhouse cabinet monitoring, irrigation control, and field-wide wireless sensing into clear hardware paths before fixing the final product combination.\n";
const __vite_glob_0_4 = "---\nid: solar-energy\ntitle: Solar & Renewable Energy\ndescription: Monitor inverter data, site conditions, and renewable energy assets with practical gateway architecture for solar monitoring.\nimage: /uploads/solutions/solar-energy-hero.svg\narchitectureImage: /uploads/solutions/solar-energy-architecture.svg\nrecommendedProductType: Gateway\nrecommendedUplink: Ethernet first\ndeploymentEnvironment: Inverter cabinets and site LAN environments\niconKey: sun\nlink: /solutions/solar-energy\norder: 2\ndetailedContent:\n  - Managing distributed solar and renewable energy assets requires consistent access to inverter, meter, and site-condition data. A practical monitoring architecture starts by matching protocol support, cabinet networking, and the required uplink method to the site.\n  - Dashboards can help operators compare production trends, detect abnormal generation, and understand equipment behavior across sites. Advanced control or grid-management functions should be defined according to the operating workflow of the project.\n  - Ethernet gateway deployments are a strong fit for LAN-connected inverter cabinets, while 4G or LoRaWAN paths can be used for remote or distributed solar sites where wired networking is not practical.\nhardware:\n  - IEG-100 Ethernet gateway for LAN-connected inverter cabinets\n  - IEG-140 4G gateway for remote solar sites without reliable wired networking\n  - String combiner boxes\n  - Irradiance and temperature weather stations\n  - Modbus-capable solar inverters\nsoftware:\n  - Multi-site PV dashboard\n  - Inverter and meter trend visualization\n  - Performance ratio analysis\n  - Fault and threshold notification workflows\nrelatedProducts:\n  - title: IEG-100 Ethernet Industrial IoT Gateway\n    href: /products/ieg-100-ethernet-industrial-iot-gateway\n---\n\n## Solar and Renewable Monitoring\n\nUse a protocol-first architecture to collect inverter, meter, and site-condition data before expanding into multi-site renewable energy dashboards.\n";
const __vite_glob_0_5 = "---\nid: water-management\ntitle: Water Management\ndescription: Remote monitoring for pump stations, tank levels, flow meters, and water quality sensors across distributed sites.\nimage: /uploads/solutions/water-management-hero.svg\narchitectureImage: /uploads/solutions/water-management-architecture.svg\nrecommendedProductType: RTU and Remote IO\nrecommendedUplink: Ethernet or 4G\ndeploymentEnvironment: Pump stations, tanks, distributed utility cabinets\niconKey: droplets\nlink: /solutions/water-management\norder: 3\ndetailedContent:\n  - Water distribution and treatment systems need reliable telemetry from pumps, tanks, valves, meters, and water quality sensors. A practical solution starts by mapping local IO, Modbus devices, and uplink availability at each station.\n  - Dashboards can help operators monitor tank levels, pressure trends, pump status, and abnormal events. Automated control should be scoped carefully and validated against the site control philosophy.\n  - For IoTEdges planning, wired RTU and Remote IO paths are the safest first public pages. Cellular water monitoring remains a strong SEO topic, but final 4G RTU specifications should wait for module, band, and field validation.\nhardware:\n  - IER-100 Ethernet RTU for cabinet-based water telemetry\n  - IEIO-100 Remote IO modules for pump and level signal expansion\n  - Future IER-140 4G RTU after cellular validation\n  - Ultrasonic level sensors\n  - Water quality probes and flow or pressure transmitters\n  - Variable Frequency Drives (VFDs)\nsoftware:\n  - Pump station and tank dashboard\n  - Level, pressure, and flow trend analysis\n  - Tank level threshold alarms\n  - Maintenance history and event review\nrelatedProducts:\n  - title: IER-141 4G Pump & Valve RTU\n    href: /products/ier-141-4g-pump-valve-rtu\n  - title: IER-140 4G Remote Relay RTU\n    href: /products/ier-140-4g-remote-relay-rtu\n  - title: IER-100 Ethernet Industrial RTU\n    href: /products/ier-100-ethernet-industrial-rtu\n  - title: IEIO-100 Modbus Remote IO Module\n    href: /products/ieio-100-modbus-remote-io-module\n---\n\n## Water Monitoring Architecture\n\nMap signals, field devices, and uplink constraints first, then select the RTU and Remote IO path that fits pump stations, tanks, and distributed utility cabinets.\n";
const solutionIconsByKey = {
  zap: Zap,
  sun: Sun,
  droplets: Droplets,
  sprout: Sprout,
  snowflake: ThermometerSnowflake,
  shield: ShieldCheck
};
const defaultSolutionIcon = Zap;
const markdownModules$1 = /* @__PURE__ */ Object.assign({
  "../content/solutions/building-automation.md": __vite_glob_0_0$1,
  "../content/solutions/factory-energy.md": __vite_glob_0_1,
  "../content/solutions/gate-access-control.md": __vite_glob_0_2,
  "../content/solutions/smart-agriculture.md": __vite_glob_0_3,
  "../content/solutions/solar-energy.md": __vite_glob_0_4,
  "../content/solutions/water-management.md": __vite_glob_0_5
});
function readContentLinks(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.map((item) => {
    if (!item || typeof item !== "object") {
      return null;
    }
    const title = readString(item.title);
    const href = readString(item.href);
    if (!title || !href) {
      return null;
    }
    return { title, href };
  }).filter((item) => Boolean(item));
}
function createSolutionPage(path, markdown) {
  var _a;
  const { metadata, content } = parseFrontmatter(markdown);
  const fallbackId = ((_a = path.split("/").pop()) == null ? void 0 : _a.replace(/\.md$/, "")) || "solution-page";
  const id = readString(metadata.id, fallbackId);
  const iconKey = readString(metadata.iconKey, "zap");
  const link = readString(metadata.link, `/solutions/${id}`);
  return {
    id,
    title: readString(metadata.title, "Untitled Solution"),
    description: readString(metadata.description),
    content,
    status: resolveEditorialStatus(metadata.status),
    image: resolveSolutionImageUrl(readString(metadata.image)),
    architectureImage: readOptionalString(metadata.architectureImage),
    recommendedProductType: readString(metadata.recommendedProductType),
    recommendedUplink: readString(metadata.recommendedUplink),
    deploymentEnvironment: readString(metadata.deploymentEnvironment),
    detailedContent: readStringArray(metadata.detailedContent),
    hardware: readStringArray(metadata.hardware),
    software: readStringArray(metadata.software),
    relatedProducts: readContentLinks(metadata.relatedProducts),
    relatedResources: readContentLinks(metadata.relatedResources),
    iconKey: solutionIconsByKey[iconKey] ? iconKey : "zap",
    link,
    order: readNumber(metadata.order)
  };
}
const solutions = Object.entries(markdownModules$1).map(([path, markdown]) => createSolutionPage(path, markdown)).filter((solution) => isPublicEditorialStatus(solution.status)).sort((a, b) => a.order - b.order);
function getSolutionIcon(iconKey) {
  return solutionIconsByKey[iconKey] || defaultSolutionIcon;
}
function normalizeRoute(route) {
  return String(route || "").trim().replace(/\/+$/, "");
}
function byScoreAndOrder(left, right) {
  return right.score - left.score || left.order - right.order || left.title.localeCompare(right.title);
}
function dedupeScoredLinks(links, max = 4) {
  const deduped = /* @__PURE__ */ new Map();
  for (const link of links.sort(byScoreAndOrder)) {
    const existing = deduped.get(link.href);
    if (!existing || byScoreAndOrder(link, existing) < 0) {
      deduped.set(link.href, link);
    }
  }
  return Array.from(deduped.values()).sort(byScoreAndOrder).slice(0, max).map(({ score: _score, order: _order, ...link }) => link);
}
function productHrefMatches(product, href) {
  const normalizedHref = normalizeRoute(href);
  return normalizedHref === normalizeRoute(product.route) || normalizedHref === normalizeRoute(`/products/${product.id}`);
}
function solutionToLink(solution) {
  return {
    title: solution.title,
    href: normalizeRoute(solution.link) || `/solutions/${solution.id}`,
    score: 0,
    order: solution.order
  };
}
function knowledgeToLink(page) {
  return {
    title: page.title,
    href: `/knowledge/${page.id}`,
    score: 0,
    order: page.order
  };
}
function blogToLink(post) {
  return {
    title: post.title,
    href: `/blog/${post.id}`,
    score: 0,
    order: post.order ?? 0
  };
}
function resolveInternalRouteTitle(href) {
  const normalizedHref = normalizeRoute(href);
  const product = productPages.find((item) => productHrefMatches(item, normalizedHref));
  if (product) return product.title;
  const solution = solutions.find((item) => normalizeRoute(item.link) === normalizedHref || normalizeRoute(`/solutions/${item.id}`) === normalizedHref);
  if (solution) return solution.title;
  const knowledge = knowledgePages.find((item) => normalizeRoute(`/knowledge/${item.id}`) === normalizedHref);
  if (knowledge) return knowledge.title;
  const blog = blogPosts.find((item) => normalizeRoute(`/blog/${item.id}`) === normalizedHref);
  if (blog) return blog.title;
  return null;
}
function getRelatedLinksForProduct(product) {
  const relatedSolutions = dedupeScoredLinks(
    solutions.filter((solution) => solution.relatedProducts.some((link) => productHrefMatches(product, link.href))).map((solution) => ({ ...solutionToLink(solution), score: 4 }))
  );
  const relatedKnowledge = dedupeScoredLinks(
    knowledgePages.filter((page) => page.relatedProducts.includes(product.id)).map((page) => ({ ...knowledgeToLink(page), score: 4 }))
  );
  const relatedBlog = dedupeScoredLinks(
    blogPosts.filter((post) => post.relatedProducts.includes(product.id)).map((post, index) => ({ ...blogToLink({ ...post, order: index }), score: 4 }))
  );
  return { relatedSolutions, relatedKnowledge, relatedBlog };
}
function getRelatedLinksForKnowledge(page) {
  const pageRoute = normalizeRoute(`/knowledge/${page.id}`);
  const productIds = new Set(page.relatedProducts);
  const relatedSolutions = dedupeScoredLinks(
    solutions.map((solution) => {
      let score = 0;
      if (solution.relatedResources.some((link) => normalizeRoute(link.href) === pageRoute)) {
        score += 4;
      }
      const sharedProducts = solution.relatedProducts.filter(
        (link) => productPages.some((product) => productIds.has(product.id) && productHrefMatches(product, link.href))
      ).length;
      score += sharedProducts;
      return score > 0 ? { ...solutionToLink(solution), score } : null;
    }).filter((item) => Boolean(item))
  );
  const relatedBlog = dedupeScoredLinks(
    blogPosts.map((post, index) => {
      let score = 0;
      if (post.relatedResources.some((href) => normalizeRoute(href) === pageRoute)) {
        score += 4;
      }
      const sharedProducts = post.relatedProducts.filter((productId) => productIds.has(productId)).length;
      score += sharedProducts;
      return score > 0 ? { ...blogToLink({ ...post, order: index }), score } : null;
    }).filter((item) => Boolean(item))
  );
  return { relatedSolutions, relatedBlog };
}
function getRelatedLinksForSolution(solution) {
  const solutionRoute = normalizeRoute(solution.link) || normalizeRoute(`/solutions/${solution.id}`);
  const solutionProductIds = new Set(
    productPages.filter((product) => solution.relatedProducts.some((link) => productHrefMatches(product, link.href))).map((product) => product.id)
  );
  const relatedKnowledge = dedupeScoredLinks(
    knowledgePages.map((page) => {
      let score = 0;
      const sharedProducts = page.relatedProducts.filter((productId) => solutionProductIds.has(productId)).length;
      score += sharedProducts;
      if (solution.relatedResources.some((link) => normalizeRoute(link.href) === normalizeRoute(`/knowledge/${page.id}`))) {
        score += 4;
      }
      return score > 0 ? { ...knowledgeToLink(page), score } : null;
    }).filter((item) => Boolean(item))
  );
  const relatedBlog = dedupeScoredLinks(
    blogPosts.map((post, index) => {
      let score = 0;
      if (post.relatedResources.some((href) => normalizeRoute(href) === solutionRoute)) {
        score += 4;
      }
      const sharedProducts = post.relatedProducts.filter((productId) => solutionProductIds.has(productId)).length;
      score += sharedProducts;
      return score > 0 ? { ...blogToLink({ ...post, order: index }), score } : null;
    }).filter((item) => Boolean(item))
  );
  return { relatedKnowledge, relatedBlog };
}
function getRelatedLinksForBlog(post) {
  const postProductIds = new Set(post.relatedProducts);
  const directResourceRoutes = new Set(post.relatedResources.map(normalizeRoute));
  const relatedSolutions = dedupeScoredLinks(
    solutions.map((solution) => {
      let score = 0;
      const solutionRoute = normalizeRoute(solution.link) || normalizeRoute(`/solutions/${solution.id}`);
      if (directResourceRoutes.has(solutionRoute)) {
        score += 4;
      }
      const sharedProducts = solution.relatedProducts.filter(
        (link) => productPages.some((product) => postProductIds.has(product.id) && productHrefMatches(product, link.href))
      ).length;
      score += sharedProducts;
      return score > 0 ? { ...solutionToLink(solution), score } : null;
    }).filter((item) => Boolean(item))
  );
  const relatedKnowledge = dedupeScoredLinks(
    knowledgePages.map((page) => {
      let score = 0;
      if (directResourceRoutes.has(normalizeRoute(`/knowledge/${page.id}`))) {
        score += 4;
      }
      const sharedProducts = page.relatedProducts.filter((productId) => postProductIds.has(productId)).length;
      score += sharedProducts;
      return score > 0 ? { ...knowledgeToLink(page), score } : null;
    }).filter((item) => Boolean(item))
  );
  return { relatedSolutions, relatedKnowledge };
}
const splitTableRow = (line) => {
  const trimmed = line.trim();
  const withoutEdges = trimmed.replace(/^\|/, "").replace(/\|$/, "");
  return withoutEdges.split("|").map((cell) => cell.trim());
};
const isTableDivider = (line) => {
  const cells = splitTableRow(line);
  return cells.length > 1 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
};
const createTableCell = (value, tagName) => ({
  type: "tableCell",
  data: {
    hName: tagName
  },
  children: value ? [
    {
      type: "text",
      value
    }
  ] : []
});
const createTableRow = (cells, cellTagName) => ({
  type: "tableRow",
  data: {
    hName: "tr"
  },
  children: cells.map((cell) => createTableCell(cell, cellTagName))
});
function remarkPipeTables() {
  return (tree) => {
    const visit = (node) => {
      if (!(node == null ? void 0 : node.children)) return;
      node.children = node.children.map((child) => {
        var _a;
        if (child.type !== "paragraph" || ((_a = child.children) == null ? void 0 : _a.length) !== 1 || child.children[0].type !== "text") {
          visit(child);
          return child;
        }
        const lines = String(child.children[0].value || "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
        if (lines.length < 3 || !lines[0].includes("|") || !isTableDivider(lines[1])) {
          return child;
        }
        const header = splitTableRow(lines[0]);
        const bodyRows = lines.slice(2).map(splitTableRow);
        const columnCount = header.length;
        if (columnCount < 2 || bodyRows.some((row) => row.length !== columnCount)) {
          return child;
        }
        return {
          type: "table",
          data: {
            hName: "table"
          },
          align: new Array(columnCount).fill(null),
          children: [createTableRow(header, "th"), ...bodyRows.map((row) => createTableRow(row, "td"))]
        };
      });
      node.children.forEach(visit);
    };
    visit(tree);
  };
}
function MarkdownContent({ children }) {
  return /* @__PURE__ */ jsx(
    Markdown,
    {
      remarkPlugins: [remarkPipeTables],
      components: {
        table: ({ children: tableChildren }) => /* @__PURE__ */ jsx("div", { className: "my-6 overflow-x-auto rounded-lg border border-slate-700", children: /* @__PURE__ */ jsx("table", { className: "m-0 min-w-full divide-y divide-slate-700", children: tableChildren }) }),
        thead: ({ children: theadChildren }) => /* @__PURE__ */ jsx("thead", { className: "bg-slate-950/80", children: theadChildren }),
        tbody: ({ children: tbodyChildren }) => /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-slate-800", children: tbodyChildren }),
        th: ({ children: thChildren }) => /* @__PURE__ */ jsx("th", { className: "px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-200", children: thChildren }),
        td: ({ children: tdChildren }) => /* @__PURE__ */ jsx("td", { className: "px-4 py-3 align-top text-sm text-slate-300", children: tdChildren })
      },
      children
    }
  );
}
function RelatedLinksSection({ title, description, links }) {
  if (links.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-3", style: { fontFamily: "var(--font-display)" }, children: title }),
    description ? /* @__PURE__ */ jsx("p", { className: "mb-5 text-sm leading-relaxed text-slate-400", children: description }) : null,
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: links.map((link) => /* @__PURE__ */ jsxs(
      Link,
      {
        to: link.href,
        className: "flex items-center justify-between gap-4 rounded-lg border border-slate-700 bg-slate-900 p-4 text-sm font-bold text-slate-200 transition-colors hover:border-blue-500/50 hover:text-blue-300",
        children: [
          link.title,
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 shrink-0" })
        ]
      },
      link.href
    )) })
  ] });
}
function QuoteRequestModal({
  isOpen,
  onClose,
  title,
  description,
  lockedInquiryType,
  lockedInquirySubject,
  lockedInquirySource,
  analyticsFormName,
  submitLabel,
  successTitle,
  successMessage,
  successChecklist
}) {
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 px-4 py-6 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-3xl rounded-2xl border border-slate-700 bg-slate-800 shadow-2xl", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: onClose,
        "aria-label": "Close inquiry form",
        className: "absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:bg-slate-700 hover:text-white",
        children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "border-b border-slate-700 px-6 py-6 sm:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "pr-12 text-3xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-sm leading-relaxed text-slate-400", children: description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "px-6 py-6 sm:px-8", children: /* @__PURE__ */ jsx(
      QuoteRequestForm,
      {
        lockedInquiryType,
        lockedInquirySubject,
        lockedInquirySource,
        analyticsFormName,
        submitLabel,
        successTitle,
        successMessage,
        successChecklist,
        onSuccessSecondaryAction: onClose,
        successSecondaryLabel: "Close"
      }
    ) })
  ] }) });
}
function BlogPostPage() {
  const { id } = useParams();
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const post = blogPosts.find((p) => p.id === id);
  if (!post) {
    return /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 min-h-screen pt-32 pb-20 text-center text-slate-300", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white mb-4", children: "Article Not Found" }),
      /* @__PURE__ */ jsx(Link, { to: "/blog", className: "text-blue-400 hover:text-blue-300", children: "← Back to Blog" })
    ] });
  }
  const relatedProducts = post.relatedProducts.map((productId) => productPages.find((product) => product.id === productId)).filter((product) => Boolean(product));
  const { relatedSolutions, relatedKnowledge } = getRelatedLinksForBlog(post);
  const relatedResources = post.relatedResources.map((href) => {
    var _a;
    const blogMatch = href.match(/^\/blog\/([^/]+)$/);
    const knowledgeMatch = href.match(/^\/knowledge\/([^/]+)$/);
    const matchingBlog = blogMatch ? blogPosts.find((item) => item.id === blogMatch[1]) : null;
    const matchingKnowledge = knowledgeMatch ? knowledgePages.find((item) => item.id === knowledgeMatch[1]) : null;
    return {
      href,
      title: (matchingBlog == null ? void 0 : matchingBlog.title) || (matchingKnowledge == null ? void 0 : matchingKnowledge.title) || resolveInternalRouteTitle(href) || ((_a = href.split("/").filter(Boolean).pop()) == null ? void 0 : _a.replace(/-/g, " ")) || href
    };
  });
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 min-h-screen pt-24 pb-20 text-slate-300", children: [
    /* @__PURE__ */ jsx(
      QuoteRequestModal,
      {
        isOpen: isInquiryOpen,
        onClose: () => setIsInquiryOpen(false),
        title: `Discuss ${post.title}`,
        description: "Use this form to ask for matching products, solution fit, or a quotation path related to this article.",
        lockedInquiryType: "Blog Inquiry",
        lockedInquirySubject: post.title,
        lockedInquirySource: `/blog/${post.id}`,
        analyticsFormName: "blog_inquiry_modal",
        submitLabel: "Request Recommendation",
        successTitle: "Article Inquiry Received",
        successMessage: "We received your article-driven inquiry and will reply with the most relevant hardware or solution path.",
        successChecklist: [
          "Your inquiry stays linked to this article topic for internal triage.",
          "We will normally reply with matching products, solution fit, or next technical questions.",
          "Include quantity, network type, and protocol scope if you submit another request."
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
        " Back to Blog"
      ] }),
      /* @__PURE__ */ jsxs("article", { className: "bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "w-full h-64 sm:h-96", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: post.imageUrl,
            alt: post.title,
            className: "w-full h-full object-cover",
            referrerPolicy: "no-referrer"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "p-8 sm:p-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-8 border-b border-slate-700 pb-8", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 bg-slate-900 px-3 py-1 rounded-full border border-slate-700", children: [
              /* @__PURE__ */ jsx(Tag, { className: "w-4 h-4 text-blue-400" }),
              post.category
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4 text-blue-400" }),
              post.date
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(User, { className: "w-4 h-4 text-blue-400" }),
              post.author
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "prose prose-invert prose-blue max-w-none prose-headings:font-display prose-h1:text-3xl prose-h1:text-white prose-h2:text-2xl prose-h2:text-slate-100 prose-h2:mt-8 prose-h2:mb-4 prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6 prose-li:text-slate-300 prose-li:mb-2 prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-6 prose-strong:text-white", children: /* @__PURE__ */ jsx(MarkdownContent, { children: post.content }) }),
          /* @__PURE__ */ jsx("section", { className: "mt-12 rounded-xl border border-blue-500/20 bg-blue-500/10 p-6 sm:p-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
              /* @__PURE__ */ jsx("p", { className: "mb-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-300", children: "Need A Hardware Recommendation?" }),
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Turn this article into a project conversation" }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-slate-300", children: "Tell us your application, network type, protocol scope, and target quantity. We will map this topic to the right IoTEdges product or solution path." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setIsInquiryOpen(true),
                  "data-analytics-event": "cta_click",
                  "data-analytics-category": "blog",
                  "data-analytics-label": `Blog Inquiry - ${post.title}`,
                  "data-analytics-destination": "blog_inquiry_modal",
                  className: "inline-flex items-center gap-2 rounded bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-950 transition-all hover:bg-slate-200",
                  children: [
                    "Request Recommendation ",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/contact",
                  "data-analytics-event": "cta_click",
                  "data-analytics-category": "blog",
                  "data-analytics-label": `Blog Contact - ${post.title}`,
                  "data-analytics-destination": "/contact",
                  className: "inline-flex items-center gap-2 rounded border border-slate-600 px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-100 transition-all hover:bg-slate-800",
                  children: [
                    "Go To Contact ",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              )
            ] })
          ] }) }),
          (relatedProducts.length > 0 || relatedResources.length > 0 || relatedSolutions.length > 0 || relatedKnowledge.length > 0) && /* @__PURE__ */ jsxs("div", { className: "mt-12 grid grid-cols-1 gap-8 border-t border-slate-700 pt-8", children: [
            relatedProducts.length > 0 && /* @__PURE__ */ jsxs("section", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-5", style: { fontFamily: "var(--font-display)" }, children: "Related Products" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: relatedProducts.map((product) => /* @__PURE__ */ jsxs(
                Link,
                {
                  to: `/products/${product.id}`,
                  className: "flex items-center justify-between gap-4 bg-slate-900 border border-slate-700 p-4 rounded-lg text-sm font-bold text-slate-200 hover:border-blue-500/50 hover:text-blue-300 transition-colors",
                  children: [
                    product.title,
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 shrink-0" })
                  ]
                },
                product.id
              )) })
            ] }),
            relatedResources.length > 0 && /* @__PURE__ */ jsxs("section", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-5", style: { fontFamily: "var(--font-display)" }, children: "Related Resources" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: relatedResources.map((resource) => /* @__PURE__ */ jsxs(
                Link,
                {
                  to: resource.href,
                  className: "flex items-center justify-between gap-4 bg-slate-900 border border-slate-700 p-4 rounded-lg text-sm font-bold text-slate-200 hover:border-blue-500/50 hover:text-blue-300 transition-colors",
                  children: [
                    resource.title,
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 shrink-0" })
                  ]
                },
                resource.href
              )) })
            ] }),
            /* @__PURE__ */ jsx(
              RelatedLinksSection,
              {
                title: "Related Solutions",
                description: "Application pages that align with the products or routes referenced in this article.",
                links: relatedSolutions
              }
            ),
            /* @__PURE__ */ jsx(
              RelatedLinksSection,
              {
                title: "Related Knowledge",
                description: "Technical guides that support the protocol, wiring, or deployment topics in this article.",
                links: relatedKnowledge
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
const getStatusStyles$1 = (status) => {
  switch (status) {
    case "Published":
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
    case "Preview":
      return "border-amber-500/30 bg-amber-500/10 text-amber-300";
    case "Available for project inquiry":
      return "border-blue-500/30 bg-blue-500/10 text-blue-300";
    default:
      return "border-slate-700 bg-slate-950 text-slate-300";
  }
};
const getSpecValue = (product, labels) => {
  const spec = product.specs.find((item) => labels.includes(item.label));
  return spec == null ? void 0 : spec.value;
};
const getProductListMeta = (product) => {
  const uplink = getSpecValue(product, ["Uplink", "Primary Uplink", "Deployment"]) || (product.category.includes("Software") ? "Software platform" : "Project-specific");
  const bestFor = getSpecValue(product, ["Best Fit", "Target Market", "Typical Users", "Primary Role"]) || product.excerpt;
  const ioParts = [
    getSpecValue(product, ["Digital Inputs"]),
    getSpecValue(product, ["Digital Outputs", "Relay Outputs"]),
    getSpecValue(product, ["Analog Inputs"]),
    getSpecValue(product, ["Field Interface", "Interface"])
  ].filter(Boolean);
  const ioSummary = ioParts.length > 0 ? ioParts.join(" / ") : "See full model details";
  return { uplink, bestFor, ioSummary };
};
function ProductList() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-950 min-h-screen pt-24 pb-20 text-slate-300", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-slate-800 bg-slate-900/70", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.24em] text-blue-400 mb-5", children: "IoTEdges Products" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6", style: { fontFamily: "var(--font-display)" }, children: "Industrial IoT gateways, RTUs, Remote IO modules and dashboard software" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-400 leading-relaxed", children: "Explore IoTEdges gateways, RTUs, remote relay controllers, Remote IO modules and AI dashboard software for industrial monitoring, control and data acquisition projects." })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12", children: [
        { icon: Network, title: "Separate uplinks", text: "Ethernet, WiFi, 4G and LoRaWAN are treated as separate model families." },
        { icon: Cpu, title: "Protocol boundaries", text: "Baseline gateways focus on Modbus RTU/TCP and MQTT, with advanced protocols kept out of first pages." },
        { icon: ShieldCheck, title: "Project ready", text: "Model pages describe target configurations, dashboard fit and engineering discussion points for real projects." },
        { icon: Cable, title: "Accessory planning", text: "Recommended antennas, RS485 wiring, power supplies, relay interfaces and sensors help customers prepare a complete project BOM." }
      ].map((item) => /* @__PURE__ */ jsxs("div", { className: "border border-slate-800 bg-slate-900 p-6 rounded-lg", children: [
        /* @__PURE__ */ jsx(item.icon, { className: "w-6 h-6 text-blue-400 mb-4" }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-white mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 leading-relaxed", children: item.text })
      ] }, item.title)) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr] gap-6 mb-12", children: [
        /* @__PURE__ */ jsxs("section", { className: "border border-slate-800 bg-slate-900 rounded-lg p-7", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-4", style: { fontFamily: "var(--font-display)" }, children: "Choose the product family that matches the project" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-slate-400 mb-4", children: "Match the uplink, IO count, protocol scope, and control function to the actual installation before narrowing down the model." }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-slate-400", children: "Wired Ethernet fits cabinet and LAN projects. WiFi or 4G makes sense only when the site actually needs wireless uplink. If the project needs direct field signals, compare RTUs and Remote IO modules first." })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "border border-slate-800 bg-slate-900 rounded-lg p-7", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-white mb-4", children: "Start with these pages" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: [
            { href: "/products/ieg-100-ethernet-industrial-iot-gateway", label: "IEG-100 Ethernet Industrial IoT Gateway" },
            { href: "/products/ier-100-ethernet-industrial-rtu", label: "IER-100 Ethernet Industrial RTU" },
            { href: "/products/ier-140-4g-remote-relay-rtu", label: "IER-140 4G Remote Relay RTU" },
            { href: "/products/ieio-100-modbus-remote-io-module", label: "IEIO-100 Modbus Remote IO Module" },
            { href: "/knowledge/modbus", label: "Modbus buying guide" }
          ].map((item) => /* @__PURE__ */ jsxs(Link, { to: item.href, className: "flex items-center justify-between gap-4 rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-bold text-slate-200 hover:border-blue-500/50 hover:text-blue-300 transition-colors", children: [
            item.label,
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 shrink-0" })
          ] }, item.href)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: productPages.map((product) => {
        const meta = getProductListMeta(product);
        return /* @__PURE__ */ jsxs("article", { className: "bg-slate-900 border border-slate-800 rounded-lg overflow-hidden flex flex-col hover:border-blue-500/50 transition-colors", children: [
          /* @__PURE__ */ jsx(Link, { to: `/products/${product.id}`, className: "block aspect-[16/10] overflow-hidden border-b border-slate-800 bg-slate-950", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: product.imageUrl,
              alt: product.title,
              className: "h-full w-full object-cover transition-transform duration-500 hover:scale-105",
              referrerPolicy: "no-referrer"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-7 flex flex-1 flex-col", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 mb-5", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold", children: product.category }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold", children: product.model })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: `rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${getStatusStyles$1(product.status)}`, children: product.status }),
              /* @__PURE__ */ jsx("span", { className: "rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300", children: meta.uplink })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-4", style: { fontFamily: "var(--font-display)" }, children: /* @__PURE__ */ jsx(Link, { to: `/products/${product.id}`, className: "hover:text-blue-400 transition-colors", children: product.title }) }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed mb-5 flex-1", children: product.excerpt }),
            /* @__PURE__ */ jsxs("div", { className: "mb-6 grid grid-cols-1 gap-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-slate-800 bg-slate-950 px-3 py-2", children: [
                /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500", children: "Best For" }),
                /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs leading-relaxed text-slate-300", children: meta.bestFor })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-slate-800 bg-slate-950 px-3 py-2", children: [
                /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500", children: "I/O Summary" }),
                /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs leading-relaxed text-slate-300", children: meta.ioSummary })
              ] }),
              product.specs.length > 0 && /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-slate-800 bg-slate-950 px-3 py-2", children: [
                /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500", children: product.specs[0].label }),
                /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs leading-relaxed text-slate-300", children: product.specs[0].value })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: `/products/${product.id}`, className: "inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-blue-400 hover:text-blue-300", children: [
              "View product ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ] })
          ] })
        ] }, product.id);
      }) })
    ] })
  ] });
}
const getStatusStyles = (status) => {
  switch (status) {
    case "Published":
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
    case "Preview":
      return "border-amber-500/30 bg-amber-500/10 text-amber-300";
    case "Available for project inquiry":
      return "border-blue-500/30 bg-blue-500/10 text-blue-300";
    default:
      return "border-slate-700 bg-slate-950 text-slate-300";
  }
};
function ProductDetail() {
  const { id } = useParams();
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const product = productPages.find((item) => item.id === id);
  const inquiryChecklist = [
    "Country and target market",
    "Estimated quantity or sample request",
    "Required uplink: Ethernet, WiFi, or 4G",
    "Required DI / DO / AI / AO or relay count",
    "Protocol or device list such as Modbus meter, PLC, inverter, or sensor",
    "Any OEM, logo, enclosure, or firmware customization request"
  ];
  const { relatedSolutions, relatedKnowledge, relatedBlog } = product ? getRelatedLinksForProduct(product) : { relatedSolutions: [], relatedKnowledge: [], relatedBlog: [] };
  if (!product) {
    return /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 min-h-screen pt-32 pb-20 text-center text-slate-300", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white mb-4", children: "Product Not Found" }),
      /* @__PURE__ */ jsx(Link, { to: "/products", className: "text-blue-400 hover:text-blue-300", children: "← Back to Products" })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-950 min-h-screen pt-24 pb-20 text-slate-300", children: [
    /* @__PURE__ */ jsx(
      QuoteRequestModal,
      {
        isOpen: isInquiryOpen,
        onClose: () => setIsInquiryOpen(false),
        title: `Inquire ${product.model}`,
        description: `Send a quote request for ${product.title} without leaving this page. The inquiry will stay linked to the current product.`,
        lockedInquiryType: "Product Inquiry",
        lockedInquirySubject: `${product.model} - ${product.title}`,
        lockedInquirySource: `/products/${product.id}`,
        analyticsFormName: "product_inquiry_modal",
        submitLabel: "Inquire This Product",
        successTitle: "Product Inquiry Received",
        successMessage: "We received your product inquiry and will reply with configuration fit, next technical questions, or quotation details.",
        successChecklist: [
          "Your request stays linked to this product model and page context.",
          "We will usually confirm fit, quantity path, and any missing technical requirements.",
          "If needed, submit another inquiry with target market, protocol list, and I/O count."
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/products", className: "inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
        " Back to Products"
      ] }),
      /* @__PURE__ */ jsxs("article", { className: "bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[16/8] w-full overflow-hidden border-b border-slate-800 bg-slate-950", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: product.imageUrl,
            alt: product.title,
            className: "h-full w-full object-cover",
            referrerPolicy: "no-referrer"
          }
        ) }),
        /* @__PURE__ */ jsxs("header", { className: "p-8 sm:p-12 border-b border-slate-800", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-blue-300 font-bold bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5" }),
              " ",
              product.category
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold border border-slate-700 px-3 py-1 rounded-full", children: product.model }),
            /* @__PURE__ */ jsx("span", { className: `text-[10px] uppercase tracking-[0.2em] font-bold border px-3 py-1 rounded-full ${getStatusStyles(product.status)}`, children: product.status })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5", style: { fontFamily: "var(--font-display)" }, children: product.title }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-400 leading-relaxed", children: product.excerpt }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setIsInquiryOpen(true),
                "data-analytics-event": "cta_click",
                "data-analytics-category": "product",
                "data-analytics-label": `Product Inquiry - ${product.title}`,
                "data-analytics-destination": "product_inquiry_modal",
                className: "inline-flex items-center gap-2 rounded bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-blue-500",
                children: [
                  "Request Quote ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/products",
                className: "inline-flex items-center gap-2 rounded border border-slate-700 px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-200 transition-all hover:bg-slate-800",
                children: "View All Products"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-8 sm:p-12", children: [
          product.specGroups.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-5 flex flex-col gap-2", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.24em] text-blue-300", children: "Key Specs" }),
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Procurement-ready product snapshot" }),
              /* @__PURE__ */ jsx("p", { className: "max-w-3xl text-sm leading-relaxed text-slate-400", children: "Review the core I/O, field interface, uplink method, and protocol scope for this model." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mb-5 rounded-lg border border-slate-800 bg-slate-950/70 px-4 py-3 text-xs leading-relaxed text-slate-400", children: "Final decisions should follow the released hardware datasheet and the approved project configuration." }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-5 xl:grid-cols-2", children: product.specGroups.map((group) => /* @__PURE__ */ jsxs("section", { className: "rounded-lg border border-slate-800 bg-slate-950/60 p-5", children: [
              /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white", children: group.title }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: group.specs.map((spec) => /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-slate-800 bg-slate-900 px-4 py-3", children: [
                /* @__PURE__ */ jsx("div", { className: "mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500", children: spec.label }),
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium leading-relaxed text-slate-200", children: spec.value })
              ] }, `${product.id}-${group.title}-${spec.label}`)) })
            ] }, `${product.id}-${group.title}`)) })
          ] }),
          product.selectionGuide && /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-5 flex flex-col gap-2", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.24em] text-blue-300", children: "Model Selection Guide" }),
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "How to decide if this is the right model" }),
              /* @__PURE__ */ jsx("p", { className: "max-w-3xl text-sm leading-relaxed text-slate-400", children: "Confirm the uplink, product type, and project fit before you request pricing." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-5 xl:grid-cols-[1fr_1fr_0.9fr]", children: [
              /* @__PURE__ */ jsxs("section", { className: "rounded-lg border border-slate-800 bg-slate-950/60 p-5", children: [
                /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white", children: "Choose This Model When" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: product.selectionGuide.chooseWhen.map((item) => /* @__PURE__ */ jsx("div", { className: "rounded-md border border-slate-800 bg-slate-900 px-4 py-3 text-sm leading-relaxed text-slate-200", children: item }, item)) })
              ] }),
              /* @__PURE__ */ jsxs("section", { className: "rounded-lg border border-slate-800 bg-slate-950/60 p-5", children: [
                /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white", children: "Consider Another Model When" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: product.selectionGuide.notFitWhen.map((item) => /* @__PURE__ */ jsx("div", { className: "rounded-md border border-slate-800 bg-slate-900 px-4 py-3 text-sm leading-relaxed text-slate-200", children: item }, item)) })
              ] }),
              /* @__PURE__ */ jsxs("section", { className: "rounded-lg border border-slate-800 bg-slate-950/60 p-5", children: [
                /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white", children: "Also Compare" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: product.selectionGuide.compareLinks.map((item) => /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: item.href,
                    className: "flex items-center justify-between gap-3 rounded-md border border-slate-800 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-blue-500/50 hover:text-blue-300",
                    children: [
                      item.label,
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 shrink-0" })
                    ]
                  },
                  item.href
                )) })
              ] })
            ] })
          ] }),
          product.bomGroups.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-5 flex flex-col gap-2", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.24em] text-blue-300", children: "Typical BOM" }),
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "What else you may need for the project" }),
              /* @__PURE__ */ jsx("p", { className: "max-w-3xl text-sm leading-relaxed text-slate-400", children: "Common project accessories, interfaces, and supporting parts for this model." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-5 xl:grid-cols-2", children: product.bomGroups.map((group) => /* @__PURE__ */ jsxs("section", { className: "rounded-lg border border-slate-800 bg-slate-950/60 p-5", children: [
              /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white", children: group.title }),
              /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 gap-3", children: group.items.map((item) => /* @__PURE__ */ jsx("li", { className: "rounded-md border border-slate-800 bg-slate-900 px-4 py-3 text-sm leading-relaxed text-slate-200", children: item }, item)) })
            ] }, `${product.id}-${group.title}`)) })
          ] }),
          product.preSalesFaq.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-5 flex flex-col gap-2", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.24em] text-blue-300", children: "Pre-Sales FAQ" }),
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Common questions" }),
              /* @__PURE__ */ jsx("p", { className: "max-w-3xl text-sm leading-relaxed text-slate-400", children: "Answers to common questions on samples, OEM branding, setup scope, and project support." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4", children: product.preSalesFaq.map((item) => /* @__PURE__ */ jsxs("section", { className: "rounded-lg border border-slate-800 bg-slate-950/60 p-5", children: [
              /* @__PURE__ */ jsx("h3", { className: "mb-3 text-base font-bold text-white", children: item.question }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-slate-300", children: item.answer })
            ] }, item.question)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "prose prose-invert prose-blue max-w-none prose-headings:font-display prose-h2:text-2xl prose-h2:text-white prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:text-slate-100 prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-strong:text-white prose-table:text-sm prose-th:text-white prose-td:text-slate-300 prose-a:text-blue-400", children: /* @__PURE__ */ jsx(MarkdownContent, { children: product.content }) }),
          (relatedSolutions.length > 0 || relatedKnowledge.length > 0 || relatedBlog.length > 0) && /* @__PURE__ */ jsxs("section", { className: "mt-12 grid grid-cols-1 gap-8 border-t border-slate-800 pt-8", children: [
            /* @__PURE__ */ jsx(
              RelatedLinksSection,
              {
                title: "Related Solutions",
                description: "Application pages that commonly map to this product family.",
                links: relatedSolutions
              }
            ),
            /* @__PURE__ */ jsx(
              RelatedLinksSection,
              {
                title: "Related Knowledge",
                description: "Technical guides and wiring notes tied to this model.",
                links: relatedKnowledge
              }
            ),
            /* @__PURE__ */ jsx(
              RelatedLinksSection,
              {
                title: "Related Articles",
                description: "Buyer-facing articles that help qualify this product in real projects.",
                links: relatedBlog
              }
            )
          ] }),
          /* @__PURE__ */ jsx("section", { className: "mt-12 border-t border-slate-800 pt-8", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-blue-500/20 bg-blue-500/10 p-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-5 flex flex-wrap items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h2", { className: "mb-2 text-xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Need a quotation?" }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm leading-relaxed text-slate-300", children: [
                  "Start an inquiry for ",
                  /* @__PURE__ */ jsx("strong", { children: product.model }),
                  ". The quote form is prefilled with this product and locked to the current item."
                ] })
              ] }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setIsInquiryOpen(true),
                  "data-analytics-event": "cta_click",
                  "data-analytics-category": "product",
                  "data-analytics-label": `Bottom Inquiry - ${product.title}`,
                  "data-analytics-destination": "product_inquiry_modal",
                  className: "inline-flex items-center gap-2 rounded bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-950 transition-all hover:bg-slate-200",
                  children: [
                    "Inquire This Product ",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-5 rounded-lg border border-slate-800 bg-slate-950/60 p-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "mb-3 text-sm font-bold uppercase tracking-[0.2em] text-white", children: "Information to include" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-2 sm:grid-cols-2", children: inquiryChecklist.map((item) => /* @__PURE__ */ jsx("div", { className: "rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-xs leading-relaxed text-slate-300", children: item }, item)) })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "mb-2 text-xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Need project accessories?" }),
            /* @__PURE__ */ jsx("p", { className: "mb-4 text-sm leading-relaxed text-slate-300", children: "Review recommended antennas, SIM/APN notes, RS485 wiring, DIN rail power supplies, relay interfaces, sensors and cabinet accessories for IoTEdges deployments." }),
            /* @__PURE__ */ jsxs(Link, { to: "/accessories", className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-300 hover:text-blue-200", children: [
              "View compatible accessories ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ] })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
const __vite_glob_0_0 = "---\nid: accessories-overview\neyebrow: Project Accessories\ntitle: Industrial IoT accessories for RTU, gateway and Remote IO projects\ndescription: Recommended and compatible accessories for IoTEdges project deployments, including 4G antennas, SIM/APN setup, RS485 wiring, DIN rail power supplies, relay interfaces, sensors, meters and gate opener installation parts.\noverviewCards:\n  - title: Project accessory guidance\n    text: Accessories are listed as recommended or compatible project items. Final selection depends on site wiring, cabinet design and local regulations.\n    iconKey: shield-check\n  - title: Installation-ready thinking\n    text: The goal is to help integrators understand the complete bill of materials beyond the main RTU, gateway or Remote IO module.\n    iconKey: cable\n  - title: Export-friendly support\n    text: For overseas projects, antenna, SIM, APN, power and wiring notes often decide whether installation succeeds quickly.\n    iconKey: radio-tower\ngroups:\n  - title: 4G, WiFi And RF Accessories\n    iconKey: radio-tower\n    description: Connectivity accessories for 4G RTUs, 4G gate openers, WiFi gateways and cabinet installations.\n    items:\n      - 4G LTE external antenna\n      - WiFi antenna\n      - Antenna extension cable\n      - SMA connector and cabinet feed-through\n      - IoT SIM / M2M SIM selection guidance\n      - APN and operator setup checklist\n  - title: RS485 And Modbus Wiring\n    iconKey: cable\n    description: Field wiring accessories for Modbus RTU, RS485 sensor networks and remote IO cabinets.\n    items:\n      - Shielded twisted-pair RS485 cable\n      - Pluggable terminal blocks\n      - RS485 surge protector\n      - RS485 isolation module\n      - End-of-line termination resistor\n      - Grounding and cable shielding accessories\n  - title: Power And Cabinet Installation\n    iconKey: zap\n    description: Power supply and panel accessories for industrial IoT gateway, RTU and Remote IO deployments.\n    items:\n      - 12V / 24V DC DIN rail power supply\n      - DIN rail mounting kit\n      - Industrial enclosure or control cabinet\n      - Fuse holder and terminal distribution\n      - Cable gland and strain relief\n      - Small UPS or backup power option\n  - title: DI, DO, Relay And Control Accessories\n    iconKey: sliders-horizontal\n    description: Interface accessories for digital input, relay output, dry contact and field control applications.\n    items:\n      - Interposing relay\n      - Contactor interface\n      - Dry contact signal wiring\n      - Alarm horn or indicator lamp\n      - Exit button\n      - Door or gate magnetic contact\n  - title: Sensors And Meters\n    iconKey: gauge\n    description: Project sensors and meters that commonly connect to RTUs, gateways and Remote IO modules.\n    items:\n      - 4-20mA pressure transmitter\n      - Level sensor\n      - Flow meter\n      - Temperature and humidity sensor\n      - Modbus energy meter\n      - Split-core CT clamp\n  - title: Gate Opener Project Accessories\n    iconKey: door-open\n    description: Recommended accessories for 4G gate opener, remote access controller and dry-contact relay projects.\n    items:\n      - 4G cabinet antenna\n      - Gate status contact\n      - Exit button\n      - Relay terminal wiring kit\n      - Weatherproof enclosure\n      - Installer SIM / APN checklist\nselectionGuides:\n  - title: How to Choose a 4G Antenna for Industrial RTU and Gate Opener Projects\n    href: /knowledge/4g-antenna-industrial-rtu\n    summary: LTE antenna, SIM, APN, cabinet mounting and weak-signal site notes for 4G products.\n  - title: RS485 Cable and Shielding Guide for Modbus RTU Installations\n    href: /knowledge/rs485-cable-shielding-guide\n    summary: Cable, shielding, grounding, termination and surge protection notes for RS485 projects.\n  - title: DIN Rail Power Supply Guide for Industrial IoT Gateways and RTUs\n    href: /knowledge/din-rail-power-supply-industrial-iot\n    summary: 12V/24V DC power, cabinet terminals, fuses and backup power planning.\n  - title: Dry Contact Relay Wiring for 4G Gate Openers and Remote Access Controllers\n    href: /knowledge/dry-contact-relay-wiring-gate-opener\n    summary: Relay COM/NO wiring, gate status contacts, exit buttons and safe integration boundaries.\n  - title: 4-20mA Pressure Sensor Wiring for RTU and Remote IO Projects\n    href: /knowledge/4-20ma-pressure-sensor-rtu-wiring\n    summary: Pressure transmitter wiring and scaling notes for pump, water and irrigation monitoring.\nproductAccessoryMap:\n  - product: IEAC-140 4G GSM Gate Opener\n    href: /products/ieac-140-4g-gsm-gate-opener\n    accessories: 4G antenna, IoT SIM, door contact, exit button, relay wiring terminals, weatherproof cabinet\n  - product: IER-140 / IER-141 / IER-142 4G RTU\n    href: /products/ier-140-4g-remote-relay-rtu\n    accessories: 4G antenna, DIN rail power supply, RS485 cable, pressure/level sensors, relay or contactor interface\n  - product: IEG-100 / IEG-120 Industrial IoT Gateway\n    href: /products/ieg-100-ethernet-industrial-iot-gateway\n    accessories: RS485 cable, Modbus energy meter, terminal blocks, Ethernet patch cable, WiFi antenna for WiFi models\n  - product: IEIO-100 Modbus Remote IO Module\n    href: /products/ieio-100-modbus-remote-io-module\n    accessories: Terminal blocks, shielded RS485 wiring, DI contacts, relay loads, 4-20mA sensors, DIN rail enclosure\n  - product: AI IoT Dashboard\n    href: /products/ai-iot-dashboard-industrial-operations-platform\n    accessories: Ingest token plan, gateway binding, SIM/APN checklist, device labels, register/metric mapping worksheet\nprojectKits:\n  - title: 4G Gate Opener Kit\n    iconKey: door-open\n    contents:\n      - IEAC-140 controller\n      - 4G antenna\n      - IoT SIM guidance\n      - gate status contact\n      - exit button wiring\n      - relay pulse setup\n  - title: Modbus MQTT Gateway Kit\n    iconKey: router\n    contents:\n      - IEG gateway\n      - RS485 cable\n      - Modbus meter or instrument\n      - terminal blocks\n      - MQTT broker settings\n      - register map worksheet\n  - title: Pump And Valve RTU Kit\n    iconKey: server\n    contents:\n      - IER-141 RTU\n      - 4G antenna\n      - pressure transmitter\n      - float switch\n      - relay interface\n      - pump alarm wiring\n  - title: Energy Monitoring Kit\n    iconKey: cpu\n    contents:\n      - Modbus energy meter\n      - CT clamps\n      - IEG gateway\n      - RS485 wiring\n      - 24V power supply\n      - dashboard mapping\nctaLabel: Request accessory BOM\nctaHref: /contact\n---\n\nInternal note: keep accessories content structured and let the page layout stay code-controlled.\n";
const markdownModules = /* @__PURE__ */ Object.assign({
  "../content/accessories/accessories-overview.md": __vite_glob_0_0
});
function readOverviewCards(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const entry = item;
    const title = readString(entry.title);
    const text = readString(entry.text);
    const iconKey = readString(entry.iconKey, "shield-check");
    return title && text ? { title, text, iconKey } : null;
  }).filter((item) => Boolean(item));
}
function readAccessoryGroups(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const entry = item;
    const title = readString(entry.title);
    const description = readString(entry.description);
    const iconKey = readString(entry.iconKey, "radio-tower");
    const items = readStringArray(entry.items);
    return title && description && items.length > 0 ? { title, description, iconKey, items } : null;
  }).filter((item) => Boolean(item));
}
function readSelectionGuides(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const entry = item;
    const title = readString(entry.title);
    const href = readString(entry.href);
    const summary = readString(entry.summary);
    return title && href && summary ? { title, href, summary } : null;
  }).filter((item) => Boolean(item));
}
function readProductAccessoryMap(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const entry = item;
    const product = readString(entry.product);
    const href = readString(entry.href);
    const accessories = readString(entry.accessories);
    return product && href && accessories ? { product, href, accessories } : null;
  }).filter((item) => Boolean(item));
}
function readProjectKits(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const entry = item;
    const title = readString(entry.title);
    const iconKey = readString(entry.iconKey, "server");
    const contents = readStringArray(entry.contents);
    return title && contents.length > 0 ? { title, iconKey, contents } : null;
  }).filter((item) => Boolean(item));
}
function createAccessoryPage(markdown) {
  const { metadata, content } = parseFrontmatter(markdown);
  return {
    id: readString(metadata.id, "accessories-overview"),
    eyebrow: readString(metadata.eyebrow, "Project Accessories"),
    title: readString(metadata.title, "Industrial IoT accessories for RTU, gateway and Remote IO projects"),
    description: readString(metadata.description),
    content,
    overviewCards: readOverviewCards(metadata.overviewCards),
    groups: readAccessoryGroups(metadata.groups),
    selectionGuides: readSelectionGuides(metadata.selectionGuides),
    productAccessoryMap: readProductAccessoryMap(metadata.productAccessoryMap),
    projectKits: readProjectKits(metadata.projectKits),
    ctaLabel: readString(metadata.ctaLabel, "Request accessory BOM"),
    ctaHref: readString(metadata.ctaHref, "/contact")
  };
}
const defaultAccessoryPage = {
  eyebrow: "Project Accessories",
  title: "Industrial IoT accessories for RTU, gateway and Remote IO projects",
  description: "Recommended and compatible accessories for IoTEdges project deployments, including 4G antennas, SIM/APN setup, RS485 wiring, DIN rail power supplies, relay interfaces, sensors, meters and gate opener installation parts.",
  overviewCards: [],
  groups: [],
  selectionGuides: [],
  productAccessoryMap: [],
  projectKits: [],
  ctaLabel: "Request accessory BOM",
  ctaHref: "/contact"
};
const firstMarkdown = Object.values(markdownModules)[0];
const accessoriesPage = firstMarkdown ? createAccessoryPage(firstMarkdown) : defaultAccessoryPage;
const accessoryIcons = {
  cable: Cable,
  cpu: Cpu,
  "door-open": DoorOpen,
  gauge: Gauge,
  "radio-tower": RadioTower,
  router: Router,
  server: Server,
  "shield-check": ShieldCheck,
  "sliders-horizontal": SlidersHorizontal,
  zap: Zap
};
function getAccessoryIcon(iconKey) {
  return accessoryIcons[iconKey] || ShieldCheck;
}
function Accessories() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-950 pt-24 pb-20 text-slate-300", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-slate-800 bg-slate-900/70", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-5 text-xs font-bold uppercase tracking-[0.24em] text-blue-400", children: accessoriesPage.eyebrow }),
      /* @__PURE__ */ jsx("h1", { className: "mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl", style: { fontFamily: "var(--font-display)" }, children: accessoriesPage.title }),
      /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-slate-400", children: accessoriesPage.description })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-12 grid gap-4 md:grid-cols-3", children: accessoriesPage.overviewCards.map((item) => {
        const Icon = getAccessoryIcon(item.iconKey);
        return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-slate-800 bg-slate-900 p-6", children: [
          /* @__PURE__ */ jsx(Icon, { className: "mb-4 h-6 w-6 text-blue-400" }),
          /* @__PURE__ */ jsx("h2", { className: "mb-2 text-lg font-bold text-white", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-slate-400", children: item.text })
        ] }, item.title);
      }) }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 lg:grid-cols-3", children: accessoriesPage.groups.map((group) => {
        const Icon = getAccessoryIcon(group.iconKey);
        return /* @__PURE__ */ jsxs("article", { className: "rounded-lg border border-slate-800 bg-slate-900 p-7", children: [
          /* @__PURE__ */ jsx(Icon, { className: "mb-5 h-8 w-8 text-blue-400" }),
          /* @__PURE__ */ jsx("h2", { className: "mb-3 text-xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: group.title }),
          /* @__PURE__ */ jsx("p", { className: "mb-5 text-sm leading-relaxed text-slate-400", children: group.description }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm text-slate-300", children: group.items.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" }),
            /* @__PURE__ */ jsx("span", { children: item })
          ] }, item)) })
        ] }, group.title);
      }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-10 max-w-3xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-extrabold text-white", style: { fontFamily: "var(--font-display)" }, children: "Accessory selection guides" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400", children: "These guides cover antenna, wiring, power, relay, and enclosure decisions that usually shape the final project BOM." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2", children: accessoriesPage.selectionGuides.map((guide) => /* @__PURE__ */ jsxs(Link, { to: guide.href, className: "rounded-lg border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-500/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-2 text-lg font-bold text-white", children: guide.title }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 text-sm leading-relaxed text-slate-400", children: guide.summary }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400", children: [
          "Read guide ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }, guide.href)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "border-y border-slate-800 bg-slate-900", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-10 max-w-3xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-extrabold text-white", style: { fontFamily: "var(--font-display)" }, children: "Accessories by IoTEdges product line" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400", children: "This table shows the accessory groups that typically accompany each product line. Exact brands, ratings, cable lengths, and enclosure details still depend on the installation." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-lg border border-slate-800", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-slate-800 text-sm", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-slate-950", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-300", children: "Product" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-300", children: "Recommended Accessories" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-slate-800 bg-slate-900", children: accessoriesPage.productAccessoryMap.map((row) => /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4 align-top font-semibold text-white", children: /* @__PURE__ */ jsx(Link, { to: row.href, className: "hover:text-blue-300", children: row.product }) }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4 align-top text-slate-300", children: row.accessories })
        ] }, row.product)) })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-extrabold text-white", style: { fontFamily: "var(--font-display)" }, children: "Common project kits" }),
          /* @__PURE__ */ jsx("p", { className: "max-w-3xl text-slate-400", children: "These are bundle examples, not fixed SKUs. They help distributors, installers, and system integrators prepare quotations around real project needs." })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: accessoriesPage.ctaHref, className: "inline-flex items-center gap-2 rounded bg-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-blue-500", children: [
          accessoriesPage.ctaLabel,
          " ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2", children: accessoriesPage.projectKits.map((kit) => {
        const Icon = getAccessoryIcon(kit.iconKey);
        return /* @__PURE__ */ jsxs("article", { className: "rounded-lg border border-slate-800 bg-slate-900 p-7", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded border border-blue-500/20 bg-blue-500/10 text-blue-400", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: kit.title })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: kit.contents.map((item) => /* @__PURE__ */ jsx("span", { className: "rounded border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-semibold text-slate-300", children: item }, item)) })
        ] }, kit.title);
      }) })
    ] })
  ] });
}
function KnowledgeList() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-950 min-h-screen pt-24 pb-20 text-slate-300", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-slate-800 bg-slate-900/70", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.24em] text-blue-400 mb-5", children: "IoTEdges Knowledge Base" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6", style: { fontFamily: "var(--font-display)" }, children: "Industrial IoT protocol and connectivity guides" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-400 leading-relaxed", children: "Reference pages for Modbus, MQTT, RS485, IO wiring, and field connectivity topics that map directly to product selection and project scope." })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-12", children: [
        { icon: BookOpen, title: "Search intent first", text: "Each page answers a technical buyer question before linking to products." },
        { icon: Network, title: "Protocol boundaries", text: "Baseline claims stay focused on Modbus, RS485 and MQTT until advanced protocols are validated." },
        { icon: Cpu, title: "Product fit", text: "Knowledge pages link to gateways, RTUs and Remote IO modules only where the fit is accurate." }
      ].map((item) => /* @__PURE__ */ jsxs("div", { className: "border border-slate-800 bg-slate-900 p-6 rounded-lg", children: [
        /* @__PURE__ */ jsx(item.icon, { className: "w-6 h-6 text-blue-400 mb-4" }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-white mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 leading-relaxed", children: item.text })
      ] }, item.title)) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr] gap-6 mb-12", children: [
        /* @__PURE__ */ jsxs("section", { className: "border border-slate-800 bg-slate-900 rounded-lg p-7", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-4", style: { fontFamily: "var(--font-display)" }, children: "Technical guides tied to real hardware decisions" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-slate-400 mb-4", children: "The knowledge base explains how Modbus, MQTT, RS485, digital IO, analog inputs, and field accessories fit into industrial IoT deployments. The goal is to answer specification, wiring, and product-selection questions before a buyer requests a quotation." }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-slate-400", children: "Most readers start with Modbus or MQTT, compare gateway versus RTU versus Remote IO, and then confirm wiring, antenna, and power-supply details for the final installation." })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "border border-slate-800 bg-slate-900 rounded-lg p-7", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-white mb-4", children: "Most useful guides" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: [
            { href: "/knowledge/modbus", label: "Modbus for Industrial IoT Gateways and RTUs" },
            { href: "/knowledge/mqtt", label: "MQTT in Industrial IoT Monitoring" },
            { href: "/knowledge/rs485", label: "RS485 Wiring for Modbus RTU Devices" },
            { href: "/knowledge/rtu-vs-gateway-vs-remote-io", label: "RTU vs Gateway vs Remote IO" },
            { href: "/knowledge/4g-antenna-industrial-rtu", label: "4G Antenna Guide for RTUs" }
          ].map((item) => /* @__PURE__ */ jsxs(Link, { to: item.href, className: "flex items-center justify-between gap-4 rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-bold text-slate-200 hover:border-blue-500/50 hover:text-blue-300 transition-colors", children: [
            item.label,
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 shrink-0" })
          ] }, item.href)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: knowledgePages.map((page) => /* @__PURE__ */ jsxs("article", { className: "bg-slate-900 border border-slate-800 rounded-lg overflow-hidden flex flex-col hover:border-blue-500/50 transition-colors", children: [
        /* @__PURE__ */ jsx(Link, { to: `/knowledge/${page.id}`, className: "block aspect-[16/10] overflow-hidden border-b border-slate-800 bg-slate-950", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: page.imageUrl,
            alt: page.title,
            className: "h-full w-full object-cover transition-transform duration-500 hover:scale-105",
            referrerPolicy: "no-referrer"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "p-7 flex flex-1 flex-col", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold mb-5", children: page.category }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-4", style: { fontFamily: "var(--font-display)" }, children: /* @__PURE__ */ jsx(Link, { to: `/knowledge/${page.id}`, className: "hover:text-blue-400 transition-colors", children: page.title }) }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed mb-8 flex-1", children: page.excerpt }),
          /* @__PURE__ */ jsxs(Link, { to: `/knowledge/${page.id}`, className: "inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-blue-400 hover:text-blue-300", children: [
            "Read guide ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] })
      ] }, page.id)) })
    ] })
  ] });
}
function KnowledgeDetail() {
  const { id } = useParams();
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const page = knowledgePages.find((item) => item.id === id);
  if (!page) {
    return /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 min-h-screen pt-32 pb-20 text-center text-slate-300", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white mb-4", children: "Knowledge Page Not Found" }),
      /* @__PURE__ */ jsx(Link, { to: "/knowledge", className: "text-blue-400 hover:text-blue-300", children: "← Back to Knowledge Base" })
    ] });
  }
  const relatedProducts = page.relatedProducts.map((productId) => productPages.find((product) => product.id === productId)).filter((product) => Boolean(product));
  const { relatedSolutions, relatedBlog } = getRelatedLinksForKnowledge(page);
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-950 min-h-screen pt-24 pb-20 text-slate-300", children: [
    /* @__PURE__ */ jsx(
      QuoteRequestModal,
      {
        isOpen: isInquiryOpen,
        onClose: () => setIsInquiryOpen(false),
        title: `Request Help For ${page.title}`,
        description: "Use this form to request hardware matching, wiring review, or a quotation path for the technical topic on this page.",
        lockedInquiryType: "Knowledge Inquiry",
        lockedInquirySubject: page.title,
        lockedInquirySource: `/knowledge/${page.id}`,
        analyticsFormName: "knowledge_inquiry_modal",
        submitLabel: "Request Hardware Match",
        successTitle: "Knowledge Inquiry Received",
        successMessage: "We received your technical inquiry and will reply with the most relevant product, solution, or wiring follow-up.",
        successChecklist: [
          "Your request stays linked to this knowledge page topic.",
          "We will usually reply with matching hardware, project fit, or missing engineering questions.",
          "For faster quoting, include country, quantity, uplink, and field I/O scope."
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/knowledge", className: "inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
        " Back to Knowledge Base"
      ] }),
      /* @__PURE__ */ jsxs("article", { className: "bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[16/8] w-full overflow-hidden border-b border-slate-800 bg-slate-950", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: page.imageUrl,
            alt: page.title,
            className: "h-full w-full object-cover",
            referrerPolicy: "no-referrer"
          }
        ) }),
        /* @__PURE__ */ jsxs("header", { className: "p-8 sm:p-12 border-b border-slate-800", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-blue-300 font-bold bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-6", children: [
            /* @__PURE__ */ jsx(BookOpen, { className: "w-3.5 h-3.5" }),
            " ",
            page.category
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5", style: { fontFamily: "var(--font-display)" }, children: page.title }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-400 leading-relaxed", children: page.excerpt })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-8 sm:p-12", children: [
          /* @__PURE__ */ jsx("div", { className: "prose prose-invert prose-blue max-w-none prose-headings:font-display prose-h2:text-2xl prose-h2:text-white prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:text-slate-100 prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-strong:text-white prose-table:text-sm prose-th:text-white prose-td:text-slate-300 prose-a:text-blue-400", children: /* @__PURE__ */ jsx(MarkdownContent, { children: page.content }) }),
          /* @__PURE__ */ jsx("section", { className: "mt-12 rounded-xl border border-blue-500/20 bg-blue-500/10 p-6 sm:p-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
              /* @__PURE__ */ jsx("p", { className: "mb-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-300", children: "Need A Matching Device?" }),
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Turn this technical topic into a hardware shortlist" }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-slate-300", children: "Tell us your project application, protocol, uplink, and local I/O scope. We will help map this topic to the right IoTEdges product or solution path." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setIsInquiryOpen(true),
                  "data-analytics-event": "cta_click",
                  "data-analytics-category": "knowledge",
                  "data-analytics-label": `Knowledge Inquiry - ${page.title}`,
                  "data-analytics-destination": "knowledge_inquiry_modal",
                  className: "inline-flex items-center gap-2 rounded bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-950 transition-all hover:bg-slate-200",
                  children: [
                    "Request Hardware Match ",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/contact",
                  "data-analytics-event": "cta_click",
                  "data-analytics-category": "knowledge",
                  "data-analytics-label": `Knowledge Contact - ${page.title}`,
                  "data-analytics-destination": "/contact",
                  className: "inline-flex items-center gap-2 rounded border border-slate-600 px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-100 transition-all hover:bg-slate-800",
                  children: [
                    "Go To Contact ",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              )
            ] })
          ] }) }),
          (relatedProducts.length > 0 || relatedSolutions.length > 0 || relatedBlog.length > 0) && /* @__PURE__ */ jsxs("section", { className: "mt-12 grid grid-cols-1 gap-8 border-t border-slate-800 pt-8", children: [
            relatedProducts.length > 0 && /* @__PURE__ */ jsxs("section", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-3", style: { fontFamily: "var(--font-display)" }, children: "Related Products" }),
              /* @__PURE__ */ jsx("p", { className: "mb-5 text-sm leading-relaxed text-slate-400", children: "Products that directly match this technical topic." }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: relatedProducts.map((product) => /* @__PURE__ */ jsxs(
                Link,
                {
                  to: `/products/${product.id}`,
                  className: "flex items-center justify-between gap-4 bg-slate-950 border border-slate-800 p-4 rounded-lg text-sm font-bold text-slate-200 hover:border-blue-500/50 hover:text-blue-300 transition-colors",
                  children: [
                    product.title,
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 shrink-0" })
                  ]
                },
                product.id
              )) })
            ] }),
            /* @__PURE__ */ jsx(
              RelatedLinksSection,
              {
                title: "Related Solutions",
                description: "Application pages where this protocol or wiring topic matters in deployment.",
                links: relatedSolutions
              }
            ),
            /* @__PURE__ */ jsx(
              RelatedLinksSection,
              {
                title: "Related Articles",
                description: "Buyer-facing articles that expand this topic into hardware or project decisions.",
                links: relatedBlog
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
function SolutionsList() {
  return /* @__PURE__ */ jsx("div", { className: "bg-slate-900 min-h-screen pt-24 pb-20 text-slate-300", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.24em] text-blue-400 mb-5", children: "IoTEdges Solutions" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6", style: { fontFamily: "var(--font-display)" }, children: "Industry Solutions" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto font-medium", children: "Explore industrial IoT solutions for factories, water systems, solar sites, agriculture, buildings and gate access projects. Each solution page links the application need to the right gateway, RTU, Remote IO and dashboard path." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr] gap-6 mb-12", children: [
      /* @__PURE__ */ jsxs("section", { className: "border border-slate-800 bg-slate-800 rounded-xl p-7", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-4", style: { fontFamily: "var(--font-display)" }, children: "Match the application to the right hardware path" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-slate-400 mb-4", children: "Use the application first, then confirm the gateway, RTU, Remote IO, accessories, and dashboard path that fit the project." }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-slate-400", children: "Factory energy, water systems, solar sites, agriculture, and gate access projects each push the product choice in a different direction." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "border border-slate-800 bg-slate-800 rounded-xl p-7", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-white mb-4", children: "High-intent entry pages" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: [
          { href: "/solutions/factory-energy", label: "Factory Energy Monitoring" },
          { href: "/solutions/water-management", label: "Water Management" },
          { href: "/solutions/solar-energy", label: "Solar and Renewable Energy" },
          { href: "/solutions/gate-access-control", label: "Gate Access Control" },
          { href: "/products", label: "Browse product families" }
        ].map((item) => /* @__PURE__ */ jsxs(Link, { to: item.href, className: "flex items-center justify-between gap-4 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-bold text-slate-200 hover:border-blue-500/50 hover:text-blue-300 transition-colors", children: [
          item.label,
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 shrink-0" })
        ] }, item.href)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: solutions.map((solution) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-xl hover:border-blue-500/50 transition-all flex flex-col group", children: [
      /* @__PURE__ */ jsx("div", { className: "h-48 overflow-hidden relative", children: (() => {
        const Icon = getSolutionIcon(solution.iconKey);
        return /* @__PURE__ */ jsxs(Fragment$1, { children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: solution.image,
              alt: solution.title,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
              referrerPolicy: "no-referrer"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center backdrop-blur-md", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }) })
        ] });
      })() }),
      /* @__PURE__ */ jsxs("div", { className: "p-8 flex-1 flex flex-col", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3", style: { fontFamily: "var(--font-display)" }, children: solution.title }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-6 leading-relaxed flex-1 text-sm", children: solution.description }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6 grid grid-cols-1 gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-slate-700 bg-slate-900 px-3 py-2", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500", children: "Recommended Product Type" }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs leading-relaxed text-slate-300", children: solution.recommendedProductType })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-slate-700 bg-slate-900 px-3 py-2", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500", children: "Recommended Uplink" }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs leading-relaxed text-slate-300", children: solution.recommendedUplink })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-slate-700 bg-slate-900 px-3 py-2", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500", children: "Typical Deployment" }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs leading-relaxed text-slate-300", children: solution.deploymentEnvironment })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: solution.link,
            className: "inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest hover:text-blue-300 transition-colors",
            children: [
              "View Solution ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        ) })
      ] })
    ] }, solution.id)) })
  ] }) });
}
function SolutionDetail() {
  const { id } = useParams();
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const solution = solutions.find((s) => s.id === id);
  const inquiryChecklist = [
    "Country and project application",
    "Number of sites, panels, gates, pumps, or assets",
    "Preferred uplink such as Ethernet, WiFi, or 4G",
    "Required field signals such as DI, DO, AI, AO, RS485, or dry contacts",
    "Existing devices to integrate such as meter, PLC, inverter, VFD, or access controller",
    "Any OEM branding, dashboard, or deployment preference"
  ];
  const { relatedKnowledge, relatedBlog } = solution ? getRelatedLinksForSolution(solution) : { relatedKnowledge: [], relatedBlog: [] };
  if (!solution) {
    return /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 min-h-screen pt-32 pb-20 text-center text-slate-300", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white mb-4", children: "Solution Not Found" }),
      /* @__PURE__ */ jsx(Link, { to: "/solutions", className: "text-blue-400 hover:text-blue-300", children: "← Back to Solutions" })
    ] });
  }
  const Icon = getSolutionIcon(solution.iconKey);
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-950 text-slate-200", children: [
    /* @__PURE__ */ jsx(
      QuoteRequestModal,
      {
        isOpen: isInquiryOpen,
        onClose: () => setIsInquiryOpen(false),
        title: `Inquire ${solution.title}`,
        description: `Start a solution inquiry for ${solution.title} without leaving this page. The inquiry will stay linked to the current solution.`,
        lockedInquiryType: "Solution Inquiry",
        lockedInquirySubject: solution.title,
        lockedInquirySource: solution.link,
        analyticsFormName: "solution_inquiry_modal",
        submitLabel: "Inquire This Solution",
        successTitle: "Solution Inquiry Received",
        successMessage: "We received your solution inquiry and will reply with the most relevant hardware path, deployment fit, or quotation follow-up.",
        successChecklist: [
          "Your request stays linked to this solution page and its application context.",
          "We will usually confirm site type, uplink fit, field signals, and matching product path.",
          "If needed, submit another inquiry with site count, country, and existing device list."
        ]
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative w-full h-[50vh] min-h-[400px]", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: solution.image,
          alt: solution.title,
          className: "w-full h-full object-cover",
          referrerPolicy: "no-referrer"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-slate-900/90 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent flex flex-col justify-center px-4 sm:px-6 lg:px-8 border-b border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto w-full", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/solutions", className: "inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm font-medium", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          " Back to Solutions"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center backdrop-blur-md", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight", style: { fontFamily: "var(--font-display)" }, children: solution.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-slate-300 mb-8 max-w-3xl leading-relaxed font-medium", children: solution.description }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setIsInquiryOpen(true), "data-analytics-event": "cta_click", "data-analytics-category": "solution", "data-analytics-label": `Solution Inquiry - ${solution.title}`, "data-analytics-destination": "solution_inquiry_modal", className: "inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded transition-all hover:bg-blue-500", children: [
            "Request Quote ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/products", "data-analytics-event": "cta_click", "data-analytics-category": "solution", "data-analytics-label": `View Products - ${solution.title}`, "data-analytics-destination": "/products", className: "inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-white text-xs font-bold uppercase tracking-widest rounded transition-all hover:bg-slate-900", children: "View Products" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "border-b border-slate-800 bg-slate-900/60 py-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-5 flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.24em] text-blue-300", children: "Quick Solution Fit" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Fast project-matching summary" }),
        /* @__PURE__ */ jsx("p", { className: "max-w-3xl text-sm leading-relaxed text-slate-400", children: "Use these three checkpoints to confirm whether this solution matches the right hardware path, uplink choice, and deployment environment before requesting a quote." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-slate-800 bg-slate-950/70 p-5", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500", children: "Recommended Product Type" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium leading-relaxed text-slate-200", children: solution.recommendedProductType })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-slate-800 bg-slate-950/70 p-5", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500", children: "Recommended Uplink" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium leading-relaxed text-slate-200", children: solution.recommendedUplink })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-slate-800 bg-slate-950/70 p-5", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500", children: "Typical Deployment" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium leading-relaxed text-slate-200", children: solution.deploymentEnvironment })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-slate-950 border-b border-slate-800", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-6", style: { fontFamily: "var(--font-display)" }, children: [
          "Transforming ",
          solution.title,
          " with Real-Time Data"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-slate-400 mb-6 leading-relaxed space-y-4", children: solution.detailedContent.map((paragraph, idx) => /* @__PURE__ */ jsx("p", { children: paragraph }, idx)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 space-y-12", children: [
          solution.hardware && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Server, { className: "w-5 h-5 text-blue-400" }),
              "Hardware Requirements"
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: solution.hardware.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-blue-400 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300 font-medium", children: item })
            ] }, index)) })
          ] }),
          solution.software && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Monitor, { className: "w-5 h-5 text-blue-400" }),
              "Software Capabilities"
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: solution.software.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-blue-400 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300 font-medium", children: item })
            ] }, index)) })
          ] }),
          solution.relatedProducts.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Server, { className: "w-5 h-5 text-blue-400" }),
              "Related Products"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: solution.relatedProducts.map((product) => /* @__PURE__ */ jsxs(
              Link,
              {
                to: product.href,
                className: "flex items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-lg text-sm font-bold text-slate-200 hover:border-blue-500/50 hover:text-blue-300 transition-colors",
                children: [
                  product.title,
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 shrink-0" })
                ]
              },
              product.href
            )) })
          ] }),
          solution.relatedResources.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Monitor, { className: "w-5 h-5 text-blue-400" }),
              "Related Resources"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: solution.relatedResources.map((resource) => /* @__PURE__ */ jsxs(
              Link,
              {
                to: resource.href,
                className: "flex items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-lg text-sm font-bold text-slate-200 hover:border-blue-500/50 hover:text-blue-300 transition-colors",
                children: [
                  resource.title,
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 shrink-0" })
                ]
              },
              resource.href
            )) })
          ] }),
          (relatedKnowledge.length > 0 || relatedBlog.length > 0) && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-8", children: [
            /* @__PURE__ */ jsx(
              RelatedLinksSection,
              {
                title: "Related Knowledge",
                description: "Technical guidance that supports engineering and deployment for this solution.",
                links: relatedKnowledge
              }
            ),
            /* @__PURE__ */ jsx(
              RelatedLinksSection,
              {
                title: "Related Articles",
                description: "Buyer-facing articles tied to this solution path and its product stack.",
                links: relatedBlog
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        solution.architectureImage && /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: solution.architectureImage,
              alt: `${solution.title} Architecture`,
              className: "w-full h-64 object-cover rounded-xl",
              referrerPolicy: "no-referrer"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "p-4 text-center border-t border-slate-800 mt-4", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-500 uppercase tracking-widest", children: "Typical Deployment Architecture" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", style: { fontFamily: "var(--font-display)" }, children: "Ideal Architecture" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-slate-400 shrink-0", children: "1" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-white mb-1", children: "Field Sensors & PLCs" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: "Connect to existing machinery via standard protocols (Modbus, RS485)." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-0.5 h-6 bg-slate-800 ml-5 block" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded bg-blue-900/30 border border-blue-500/30 flex items-center justify-center font-bold text-blue-400 shrink-0", children: "2" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-white mb-1", children: "IoTEdges Gateway" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: "Select an Ethernet, WiFi, or cellular gateway path based on field protocol, uplink, and deployment environment." }),
                /* @__PURE__ */ jsxs(Link, { to: "/products", className: "inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 mt-3", children: [
                  "Browse related products ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-0.5 h-6 bg-slate-800 ml-5 block" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-slate-400 shrink-0", children: "3" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-white mb-1", children: "Cloud Dashboard" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: "Visualize trends, manage fleets, and configure automated alerts." })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-slate-900 py-24 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold text-white mb-6 tracking-tight", style: { fontFamily: "var(--font-display)" }, children: "Need a quotation?" }),
      /* @__PURE__ */ jsx("p", { className: "mb-10 text-slate-400 font-medium", children: "Share your site, signals, uplink preference, and target devices. We can map this solution to the right IoTEdges hardware and dashboard path." }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-lg border border-slate-800 bg-slate-950/60 p-5 text-left", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-3 text-sm font-bold uppercase tracking-[0.2em] text-white", children: "Information to include" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-2 sm:grid-cols-2", children: inquiryChecklist.map((item) => /* @__PURE__ */ jsx("div", { className: "rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-xs leading-relaxed text-slate-300", children: item }, item)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center flex-wrap gap-4", children: [
        /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setIsInquiryOpen(true), "data-analytics-event": "cta_click", "data-analytics-category": "solution", "data-analytics-label": `Bottom Inquiry - ${solution.title}`, "data-analytics-destination": "solution_inquiry_modal", className: "bg-blue-600 text-white px-8 py-4 font-bold text-xs uppercase tracking-widest rounded hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20", children: "Inquire This Solution" }),
        /* @__PURE__ */ jsx(Link, { to: "/products", "data-analytics-event": "cta_click", "data-analytics-category": "solution", "data-analytics-label": `Bottom Products - ${solution.title}`, "data-analytics-destination": "/products", className: "border border-slate-700 text-white px-8 py-4 font-bold text-xs uppercase tracking-widest rounded hover:bg-slate-800 transition-all", children: "View Related Products" })
      ] })
    ] }) })
  ] });
}
function NotFound() {
  return /* @__PURE__ */ jsx("div", { className: "bg-slate-950 min-h-screen pt-24 pb-20 text-slate-300", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl sm:p-12", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300", children: /* @__PURE__ */ jsx(SearchX, { className: "h-7 w-7" }) }),
    /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-300", children: "404 Not Found" }),
    /* @__PURE__ */ jsx("h1", { className: "mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl", style: { fontFamily: "var(--font-display)" }, children: "This page does not exist" }),
    /* @__PURE__ */ jsx("p", { className: "max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg", children: "The URL may be outdated, typed incorrectly, or no longer available. Use the links below to continue browsing products, solutions, and technical resources." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/",
          className: "inline-flex items-center gap-2 rounded bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-950 transition-all hover:bg-slate-200",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
            "Back To Home"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/products",
          className: "inline-flex items-center gap-2 rounded border border-slate-700 px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-100 transition-all hover:bg-slate-800",
          children: "View Products"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/knowledge",
          className: "inline-flex items-center gap-2 rounded border border-slate-700 px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-100 transition-all hover:bg-slate-800",
          children: "Knowledge Base"
        }
      )
    ] })
  ] }) }) });
}
function PrivacyPolicy() {
  return /* @__PURE__ */ jsx("div", { className: "bg-slate-950 min-h-screen pt-24 pb-20 text-slate-300", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl sm:p-12", children: [
    /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-300", children: "Privacy Policy" }),
    /* @__PURE__ */ jsx("h1", { className: "mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl", style: { fontFamily: "var(--font-display)" }, children: "Privacy Policy" }),
    /* @__PURE__ */ jsx("p", { className: "mb-10 max-w-3xl text-base leading-relaxed text-slate-400", children: "This policy describes how IoTEdges collects and uses information when you browse this website, submit a quote request, or use live chat." }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-10", children: [
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-3 text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Who We Are" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-slate-300", children: "IoTEdges operates this website to present industrial IoT products, solution information, technical resources, and quotation workflows for international B2B customers." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-3 text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Information We Collect" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: [
          "Contact and business details you submit in quote or inquiry forms, such as name, company, email, WhatsApp number, country, and project message.",
          "Technical project details you choose to share, such as application type, protocol requirements, uplink preference, and I/O scope.",
          "Live chat session details that are required to continue a customer support or sales conversation.",
          "Basic analytics and traffic information collected through Google Analytics and Google Tag Manager."
        ].map((item) => /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm leading-relaxed text-slate-300", children: item }, item)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-3 text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "How We Use Information" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: [
          "To respond to quote requests, product inquiries, solution questions, and technical follow-up.",
          "To evaluate project fit, prepare pricing discussions, and recommend matching products or architectures.",
          "To operate live chat and maintain continuity for customer-facing conversations.",
          "To measure website traffic, page usage, and conversion activity so the website can be improved."
        ].map((item) => /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm leading-relaxed text-slate-300", children: item }, item)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-3 text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Third-Party Services" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed text-slate-300", children: "This website uses third-party services to support operations. Those services may process data according to their own terms and privacy rules." }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-slate-800 bg-slate-950/70 p-4", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500", children: "Analytics" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-slate-300", children: "Google Analytics and Google Tag Manager for traffic and conversion measurement." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-slate-800 bg-slate-950/70 p-4", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500", children: "Quote Processing" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-slate-300", children: "Quote request submissions are forwarded to the external CRM workflow used by this website." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-slate-800 bg-slate-950/70 p-4", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500", children: "Live Chat" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-slate-300", children: "Live chat requests and messages are proxied to the configured live chat service." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-slate-800 bg-slate-950/70 p-4", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500", children: "Infrastructure" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-slate-300", children: "Website delivery, caching, and DNS may rely on infrastructure providers used by IoTEdges." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-3 text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Data Retention" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-slate-300", children: "Inquiry, quotation, and support data may be retained for sales follow-up, project communication, record keeping, and operational review for as long as reasonably necessary." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-3 text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Your Choices" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-slate-300", children: "If you want to ask about the information you submitted through this website, use the contact or quote channels shown on the site and identify the relevant submission details so the request can be reviewed." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-3 text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Policy Updates" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-slate-300", children: "This policy may be updated as the website, integrations, or business workflows change." })
      ] })
    ] })
  ] }) }) });
}
function TermsOfService() {
  return /* @__PURE__ */ jsx("div", { className: "bg-slate-950 min-h-screen pt-24 pb-20 text-slate-300", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl sm:p-12", children: [
    /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-300", children: "Terms Of Service" }),
    /* @__PURE__ */ jsx("h1", { className: "mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl", style: { fontFamily: "var(--font-display)" }, children: "Terms Of Service" }),
    /* @__PURE__ */ jsx("p", { className: "mb-10 max-w-3xl text-base leading-relaxed text-slate-400", children: "These terms govern use of the IoTEdges website and its public product, solution, technical content, inquiry, and chat workflows." }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-10", children: [
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-3 text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Website Use" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-slate-300", children: "You may use this website to review product information, evaluate solutions, read technical content, and submit legitimate business inquiries. You may not use the website for unlawful, abusive, or misleading activity." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-3 text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Informational Content" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-slate-300", children: "Product pages, architecture notes, selection guides, blog posts, and knowledge content are provided for general commercial and technical reference. Final purchasing, engineering, compliance, and deployment decisions should be confirmed against the released hardware specification, approved project scope, and the final quotation or commercial agreement." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-3 text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Quotes And Orders" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: [
          "Submitting a quote request does not create a binding order or acceptance.",
          "Pricing, availability, configuration, lead time, and customization scope remain subject to confirmation.",
          "Product fit may depend on application details such as protocol list, device count, signal type, certification, and deployment environment."
        ].map((item) => /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm leading-relaxed text-slate-300", children: item }, item)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-3 text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Technical Boundaries" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-slate-300", children: "Example register maps, protocol notes, wiring references, and application descriptions on this website do not replace final engineering review. Any field deployment should be validated against the target device list, power environment, communications design, and site-specific risk controls." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-3 text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Intellectual Property" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-slate-300", children: "Website copy, page structure, graphics, product descriptions, and related materials remain the property of IoTEdges or the applicable rights holder unless otherwise stated." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-3 text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "No Warranty On Website Availability" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-slate-300", children: "IoTEdges may update, suspend, or change website content, form workflows, integrations, and live chat availability without notice." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-3 text-2xl font-bold text-white", style: { fontFamily: "var(--font-display)" }, children: "Updates" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-slate-300", children: "These terms may be updated as the website, product program, or commercial workflows change." })
      ] })
    ] })
  ] }) }) });
}
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function AnalyticsPageView() {
  const location = useLocation();
  const previousPathRef = useRef(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const pagePath = `${location.pathname}${location.search}${location.hash}`;
    if (previousPathRef.current === null) {
      previousPathRef.current = pagePath;
      return;
    }
    if (previousPathRef.current === pagePath) return;
    previousPathRef.current = pagePath;
    const pageLocation = window.location.href;
    const pageTitle = document.title;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "virtual_page_view",
      page_path: pagePath,
      page_location: pageLocation,
      page_title: pageTitle
    });
  }, [location.pathname, location.search, location.hash]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleClick = (event) => {
      var _a;
      const target = event.target instanceof Element ? event.target.closest("[data-analytics-event]") : null;
      if (!target) return;
      trackEvent(target.dataset.analyticsEvent || "cta_click", {
        event_category: target.dataset.analyticsCategory || "cta",
        event_label: target.dataset.analyticsLabel || ((_a = target.textContent) == null ? void 0 : _a.trim()) || void 0,
        destination: target.dataset.analyticsDestination || target.getAttribute("href") || void 0,
        page_path: window.location.pathname
      });
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return null;
}
const defaultWidgetConfig = {
  themeColor: "#2563eb",
  welcomeMessage: "No messages yet. Send a message to begin!",
  offlineMessage: "No human agents are online right now. Leave a message and the AI agent will keep helping."
};
const mergeConversation = (current, incoming) => {
  if (!current) return incoming;
  const messagesById = /* @__PURE__ */ new Map();
  current.messages.forEach((message) => messagesById.set(message.id, message));
  incoming.messages.forEach((message) => messagesById.set(message.id, message));
  return {
    ...current,
    ...incoming,
    messages: Array.from(messagesById.values()).sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    )
  };
};
function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [widgetConfig, setWidgetConfig] = useState(defaultWidgetConfig);
  const [supportOnline, setSupportOnline] = useState(true);
  const [conversation, setConversation] = useState(null);
  const [formData, setFormData] = useState(() => {
    if (typeof window === "undefined") {
      return { name: "", email: "", phone: "", company: "" };
    }
    const saved = localStorage.getItem("iotEdgesChatUser");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
      }
    }
    return { name: "", email: "", phone: "", company: "" };
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("iotEdgesChatProfileCompleted") === "true";
  });
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const messagesEndRef = useRef(null);
  const messages = (conversation == null ? void 0 : conversation.messages) || [];
  const scrollToBottom = () => {
    var _a;
    (_a = messagesEndRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    fetch("/api/live-chat/widget-config").then((response) => response.json()).then((data) => {
      if (data.widgetConfig) {
        setWidgetConfig({
          ...defaultWidgetConfig,
          ...data.widgetConfig
        });
      }
      if (typeof data.supportOnline === "boolean") {
        setSupportOnline(data.supportOnline);
      }
    }).catch(() => void 0);
  }, []);
  useEffect(() => {
    if (!isOpen || !isFormSubmitted) return;
    fetch("/api/live-chat/conversation").then((response) => {
      if (response.status === 409 || response.status === 401) {
        localStorage.removeItem("iotEdgesChatProfileCompleted");
        setIsFormSubmitted(false);
        return null;
      }
      return response.ok ? response.json() : null;
    }).then((data) => {
      if (data == null ? void 0 : data.conversation) {
        setConversation((prev) => mergeConversation(prev, data.conversation));
      }
    }).catch(() => void 0);
    const events = new EventSource("/api/live-chat/stream");
    events.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setConversation((prev) => mergeConversation(prev, data));
        setIsLoading(false);
      } catch (error) {
        console.warn("Invalid live chat stream payload:", error);
      }
    };
    events.onerror = () => {
      events.close();
    };
    return () => events.close();
  }, [isOpen, isFormSubmitted]);
  useEffect(() => {
    if (isOpen && isFormSubmitted) {
      scrollToBottom();
    }
  }, [messages, isOpen, isFormSubmitted]);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setIsLoading(true);
    setErrorMessage("");
    localStorage.setItem("iotEdgesChatUser", JSON.stringify(formData));
    try {
      const response = await fetch("/api/live-chat/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          metadata: {
            phone: formData.phone,
            company: formData.company,
            source: "website-widget",
            pageUrl: window.location.href
          }
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to save chat profile");
      if (data.conversation) {
        setConversation(data.conversation);
      }
      setIsFormSubmitted(true);
      localStorage.setItem("iotEdgesChatProfileCompleted", "true");
      trackEvent("live_chat_lead_submit", {
        event_category: "live_chat",
        has_company: Boolean(formData.company),
        page_path: window.location.pathname
      });
    } catch (error) {
      console.error("Error starting chat session:", error);
      setErrorMessage("Unable to connect to live chat. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    const msgText = inputValue.trim();
    setInputValue("");
    setErrorMessage("");
    const optimisticMsg = {
      id: `temp_${Date.now()}`,
      role: "visitor",
      content: msgText,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    setConversation((prev) => ({
      id: (prev == null ? void 0 : prev.id) || "pending",
      status: (prev == null ? void 0 : prev.status) || "ai_active",
      customerProfile: prev == null ? void 0 : prev.customerProfile,
      messages: [...(prev == null ? void 0 : prev.messages) || [], optimisticMsg]
    }));
    setIsLoading(true);
    try {
      const response = await fetch("/api/live-chat/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ content: msgText })
      });
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 409 && data.error === "profile_required") {
          localStorage.removeItem("iotEdgesChatProfileCompleted");
          setIsFormSubmitted(false);
        }
        throw new Error(data.error || "Network response was not ok");
      }
      if (data.conversation) {
        setConversation(data.conversation);
      }
      trackEvent("live_chat_message_send", {
        event_category: "live_chat",
        transport: "rest",
        page_path: window.location.pathname
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setConversation((prev) => prev ? {
        ...prev,
        messages: prev.messages.filter((message) => message.id !== optimisticMsg.id)
      } : prev);
      setErrorMessage("Message failed to send. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const getMessageBody = (message) => {
    var _a;
    const translation = (_a = message.metadata) == null ? void 0 : _a.translation;
    if (message.role !== "visitor" && translation && typeof translation === "object" && "visitorText" in translation && typeof translation.visitorText === "string") {
      return translation.visitorText;
    }
    return message.content;
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-6 right-6 z-50", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          setIsOpen(true);
          trackEvent("live_chat_open", {
            event_category: "live_chat",
            page_path: window.location.pathname
          });
        },
        className: `w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-2xl transition transform hover:scale-105 border border-blue-400/30 ${isOpen ? "hidden" : "block"}`,
        "aria-label": "Open AI Chat",
        children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-6 h-6" })
      }
    ) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 20, scale: 0.95 },
        transition: { duration: 0.2 },
        className: "fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[380px] h-[580px] max-h-[85vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center shrink-0", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Bot, { className: "w-5 h-5 text-blue-400" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-white font-medium text-sm", children: "IoTEdges Live Chat" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsx("span", { className: `w-1.5 h-1.5 rounded-full ${supportOnline ? "bg-green-500" : "bg-amber-400"}` }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400", children: supportOnline ? "Online" : "AI online" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  setIsOpen(false);
                  trackEvent("live_chat_close", {
                    event_category: "live_chat",
                    page_path: window.location.pathname
                  });
                },
                className: "text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-700 transition",
                children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
              }
            )
          ] }),
          !isFormSubmitted ? (
            /* Pre-chat Form */
            /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-5 bg-slate-900/50 flex flex-col", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-6 text-center mt-2", children: [
                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-600/10 border border-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-8 h-8 text-blue-400" }) }),
                /* @__PURE__ */ jsx("h4", { className: "text-white font-medium text-lg mb-2", children: "Welcome to Live Chat" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: "Please fill out the form below to start chatting with our team." })
              ] }),
              /* @__PURE__ */ jsxs("form", { onSubmit: handleFormSubmit, className: "space-y-4 flex-1", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Name *" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      required: true,
                      type: "text",
                      value: formData.name,
                      onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                      className: "w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500",
                      placeholder: "John Doe",
                      disabled: isLoading
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Email *" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      required: true,
                      type: "email",
                      value: formData.email,
                      onChange: (e) => setFormData({ ...formData, email: e.target.value }),
                      className: "w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500",
                      placeholder: "john@example.com",
                      disabled: isLoading
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Phone *" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      required: true,
                      type: "tel",
                      value: formData.phone,
                      onChange: (e) => setFormData({ ...formData, phone: e.target.value }),
                      className: "w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500",
                      placeholder: "+1 (555) 000-0000",
                      disabled: isLoading
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Company (Optional)" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      value: formData.company,
                      onChange: (e) => setFormData({ ...formData, company: e.target.value }),
                      className: "w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500",
                      placeholder: "Acme Corp",
                      disabled: isLoading
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "pt-2 mt-auto pb-2", children: [
                  errorMessage && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-300 mb-3", role: "alert", children: errorMessage }),
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      type: "submit",
                      disabled: isLoading,
                      className: "w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg transition disabled:opacity-70 flex justify-center items-center gap-2",
                      children: [
                        isLoading && /* @__PURE__ */ jsx("span", { className: "w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" }),
                        "Start Chat"
                      ]
                    }
                  )
                ] })
              ] })
            ] })
          ) : (
            /* Chat Interface */
            /* @__PURE__ */ jsxs(Fragment$1, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50", children: [
                !supportOnline && messages.length === 0 && !isLoading && /* @__PURE__ */ jsx("div", { className: "text-center text-amber-200 text-sm mt-6 rounded-lg border border-amber-300/20 bg-amber-400/10 px-3 py-2", children: widgetConfig.offlineMessage }),
                messages.length === 0 && !isLoading && /* @__PURE__ */ jsx("div", { className: "text-center text-slate-500 text-sm mt-10", children: widgetConfig.welcomeMessage }),
                messages.map((msg) => {
                  const isVisitor = msg.role === "visitor";
                  return /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `flex ${isVisitor ? "justify-end" : "justify-start"}`,
                      children: /* @__PURE__ */ jsxs("div", { className: `flex gap-2 max-w-[85%] ${isVisitor ? "flex-row-reverse" : "flex-row"}`, children: [
                        /* @__PURE__ */ jsx("div", { className: `w-6 h-6 rounded-full shrink-0 flex items-center justify-center mt-1 border ${isVisitor ? "bg-slate-700 border-slate-600" : "bg-blue-600/20 border-blue-500/30"}`, children: isVisitor ? /* @__PURE__ */ jsx(User, { className: "w-3.5 h-3.5 text-slate-300" }) : /* @__PURE__ */ jsx(Bot, { className: "w-3.5 h-3.5 text-blue-400" }) }),
                        /* @__PURE__ */ jsx("div", { className: `px-4 py-2.5 rounded-2xl text-sm ${isVisitor ? "bg-blue-600 text-white rounded-tr-none" : "bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none"}`, children: getMessageBody(msg) })
                      ] })
                    },
                    msg.id
                  );
                }),
                isLoading && /* @__PURE__ */ jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2 max-w-[85%] flex-row", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full shrink-0 flex items-center justify-center mt-1 border bg-blue-600/20 border-blue-500/30", children: /* @__PURE__ */ jsx(Bot, { className: "w-3.5 h-3.5 text-blue-400" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "px-4 py-3 rounded-2xl text-sm bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none flex gap-1.5 items-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce", style: { animationDelay: "0ms" } }),
                    /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce", style: { animationDelay: "150ms" } }),
                    /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce", style: { animationDelay: "300ms" } })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("div", { ref: messagesEndRef })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-3 bg-slate-800 border-t border-slate-700 shrink-0", children: [
                errorMessage && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-300 mb-2 px-1", role: "alert", children: errorMessage }),
                /* @__PURE__ */ jsxs("form", { onSubmit: handleSendMessage, className: "flex gap-2 relative", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      value: inputValue,
                      onChange: (e) => setInputValue(e.target.value),
                      placeholder: "Type a message...",
                      className: "flex-1 bg-slate-900 border border-slate-700 rounded-full px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 pr-12",
                      disabled: isLoading || (conversation == null ? void 0 : conversation.status) === "closed" || (conversation == null ? void 0 : conversation.status) === "resolved"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "submit",
                      disabled: !inputValue.trim() || isLoading || (conversation == null ? void 0 : conversation.status) === "closed" || (conversation == null ? void 0 : conversation.status) === "resolved",
                      className: "absolute right-1 top-1 w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center disabled:opacity-50 disabled:hover:bg-blue-600 transition",
                      children: /* @__PURE__ */ jsx(Send, { className: "w-4 h-4 ml-0.5" })
                    }
                  )
                ] })
              ] })
            ] })
          )
        ]
      }
    ) })
  ] });
}
function AppLayout() {
  return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsx(AnalyticsPageView, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsxs(Routes, { children: [
        /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/factory-energy", element: /* @__PURE__ */ jsx(Navigate, { to: "/solutions/factory-energy", replace: true }) }),
        /* @__PURE__ */ jsx(Route, { path: "/solutions", element: /* @__PURE__ */ jsx(SolutionsList, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/solutions/:id", element: /* @__PURE__ */ jsx(SolutionDetail, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/products", element: /* @__PURE__ */ jsx(ProductList, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/products/:id", element: /* @__PURE__ */ jsx(ProductDetail, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/accessories", element: /* @__PURE__ */ jsx(Accessories, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/knowledge", element: /* @__PURE__ */ jsx(KnowledgeList, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/knowledge/:id", element: /* @__PURE__ */ jsx(KnowledgeDetail, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/gateway", element: /* @__PURE__ */ jsx(Gateway, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/demo", element: /* @__PURE__ */ jsx(Demo, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(About, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/privacy", element: /* @__PURE__ */ jsx(PrivacyPolicy, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/terms", element: /* @__PURE__ */ jsx(TermsOfService, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/blog", element: /* @__PURE__ */ jsx(BlogList, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/blog/:id", element: /* @__PURE__ */ jsx(BlogPostPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(AIChatWidget, {})
    ] })
  ] });
}
function render(url) {
  return renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(MemoryRouter, { initialEntries: [url], children: /* @__PURE__ */ jsx(AppLayout, {}) }) })
  );
}
function getPrerenderRoutes() {
  return [
    "/",
    "/solutions",
    "/gateway",
    "/demo",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/products",
    "/accessories",
    ...productPages.map((product) => `/products/${product.id}`),
    "/knowledge",
    ...knowledgePages.map((page) => `/knowledge/${page.id}`),
    "/blog",
    ...blogPosts.map((post) => `/blog/${post.id}`),
    ...solutions.map((solution) => `/solutions/${solution.id}`)
  ];
}
function getSeoMeta(url) {
  const blogMatch = url.match(/^\/blog\/([^/]+)$/);
  const post = blogMatch ? blogPosts.find((item) => item.id === blogMatch[1]) : null;
  if (post) {
    return {
      title: `${post.title} | IoTEdges Blog`,
      description: post.excerpt,
      imageUrl: post.imageUrl || DEFAULT_BLOG_IMAGE_URL,
      type: "article"
    };
  }
  const productMatch = url.match(/^\/products\/([^/]+)$/);
  const product = productMatch ? productPages.find((item) => item.id === productMatch[1]) : null;
  if (product) {
    return {
      title: `${product.title} | IoTEdges Products`,
      description: product.excerpt,
      imageUrl: product.imageUrl || DEFAULT_PRODUCT_IMAGE_URL,
      type: "product"
    };
  }
  const solutionMatch = url.match(/^\/solutions\/([^/]+)$/);
  const solution = solutionMatch ? solutions.find((item) => item.id === solutionMatch[1]) : null;
  if (solution) {
    return {
      title: `${solution.title} | IoTEdges Solutions`,
      description: solution.description,
      imageUrl: solution.image,
      type: "article"
    };
  }
  if (url === "/blog") {
    return {
      title: "Industrial IoT Blog | IoTEdges",
      description: "Insights, guides, and trends on factory energy monitoring, remote equipment tracking, and industrial networking.",
      type: "website"
    };
  }
  const knowledgeMatch = url.match(/^\/knowledge\/([^/]+)$/);
  const knowledge = knowledgeMatch ? knowledgePages.find((item) => item.id === knowledgeMatch[1]) : null;
  if (knowledge) {
    return {
      title: `${knowledge.title} | IoTEdges Knowledge Base`,
      description: knowledge.excerpt,
      imageUrl: knowledge.imageUrl || DEFAULT_KNOWLEDGE_IMAGE_URL,
      type: "article"
    };
  }
  if (url === "/knowledge") {
    return {
      title: "Industrial IoT Knowledge Base | IoTEdges",
      description: "Practical protocol and connectivity guides for Modbus, MQTT, RS485 and industrial IoT product selection.",
      type: "website"
    };
  }
  if (url === "/products") {
    return {
      title: "Industrial IoT Products | IoTEdges",
      description: "Explore IoTEdges industrial IoT gateways, RTUs, remote relay controllers, Remote IO modules and dashboard software for Modbus, MQTT, Ethernet, WiFi and 4G applications.",
      type: "website"
    };
  }
  if (url === "/about") {
    return {
      title: `${aboutSiteCopy.heroTitle} | IoTEdges`,
      description: aboutSiteCopy.heroDescription,
      type: "website"
    };
  }
  if (url === "/contact") {
    return {
      title: `${contactSiteCopy.heroTitle} | IoTEdges`,
      description: contactSiteCopy.heroDescription,
      type: "website"
    };
  }
  if (url === "/gateway") {
    return {
      title: `${gatewaySiteCopy.heroTitle} | IoTEdges`,
      description: gatewaySiteCopy.heroDescription,
      type: "website"
    };
  }
  if (url === "/demo") {
    return {
      title: `${demoSiteCopy.heroTitle} | IoTEdges`,
      description: demoSiteCopy.heroDescription,
      type: "website"
    };
  }
  if (url === "/accessories") {
    return {
      title: "Industrial IoT Accessories for RTU, Gateway and Remote IO Projects | IoTEdges",
      description: "Recommended project accessories for IoTEdges industrial IoT deployments, including 4G antennas, SIM/APN setup, RS485 wiring, DIN rail power supplies, relay interfaces, sensors and meters.",
      type: "website"
    };
  }
  if (url === "/privacy") {
    return {
      title: "Privacy Policy | IoTEdges",
      description: "How IoTEdges collects and uses information from quote requests, live chat, and analytics on this industrial IoT website.",
      type: "website"
    };
  }
  if (url === "/terms") {
    return {
      title: "Terms Of Service | IoTEdges",
      description: "Terms governing use of the IoTEdges website, product information, technical resources, and inquiry workflows.",
      type: "website"
    };
  }
  return {
    title: "Industrial IoT Monitoring & Energy Management Platform | IoTEdges",
    description: "IoTEdges provides industrial energy monitoring systems, Modbus to MQTT IoT gateways, and remote equipment monitoring solutions for factories, solar farms, and cold storage.",
    type: "website"
  };
}
export {
  getPrerenderRoutes,
  getSeoMeta,
  render
};
