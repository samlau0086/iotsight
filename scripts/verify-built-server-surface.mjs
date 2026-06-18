import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { readAdminConfigExpectations } from './lib/read-admin-config-expected.mjs';

const root = process.cwd();
const port = Number(process.env.VERIFY_SERVER_PORT || 43105);
const baseUrl = `http://127.0.0.1:${port}`;
const serverEntry = path.join(root, 'dist', 'server.cjs');
const sourceConfig = readAdminConfigExpectations();
const expectedSiteUrl = String(process.env.APP_URL || sourceConfig.siteUrl).trim().replace(/\/+$/, '');
const expectedDisplayUrl = String(process.env.VERIFY_CMS_DISPLAY_URL || sourceConfig.displayUrl).trim().replace(/\/+$/, '');
const expectedCmsRepo = String(process.env.VERIFY_CMS_REPO || sourceConfig.repo).trim();
const expectedCmsBranch = String(process.env.VERIFY_CMS_BRANCH || sourceConfig.branch).trim();
const expectedCmsAuthEndpoint = String(process.env.VERIFY_CMS_AUTH_ENDPOINT || sourceConfig.authEndpoint).trim();
const expectedCmsBaseUrl = String(process.env.VERIFY_CMS_BASE_URL || sourceConfig.baseUrl).trim().replace(/\/+$/, '');

function assertFile(relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Missing built artifact required for runtime verification: ${relativePath}`);
  }
}

async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServerReady(timeoutMs) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(`${baseUrl}/api/health`);
      if (response.ok) {
        return;
      }
    } catch {
      // keep polling until timeout
    }

    await sleep(250);
  }

  throw new Error(`Built server did not become ready within ${timeoutMs}ms on ${baseUrl}`);
}

async function fetchText(pathname) {
  const response = await fetch(`${baseUrl}${pathname}`, {
    redirect: 'follow',
    headers: {
      accept: 'text/html,application/xml,text/plain,*/*',
    },
  });

  return {
    status: response.status,
    text: await response.text(),
  };
}

function assertIncludes(content, needle, label) {
  if (!content.includes(needle)) {
    throw new Error(`Missing expected runtime content in ${label}: ${needle}`);
  }
}

function assertNotIncludes(content, needle, label) {
  if (content.includes(needle)) {
    throw new Error(`Unexpected runtime content in ${label}: ${needle}`);
  }
}

function looksLikeHtmlDocument(text) {
  const normalized = String(text || '').toLowerCase();
  return normalized.includes('<!doctype html') || normalized.includes('<html');
}

function comparablePrefix(text, length = 800) {
  return String(text || '').replace(/\s+/g, ' ').trim().slice(0, length);
}

function looksLikeSameDocument(left, right) {
  const leftPrefix = comparablePrefix(left);
  const rightPrefix = comparablePrefix(right);
  return Boolean(leftPrefix) && leftPrefix === rightPrefix;
}

async function main() {
  assertFile('dist/server.cjs');
  assertFile('dist/admin/index.html');
  assertFile('dist/admin/config.yml');
  assertFile('dist/robots.txt');
  assertFile('dist/sitemap.xml');

  let stdout = '';
  let stderr = '';

  const child = spawn(process.execPath, [serverEntry], {
    cwd: root,
    env: {
      ...process.env,
      NODE_ENV: 'production',
      PORT: String(port),
      APP_URL: process.env.APP_URL || 'https://iotedges.com',
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  child.stdout.on('data', (chunk) => {
    stdout += String(chunk);
  });

  child.stderr.on('data', (chunk) => {
    stderr += String(chunk);
  });

  try {
    await waitForServerReady(15000);

    const homepage = await fetchText('/');
    const admin = await fetchText('/admin/');
    const adminConfig = await fetchText('/admin/config.yml');
    const robots = await fetchText('/robots.txt');
    const sitemap = await fetchText('/sitemap.xml');

    if (admin.status !== 200) {
      throw new Error(`/admin/ returned HTTP ${admin.status}`);
    }
    if (adminConfig.status !== 200) {
      throw new Error(`/admin/config.yml returned HTTP ${adminConfig.status}`);
    }
    if (robots.status !== 200) {
      throw new Error(`/robots.txt returned HTTP ${robots.status}`);
    }
    if (sitemap.status !== 200) {
      throw new Error(`/sitemap.xml returned HTTP ${sitemap.status}`);
    }

    assertIncludes(admin.text, 'IoTEdges Content Admin', '/admin/');
    assertIncludes(admin.text, 'decap-cms.js', '/admin/');
    assertIncludes(admin.text, 'noindex, nofollow, noarchive', '/admin/');
    if (looksLikeSameDocument(admin.text, homepage.text)) {
      throw new Error('/admin/ appears to be serving the homepage HTML fallback instead of the CMS shell');
    }
    if (looksLikeHtmlDocument(adminConfig.text)) {
      throw new Error('/admin/config.yml appears to be HTML fallback instead of the CMS YAML config');
    }
    if (looksLikeSameDocument(adminConfig.text, homepage.text)) {
      throw new Error('/admin/config.yml appears to match the homepage HTML, indicating homepage fallback routing');
    }
    assertIncludes(adminConfig.text, 'backend:', '/admin/config.yml');
    assertIncludes(adminConfig.text, 'name: github', '/admin/config.yml');
    assertIncludes(adminConfig.text, `repo: ${expectedCmsRepo}`, '/admin/config.yml');
    assertIncludes(adminConfig.text, `branch: ${expectedCmsBranch}`, '/admin/config.yml');
    assertIncludes(adminConfig.text, `base_url: ${expectedCmsBaseUrl}`, '/admin/config.yml');
    assertIncludes(adminConfig.text, `auth_endpoint: ${expectedCmsAuthEndpoint}`, '/admin/config.yml');
    assertIncludes(adminConfig.text, `site_url: ${expectedSiteUrl}`, '/admin/config.yml');
    assertIncludes(adminConfig.text, `display_url: ${expectedDisplayUrl}`, '/admin/config.yml');
    assertIncludes(robots.text, 'Disallow: /admin', '/robots.txt');
    assertIncludes(robots.text, 'Disallow: /admin/', '/robots.txt');
    assertIncludes(robots.text, 'Sitemap: https://iotedges.com/sitemap.xml', '/robots.txt');
    assertIncludes(sitemap.text, '<urlset', '/sitemap.xml');
    assertNotIncludes(sitemap.text, '/admin', '/sitemap.xml');

    console.log('Built server surface verification passed.');
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const logSuffix = [
      stdout.trim() ? `STDOUT:\n${stdout.trim()}` : '',
      stderr.trim() ? `STDERR:\n${stderr.trim()}` : '',
    ].filter(Boolean).join('\n\n');

    throw new Error(logSuffix ? `${message}\n\n${logSuffix}` : message);
  } finally {
    child.kill();
    await new Promise((resolve) => {
      child.once('exit', () => resolve());
      setTimeout(resolve, 3000);
    });
  }
}

await main();
