import { AccessoryPage } from '../types';
import { parseFrontmatter, readString, readStringArray } from '../lib/frontmatter';

const markdownModules = import.meta.glob('../content/accessories/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function readOverviewCards(value: unknown): AccessoryPage['overviewCards'] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const entry = item as Record<string, unknown>;
      const title = readString(entry.title);
      const text = readString(entry.text);
      const iconKey = readString(entry.iconKey, 'shield-check');
      return title && text ? { title, text, iconKey } : null;
    })
    .filter((item): item is AccessoryPage['overviewCards'][number] => Boolean(item));
}

function readAccessoryGroups(value: unknown): AccessoryPage['groups'] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const entry = item as Record<string, unknown>;
      const title = readString(entry.title);
      const description = readString(entry.description);
      const iconKey = readString(entry.iconKey, 'radio-tower');
      const items = readStringArray(entry.items);
      return title && description && items.length > 0 ? { title, description, iconKey, items } : null;
    })
    .filter((item): item is AccessoryPage['groups'][number] => Boolean(item));
}

function readSelectionGuides(value: unknown): AccessoryPage['selectionGuides'] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const entry = item as Record<string, unknown>;
      const title = readString(entry.title);
      const href = readString(entry.href);
      const summary = readString(entry.summary);
      return title && href && summary ? { title, href, summary } : null;
    })
    .filter((item): item is AccessoryPage['selectionGuides'][number] => Boolean(item));
}

function readProductAccessoryMap(value: unknown): AccessoryPage['productAccessoryMap'] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const entry = item as Record<string, unknown>;
      const product = readString(entry.product);
      const href = readString(entry.href);
      const accessories = readString(entry.accessories);
      return product && href && accessories ? { product, href, accessories } : null;
    })
    .filter((item): item is AccessoryPage['productAccessoryMap'][number] => Boolean(item));
}

function readProjectKits(value: unknown): AccessoryPage['projectKits'] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const entry = item as Record<string, unknown>;
      const title = readString(entry.title);
      const iconKey = readString(entry.iconKey, 'server');
      const contents = readStringArray(entry.contents);
      return title && contents.length > 0 ? { title, iconKey, contents } : null;
    })
    .filter((item): item is AccessoryPage['projectKits'][number] => Boolean(item));
}

function createAccessoryPage(markdown: string): AccessoryPage {
  const { metadata, content } = parseFrontmatter(markdown);

  return {
    id: readString(metadata.id, 'accessories-overview'),
    eyebrow: readString(metadata.eyebrow, 'Project Accessories'),
    title: readString(metadata.title, 'Industrial IoT accessories for RTU, gateway and Remote IO projects'),
    description: readString(metadata.description),
    content,
    overviewCards: readOverviewCards(metadata.overviewCards),
    groups: readAccessoryGroups(metadata.groups),
    selectionGuides: readSelectionGuides(metadata.selectionGuides),
    productAccessoryMap: readProductAccessoryMap(metadata.productAccessoryMap),
    projectKits: readProjectKits(metadata.projectKits),
    ctaLabel: readString(metadata.ctaLabel, 'Request accessory BOM'),
    ctaHref: readString(metadata.ctaHref, '/contact'),
  };
}

const defaultAccessoryPage: AccessoryPage = {
  id: 'accessories-overview',
  eyebrow: 'Project Accessories',
  title: 'Industrial IoT accessories for RTU, gateway and Remote IO projects',
  description:
    'Recommended and compatible accessories for IoTEdges project deployments, including 4G antennas, SIM/APN setup, RS485 wiring, DIN rail power supplies, relay interfaces, sensors, meters and gate opener installation parts.',
  content: '',
  overviewCards: [],
  groups: [],
  selectionGuides: [],
  productAccessoryMap: [],
  projectKits: [],
  ctaLabel: 'Request accessory BOM',
  ctaHref: '/contact',
};

const firstMarkdown = Object.values(markdownModules)[0];

export const accessoriesPage = firstMarkdown ? createAccessoryPage(firstMarkdown) : defaultAccessoryPage;
