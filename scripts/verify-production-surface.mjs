import { readAdminConfigExpectations } from "./lib/read-admin-config-expected.mjs";

const siteUrl = normalizeSiteUrl(process.env.VERIFY_SITE_URL || process.env.APP_URL || "https://iotedges.com");
const sourceConfig = readAdminConfigExpectations();
const expectedCmsRepo = String(process.env.VERIFY_CMS_REPO || sourceConfig.repo).trim();
const expectedCmsBranch = String(process.env.VERIFY_CMS_BRANCH || sourceConfig.branch).trim();
const expectedCmsAuthEndpoint = String(process.env.VERIFY_CMS_AUTH_ENDPOINT || sourceConfig.authEndpoint).trim();
const expectedCmsBaseUrl = resolveExpectedCmsBaseUrl();
const expectedDisplayUrl = String(process.env.VERIFY_CMS_DISPLAY_URL || sourceConfig.displayUrl).trim().replace(/\/+$/, "");

function normalizeSiteUrl(value) {
  const url = String(value || "").trim().replace(/\/+$/, "");
  if (!/^https?:\/\//i.test(url)) {
    throw new Error(`VERIFY_SITE_URL must be an absolute URL. Received: ${value}`);
  }

  return url;
}

function normalizeAbsoluteOrigin(value, label) {
  const normalized = String(value || "").trim();
  if (!normalized) {
    throw new Error(`${label} must not be empty.`);
  }

  if (!/^https?:\/\//i.test(normalized)) {
    throw new Error(`${label} must be an absolute URL. Received: ${value}`);
  }

  return new URL(normalized).origin;
}

function resolveExpectedCmsBaseUrl() {
  if (process.env.VERIFY_CMS_BASE_URL) {
    return normalizeAbsoluteOrigin(process.env.VERIFY_CMS_BASE_URL, "VERIFY_CMS_BASE_URL");
  }

  if (process.env.DECAP_OAUTH_REDIRECT_URI) {
    return normalizeAbsoluteOrigin(process.env.DECAP_OAUTH_REDIRECT_URI, "DECAP_OAUTH_REDIRECT_URI");
  }

  if (process.env.DECAP_AUTH_HEALTH_URL) {
    return normalizeAbsoluteOrigin(process.env.DECAP_AUTH_HEALTH_URL, "DECAP_AUTH_HEALTH_URL");
  }

  return String(sourceConfig.baseUrl).trim().replace(/\/+$/, "");
}

async function fetchText(url) {
  const response = await fetch(url, {
    redirect: "follow",
    headers: {
      "user-agent": "IoTEdges-CMS-Production-Verification/1.0",
      accept: "text/html,application/xml,text/plain,*/*",
    },
  });

  const text = await response.text();
  return { response, text };
}

async function fetchRedirect(url) {
  const response = await fetch(url, {
    redirect: "manual",
    headers: {
      "user-agent": "IoTEdges-CMS-Production-Verification/1.0",
      accept: "text/html,application/xml,text/plain,*/*",
    },
  });

  return {
    response,
    location: response.headers.get("location") || "",
  };
}

function assertIncludes(haystack, needle, label, failures) {
  if (!haystack.includes(needle)) {
    failures.push(`${label} is missing "${needle}"`);
  }
}

function looksLikeHtmlDocument(text) {
  const normalized = String(text || "").toLowerCase();
  return normalized.includes("<!doctype html") || normalized.includes("<html");
}

function comparablePrefix(text, length = 800) {
  return String(text || "").replace(/\s+/g, " ").trim().slice(0, length);
}

function looksLikeSameDocument(left, right) {
  const leftPrefix = comparablePrefix(left);
  const rightPrefix = comparablePrefix(right);
  return Boolean(leftPrefix) && leftPrefix === rightPrefix;
}

function withLikelyActions(site, failures) {
  const hints = [];
  const combined = failures.join('\n');

  if (
    combined.includes('/admin/ appears to be serving the homepage HTML fallback instead of the CMS shell') ||
    combined.includes('/admin/config.yml appears to match the homepage HTML, indicating homepage fallback routing') ||
    combined.includes('/admin should redirect to /admin/')
  ) {
    hints.push('The live site is serving homepage fallback content for /admin and/or /admin/config.yml. Check the VPS deployment version, Express static routing, and any CDN or reverse-proxy rewrites.');
  }

  if (
    combined.includes('robots.txt is missing "Disallow: /admin"') ||
    combined.includes('robots.txt is missing "Disallow: /admin/"')
  ) {
    hints.push('robots.txt does not match the current prerender output. This usually means the live website is still serving an older build.');
  }

  if (hints.length === 0) {
    return `Production surface verification failed for ${site}:\n- ${failures.join("\n- ")}`;
  }

  return [
    `Production surface verification failed for ${site}:`,
    `- ${failures.join("\n- ")}`,
    '',
    'Likely next actions:',
    `- ${[...new Set(hints)].join('\n- ')}`,
  ].join('\n');
}

async function verifyAdminSurface(failures) {
  const homepage = await fetchText(`${siteUrl}/`);
  const redirectCheck = await fetchRedirect(`${siteUrl}/admin`);
  const url = `${siteUrl}/admin/`;
  const { response, text } = await fetchText(url);

  if (![301, 302, 307, 308].includes(redirectCheck.response.status)) {
    failures.push(`/admin should redirect to /admin/ but returned HTTP ${redirectCheck.response.status}`);
  } else if (redirectCheck.location !== '/admin/') {
    failures.push(`/admin should redirect to /admin/ but returned location "${redirectCheck.location}"`);
  }

  if (!response.ok) {
    failures.push(`/admin/ returned HTTP ${response.status}`);
    return;
  }

  if (looksLikeSameDocument(text, homepage.text)) {
    failures.push('/admin/ appears to be serving the homepage HTML fallback instead of the CMS shell');
  }

  assertIncludes(text, "IoTEdges Content Admin", "/admin/", failures);
  assertIncludes(text, "decap-cms.js", "/admin/", failures);
  assertIncludes(text, "noindex, nofollow, noarchive", "/admin/", failures);
}

async function verifyAdminConfigSurface(failures) {
  const homepage = await fetchText(`${siteUrl}/`);
  const url = `${siteUrl}/admin/config.yml`;
  const { response, text } = await fetchText(url);

  if (!response.ok) {
    failures.push(`/admin/config.yml returned HTTP ${response.status}`);
    return;
  }

  if (looksLikeHtmlDocument(text)) {
    failures.push('/admin/config.yml appears to be HTML fallback instead of the CMS YAML config');
    if (looksLikeSameDocument(text, homepage.text)) {
      failures.push('/admin/config.yml appears to match the homepage HTML, indicating homepage fallback routing');
    }
  }

  assertIncludes(text, "backend:", "/admin/config.yml", failures);
  assertIncludes(text, "name: github", "/admin/config.yml", failures);
  assertIncludes(text, `repo: ${expectedCmsRepo}`, "/admin/config.yml", failures);
  assertIncludes(text, `branch: ${expectedCmsBranch}`, "/admin/config.yml", failures);
  assertIncludes(text, `base_url: ${expectedCmsBaseUrl}`, "/admin/config.yml", failures);
  assertIncludes(text, `auth_endpoint: ${expectedCmsAuthEndpoint}`, "/admin/config.yml", failures);
  assertIncludes(text, `site_url: ${siteUrl}`, "/admin/config.yml", failures);
  assertIncludes(text, `display_url: ${expectedDisplayUrl}`, "/admin/config.yml", failures);
}

async function verifyRobotsSurface(failures) {
  const url = `${siteUrl}/robots.txt`;
  const { response, text } = await fetchText(url);

  if (!response.ok) {
    failures.push(`robots.txt returned HTTP ${response.status}`);
    return;
  }

  assertIncludes(text, "Disallow: /admin", "robots.txt", failures);
  assertIncludes(text, "Disallow: /admin/", "robots.txt", failures);
  assertIncludes(text, `Sitemap: ${siteUrl}/sitemap.xml`, "robots.txt", failures);
}

async function verifySitemapSurface(failures) {
  const url = `${siteUrl}/sitemap.xml`;
  const { response, text } = await fetchText(url);

  if (!response.ok) {
    failures.push(`sitemap.xml returned HTTP ${response.status}`);
    return;
  }

  assertIncludes(text, "<urlset", "sitemap.xml", failures);
  assertIncludes(text, `<loc>${siteUrl}</loc>`, "sitemap.xml", failures);
  if (text.includes("/admin")) {
    failures.push('sitemap.xml should not include "/admin"');
  }
}

async function main() {
  const failures = [];

  await verifyAdminSurface(failures);
  await verifyAdminConfigSurface(failures);
  await verifyRobotsSurface(failures);
  await verifySitemapSurface(failures);

  if (failures.length > 0) {
    throw new Error(withLikelyActions(siteUrl, failures));
  }

  console.log(`Production surface verification passed for ${siteUrl}.`);
}

await main();
