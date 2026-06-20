import { ProductPage } from '../types';
import { parseFrontmatter, readNumber, readOptionalString, readString } from '../lib/frontmatter';
import { resolveProductImageUrl } from '../lib/contentImages';
import { isPublicProductStatus, resolveProductStatus } from '../lib/contentStatus';

const markdownModules = import.meta.glob('../content/products/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function readProductSpecGroups(value: unknown): ProductPage['specGroups'] {
  if (!Array.isArray(value)) return [];

  return value
    .map((group) => {
      if (!group || typeof group !== 'object') return null;
      const entry = group as Record<string, unknown>;
      const specs = Array.isArray(entry.specs)
        ? entry.specs
            .map((spec) => {
              if (!spec || typeof spec !== 'object') return null;
              const specEntry = spec as Record<string, unknown>;
              const label = readString(specEntry.label);
              const specValue = readString(specEntry.value);
              return label && specValue ? { label, value: specValue } : null;
            })
            .filter((item): item is ProductPage['specs'][number] => Boolean(item))
        : [];

      const title = readString(entry.title);
      return title && specs.length > 0 ? { title, specs } : null;
    })
    .filter((item): item is ProductPage['specGroups'][number] => Boolean(item));
}

function readProductSelectionGuide(value: unknown): ProductPage['selectionGuide'] {
  if (!value || typeof value !== 'object') return undefined;

  const entry = value as Record<string, unknown>;
  const compareLinks = Array.isArray(entry.compareLinks)
    ? entry.compareLinks
        .map((link) => {
          if (!link || typeof link !== 'object') return null;
          const linkEntry = link as Record<string, unknown>;
          const href = readString(linkEntry.href);
          const label = readString(linkEntry.label);
          return href && label ? { href, label } : null;
        })
        .filter((item): item is NonNullable<ProductPage['selectionGuide']>['compareLinks'][number] => Boolean(item))
    : [];

  return {
    chooseWhen: Array.isArray(entry.chooseWhen) ? entry.chooseWhen.map((item) => readString(item)).filter(Boolean) : [],
    notFitWhen: Array.isArray(entry.notFitWhen) ? entry.notFitWhen.map((item) => readString(item)).filter(Boolean) : [],
    compareLinks,
  };
}

function readProductBomGroups(value: unknown): ProductPage['bomGroups'] {
  if (!Array.isArray(value)) return [];

  return value
    .map((group) => {
      if (!group || typeof group !== 'object') return null;
      const entry = group as Record<string, unknown>;
      const title = readString(entry.title);
      const items = Array.isArray(entry.items) ? entry.items.map((item) => readString(item)).filter(Boolean) : [];
      return title && items.length > 0 ? { title, items } : null;
    })
    .filter((item): item is ProductPage['bomGroups'][number] => Boolean(item));
}

function readProductFaq(value: unknown): ProductPage['preSalesFaq'] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const entry = item as Record<string, unknown>;
      const question = readString(entry.question);
      const answer = readString(entry.answer);
      return question && answer ? { question, answer } : null;
    })
    .filter((item): item is ProductPage['preSalesFaq'][number] => Boolean(item));
}

function createProductPage(path: string, markdown: string): ProductPage {
  const { metadata, content } = parseFrontmatter(markdown);
  const fallbackId = path.split('/').pop()?.replace(/\.md$/, '') || 'product-page';
  const productId = readString(metadata.id, fallbackId);
  const specGroups = readProductSpecGroups(metadata.specGroups);
  const selectionGuide = readProductSelectionGuide(metadata.selectionGuide);
  const bomGroups = readProductBomGroups(metadata.bomGroups);
  const preSalesFaq = readProductFaq(metadata.preSalesFaq);

  return {
    id: productId,
    title: readString(metadata.title, 'Untitled Product'),
    excerpt: readString(metadata.excerpt),
    content,
    imageUrl: resolveProductImageUrl(readOptionalString(metadata.imageUrl)),
    category: readString(metadata.category, 'Industrial IoT Product'),
    model: readString(metadata.model),
    status: resolveProductStatus(readString(metadata.status)),
    primaryKeyword: readString(metadata.primaryKeyword),
    route: readString(metadata.route, `/products/${productId}`),
    order: readNumber(metadata.order),
    specGroups,
    specs: specGroups.flatMap((group) => group.specs),
    selectionGuide,
    bomGroups,
    preSalesFaq,
  };
}

export const productPages: ProductPage[] = Object.entries(markdownModules)
  .map(([path, markdown]) => createProductPage(path, markdown))
  .filter((product) => isPublicProductStatus(product.status))
  .sort((a, b) => a.order - b.order);
