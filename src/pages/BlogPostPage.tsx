import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { knowledgePages } from '../data/knowledge';
import { productPages } from '../data/products';
import { ProductPage } from '../types';
import { Calendar, User, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import MarkdownContent from '../components/MarkdownContent';

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="bg-slate-900 min-h-screen pt-32 pb-20 text-center text-slate-300">
        <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-blue-400 hover:text-blue-300">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  const relatedProducts = post.relatedProducts
    .map(productId => productPages.find(product => product.id === productId))
    .filter((product): product is ProductPage => Boolean(product));

  const relatedResources = post.relatedResources.map((href) => {
    const blogMatch = href.match(/^\/blog\/([^/]+)$/);
    const knowledgeMatch = href.match(/^\/knowledge\/([^/]+)$/);
    const matchingBlog = blogMatch ? blogPosts.find(item => item.id === blogMatch[1]) : null;
    const matchingKnowledge = knowledgeMatch ? knowledgePages.find(item => item.id === knowledgeMatch[1]) : null;

    return {
      href,
      title: matchingBlog?.title || matchingKnowledge?.title || href.split('/').filter(Boolean).pop()?.replace(/-/g, ' ') || href,
    };
  });

  return (
    <div className="bg-slate-900 min-h-screen pt-24 pb-20 text-slate-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        
        <article className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
          {post.imageUrl && (
            <div className="w-full h-64 sm:h-96">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
          <div className="p-8 sm:p-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-8 border-b border-slate-700 pb-8">
              <span className="flex items-center gap-1 bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
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

          <div className="prose prose-invert prose-blue max-w-none prose-headings:font-display prose-h1:text-3xl prose-h1:text-white prose-h2:text-2xl prose-h2:text-slate-100 prose-h2:mt-8 prose-h2:mb-4 prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6 prose-li:text-slate-300 prose-li:mb-2 prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-6 prose-strong:text-white">
            <MarkdownContent>{post.content}</MarkdownContent>
          </div>

          {(relatedProducts.length > 0 || relatedResources.length > 0) && (
            <div className="mt-12 grid grid-cols-1 gap-8 border-t border-slate-700 pt-8">
              {relatedProducts.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>Related Products</h2>
                  <div className="grid grid-cols-1 gap-3">
                    {relatedProducts.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className="flex items-center justify-between gap-4 bg-slate-900 border border-slate-700 p-4 rounded-lg text-sm font-bold text-slate-200 hover:border-blue-500/50 hover:text-blue-300 transition-colors"
                      >
                        {product.title}
                        <ArrowRight className="w-4 h-4 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {relatedResources.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>Related Resources</h2>
                  <div className="grid grid-cols-1 gap-3">
                    {relatedResources.map((resource) => (
                      <Link
                        key={resource.href}
                        to={resource.href}
                        className="flex items-center justify-between gap-4 bg-slate-900 border border-slate-700 p-4 rounded-lg text-sm font-bold text-slate-200 hover:border-blue-500/50 hover:text-blue-300 transition-colors"
                      >
                        {resource.title}
                        <ArrowRight className="w-4 h-4 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}
          </div>
        </article>
      </div>
    </div>
  );
}
