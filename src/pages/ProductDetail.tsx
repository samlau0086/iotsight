import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { productPages } from '../data/products';
import MarkdownContent from '../components/MarkdownContent';

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

  const inquiryHref = `/contact?type=${encodeURIComponent('Product Inquiry')}&subject=${encodeURIComponent(`${product.model} - ${product.title}`)}&source=${encodeURIComponent(`/products/${product.id}`)}`;

  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-20 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to={inquiryHref}
                data-analytics-event="cta_click"
                data-analytics-category="product"
                data-analytics-label={`Product Inquiry - ${product.title}`}
                data-analytics-destination={inquiryHref}
                className="inline-flex items-center gap-2 rounded bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-blue-500"
              >
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded border border-slate-700 px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-200 transition-all hover:bg-slate-800"
              >
                Compare Models
              </Link>
            </div>
          </header>

          <div className="p-8 sm:p-12">
            <div className="prose prose-invert prose-blue max-w-none prose-headings:font-display prose-h2:text-2xl prose-h2:text-white prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:text-slate-100 prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-strong:text-white prose-table:text-sm prose-th:text-white prose-td:text-slate-300 prose-a:text-blue-400">
              <MarkdownContent>{product.content}</MarkdownContent>
            </div>
            <section className="mt-12 border-t border-slate-800 pt-8">
              <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-5">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="mb-2 text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Need pricing or project matching?</h2>
                    <p className="text-sm leading-relaxed text-slate-300">
                      Start an inquiry for <strong>{product.model}</strong>. The quote form will be prefilled with this product and locked to the current item.
                    </p>
                  </div>
                  <Link
                    to={inquiryHref}
                    data-analytics-event="cta_click"
                    data-analytics-category="product"
                    data-analytics-label={`Bottom Inquiry - ${product.title}`}
                    data-analytics-destination={inquiryHref}
                    className="inline-flex items-center gap-2 rounded bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-950 transition-all hover:bg-slate-200"
                  >
                    Inquire This Product <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <h2 className="mb-2 text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Need project accessories?</h2>
                <p className="mb-4 text-sm leading-relaxed text-slate-300">
                  Review recommended antennas, SIM/APN notes, RS485 wiring, DIN rail power supplies, relay interfaces, sensors and cabinet accessories for IoTEdges deployments.
                </p>
                <Link to="/accessories" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-300 hover:text-blue-200">
                  View compatible accessories <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
