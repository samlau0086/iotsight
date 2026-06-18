import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { productPages } from '../data/products';
import MarkdownContent from '../components/MarkdownContent';
import QuoteRequestModal from '../components/QuoteRequestModal';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const product = productPages.find((item) => item.id === id);
  const inquiryChecklist = [
    'Country and target market',
    'Estimated quantity or sample request',
    'Required uplink: Ethernet, WiFi, or 4G',
    'Required DI / DO / AI / AO or relay count',
    'Protocol or device list such as Modbus meter, PLC, inverter, or sensor',
    'Any OEM, logo, enclosure, or firmware customization request',
  ];

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
      <QuoteRequestModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        title={`Inquire ${product.model}`}
        description={`Send a quote request for ${product.title} without leaving this page. The inquiry will stay linked to the current product.`}
        lockedInquiryType="Product Inquiry"
        lockedInquirySubject={`${product.model} - ${product.title}`}
        lockedInquirySource={`/products/${product.id}`}
        analyticsFormName="product_inquiry_modal"
      />
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
              <button
                type="button"
                onClick={() => setIsInquiryOpen(true)}
                data-analytics-event="cta_click"
                data-analytics-category="product"
                data-analytics-label={`Product Inquiry - ${product.title}`}
                data-analytics-destination="product_inquiry_modal"
                className="inline-flex items-center gap-2 rounded bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-blue-500"
              >
                Request Quote <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded border border-slate-700 px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-200 transition-all hover:bg-slate-800"
              >
                View All Products
              </Link>
            </div>
          </header>

          <div className="p-8 sm:p-12">
            {product.specGroups.length > 0 && (
              <section className="mb-10">
                <div className="mb-5 flex flex-col gap-2">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">Key Specs</p>
                  <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    Procurement-ready product snapshot
                  </h2>
                  <p className="max-w-3xl text-sm leading-relaxed text-slate-400">
                    Review the core I/O, field interface, uplink method, and protocol scope for this model.
                  </p>
                </div>
                <div className="mb-5 rounded-lg border border-slate-800 bg-slate-950/70 px-4 py-3 text-xs leading-relaxed text-slate-400">
                  Final specifications can vary by firmware package, enclosure choice, and OEM configuration.
                </div>
                <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                  {product.specGroups.map((group) => (
                    <section key={`${product.id}-${group.title}`} className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
                      <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">
                        {group.title}
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {group.specs.map((spec) => (
                          <div key={`${product.id}-${group.title}-${spec.label}`} className="rounded-md border border-slate-800 bg-slate-900 px-4 py-3">
                            <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                              {spec.label}
                            </div>
                            <div className="text-sm font-medium leading-relaxed text-slate-200">{spec.value}</div>
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </section>
            )}
            {product.selectionGuide && (
              <section className="mb-10">
                <div className="mb-5 flex flex-col gap-2">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">Model Selection Guide</p>
                  <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    How to decide if this is the right model
                  </h2>
                  <p className="max-w-3xl text-sm leading-relaxed text-slate-400">
                    Use this guide to confirm the right uplink, product type, and project fit.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_1fr_0.9fr]">
                  <section className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">Choose This Model When</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {product.selectionGuide.chooseWhen.map((item) => (
                        <div key={item} className="rounded-md border border-slate-800 bg-slate-900 px-4 py-3 text-sm leading-relaxed text-slate-200">
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>
                  <section className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">Consider Another Model When</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {product.selectionGuide.notFitWhen.map((item) => (
                        <div key={item} className="rounded-md border border-slate-800 bg-slate-900 px-4 py-3 text-sm leading-relaxed text-slate-200">
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>
                  <section className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">Also Compare</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {product.selectionGuide.compareLinks.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="flex items-center justify-between gap-3 rounded-md border border-slate-800 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-blue-500/50 hover:text-blue-300"
                        >
                          {item.label}
                          <ArrowRight className="h-4 w-4 shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </section>
                </div>
              </section>
            )}
            {product.bomGroups.length > 0 && (
              <section className="mb-10">
                <div className="mb-5 flex flex-col gap-2">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">Typical BOM</p>
                  <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    What else you may need for the project
                  </h2>
                  <p className="max-w-3xl text-sm leading-relaxed text-slate-400">
                    Common project accessories, interfaces, and supporting parts for this model.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                  {product.bomGroups.map((group) => (
                    <section key={`${product.id}-${group.title}`} className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
                      <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">
                        {group.title}
                      </h3>
                      <ul className="grid grid-cols-1 gap-3">
                        {group.items.map((item) => (
                          <li key={item} className="rounded-md border border-slate-800 bg-slate-900 px-4 py-3 text-sm leading-relaxed text-slate-200">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </section>
            )}
            {product.preSalesFaq.length > 0 && (
              <section className="mb-10">
                <div className="mb-5 flex flex-col gap-2">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">Pre-Sales FAQ</p>
                  <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    Common buyer questions before inquiry
                  </h2>
                  <p className="max-w-3xl text-sm leading-relaxed text-slate-400">
                    Answers to common questions on samples, OEM branding, setup scope, and project support.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {product.preSalesFaq.map((item) => (
                    <section key={item.question} className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
                      <h3 className="mb-3 text-base font-bold text-white">{item.question}</h3>
                      <p className="text-sm leading-relaxed text-slate-300">{item.answer}</p>
                    </section>
                  ))}
                </div>
              </section>
            )}
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
                  <button
                    type="button"
                    onClick={() => setIsInquiryOpen(true)}
                    data-analytics-event="cta_click"
                    data-analytics-category="product"
                    data-analytics-label={`Bottom Inquiry - ${product.title}`}
                    data-analytics-destination="product_inquiry_modal"
                    className="inline-flex items-center gap-2 rounded bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-950 transition-all hover:bg-slate-200"
                  >
                    Inquire This Product <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="mb-5 rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-white">What To Prepare Before Inquiry</h3>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {inquiryChecklist.map((item) => (
                      <div key={item} className="rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-xs leading-relaxed text-slate-300">
                        {item}
                      </div>
                    ))}
                  </div>
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
