import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

export default function BlogList() {
  return (
    <div className="bg-slate-900 min-h-screen pt-24 pb-20 text-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Industrial IoT Blog</h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Insights, guides, and trends on factory energy monitoring, remote equipment tracking, and industrial networking.
          </p>
        </div>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-xl hover:border-blue-500/50 transition-colors flex flex-col md:flex-row">
              {post.imageUrl && (
                <div className="md:w-1/3 shrink-0">
                  <Link to={`/blog/${post.id}`} className="block h-full">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-48 md:h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                </div>
              )}
              <div className={`p-8 flex-1 flex flex-col justify-center`}>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Tag className="w-4 h-4 text-blue-400" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4 text-blue-400" />
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
      </div>
    </div>
  );
}
