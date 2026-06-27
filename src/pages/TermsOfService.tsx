export default function TermsOfService() {
  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-20 text-slate-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl sm:p-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-300">Terms Of Service</p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            Terms Of Service
          </h1>
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-slate-400">
            These terms govern use of the IoTEdges website and its public product, solution, technical content, inquiry,
            and chat workflows.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="mb-3 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Website Use</h2>
              <p className="leading-relaxed text-slate-300">
                You may use this website to review product information, evaluate solutions, read technical content, and
                submit legitimate business inquiries. You may not use the website for unlawful, abusive, or misleading
                activity.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Informational Content</h2>
              <p className="leading-relaxed text-slate-300">
                Product pages, architecture notes, selection guides, blog posts, and knowledge content are provided for
                general commercial and technical reference. Final purchasing, engineering, compliance, and deployment
                decisions should be confirmed against the released hardware specification, approved project scope, and the
                final quotation or commercial agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Quotes And Orders</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Submitting a quote request does not create a binding order or acceptance.',
                  'Pricing, availability, configuration, lead time, and customization scope remain subject to confirmation.',
                  'Product fit may depend on application details such as protocol list, device count, signal type, certification, and deployment environment.',
                ].map((item) => (
                  <div key={item} className="rounded-lg border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm leading-relaxed text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Technical Boundaries</h2>
              <p className="leading-relaxed text-slate-300">
                Example register maps, protocol notes, wiring references, and application descriptions on this website do
                not replace final engineering review. Any field deployment should be validated against the target device
                list, power environment, communications design, and site-specific risk controls.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Intellectual Property</h2>
              <p className="leading-relaxed text-slate-300">
                Website copy, page structure, graphics, product descriptions, and related materials remain the property of
                IoTEdges or the applicable rights holder unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>No Warranty On Website Availability</h2>
              <p className="leading-relaxed text-slate-300">
                IoTEdges may update, suspend, or change website content, form workflows, integrations, and live chat
                availability without notice.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Updates</h2>
              <p className="leading-relaxed text-slate-300">
                These terms may be updated as the website, product program, or commercial workflows change.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
