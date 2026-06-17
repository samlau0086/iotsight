import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Server, Monitor } from 'lucide-react';
import { solutions } from '../data/solutions';
import QuoteRequestModal from '../components/QuoteRequestModal';

export default function SolutionDetail() {
  const { id } = useParams<{ id: string }>();
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const solution = solutions.find(s => s.id === id);

  if (!solution) {
    return (
      <div className="bg-slate-900 min-h-screen pt-32 pb-20 text-center text-slate-300">
        <h1 className="text-3xl font-bold text-white mb-4">Solution Not Found</h1>
        <Link to="/solutions" className="text-blue-400 hover:text-blue-300">
          &larr; Back to Solutions
        </Link>
      </div>
    );
  }

  const Icon = solution.icon;

  return (
    <div className="bg-slate-950 text-slate-200">
      <QuoteRequestModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        title={`Inquire ${solution.title}`}
        description={`Start a solution inquiry for ${solution.title} without leaving this page. The inquiry will stay linked to the current solution.`}
        lockedInquiryType="Solution Inquiry"
        lockedInquirySubject={solution.title}
        lockedInquirySource={solution.link}
        analyticsFormName="solution_inquiry_modal"
      />
      {/* Hero */}
      <section className="relative w-full h-[50vh] min-h-[400px]">
        <img 
          src={solution.image} 
          alt={solution.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/90 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent flex flex-col justify-center px-4 sm:px-6 lg:px-8 border-b border-slate-800">
          <div className="max-w-7xl mx-auto w-full">
            <Link to="/solutions" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm font-medium">
              <ArrowLeft className="w-4 h-4" /> Back to Solutions
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center backdrop-blur-md">
                <Icon className="w-6 h-6" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                {solution.title}
              </h1>
            </div>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl leading-relaxed font-medium">
              {solution.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <button type="button" onClick={() => setIsInquiryOpen(true)} data-analytics-event="cta_click" data-analytics-category="solution" data-analytics-label={`Solution Inquiry - ${solution.title}`} data-analytics-destination="solution_inquiry_modal" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded transition-all hover:bg-blue-500">
                Request Quote <ArrowRight className="w-4 h-4" />
              </button>
              <Link to="/products" data-analytics-event="cta_click" data-analytics-category="solution" data-analytics-label={`View Products - ${solution.title}`} data-analytics-destination="/products" className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-white text-xs font-bold uppercase tracking-widest rounded transition-all hover:bg-slate-900">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Content */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Transforming {solution.title} with Real-Time Data</h2>
              <div className="text-slate-400 mb-6 leading-relaxed space-y-4">
                {solution.detailedContent ? (
                  solution.detailedContent.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <p>
                    Unlock new efficiencies by connecting your remote or legacy equipment directly to the cloud. Our end-to-end hardware and software ecosystem simplifies the complex data gathering process into actionable insights.
                  </p>
                )}
              </div>
              
              <div className="mt-12 space-y-12">
                {/* Hardware Requirements */}
                {solution.hardware && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Server className="w-5 h-5 text-blue-400" />
                      Hardware Requirements
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {solution.hardware.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-300 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Software Value */}
                {solution.software && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Monitor className="w-5 h-5 text-blue-400" />
                      Software Capabilities
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {solution.software.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-300 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {solution.relatedProducts && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Server className="w-5 h-5 text-blue-400" />
                      Related Products
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {solution.relatedProducts.map((product) => (
                        <Link
                          key={product.href}
                          to={product.href}
                          className="flex items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-lg text-sm font-bold text-slate-200 hover:border-blue-500/50 hover:text-blue-300 transition-colors"
                        >
                          {product.title}
                          <ArrowRight className="w-4 h-4 shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {solution.relatedResources && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Monitor className="w-5 h-5 text-blue-400" />
                      Related Resources
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {solution.relatedResources.map((resource) => (
                        <Link
                          key={resource.href}
                          to={resource.href}
                          className="flex items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-lg text-sm font-bold text-slate-200 hover:border-blue-500/50 hover:text-blue-300 transition-colors"
                        >
                          {resource.title}
                          <ArrowRight className="w-4 h-4 shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-8">
              {solution.architectureImage && (
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl">
                  <img 
                    src={solution.architectureImage} 
                    alt={`${solution.title} Architecture`} 
                    className="w-full h-64 object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-4 text-center border-t border-slate-800 mt-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Typical Deployment Architecture</span>
                  </div>
                </div>
              )}
              
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Ideal Architecture</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-slate-400 shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Field Sensors & PLCs</h4>
                    <p className="text-sm text-slate-400">Connect to existing machinery via standard protocols (Modbus, RS485).</p>
                  </div>
                </div>
                <div className="w-0.5 h-6 bg-slate-800 ml-5 block"></div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-blue-900/30 border border-blue-500/30 flex items-center justify-center font-bold text-blue-400 shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">IoTEdges Gateway</h4>
                    <p className="text-sm text-slate-400">Select an Ethernet, WiFi, or cellular gateway path based on field protocol, uplink, and deployment environment.</p>
                    <Link to="/products" className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 mt-3">
                      Browse related products <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
                <div className="w-0.5 h-6 bg-slate-800 ml-5 block"></div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-slate-400 shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Cloud Dashboard</h4>
                    <p className="text-sm text-slate-400">Visualize trends, manage fleets, and configure automated alerts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-slate-900 py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Ready to upgrade your infrastructure?</h2>
          <p className="mb-10 text-slate-400 font-medium">Contact our technical team to discuss how we can adapt this architecture for your specific integration needs.</p>
          <div className="flex justify-center flex-wrap gap-4">
            <button type="button" onClick={() => setIsInquiryOpen(true)} data-analytics-event="cta_click" data-analytics-category="solution" data-analytics-label={`Bottom Inquiry - ${solution.title}`} data-analytics-destination="solution_inquiry_modal" className="bg-blue-600 text-white px-8 py-4 font-bold text-xs uppercase tracking-widest rounded hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">Inquire This Solution</button>
            <Link to="/products" data-analytics-event="cta_click" data-analytics-category="solution" data-analytics-label={`Bottom Products - ${solution.title}`} data-analytics-destination="/products" className="border border-slate-700 text-white px-8 py-4 font-bold text-xs uppercase tracking-widest rounded hover:bg-slate-800 transition-all">View Related Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
