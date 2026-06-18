import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cable,
  Cpu,
  DoorOpen,
  Gauge,
  RadioTower,
  Router,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
} from 'lucide-react';
import { accessoriesPage } from '../data/accessories';

const accessoryIcons = {
  cable: Cable,
  cpu: Cpu,
  'door-open': DoorOpen,
  gauge: Gauge,
  'radio-tower': RadioTower,
  router: Router,
  server: Server,
  'shield-check': ShieldCheck,
  'sliders-horizontal': SlidersHorizontal,
  zap: Zap,
} as const;

function getAccessoryIcon(iconKey: string) {
  return accessoryIcons[iconKey as keyof typeof accessoryIcons] || ShieldCheck;
}

export default function Accessories() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 text-slate-300">
      <section className="border-b border-slate-800 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-blue-400">{accessoriesPage.eyebrow}</p>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
              {accessoriesPage.title}
            </h1>
            <p className="text-lg leading-relaxed text-slate-400">{accessoriesPage.description}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {accessoriesPage.overviewCards.map((item) => {
            const Icon = getAccessoryIcon(item.iconKey);

            return (
              <div key={item.title} className="rounded-lg border border-slate-800 bg-slate-900 p-6">
                <Icon className="mb-4 h-6 w-6 text-blue-400" />
                <h2 className="mb-2 text-lg font-bold text-white">{item.title}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {accessoriesPage.groups.map((group) => {
            const Icon = getAccessoryIcon(group.iconKey);

            return (
              <article key={group.title} className="rounded-lg border border-slate-800 bg-slate-900 p-7">
                <Icon className="mb-5 h-8 w-8 text-blue-400" />
                <h2 className="mb-3 text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>{group.title}</h2>
                <p className="mb-5 text-sm leading-relaxed text-slate-400">{group.description}</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="mb-4 text-3xl font-extrabold text-white" style={{ fontFamily: 'var(--font-display)' }}>Accessory selection guides</h2>
          <p className="text-slate-400">
            These guides cover antenna, wiring, power, relay, and enclosure decisions that usually shape the final project BOM.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {accessoriesPage.selectionGuides.map((guide) => (
            <Link key={guide.href} to={guide.href} className="rounded-lg border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-500/50">
              <h3 className="mb-2 text-lg font-bold text-white">{guide.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-400">{guide.summary}</p>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400">
                Read guide <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-extrabold text-white" style={{ fontFamily: 'var(--font-display)' }}>Accessories by IoTEdges product line</h2>
            <p className="text-slate-400">
              This table shows the accessory groups that typically accompany each product line. Exact brands, ratings, cable lengths, and enclosure details still depend on the installation.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-800">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-800 text-sm">
                <thead className="bg-slate-950">
                  <tr>
                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-300">Product</th>
                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-300">Recommended Accessories</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900">
                  {accessoriesPage.productAccessoryMap.map((row) => (
                    <tr key={row.product}>
                      <td className="px-5 py-4 align-top font-semibold text-white">
                        <Link to={row.href} className="hover:text-blue-300">{row.product}</Link>
                      </td>
                      <td className="px-5 py-4 align-top text-slate-300">{row.accessories}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mb-4 text-3xl font-extrabold text-white" style={{ fontFamily: 'var(--font-display)' }}>Common project kits</h2>
            <p className="max-w-3xl text-slate-400">
              These are bundle examples, not fixed SKUs. They help distributors, installers, and system integrators prepare quotations around real project needs.
            </p>
          </div>
          <Link to={accessoriesPage.ctaHref} className="inline-flex items-center gap-2 rounded bg-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-blue-500">
            {accessoriesPage.ctaLabel} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {accessoriesPage.projectKits.map((kit) => {
            const Icon = getAccessoryIcon(kit.iconKey);

            return (
              <article key={kit.title} className="rounded-lg border border-slate-800 bg-slate-900 p-7">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded border border-blue-500/20 bg-blue-500/10 text-blue-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{kit.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {kit.contents.map((item) => (
                    <span key={item} className="rounded border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-semibold text-slate-300">{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
