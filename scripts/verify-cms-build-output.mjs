import fs from 'node:fs';
import path from 'node:path';
import { readAdminConfigExpectations } from './lib/read-admin-config-expected.mjs';

const root = process.cwd();
const sourceConfig = readAdminConfigExpectations();
const expectedSiteUrl = String(process.env.APP_URL || sourceConfig.siteUrl).trim().replace(/\/+$/, '');
const expectedDisplayUrl = String(process.env.VERIFY_CMS_DISPLAY_URL || sourceConfig.displayUrl).trim().replace(/\/+$/, '');
const expectedCmsRepo = String(process.env.VERIFY_CMS_REPO || sourceConfig.repo).trim();
const expectedCmsBranch = String(process.env.VERIFY_CMS_BRANCH || sourceConfig.branch).trim();
const expectedCmsAuthEndpoint = String(process.env.VERIFY_CMS_AUTH_ENDPOINT || sourceConfig.authEndpoint).trim();
const expectedCmsBaseUrl = String(process.env.VERIFY_CMS_BASE_URL || sourceConfig.baseUrl).trim().replace(/\/+$/, '');

function readBuiltFile(relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Missing built artifact: ${relativePath}`);
  }
  return fs.readFileSync(absolutePath, 'utf8');
}

function assertIncludes(content, needle, label) {
  if (!content.includes(needle)) {
    throw new Error(`Missing expected built content in ${label}: ${needle}`);
  }
}

function assertNotIncludes(content, needle, label) {
  if (content.includes(needle)) {
    throw new Error(`Unexpected built content in ${label}: ${needle}`);
  }
}

function main() {
  const adminHtml = readBuiltFile('dist/admin/index.html');
  const adminConfig = readBuiltFile('dist/admin/config.yml');
  const robots = readBuiltFile('dist/robots.txt');
  const sitemap = readBuiltFile('dist/sitemap.xml');

  assertIncludes(adminHtml, 'noindex, nofollow, noarchive', 'dist/admin/index.html');
  assertIncludes(adminHtml, 'IoTEdges CMS requires JavaScript', 'dist/admin/index.html');
  assertIncludes(adminHtml, 'decap-cms.js', 'dist/admin/index.html');

  assertIncludes(adminConfig, 'backend:', 'dist/admin/config.yml');
  assertIncludes(adminConfig, 'name: github', 'dist/admin/config.yml');
  assertIncludes(adminConfig, `repo: ${expectedCmsRepo}`, 'dist/admin/config.yml');
  assertIncludes(adminConfig, `branch: ${expectedCmsBranch}`, 'dist/admin/config.yml');
  assertIncludes(adminConfig, `base_url: ${expectedCmsBaseUrl}`, 'dist/admin/config.yml');
  assertIncludes(adminConfig, `auth_endpoint: ${expectedCmsAuthEndpoint}`, 'dist/admin/config.yml');
  assertIncludes(adminConfig, `site_url: ${expectedSiteUrl}`, 'dist/admin/config.yml');
  assertIncludes(adminConfig, `display_url: ${expectedDisplayUrl}`, 'dist/admin/config.yml');

  assertIncludes(robots, 'Disallow: /admin', 'dist/robots.txt');
  assertIncludes(robots, 'Disallow: /admin/', 'dist/robots.txt');
  assertIncludes(robots, 'Sitemap: https://iotedges.com/sitemap.xml', 'dist/robots.txt');

  assertIncludes(sitemap, '<urlset', 'dist/sitemap.xml');
  assertNotIncludes(sitemap, '/admin', 'dist/sitemap.xml');

  console.log('CMS build output verification passed.');
}

main();
