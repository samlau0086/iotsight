import { ArrowLeft, SearchX } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-20 text-slate-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl sm:p-12">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300">
            <SearchX className="h-7 w-7" />
          </div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-300">404 Not Found</p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            This page does not exist
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            The URL may be outdated, typed incorrectly, or no longer available. Use the links below to continue browsing
            products, solutions, and technical resources.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-950 transition-all hover:bg-slate-200"
            >
              <ArrowLeft className="h-4 w-4" />
              Back To Home
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded border border-slate-700 px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-100 transition-all hover:bg-slate-800"
            >
              View Products
            </Link>
            <Link
              to="/knowledge"
              className="inline-flex items-center gap-2 rounded border border-slate-700 px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-100 transition-all hover:bg-slate-800"
            >
              Knowledge Base
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
