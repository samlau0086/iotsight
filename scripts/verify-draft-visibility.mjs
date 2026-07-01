import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();
const siteUrl = String(process.env.APP_URL || 'https://iotedges.com').trim().replace(/\/+$/, '');
const publicProductStatuses = new Set(['Published', 'Preview', 'Available for project inquiry']);
const publicEditorialStatuses = new Set(['Published']);

function assertFile(relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Missing required built artifact: ${relativePath}`);
  }
}

function readFile(relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Missing required file: ${relativePath}`);
  }
  return fs.readFileSync(absolutePath, 'utf8');
}

function listMarkdownFiles(relativeDir) {
  const absoluteDir = path.join(root, relativeDir);
  return fs
    .readdirSync(absoluteDir)
    .filter((name) => name.endsWith('.md'))
    .map((name) => path.join(relativeDir, name));
}

function routeToDistHtml(route) {
  const segments = route.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
  return path.join(root, 'dist', ...segments, 'index.html');
}

function routeIsInSitemap(sitemap, route) {
  return sitemap.includes(`<loc>${siteUrl}${route}</loc>`);
}

function readContentEntries(relativeDir, fallbackPrefix) {
  return listMarkdownFiles(relativeDir).map((relativePath) => {
    const source = readFile(relativePath);
    const { data } = matter(source);
    const fallbackId = path.basename(relativePath, '.md');
    const id = typeof data.id === 'string' && data.id ? data.id : fallbackId;
    const routeField = fallbackPrefix === 'products' ? data.route : data.link;
    const route = typeof routeField === 'string' && routeField ? routeField : `/${fallbackPrefix}/${id}`;
    const status = typeof data.status === 'string' && data.status ? data.status : 'Published';

    return {
      relativePath,
      route,
      status,
    };
  });
}

function assertPublicEntry(entry, sitemap, label) {
  if (!routeIsInSitemap(sitemap, entry.route)) {
    throw new Error(`${label} public route missing from sitemap: ${entry.route} (${entry.relativePath})`);
  }

  const htmlPath = routeToDistHtml(entry.route);
  if (!fs.existsSync(htmlPath)) {
    throw new Error(`${label} public route missing prerendered HTML: ${entry.route} (${entry.relativePath})`);
  }
}

function assertPrivateEntry(entry, sitemap, label) {
  if (routeIsInSitemap(sitemap, entry.route)) {
    throw new Error(`${label} private route should not appear in sitemap: ${entry.route} (${entry.relativePath})`);
  }

  const htmlPath = routeToDistHtml(entry.route);
  if (fs.existsSync(htmlPath)) {
    throw new Error(`${label} private route should not be prerendered: ${entry.route} (${entry.relativePath})`);
  }
}

function main() {
  assertFile('dist/sitemap.xml');

  const sitemap = readFile('dist/sitemap.xml');
  const products = readContentEntries('src/content/products', 'products');
  const solutions = readContentEntries('src/content/solutions', 'solutions');

  for (const product of products) {
    if (publicProductStatuses.has(product.status)) {
      assertPublicEntry(product, sitemap, 'Product');
    } else {
      assertPrivateEntry(product, sitemap, 'Product');
    }
  }

  for (const solution of solutions) {
    if (publicEditorialStatuses.has(solution.status)) {
      assertPublicEntry(solution, sitemap, 'Solution');
    } else {
      assertPrivateEntry(solution, sitemap, 'Solution');
    }
  }

  console.log('Draft visibility verification passed.');
}

main();
