import { ProductPage } from '../types';

const markdownModules = import.meta.glob('../content/products/*.md', {
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

function createProductPage(path: string, markdown: string): ProductPage {
  const { metadata, content } = parseFrontmatter(markdown);
  const fallbackId = path.split('/').pop()?.replace(/\.md$/, '') || 'product-page';

  return {
    id: metadata.id || fallbackId,
    title: metadata.title || 'Untitled Product',
    excerpt: metadata.excerpt || '',
    content,
    category: metadata.category || 'Industrial IoT Product',
    model: metadata.model || '',
    status: metadata.status || '',
    primaryKeyword: metadata.primaryKeyword || '',
    route: metadata.route || `/products/${metadata.id || fallbackId}`,
    order: Number(metadata.order || 0),
  };
}

export const productPages: ProductPage[] = Object.entries(markdownModules)
  .map(([path, markdown]) => createProductPage(path, markdown))
  .sort((a, b) => a.order - b.order);
