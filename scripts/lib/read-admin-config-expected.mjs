import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function normalizeScalar(value) {
  return String(value || '').trim().replace(/^['"]|['"]$/g, '');
}

function extractRequiredValue(configText, key, label) {
  const pattern = new RegExp(`^\\s*${key}:\\s*(.+?)\\s*$`, 'm');
  const match = configText.match(pattern);

  if (!match) {
    throw new Error(`${label} is missing "${key}"`);
  }

  const value = normalizeScalar(match[1]);
  if (!value) {
    throw new Error(`${label} has an empty "${key}" value`);
  }

  return value;
}

export function readAdminConfigExpectations(relativePath = 'public/admin/config.yml') {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Missing admin config file: ${relativePath}`);
  }

  const configText = fs.readFileSync(absolutePath, 'utf8');

  return {
    repo: extractRequiredValue(configText, 'repo', relativePath),
    branch: extractRequiredValue(configText, 'branch', relativePath),
    baseUrl: extractRequiredValue(configText, 'base_url', relativePath).replace(/\/+$/, ''),
    authEndpoint: extractRequiredValue(configText, 'auth_endpoint', relativePath),
    siteUrl: extractRequiredValue(configText, 'site_url', relativePath).replace(/\/+$/, ''),
    displayUrl: extractRequiredValue(configText, 'display_url', relativePath).replace(/\/+$/, ''),
  };
}
