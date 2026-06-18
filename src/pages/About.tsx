import { Link } from 'react-router-dom';
import { aboutSiteCopy } from '../data/siteCopy';

export default function About() {
  return (
    <div className="bg-slate-900 min-h-screen pt-20 pb-20 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            {aboutSiteCopy.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">{aboutSiteCopy.heroDescription}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              {aboutSiteCopy.missionTitle}
            </h2>
            {aboutSiteCopy.missionParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg text-slate-400 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <ul className="space-y-4 text-slate-400">
              {aboutSiteCopy.missionBullets.map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <img src={aboutSiteCopy.imageUrl} alt="IoTEdges industrial IoT architecture" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="font-bold text-xl mb-1">{aboutSiteCopy.imageOverlayTitle}</h3>
                <p className="text-slate-300 text-sm">{aboutSiteCopy.imageOverlayDescription}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {aboutSiteCopy.stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10 lg:p-12 shadow-2xl mb-24">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-10 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            {aboutSiteCopy.reasonsTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {aboutSiteCopy.reasons.map((reason) => (
              <div key={reason.title}>
                <h4 className="text-xl font-bold text-white mb-4">{reason.title}</h4>
                <p className="text-slate-400 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-10 lg:p-16 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            {aboutSiteCopy.partnerTitle}
          </h3>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">{aboutSiteCopy.partnerDescription}</p>
          <Link to={aboutSiteCopy.partnerCtaHref} className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded text-sm font-bold uppercase tracking-widest transition shadow-lg shadow-blue-500/20">
            {aboutSiteCopy.partnerCtaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
