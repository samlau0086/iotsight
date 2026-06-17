import { ProductPage } from '../types';
import { productSpecsById } from './productSpecs';
import { productSelectionGuidesById } from './productSelectionGuides';
import { productBomGuidesById } from './productBomGuides';
import { productPreSalesFaqsById } from './productPreSalesFaqs';

const markdownModules = import.meta.glob('../content/products/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function parseFrontmatter(markdown: string) {
  const normalizedMarkdown = markdown.replace(/^\uFEFF/, '');
  const frontmatterMatch = normalizedMarkdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!frontmatterMatch) {
    return {
      metadata: {} as Record<string, string>,
      content: normalizedMarkdown.trim(),
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
    specGroups: (productSpecsById[metadata.id || fallbackId] || []).filter((group) => group.specs.length > 0),
    specs: (productSpecsById[metadata.id || fallbackId] || []).flatMap((group) => group.specs),
    selectionGuide: productSelectionGuidesById[metadata.id || fallbackId],
    bomGroups: productBomGuidesById[metadata.id || fallbackId] || [],
    preSalesFaq: productPreSalesFaqsById[metadata.id || fallbackId] || [],
  };
}

export const productPages: ProductPage[] = Object.entries(markdownModules)
  .map(([path, markdown]) => createProductPage(path, markdown))
  .sort((a, b) => a.order - b.order);
