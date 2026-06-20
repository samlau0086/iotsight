import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { knowledgePages } from '../data/knowledge';
import { productPages } from '../data/products';
import { getRelatedLinksForKnowledge } from '../data/relatedContent';
import { ProductPage } from '../types';
import MarkdownContent from '../components/MarkdownContent';
import RelatedLinksSection from '../components/RelatedLinksSection';
import QuoteRequestModal from '../components/QuoteRequestModal';

export default function KnowledgeDetail() {
  const { id } = useParams<{ id: string }>();
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
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
  const { relatedSolutions, relatedBlog } = getRelatedLinksForKnowledge(page);

  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-20 text-slate-300">
      <QuoteRequestModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        title={`Request Help For ${page.title}`}
        description="Use this form to request hardware matching, wiring review, or a quotation path for the technical topic on this page."
        lockedInquiryType="Knowledge Inquiry"
        lockedInquirySubject={page.title}
        lockedInquirySource={`/knowledge/${page.id}`}
        analyticsFormName="knowledge_inquiry_modal"
        submitLabel="Request Hardware Match"
        successTitle="Knowledge Inquiry Received"
        successMessage="We received your technical inquiry and will reply with the most relevant product, solution, or wiring follow-up."
        successChecklist={[
          'Your request stays linked to this knowledge page topic.',
          'We will usually reply with matching hardware, project fit, or missing engineering questions.',
          'For faster quoting, include country, quantity, uplink, and field I/O scope.',
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/knowledge" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Knowledge Base
        </Link>

        <article className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl">
          <div className="aspect-[16/8] w-full overflow-hidden border-b border-slate-800 bg-slate-950">
            <img
              src={page.imageUrl}
              alt={page.title}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
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
              <MarkdownContent>{page.content}</MarkdownContent>
            </div>

            <section className="mt-12 rounded-xl border border-blue-500/20 bg-blue-500/10 p-6 sm:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">Need A Matching Device?</p>
                  <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    Turn this technical topic into a hardware shortlist
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Tell us your project application, protocol, uplink, and local I/O scope. We will help map this topic to the right IoTEdges product or solution path.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => setIsInquiryOpen(true)}
                    data-analytics-event="cta_click"
                    data-analytics-category="knowledge"
                    data-analytics-label={`Knowledge Inquiry - ${page.title}`}
                    data-analytics-destination="knowledge_inquiry_modal"
                    className="inline-flex items-center gap-2 rounded bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-950 transition-all hover:bg-slate-200"
                  >
                    Request Hardware Match <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    to="/contact"
                    data-analytics-event="cta_click"
                    data-analytics-category="knowledge"
                    data-analytics-label={`Knowledge Contact - ${page.title}`}
                    data-analytics-destination="/contact"
                    className="inline-flex items-center gap-2 rounded border border-slate-600 px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-100 transition-all hover:bg-slate-800"
                  >
                    Go To Contact <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>

            {(relatedProducts.length > 0 || relatedSolutions.length > 0 || relatedBlog.length > 0) && (
              <section className="mt-12 grid grid-cols-1 gap-8 border-t border-slate-800 pt-8">
                {relatedProducts.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>Related Products</h2>
                    <p className="mb-5 text-sm leading-relaxed text-slate-400">Products that directly match this technical topic.</p>
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
                <RelatedLinksSection
                  title="Related Solutions"
                  description="Application pages where this protocol or wiring topic matters in deployment."
                  links={relatedSolutions}
                />
                <RelatedLinksSection
                  title="Related Articles"
                  description="Buyer-facing articles that expand this topic into hardware or project decisions."
                  links={relatedBlog}
                />
              </section>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
