import { Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { productPages } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = productPages.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="bg-slate-900 min-h-screen pt-32 pb-20 text-center text-slate-300">
        <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
        <Link to="/products" className="text-blue-400 hover:text-blue-300">
          &larr; Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-20 text-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        <article className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl">
          <header className="p-8 sm:p-12 border-b border-slate-800">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-blue-300 font-bold bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" /> {product.category}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold border border-slate-700 px-3 py-1 rounded-full">
                {product.model}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5" style={{ fontFamily: 'var(--font-display)' }}>
              {product.title}
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">{product.excerpt}</p>
          </header>

          <div className="p-8 sm:p-12">
            <div className="prose prose-invert prose-blue max-w-none prose-headings:font-display prose-h2:text-2xl prose-h2:text-white prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:text-slate-100 prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-strong:text-white prose-table:text-sm prose-th:text-white prose-td:text-slate-300 prose-a:text-blue-400">
              <Markdown>{product.content}</Markdown>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
