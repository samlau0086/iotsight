import { BlogPost } from '../types';
import { parseFrontmatter, readNumber, readOptionalString, readString, readStringArray } from '../lib/frontmatter';

type BlogPostWithOrder = BlogPost & {
  order: number;
};

const markdownModules = import.meta.glob('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function createBlogPost(path: string, markdown: string): BlogPostWithOrder {
  const { metadata, content } = parseFrontmatter(markdown);
  const fallbackId = path.split('/').pop()?.replace(/\.md$/, '') || 'blog-post';

  return {
    id: readString(metadata.id, fallbackId),
    title: readString(metadata.title, 'Untitled Article'),
    excerpt: readString(metadata.excerpt),
    content,
    date: readString(metadata.date),
    author: readString(metadata.author),
    category: readString(metadata.category),
    imageUrl: readOptionalString(metadata.imageUrl),
    relatedProducts: readStringArray(metadata.relatedProducts),
    relatedResources: readStringArray(metadata.relatedResources),
    order: readNumber(metadata.order),
  };
}

export const blogPosts: BlogPost[] = Object.entries(markdownModules)
  .map(([path, markdown]) => createBlogPost(path, markdown))
  .sort((a, b) => a.order - b.order)
  .map(({ order, ...post }) => post);
