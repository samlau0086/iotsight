import { KnowledgePage } from '../types';

const markdownModules = import.meta.glob('../content/knowledge/*.md', {
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

function parseList(value = '') {
  return value
    .split(',')
    .map(item => item.trim())
    .filter(Boolean);
}

function createKnowledgePage(path: string, markdown: string): KnowledgePage {
  const { metadata, content } = parseFrontmatter(markdown);
  const fallbackId = path.split('/').pop()?.replace(/\.md$/, '') || 'knowledge-page';

  return {
    id: metadata.id || fallbackId,
    title: metadata.title || 'Untitled Knowledge Page',
    excerpt: metadata.excerpt || '',
    content,
    category: metadata.category || 'Industrial IoT Knowledge Base',
    primaryKeyword: metadata.primaryKeyword || '',
    relatedProducts: parseList(metadata.relatedProducts),
    order: Number(metadata.order || 0),
  };
}

export const knowledgePages: KnowledgePage[] = Object.entries(markdownModules)
  .map(([path, markdown]) => createKnowledgePage(path, markdown))
  .sort((a, b) => a.order - b.order);
