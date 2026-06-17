import { useMemo, useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const QUOTE_REQUEST_ENDPOINT = '/api/quote-request';
const MIN_SUBMIT_TIME_MS = 3000;

const countries = [
  'United States',
  'United Kingdom',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Netherlands',
  'Belgium',
  'Sweden',
  'Norway',
  'Denmark',
  'Finland',
  'Poland',
  'Czech Republic',
  'Austria',
  'Switzerland',
  'Ireland',
  'Portugal',
  'Greece',
  'Romania',
  'Hungary',
  'Bulgaria',
  'Croatia',
  'Slovakia',
  'Slovenia',
  'Estonia',
  'Latvia',
  'Lithuania',
  'Turkey',
  'United Arab Emirates',
  'Saudi Arabia',
  'South Africa',
  'Australia',
  'New Zealand',
  'Canada',
  'Mexico',
  'Brazil',
  'Chile',
  'India',
  'Singapore',
  'Malaysia',
  'Thailand',
  'Vietnam',
  'Indonesia',
  'Philippines',
  'Japan',
  'South Korea',
  'China',
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const whatsappPattern = /^\+?[0-9][0-9\s().-]{6,24}$/;

type QuoteRequestFormProps = {
  lockedInquiryType?: string;
  lockedInquirySubject?: string;
  lockedInquirySource?: string;
  submitLabel?: string;
  successTitle?: string;
  successMessage?: string;
  analyticsFormName?: string;
  onSubmitted?: () => void;
};

export default function QuoteRequestForm({
  lockedInquiryType = '',
  lockedInquirySubject = '',
  lockedInquirySource = '',
  submitLabel = 'Submit Request',
  successTitle = 'Request Received',
  successMessage = "Thank you! We'll review your IoT requirements and respond shortly.",
  analyticsFormName = 'contact_quote',
  onSubmitted,
}: QuoteRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());

  const countryOptions = useMemo(() => countries, []);
  const hasLockedInquiryContext = Boolean(lockedInquiryType || lockedInquirySubject);
  const resolvedApplicationType = lockedInquiryType || '';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const company = String(formData.get('company') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const whatsapp = String(formData.get('whatsapp') || '').trim();
    const country = String(formData.get('country') || '').trim();
    const applicationType = String(formData.get('application_type') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const websiteUrl = String(formData.get('website_url') || '').trim();
    const enrichedMessage = hasLockedInquiryContext
      ? [
          'Inquiry Context',
          lockedInquiryType ? `Type: ${lockedInquiryType}` : '',
          lockedInquirySubject ? `Subject: ${lockedInquirySubject}` : '',
          lockedInquirySource ? `Source: ${lockedInquirySource}` : '',
          '',
          message,
        ].filter(Boolean).join('\n')
      : message;

    setSubmitError('');

    if (websiteUrl) {
      setSubmitted(true);
      return;
    }

    if (Date.now() - formStartedAt < MIN_SUBMIT_TIME_MS) {
      setSubmitError('Please take a moment to complete the form before submitting.');
      return;
    }

    if (!emailPattern.test(email)) {
      setSubmitError('Please enter a valid business email address.');
      return;
    }

    if (!whatsappPattern.test(whatsapp)) {
      setSubmitError('Please enter a valid WhatsApp or phone number, including country code when possible.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(QUOTE_REQUEST_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          company,
          email,
          whatsapp,
          country,
          message: enrichedMessage,
          application_type: applicationType,
          _formStartedAt: formStartedAt,
          website_url: websiteUrl,
        }),
      });

      if (!response.ok) {
        throw new Error(`CRM form submission failed with status ${response.status}`);
      }

      setIsSubmitting(false);
      setSubmitted(true);
      setFormStartedAt(Date.now());
      form.reset();
      trackEvent('lead_form_submit', {
        event_category: 'lead',
        form_name: analyticsFormName,
        application_type: applicationType,
        country,
        inquiry_subject: lockedInquirySubject || undefined,
      });
      onSubmitted?.();
    } catch (error) {
      console.error('Quote request submission failed:', error);
      setSubmitError('Unable to submit the request right now. Please try again or email sales@iotedges.com.');
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
          <Send className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{successTitle}</h3>
        <p className="text-slate-400">{successMessage}</p>
        <button
          onClick={() => {
            setSubmitted(false);
            setSubmitError('');
            setFormStartedAt(Date.now());
          }}
          className="mt-8 text-blue-400 font-medium hover:text-blue-300"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="text" name="website_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="_formStartedAt" value={formStartedAt} />
      {hasLockedInquiryContext && (
        <section className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-5">
          <h3 className="mb-4 text-lg font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Inquiry Context</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {lockedInquirySubject && (
              <div>
                <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-blue-300">Subject</span>
                <div className="rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white">
                  {lockedInquirySubject}
                </div>
              </div>
            )}
            {lockedInquiryType && (
              <div>
                <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-blue-300">Inquiry Type</span>
                <div className="rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white">
                  {lockedInquiryType}
                </div>
              </div>
            )}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            This inquiry is linked to the current page and cannot be changed here.
          </p>
        </section>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Name *</label>
          <input required name="name" type="text" autoComplete="name" className="w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Company *</label>
          <input required name="company" type="text" autoComplete="organization" className="w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Email *</label>
          <input required name="email" type="email" inputMode="email" autoComplete="email" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" className="w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">WhatsApp / Phone *</label>
          <input required name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="+14155550123" pattern="^\+?[0-9][0-9\s().-]{6,24}$" className="w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Country *</label>
          <input required name="country" type="search" list="country-options" autoComplete="country-name" placeholder="Search country..." className="w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500" />
          <datalist id="country-options">
            {countryOptions.map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Application Type *</label>
          {resolvedApplicationType ? (
            <>
              <input type="hidden" name="application_type" value={resolvedApplicationType} />
              <div className="w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-white">
                {resolvedApplicationType}
              </div>
            </>
          ) : (
            <select required name="application_type" className="w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
              <option value="">Select target application...</option>
              <option value="Factory Energy Monitoring">Factory Energy Monitoring</option>
              <option value="Solar Monitoring">Solar Monitoring</option>
              <option value="Water Monitoring">Water Monitoring</option>
              <option value="Smart Agriculture">Smart Agriculture</option>
              <option value="Gate Access Control">Gate Access Control</option>
              <option value="Remote IO / RTU Project">Remote IO / RTU Project</option>
              <option value="Modbus MQTT Gateway">Modbus MQTT Gateway</option>
              <option value="Other IoT Use Case">Other IoT Use Case</option>
            </select>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Project Message *</label>
        <textarea required name="message" rows={5} className="w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500" placeholder="Tell us about your equipment, protocols, network type, expected quantity, timeline, and target market..."></textarea>
      </div>

      {submitError && (
        <p className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200" role="alert">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-500 transition flex justify-center items-center gap-2 disabled:bg-blue-800 disabled:text-slate-400"
      >
        {isSubmitting ? 'Sending Request...' : (
          <>{submitLabel} <Send className="w-4 h-4" /></>
        )}
      </button>
    </form>
  );
}
