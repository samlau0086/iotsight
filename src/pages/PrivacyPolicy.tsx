export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-20 text-slate-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl sm:p-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-300">Privacy Policy</p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            Privacy Policy
          </h1>
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-slate-400">
            This policy describes how IoTEdges collects and uses information when you browse this website, submit a quote
            request, or use live chat.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="mb-3 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Who We Are</h2>
              <p className="leading-relaxed text-slate-300">
                IoTEdges operates this website to present industrial IoT products, solution information, technical
                resources, and quotation workflows for international B2B customers.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Information We Collect</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Contact and business details you submit in quote or inquiry forms, such as name, company, email, WhatsApp number, country, and project message.',
                  'Technical project details you choose to share, such as application type, protocol requirements, uplink preference, and I/O scope.',
                  'Live chat session details that are required to continue a customer support or sales conversation.',
                  'Basic analytics and traffic information collected through Google Analytics and Google Tag Manager.',
                ].map((item) => (
                  <div key={item} className="rounded-lg border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm leading-relaxed text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>How We Use Information</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'To respond to quote requests, product inquiries, solution questions, and technical follow-up.',
                  'To evaluate project fit, prepare pricing discussions, and recommend matching products or architectures.',
                  'To operate live chat and maintain continuity for customer-facing conversations.',
                  'To measure website traffic, page usage, and conversion activity so the website can be improved.',
                ].map((item) => (
                  <div key={item} className="rounded-lg border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm leading-relaxed text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Third-Party Services</h2>
              <p className="mb-4 leading-relaxed text-slate-300">
                This website uses third-party services to support operations. Those services may process data according to
                their own terms and privacy rules.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-4">
                  <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Analytics</div>
                  <p className="text-sm leading-relaxed text-slate-300">Google Analytics and Google Tag Manager for traffic and conversion measurement.</p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-4">
                  <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Quote Processing</div>
                  <p className="text-sm leading-relaxed text-slate-300">Quote request submissions are forwarded to the external CRM workflow used by this website.</p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-4">
                  <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Live Chat</div>
                  <p className="text-sm leading-relaxed text-slate-300">Live chat requests and messages are proxied to the configured live chat service.</p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-4">
                  <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Infrastructure</div>
                  <p className="text-sm leading-relaxed text-slate-300">Website delivery, caching, and DNS may rely on infrastructure providers used by IoTEdges.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Data Retention</h2>
              <p className="leading-relaxed text-slate-300">
                Inquiry, quotation, and support data may be retained for sales follow-up, project communication, record
                keeping, and operational review for as long as reasonably necessary.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Your Choices</h2>
              <p className="leading-relaxed text-slate-300">
                If you want to ask about the information you submitted through this website, use the contact or quote
                channels shown on the site and identify the relevant submission details so the request can be reviewed.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Policy Updates</h2>
              <p className="leading-relaxed text-slate-300">
                This policy may be updated as the website, integrations, or business workflows change.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
