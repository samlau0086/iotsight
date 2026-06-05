import { BlogPost } from '../types';

type BlogPostWithOrder = BlogPost & {
  order: number;
};

const markdownModules = import.meta.glob('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function parseFrontmatter(markdown: string) {
  const frontmatterMatch = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!frontmatterMatch) {
    return {
      metadata: {} as Record<string, string>,
      content: markdown.trim(),
    };
  }

  const metadata = frontmatterMatch[1]
    .split(/\r?\n/)
    .reduce<Record<string, string>>((acc, line) => {
      const separatorIndex = line.indexOf(':');
      if (separatorIndex === -1) return acc;

      const key = line.slice(0, separatorIndex).trim();
      const value = line.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');

      if (key) {
        acc[key] = value;
      }

      return acc;
    }, {});

  return {
    metadata,
    content: frontmatterMatch[2].trim(),
  };
}

function createBlogPost(path: string, markdown: string): BlogPostWithOrder {
  const { metadata, content } = parseFrontmatter(markdown);
  const fallbackId = path.split('/').pop()?.replace(/\.md$/, '') || 'blog-post';

  return {
    id: metadata.id || fallbackId,
    title: metadata.title || 'Untitled Article',
    excerpt: metadata.excerpt || '',
    content,
    date: metadata.date || '',
    author: metadata.author || '',
    category: metadata.category || '',
    imageUrl: metadata.imageUrl || undefined,
    order: Number(metadata.order || 0),
  };
}

export const blogPosts: BlogPost[] = Object.entries(markdownModules)
  .map(([path, markdown]) => createBlogPost(path, markdown))
  .sort((a, b) => a.order - b.order)
  .map(({ order, ...post }) => post);
