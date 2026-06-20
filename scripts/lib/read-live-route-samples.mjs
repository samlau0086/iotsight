import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();

function resolveEditorialStatus(value) {
  const normalized = typeof value === 'string' ? value.trim() : '';
  return ['Draft', 'Review', 'Published'].includes(normalized) ? normalized : 'Published';
}

function resolveProductStatus(value) {
  const normalized = typeof value === 'string' ? value.trim() : '';
  return ['Draft', 'Preview', 'Available for project inquiry', 'Published'].includes(normalized) ? normalized : 'Published';
}

function isEntryPublic(relativeDir, data) {
  if (relativeDir.includes('/products')) {
    return resolveProductStatus(data.status) !== 'Draft';
  }

  return resolveEditorialStatus(data.status) === 'Published';
}

function readMarkdownCollection(relativeDir, resolveRoute) {
  const dir = path.join(root, relativeDir);
  if (!fs.existsSync(dir)) {
    throw new Error(`Missing content directory: ${relativeDir}`);
  }

  return fs.readdirSync(dir)
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const absolutePath = path.join(dir, name);
      const raw = fs.readFileSync(absolutePath, 'utf8');
      const { data } = matter(raw);
      const id = String(data.id || name.replace(/\.md$/, '')).trim();
      const title = String(data.title || '').trim();
      const order = Number(data.order ?? Number.MAX_SAFE_INTEGER);
      const route = String(resolveRoute(data, id) || '').trim();

      return {
        id,
        title,
        order: Number.isFinite(order) ? order : Number.MAX_SAFE_INTEGER,
        route,
        status: String(data.status || '').trim(),
        source: path.join(relativeDir, name).replace(/\\/g, '/'),
      };
    })
    .filter((entry) => entry.id && entry.title && entry.route && isEntryPublic(relativeDir, entry))
    .sort((left, right) => left.order - right.order || left.title.localeCompare(right.title));
}

function pickSample(label, entries) {
  const sample = entries[0];
  if (!sample) {
    throw new Error(`Unable to derive a live route sample for ${label}`);
  }

  return {
    label,
    route: sample.route.startsWith('/') ? sample.route : `/${sample.route}`,
    title: sample.title,
    source: sample.source,
  };
}

export function readLiveRouteSamples() {
  const products = readMarkdownCollection('src/content/products', (data, id) => data.route || `/products/${id}`);
  const solutions = readMarkdownCollection('src/content/solutions', (data, id) => data.link || `/solutions/${id}`);
  const knowledge = readMarkdownCollection('src/content/knowledge', (_data, id) => `/knowledge/${id}`);
  const blog = readMarkdownCollection('src/content/blog', (_data, id) => `/blog/${id}`);

  return [
    pickSample('product', products),
    pickSample('solution', solutions),
    pickSample('knowledge', knowledge),
    pickSample('blog', blog),
  ];
}
