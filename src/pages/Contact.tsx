import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import QuoteRequestForm from '../components/QuoteRequestForm';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const lockedInquiryType = String(searchParams.get('type') || '').trim();
  const lockedInquirySubject = String(searchParams.get('subject') || '').trim();
  const lockedInquirySource = String(searchParams.get('source') || '').trim();

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
            <QuoteRequestForm
              lockedInquiryType={lockedInquiryType}
              lockedInquirySubject={lockedInquirySubject}
              lockedInquirySource={lockedInquirySource}
              analyticsFormName="contact_quote"
            />
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
