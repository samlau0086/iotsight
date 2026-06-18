import { readAdminConfigExpectations } from './lib/read-admin-config-expected.mjs';

const mode = String(process.env.CMS_CONFIG_VERIFY_MODE || 'website').trim();
const adminConfig = readAdminConfigExpectations();
const adminBaseUrl = normalizeOrigin(adminConfig.baseUrl, 'public/admin/config.yml base_url');
const adminSiteUrl = normalizeUrl(adminConfig.siteUrl, 'public/admin/config.yml site_url');
const adminDisplayUrl = normalizeUrl(adminConfig.displayUrl, 'public/admin/config.yml display_url');

function normalizeUrl(value, label) {
  const trimmed = String(value || '').trim();
  if (!trimmed) {
    throw new Error(`Missing required value for ${label}`);
  }

  let url;
  try {
    url = new URL(trimmed);
  } catch {
    throw new Error(`${label} must be an absolute URL. Received: ${value}`);
  }

  if (url.protocol !== 'https:') {
    throw new Error(`${label} must use https. Received: ${trimmed}`);
  }

  return url;
}

function normalizeOrigin(value, label) {
  const url = normalizeUrl(value, label);
  url.pathname = '';
  url.search = '';
  url.hash = '';
  return url.toString().replace(/\/$/, '');
}

function normalizeSiteOrigin(value, label) {
  const url = normalizeUrl(value, label);

  if (url.pathname !== '/' || url.search || url.hash) {
    throw new Error(`${label} must be an origin-only URL with no path, query, or hash. Received: ${value}`);
  }

  return url.toString().replace(/\/$/, '');
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function verifyWorkerMode() {
  const healthUrl = normalizeUrl(process.env.DECAP_AUTH_HEALTH_URL, 'DECAP_AUTH_HEALTH_URL');
  const redirectUrl = normalizeUrl(process.env.DECAP_OAUTH_REDIRECT_URI, 'DECAP_OAUTH_REDIRECT_URI');
  const siteOrigin = normalizeSiteOrigin(process.env.DECAP_OAUTH_SITE_ORIGIN, 'DECAP_OAUTH_SITE_ORIGIN');

  assert(healthUrl.pathname === '/healthz', `DECAP_AUTH_HEALTH_URL must end with /healthz. Received: ${healthUrl.toString()}`);
  assert(!healthUrl.search && !healthUrl.hash, 'DECAP_AUTH_HEALTH_URL must not contain query or hash');
  assert(redirectUrl.pathname === '/callback', `DECAP_OAUTH_REDIRECT_URI must end with /callback. Received: ${redirectUrl.toString()}`);
  assert(!redirectUrl.search && !redirectUrl.hash, 'DECAP_OAUTH_REDIRECT_URI must not contain query or hash');

  const authOrigin = healthUrl.origin;

  assert(redirectUrl.origin === authOrigin, [
    'DECAP_OAUTH_REDIRECT_URI origin must match DECAP_AUTH_HEALTH_URL origin.',
    `redirect origin: ${redirectUrl.origin}`,
    `health origin: ${authOrigin}`,
  ].join(' '));

  assert(adminBaseUrl === authOrigin, [
    'public/admin/config.yml base_url must match the auth worker origin.',
    `config base_url: ${adminBaseUrl}`,
    `worker origin: ${authOrigin}`,
  ].join(' '));

  assert(adminSiteUrl.origin === siteOrigin, [
    'public/admin/config.yml site_url origin must match DECAP_OAUTH_SITE_ORIGIN.',
    `config site_url: ${adminSiteUrl.toString()}`,
    `site origin: ${siteOrigin}`,
  ].join(' '));

  assert(adminDisplayUrl.origin === siteOrigin, [
    'public/admin/config.yml display_url origin must match DECAP_OAUTH_SITE_ORIGIN.',
    `config display_url: ${adminDisplayUrl.toString()}`,
    `site origin: ${siteOrigin}`,
  ].join(' '));

  console.log(`CMS external config verification passed for worker mode. site=${siteOrigin} auth=${authOrigin}`);
}

function verifyWebsiteMode() {
  const appUrl = normalizeSiteOrigin(process.env.APP_URL, 'APP_URL');
  const siteOrigin = normalizeSiteOrigin(process.env.DECAP_OAUTH_SITE_ORIGIN, 'DECAP_OAUTH_SITE_ORIGIN');

  assert(appUrl === siteOrigin, [
    'APP_URL must match DECAP_OAUTH_SITE_ORIGIN.',
    `APP_URL: ${appUrl}`,
    `DECAP_OAUTH_SITE_ORIGIN: ${siteOrigin}`,
  ].join(' '));

  assert(adminSiteUrl.toString().replace(/\/$/, '') === appUrl, [
    'public/admin/config.yml site_url must match APP_URL.',
    `config site_url: ${adminSiteUrl.toString().replace(/\/$/, '')}`,
    `APP_URL: ${appUrl}`,
  ].join(' '));

  assert(adminDisplayUrl.toString().replace(/\/$/, '') === appUrl, [
    'public/admin/config.yml display_url must match APP_URL.',
    `config display_url: ${adminDisplayUrl.toString().replace(/\/$/, '')}`,
    `APP_URL: ${appUrl}`,
  ].join(' '));

  verifyWorkerMode();
  console.log(`CMS external config verification passed for website mode. app=${appUrl}`);
}

if (mode === 'worker') {
  verifyWorkerMode();
} else if (mode === 'website') {
  verifyWebsiteMode();
} else {
  throw new Error(`Unsupported CMS_CONFIG_VERIFY_MODE: ${mode}`);
}
