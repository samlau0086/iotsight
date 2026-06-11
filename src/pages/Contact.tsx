import { useMemo, useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const CRM_FORM_ENDPOINT = 'https://crms.geekmt.com/api/public/customer-forms/form_1780670393030_531/submit';
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

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());

  const countryOptions = useMemo(() => countries, []);

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
      const response = await fetch(CRM_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          company,
          email,
          whatsapp,
          country,
          message,
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
        form_name: 'contact_quote',
        application_type: applicationType,
        country,
      });
    } catch (error) {
      console.error('Quote request submission failed:', error);
      setSubmitError('Unable to submit the request right now. Please try again or email sales@iotedges.com.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-300">
      {/* Full-width Hero Image */}
      <div className="relative w-full h-[30vh] min-h-[300px] lg:h-[40vh]">
        <img 
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2560" 
          alt="Industrial IoT Facility" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/70 bg-gradient-to-t from-slate-900 to-transparent flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Request a Quote
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
              Partner with us to build your next-generation industrial IoT infrastructure.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Info */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>Get a Quote for Your Industrial IoT Project</h2>
            <p className="text-lg text-slate-400 mb-12">
              Tell us about your <strong>factory energy monitoring system</strong> or remote equipment tracking requirements. Our engineering team usually responds with a technical proposal within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email Us</h3>
                  <p className="text-slate-400 mt-1">sales@iotedges.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Call Us</h3>
                  <p className="text-slate-400 mt-1">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Global HQ</h3>
                  <p className="text-slate-400 mt-1">123 Innovation Drive,<br/>Tech City, TC 10010</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
                <p className="text-slate-400">Thank you! We'll review your IoT requirements and respond shortly.</p>
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
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="website_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <input type="hidden" name="_formStartedAt" value={formStartedAt} />
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
                    <>Submit Request <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-3">Do I have to use your cloud dashboard?</h3>
              <p className="text-slate-400 leading-relaxed">
                No. While we offer a fully integrated cloud dashboard for convenience, our standard Modbus to MQTT gateways can be configured to publish telemetry data to any third-party MQTT broker (e.g., AWS IoT Core, Azure IoT Hub, or your private server).
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-3">What is the lead time for hardware orders?</h3>
              <p className="text-slate-400 leading-relaxed">
                For standard non-customized gateways, we maintain stock and typically ship within 3-5 business days. For bulk orders or customized OEM/ODM hardware (with your logo and specific form factors), the lead time is generally 4-6 weeks depending on the order volume.
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-3">Are your energy monitoring solutions difficult to install?</h3>
              <p className="text-slate-400 leading-relaxed">
                Not at all. For factory energy monitoring, we provide split-core CT (Current Transformer) options. This means they can be clamped around the power cables without needing to cut wires or shut down the main power supply, making installation fast and non-disruptive.
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-3">Can I get a trial unit?</h3>
              <p className="text-slate-400 leading-relaxed">
                Yes, we offer evaluation kits for qualified system integrators and enterprise customers. Please fill out the contact form above, specify "Evaluation Kit Request" in the details, and our engineering team will get in touch to assess your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
