import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ContentLink } from '../types';

interface RelatedLinksSectionProps {
  title: string;
  description?: string;
  links: ContentLink[];
}

export default function RelatedLinksSection({ title, description, links }: RelatedLinksSectionProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
        {title}
      </h2>
      {description ? <p className="mb-5 text-sm leading-relaxed text-slate-400">{description}</p> : null}
      <div className="grid grid-cols-1 gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="flex items-center justify-between gap-4 rounded-lg border border-slate-700 bg-slate-900 p-4 text-sm font-bold text-slate-200 transition-colors hover:border-blue-500/50 hover:text-blue-300"
          >
            {link.title}
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        ))}
      </div>
    </section>
  );
}
