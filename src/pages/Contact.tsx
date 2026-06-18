import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import QuoteRequestForm from '../components/QuoteRequestForm';
import { contactSiteCopy } from '../data/siteCopy';

const contactIcons = {
  mail: Mail,
  phone: Phone,
  'map-pin': MapPin,
} as const;

function getContactIcon(iconKey: string) {
  return contactIcons[iconKey as keyof typeof contactIcons] || Mail;
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const lockedInquiryType = String(searchParams.get('type') || '').trim();
  const lockedInquirySubject = String(searchParams.get('subject') || '').trim();
  const lockedInquirySource = String(searchParams.get('source') || '').trim();

  return (
    <div className="bg-slate-900 min-h-screen text-slate-300">
      <div className="relative w-full h-[30vh] min-h-[300px] lg:h-[40vh]">
        <img src={contactSiteCopy.heroImageUrl} alt="IoTEdges industrial IoT contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/70 bg-gradient-to-t from-slate-900 to-transparent flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              {contactSiteCopy.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl">{contactSiteCopy.heroDescription}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              {contactSiteCopy.introTitle}
            </h2>
            <p className="text-lg text-slate-400 mb-12">{contactSiteCopy.introDescription}</p>

            <div className="space-y-8">
              {contactSiteCopy.contactInfo.map((item) => {
                const Icon = getContactIcon(item.iconKey);

                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 whitespace-pre-line text-slate-400">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 shadow-2xl">
            <QuoteRequestForm
              lockedInquiryType={lockedInquiryType}
              lockedInquirySubject={lockedInquirySubject}
              lockedInquirySource={lockedInquirySource}
              analyticsFormName="contact_quote"
            />
          </div>
        </div>
      </div>

      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            {contactSiteCopy.faqTitle}
          </h2>

          <div className="space-y-6">
            {contactSiteCopy.faqs.map((faq) => (
              <div key={faq.question} className="bg-slate-900 border border-slate-700 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
