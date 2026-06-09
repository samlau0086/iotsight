import { Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { knowledgePages } from '../data/knowledge';
import { productPages } from '../data/products';
import { ProductPage } from '../types';

export default function KnowledgeDetail() {
  const { id } = useParams<{ id: string }>();
  const page = knowledgePages.find(item => item.id === id);

  if (!page) {
    return (
      <div className="bg-slate-900 min-h-screen pt-32 pb-20 text-center text-slate-300">
        <h1 className="text-3xl font-bold text-white mb-4">Knowledge Page Not Found</h1>
        <Link to="/knowledge" className="text-blue-400 hover:text-blue-300">
          &larr; Back to Knowledge Base
        </Link>
      </div>
    );
  }

  const relatedProducts = page.relatedProducts
    .map(productId => productPages.find(product => product.id === productId))
    .filter((product): product is ProductPage => Boolean(product));

  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-20 text-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/knowledge" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Knowledge Base
        </Link>

        <article className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl">
          <header className="p-8 sm:p-12 border-b border-slate-800">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-blue-300 font-bold bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-6">
              <BookOpen className="w-3.5 h-3.5" /> {page.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5" style={{ fontFamily: 'var(--font-display)' }}>
              {page.title}
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">{page.excerpt}</p>
          </header>

          <div className="p-8 sm:p-12">
            <div className="prose prose-invert prose-blue max-w-none prose-headings:font-display prose-h2:text-2xl prose-h2:text-white prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:text-slate-100 prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-strong:text-white prose-table:text-sm prose-th:text-white prose-td:text-slate-300 prose-a:text-blue-400">
              <Markdown>{page.content}</Markdown>
            </div>

            {relatedProducts.length > 0 && (
              <section className="mt-12 border-t border-slate-800 pt-8">
                <h2 className="text-2xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>Related Products</h2>
                <div className="grid grid-cols-1 gap-3">
                  {relatedProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="flex items-center justify-between gap-4 bg-slate-950 border border-slate-800 p-4 rounded-lg text-sm font-bold text-slate-200 hover:border-blue-500/50 hover:text-blue-300 transition-colors"
                    >
                      {product.title}
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
