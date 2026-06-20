import { readAdminConfigExpectations } from './lib/read-admin-config-expected.mjs';
import { readLiveRouteSamples } from './lib/read-live-route-samples.mjs';

const adminConfig = readAdminConfigExpectations();
const siteUrl = normalizeSiteUrl(process.env.VERIFY_SITE_URL || process.env.APP_URL || adminConfig.siteUrl);
const samples = readLiveRouteSamples();

function normalizeSiteUrl(value) {
  const normalized = String(value || '').trim().replace(/\/+$/, '');
  if (!/^https?:\/\//i.test(normalized)) {
    throw new Error(`VERIFY_SITE_URL must be an absolute URL. Received: ${value}`);
  }

  return normalized;
}

async function fetchText(url, init = {}) {
  const response = await fetch(url, {
    redirect: 'follow',
    headers: {
      'user-agent': 'IoTEdges-Live-Route-Verification/1.0',
      accept: 'text/html,application/json,text/plain,*/*',
      ...(init.headers || {}),
    },
    ...init,
  });

  return {
    response,
    text: await response.text(),
  };
}

function comparablePrefix(text, length = 1200) {
  return String(text || '').replace(/\s+/g, ' ').trim().slice(0, length);
}

function looksLikeSameDocument(left, right) {
  const leftPrefix = comparablePrefix(left);
  const rightPrefix = comparablePrefix(right);
  return Boolean(leftPrefix) && leftPrefix === rightPrefix;
}

function assertIncludes(haystack, needle, label, failures) {
  if (!haystack.includes(needle)) {
    failures.push(`${label} is missing "${needle}"`);
  }
}

function assertJsonStatus(text, failures, label) {
  try {
    const parsed = JSON.parse(text);
    if (parsed?.status !== 'ok' && parsed?.ok !== true) {
      failures.push(`${label} returned JSON but did not report ok status`);
    }
  } catch (error) {
    failures.push(`${label} did not return valid JSON`);
  }
}

function withLikelyActions(failures) {
  const combined = failures.join('\n');
  const hints = [];

  if (combined.includes('appears to be serving the homepage fallback')) {
    hints.push('One or more content routes are serving the homepage fallback. Check the deployed build contents, prerender output, Express static routing, and CDN or reverse-proxy rewrites.');
  }

  if (combined.includes('/api/health') || combined.includes('/api/quote-request')) {
    hints.push('The deployed API surface is not matching the expected server behavior. Check the VPS process, PM2 reload, current release contents, and whether the live server is running the latest bundled server build.');
  }

  if (hints.length === 0) {
    return `Live route sample verification failed:\n- ${failures.join('\n- ')}`;
  }

  return [
    'Live route sample verification failed:',
    `- ${failures.join('\n- ')}`,
    '',
    'Likely next actions:',
    `- ${[...new Set(hints)].join('\n- ')}`,
  ].join('\n');
}

async function verifyContentSamples(failures) {
  const homepage = await fetchText(`${siteUrl}/`);

  for (const sample of samples) {
    const url = `${siteUrl}${sample.route}`;
    const { response, text } = await fetchText(url);
    const label = `${sample.label} route ${sample.route}`;

    if (!response.ok) {
      failures.push(`${label} returned HTTP ${response.status}`);
      continue;
    }

    if (looksLikeSameDocument(text, homepage.text)) {
      failures.push(`${label} appears to be serving the homepage fallback instead of page-specific content`);
    }

    assertIncludes(text, sample.title, label, failures);
    if (text.includes('Untitled Product') || text.includes('Untitled Solution') || text.includes('Untitled Article') || text.includes('Untitled Knowledge Page')) {
      failures.push(`${label} includes an untitled placeholder value`);
    }
  }
}

async function verifyApiSurface(failures) {
  const health = await fetchText(`${siteUrl}/api/health`);
  if (!health.response.ok) {
    failures.push(`/api/health returned HTTP ${health.response.status}`);
  } else {
    assertJsonStatus(health.text, failures, '/api/health');
  }

  const quotePayload = {
    name: 'Bot Check',
    company: 'IoTEdges Verification',
    email: 'bot-check@example.com',
    whatsapp: '+10000000000',
    country: 'Verification',
    message: 'Verification request',
    application_type: 'Verification',
    _formStartedAt: Date.now() - 10000,
    website_url: 'honeypot',
  };

  const quote = await fetchText(`${siteUrl}/api/quote-request`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(quotePayload),
  });

  if (!quote.response.ok) {
    failures.push(`/api/quote-request returned HTTP ${quote.response.status}`);
    return;
  }

  assertJsonStatus(quote.text, failures, '/api/quote-request');
}

async function main() {
  const failures = [];

  await verifyContentSamples(failures);
  await verifyApiSurface(failures);

  if (failures.length > 0) {
    throw new Error(withLikelyActions(failures));
  }

  console.log(`Live route sample verification passed for ${siteUrl}.`);
}

await main();
