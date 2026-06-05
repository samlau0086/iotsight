import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');
const { render, getPrerenderRoutes, getSeoMeta } = await import('../dist-ssr/entry-server.js');

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function applySeo(html, url) {
  const meta = getSeoMeta(url);
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
    `<meta property="og:url" content="${escapeHtml(url)}" />`,
    meta.imageUrl ? `<meta property="og:image" content="${escapeHtml(meta.imageUrl)}" />` : '',
  ].filter(Boolean).join('\n    ');

  return nextHtml.replace('</head>', `    ${openGraph}\n  </head>`);
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

for (const route of getPrerenderRoutes()) {
  await writeRoute(route);
}
