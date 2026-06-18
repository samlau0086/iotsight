import { KnowledgePage } from '../types';
import { parseFrontmatter, readNumber, readString, readStringArray } from '../lib/frontmatter';

const markdownModules = import.meta.glob('../content/knowledge/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function createKnowledgePage(path: string, markdown: string): KnowledgePage {
  const { metadata, content } = parseFrontmatter(markdown);
  const fallbackId = path.split('/').pop()?.replace(/\.md$/, '') || 'knowledge-page';

  return {
    id: readString(metadata.id, fallbackId),
    title: readString(metadata.title, 'Untitled Knowledge Page'),
    excerpt: readString(metadata.excerpt),
    content,
    category: readString(metadata.category, 'Industrial IoT Knowledge Base'),
    primaryKeyword: readString(metadata.primaryKeyword),
    relatedProducts: readStringArray(metadata.relatedProducts),
    order: readNumber(metadata.order),
  };
}

export const knowledgePages: KnowledgePage[] = Object.entries(markdownModules)
  .map(([path, markdown]) => createKnowledgePage(path, markdown))
  .sort((a, b) => a.order - b.order);
