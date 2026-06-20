import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

export default function BlogList() {
  return (
    <div className="bg-slate-900 min-h-screen pt-24 pb-20 text-slate-300">
      <section className="border-b border-slate-800 bg-slate-900/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-400 mb-5">IoTEdges Blog</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Industrial IoT Blog</h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Practical articles on product selection, deployment decisions, wiring, connectivity, and buyer-facing guidance for industrial gateways, RTUs, Remote IO, and accessories.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-xl hover:border-blue-500/50 transition-colors flex flex-col">
              <div className="h-56 shrink-0">
                <Link to={`/blog/${post.id}`} className="block h-full">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </Link>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-blue-400" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-blue-400" />
                    {post.author}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-slate-400 mb-6 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                
                <div>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
