import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');
const { render, getPrerenderRoutes, getSeoMeta } = await import('../dist-ssr/entry-server.js');
const siteUrl = (process.env.APP_URL || 'https://iotedges.com').replace(/\/+$/, '');

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeJsonForHtml(value = '') {
  return String(value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

function applySeo(html, url) {
  const meta = getSeoMeta(url);
  const absoluteUrl = `${siteUrl}${url === '/' ? '' : url}`;
  let nextHtml = html
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(meta.title)}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/s,
      `<meta name="description" content="${escapeHtml(meta.description)}" />`
    );

  const openGraph = [
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:type" content="${escapeHtml(meta.type)}" />`,
    `<meta property="og:url" content="${escapeHtml(absoluteUrl)}" />`,
    meta.imageUrl ? `<meta property="og:image" content="${escapeHtml(meta.imageUrl)}" />` : '',
  ].filter(Boolean).join('\n    ');

  const structuredData = escapeJsonForHtml(JSON.stringify(createStructuredData(url, meta, absoluteUrl)));

  return nextHtml.replace(
    '</head>',
    `    <link rel="canonical" href="${escapeHtml(absoluteUrl)}" />\n    ${openGraph}\n    <script type="application/ld+json">${structuredData}</script>\n  </head>`
  );
}

function routeType(url, meta) {
  if (url === '/' || url === '/products' || url === '/solutions' || url === '/knowledge' || url === '/blog') {
    return 'CollectionPage';
  }

  if (meta.type === 'article') {
    return 'Article';
  }

  return 'WebPage';
}

function createStructuredData(url, meta, absoluteUrl) {
  const page = {
    '@context': 'https://schema.org',
    '@type': routeType(url, meta),
    name: meta.title,
    description: meta.description,
    url: absoluteUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: 'IoTEdges',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'IoTEdges',
      url: siteUrl,
    },
  };

  if (url.startsWith('/products/')) {
    return {
      ...page,
      about: {
        '@type': 'Product',
        name: meta.title.replace(' | IoTEdges Products', ''),
        brand: {
          '@type': 'Brand',
          name: 'IoTEdges',
        },
      },
    };
  }

  return page;
}

function sitemapPriority(route) {
  if (route === '/') return '1.0';
  if (route === '/products' || route === '/solutions' || route === '/knowledge') return '0.9';
  if (route.startsWith('/products/')) return '0.8';
  if (route.startsWith('/solutions/')) return '0.7';
  if (route.startsWith('/knowledge/')) return '0.7';
  if (route === '/blog' || route.startsWith('/blog/')) return '0.6';
  return '0.5';
}

async function writeSitemap(routes) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const entries = routes.map(route => {
    const loc = `${siteUrl}${route === '/' ? '' : route}`;
    return [
      '  <url>',
      `    <loc>${escapeHtml(loc)}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <priority>${sitemapPriority(route)}</priority>`,
      '  </url>',
    ].join('\n');
  }).join('\n');

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    '</urlset>',
    '',
  ].join('\n');

  await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap);
  console.log('wrote sitemap.xml');
}

async function writeRobots() {
  const robots = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${siteUrl}/sitemap.xml`,
    '',
  ].join('\n');

  await fs.writeFile(path.join(distDir, 'robots.txt'), robots);
  console.log('wrote robots.txt');
}

async function writeRoute(url) {
  const appHtml = render(url);
  const html = applySeo(template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`), url);
  const outputPath = url === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, url.slice(1), 'index.html');

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, html);
  console.log(`prerendered ${url}`);
}

const routes = getPrerenderRoutes();

for (const route of routes) {
  await writeRoute(route);
}

await writeSitemap(routes);
await writeRobots();
