import { Link } from 'react-router-dom';
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bell,
  Bot,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  Droplets,
  Gauge,
  GitMerge,
  KeyRound,
  LayoutDashboard,
  Network,
  Power,
  Radio,
  Router,
  Server,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  TerminalSquare,
  Workflow,
} from 'lucide-react';

const navItems = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'Devices', icon: Server },
  { label: 'Workflows', icon: GitMerge },
  { label: 'Control', icon: SlidersHorizontal },
  { label: 'SCADA', icon: Network },
  { label: 'Access', icon: KeyRound },
  { label: 'Analytics', icon: Activity },
  { label: 'Raw Data', icon: Database },
  { label: 'Alerts', icon: Bell },
  { label: 'AI Insights', icon: Bot },
  { label: 'Settings', icon: Settings },
];

const kpis = [
  { label: 'Online Devices', value: '128', unit: '/ 136', icon: Server, tone: 'text-emerald-400' },
  { label: 'Active Alerts', value: '7', unit: 'events', icon: AlertTriangle, tone: 'text-amber-400' },
  { label: 'Commands Today', value: '42', unit: 'sent', icon: TerminalSquare, tone: 'text-blue-400' },
  { label: 'Data Points', value: '2.8M', unit: '24h', icon: Database, tone: 'text-cyan-400' },
];

const telemetryBars = [34, 48, 42, 63, 76, 58, 70, 86, 68, 74, 54, 61, 79, 92, 73, 64, 82, 88];

const devices = [
  { id: 'IER-141', name: 'Pump Station RTU', type: '4G Remote Relay RTU', metric: '4.8 bar / 126 m3/h', status: 'Online' },
  { id: 'IEG-100', name: 'Factory Edge Gateway', type: 'Ethernet IoT Gateway', metric: 'MQTT / OPC UA bridge', status: 'Online' },
  { id: 'IEIO-100', name: 'Remote IO Cabinet', type: 'Modbus Remote IO', metric: '12 DI / 8 DO active', status: 'Online' },
  { id: 'IEAC-140', name: 'Gate Access Controller', type: '4G Access RTU', metric: '2 relays / 38 users', status: 'Warning' },
];

const workflowSteps = [
  'Trigger: pump pressure below 2.8 bar',
  'Condition: standby pump available',
  'Action: publish MQTT command',
  'Action: notify maintenance team',
];

export default function Demo() {
  return (
    <div className="min-h-screen bg-slate-950 pt-8 pb-20 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">AI IoT Dashboard Preview</p>
            <h1 className="mb-2 text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              AI Industrial Operations Dashboard
            </h1>
            <p className="max-w-2xl text-slate-400">
              A read-only preview of an industrial IoT operations platform for devices, telemetry, SCADA views, workflow automation, remote control, and AI-assisted troubleshooting.
            </p>
          </div>
          <Link
            to="/contact"
            data-analytics-event="cta_click"
            data-analytics-category="demo"
            data-analytics-label="Request AI Dashboard Demo"
            data-analytics-destination="/contact"
            className="inline-flex items-center justify-center gap-2 rounded bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            <Bot className="h-4 w-4" />
            Request Demo Access
          </Link>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#10141b] shadow-2xl">
          <div className="flex min-h-[760px] flex-col lg:flex-row">
            <aside className="hidden w-60 shrink-0 border-r border-slate-800 bg-[#16191f] lg:block">
              <div className="flex h-16 items-center border-b border-slate-800 px-5">
                <Bot className="mr-2 h-6 w-6 text-orange-400" />
                <span className="text-base font-bold tracking-tight text-white">AI IoT Dashboard</span>
              </div>
              <nav className="space-y-1 px-3 py-5">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium ${
                      item.active ? 'bg-orange-500/10 text-orange-400' : 'text-slate-400'
                    }`}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </nav>
              <div className="mx-3 mt-4 rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  Tenant secure
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">Role-based access, command audit log, and token-protected telemetry ingest.</p>
              </div>
            </aside>

            <main className="min-w-0 flex-1 bg-slate-50 text-slate-900">
              <div className="flex flex-col gap-3 border-b border-slate-200 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold text-slate-950">Overview</h2>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
                      Live telemetry
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">IoTEdges Demo Site / Pump, factory, energy, access and environmental assets</p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-600">HTTP Push</span>
                  <span className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-600">MQTT Subscriber</span>
                  <span className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-600">PostgreSQL</span>
                </div>
              </div>

              <div className="space-y-5 p-4 lg:p-6">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {kpis.map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <span className="text-sm font-medium text-slate-500">{stat.label}</span>
                        <stat.icon className={`h-4 w-4 ${stat.tone}`} />
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold tracking-tight text-slate-950">{stat.value}</span>
                        <span className="text-sm text-slate-500">{stat.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.75fr)]">
                  <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-950">Realtime Telemetry Trend</h3>
                        <p className="mt-1 text-xs text-slate-500">Aggregated pressure, flow, power and signal quality from active gateways.</p>
                      </div>
                      <div className="flex gap-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-orange-400" /> Flow</span>
                        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-blue-500" /> Pressure</span>
                      </div>
                    </div>
                    <div className="flex h-64 items-end gap-2 border-b border-l border-slate-200 px-2 pb-2">
                      {telemetryBars.map((height, index) => (
                        <div key={index} className="flex min-w-0 flex-1 flex-col items-center justify-end gap-1">
                          <div className="w-full rounded-t bg-orange-400/85" style={{ height: `${height}%` }} />
                          <div className="w-full rounded-t bg-blue-500/80" style={{ height: `${Math.max(18, height - 26)}%` }} />
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-slate-400">
                      <span>00:00</span>
                      <span>06:00</span>
                      <span>12:00</span>
                      <span>18:00</span>
                      <span>Now</span>
                    </div>
                  </section>

                  <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950">
                      <Bot className="h-4 w-4 text-orange-500" />
                      AI Copilot
                    </h3>
                    <div className="rounded-lg bg-slate-50 p-3 text-sm text-slate-600">
                      <p className="font-medium text-slate-900">Why did Pump Station RTU-03 trigger alarms?</p>
                      <p className="mt-2 leading-relaxed">
                        Pressure dropped 22% while current increased 18%. The pattern looks like partial pipe blockage or valve position drift.
                      </p>
                    </div>
                    <div className="mt-3 space-y-2 text-xs text-slate-600">
                      <div className="flex items-start gap-2 rounded border border-orange-200 bg-orange-50 px-3 py-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-600" />
                        Suggested action: start standby pump and send inspection task.
                      </div>
                      <div className="flex items-start gap-2 rounded border border-slate-200 px-3 py-2">
                        <BarChart3 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500" />
                        Generate weekly exception report for operations team.
                      </div>
                    </div>
                  </section>
                </div>

                <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                  <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h3 className="text-sm font-semibold text-slate-950">Device Fleet</h3>
                      <span className="text-xs text-slate-500">External Device ID matched telemetry</span>
                    </div>
                    <div className="overflow-hidden rounded border border-slate-200">
                      {devices.map((device) => (
                        <div key={device.id} className="grid gap-3 border-b border-slate-100 px-3 py-3 text-sm last:border-b-0 md:grid-cols-[90px_minmax(0,1fr)_140px]">
                          <div className="font-mono text-xs font-semibold text-slate-500">{device.id}</div>
                          <div className="min-w-0">
                            <div className="truncate font-medium text-slate-950">{device.name}</div>
                            <div className="truncate text-xs text-slate-500">{device.type}</div>
                          </div>
                          <div className="flex items-center justify-between gap-3 md:block">
                            <div className="truncate text-xs text-slate-500">{device.metric}</div>
                            <span className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${device.status === 'Online' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                              {device.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <h3 className="mb-3 text-sm font-semibold text-slate-950">SCADA Operations View</h3>
                    <div className="relative h-64 overflow-hidden rounded-lg border border-slate-200 bg-slate-900 p-4 text-slate-200">
                      <div className="absolute left-6 top-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-blue-400/70 bg-blue-500/10">
                        <Droplets className="h-8 w-8 text-blue-300" />
                      </div>
                      <div className="absolute left-28 top-14 h-2 w-28 rounded bg-blue-400/70" />
                      <div className="absolute left-56 top-9 rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-xs">
                        <Gauge className="mb-1 h-5 w-5 text-orange-300" />
                        4.8 bar
                      </div>
                      <div className="absolute bottom-8 left-16 rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-xs">
                        <Power className="mb-1 h-5 w-5 text-emerald-300" />
                        Pump ON
                      </div>
                      <div className="absolute bottom-10 right-8 flex h-24 w-24 items-center justify-center rounded-lg border border-slate-600 bg-slate-800">
                        <Router className="h-8 w-8 text-orange-300" />
                      </div>
                      <div className="absolute bottom-20 left-40 h-2 w-44 rounded bg-blue-400/70" />
                      <div className="absolute right-6 top-6 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                        Realtime telemetry
                      </div>
                    </div>
                  </section>
                </div>

                <div className="grid gap-5 xl:grid-cols-3">
                  <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950">
                      <Workflow className="h-4 w-4 text-orange-500" />
                      Workflow Automation
                    </h3>
                    <div className="space-y-2">
                      {workflowSteps.map((step, index) => (
                        <div key={step} className="flex items-center gap-2 rounded border border-slate-200 px-3 py-2 text-xs text-slate-600">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[10px] font-bold text-orange-600">{index + 1}</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950">
                      <Cloud className="h-4 w-4 text-blue-500" />
                      Data Ingest
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between rounded border border-slate-200 px-3 py-2">
                        <span className="flex items-center gap-2"><Radio className="h-4 w-4 text-slate-500" /> MQTT Subscriber</span>
                        <span className="text-xs text-emerald-600">Connected</span>
                      </div>
                      <div className="flex items-center justify-between rounded border border-slate-200 px-3 py-2">
                        <span className="flex items-center gap-2"><TerminalSquare className="h-4 w-4 text-slate-500" /> HTTP Telemetry API</span>
                        <span className="text-xs text-emerald-600">Token protected</span>
                      </div>
                      <div className="flex items-center justify-between rounded border border-slate-200 px-3 py-2">
                        <span className="flex items-center gap-2"><Cpu className="h-4 w-4 text-slate-500" /> Edge Gateway Binding</span>
                        <span className="text-xs text-slate-500">Modbus / PLC / LoRa</span>
                      </div>
                    </div>
                  </section>

                  <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950">
                      <SlidersHorizontal className="h-4 w-4 text-slate-600" />
                      Control Command Log
                    </h3>
                    <div className="space-y-3 text-xs">
                      <div className="rounded border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-800">Relay pulse sent to IEAC-140 / gate opened</div>
                      <div className="rounded border border-blue-200 bg-blue-50 px-3 py-2 text-blue-800">MQTT command queued for IER-141 / pump schedule</div>
                      <div className="rounded border border-slate-200 px-3 py-2 text-slate-600">AO setpoint updated / valve position 62%</div>
                    </div>
                  </section>
                </div>
              </div>
            </main>
          </div>
        </div>

        <section className="mt-20 border-t border-slate-800 pt-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                AI IoT Dashboard for Industrial Operations
              </h2>
              <p className="mb-6 leading-relaxed text-slate-400">
                The IoTEdges dashboard is designed as an operations layer above RTUs, MQTT gateways, LoRa gateways, PLCs, smart meters, sensors, remote IO modules, and access controllers. Field devices collect Modbus, RS485, DI/DO, AI/AO and serial data, then send normalized telemetry to the cloud through HTTP or MQTT.
              </p>
              <p className="leading-relaxed text-slate-400">
                Instead of building a fixed single-purpose monitoring screen, the platform combines device asset management, raw telemetry storage, SCADA-style visualization, analytics widgets, workflow automation, command auditing, and AI Copilot assistance into one industrial dashboard.
              </p>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                Platform Architecture and Capabilities
              </h3>
              <div className="space-y-5">
                {[
                  ['Device and telemetry binding', 'External Device ID, MQTT topic, HTTP ingest token and register/metric maps help match real field data to dashboard assets.'],
                  ['Remote command delivery', 'Control actions can be published to MQTT command topics or stored in a pending queue for gateways to pull and acknowledge.'],
                  ['Workflow automation', 'Triggers, conditions and actions can respond to offline devices, alarms, schedules, access events, MQTT messages and AI anomaly detection.'],
                  ['AI operations assistant', 'Operators can ask natural-language questions about alarms, energy usage, device behavior, maintenance risk and suggested response actions.'],
                ].map(([title, copy]) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
