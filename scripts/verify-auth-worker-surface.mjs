const healthUrl = normalizeUrl(process.env.DECAP_AUTH_HEALTH_URL || 'https://cms-auth.iotedges.com/healthz');
const authUrl = normalizeUrl(process.env.DECAP_AUTH_URL || healthUrl.replace(/\/healthz\/?$/, '/auth'));
const expectedRedirectUri = String(process.env.DECAP_OAUTH_REDIRECT_URI || 'https://cms-auth.iotedges.com/callback').trim();

function normalizeUrl(value) {
  const url = String(value || '').trim();
  if (!/^https?:\/\//i.test(url)) {
    throw new Error(`Expected absolute URL, received: ${value}`);
  }

  return url;
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function previewText(value, maxLength = 220) {
  const normalized = String(value || '').replace(/\s+/g, ' ').trim();
  if (!normalized) return '';
  return normalized.length > maxLength ? `${normalized.slice(0, maxLength)}...` : normalized;
}

function withLikelyActions(message) {
  const hints = [];

  if (message.includes('getaddrinfo ENOTFOUND cms-auth.iotedges.com')) {
    hints.push('Check Cloudflare custom-domain binding and DNS for cms-auth.iotedges.com before debugging OAuth logic.');
  }

  if (
    message.includes('/healthz did not return valid JSON') ||
    message.includes('content-type: text/html') ||
    message.includes('Cloudflare error page')
  ) {
    hints.push('The auth worker endpoint is reachable but is not returning Worker JSON. Check custom-domain binding, route attachment, and whether /healthz is serving an HTML fallback page.');
  }

  if (message.includes('/auth returned HTTP')) {
    hints.push('Check whether the worker is exposing /auth correctly and whether the deployed route is still pointing to the intended Worker.');
  }

  if (hints.length === 0) {
    return message;
  }

  return `${message}\n\nLikely next actions:\n- ${[...new Set(hints)].join('\n- ')}`;
}

async function verifyHealth() {
  let response;

  try {
    response = await fetch(healthUrl, {
      redirect: 'follow',
      headers: {
        accept: 'application/json,text/plain,*/*',
        'user-agent': 'IoTEdges-Decap-Auth-Verification/1.0',
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const cause = error instanceof Error && 'cause' in error && error.cause ? ` | cause: ${String(error.cause)}` : '';
    throw new Error(`Unable to reach auth worker health endpoint ${healthUrl}: ${message}${cause}`);
  }

  const contentType = response.headers.get('content-type') || '';
  const bodyText = await response.text();

  assert(response.ok, [
    `/healthz returned HTTP ${response.status}`,
    contentType ? `content-type: ${contentType}` : '',
    previewText(bodyText) ? `body: ${previewText(bodyText)}` : '',
  ].filter(Boolean).join(' | '));

  let payload;
  try {
    payload = JSON.parse(bodyText);
  } catch {
    throw new Error([
      '/healthz did not return valid JSON',
      contentType ? `content-type: ${contentType}` : '',
      previewText(bodyText) ? `body: ${previewText(bodyText)}` : '',
    ].filter(Boolean).join(' | '));
  }

  assert(payload && typeof payload === 'object', '/healthz did not return JSON object');
  assert(payload.ok === true, '/healthz reported ok=false');
  assert(payload.provider === 'github', '/healthz did not report provider=github');
}

async function verifyAuthRedirect() {
  let response;

  try {
    response = await fetch(authUrl, {
      redirect: 'manual',
      headers: {
        accept: 'text/html,application/json,*/*',
        'user-agent': 'IoTEdges-Decap-Auth-Verification/1.0',
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const cause = error instanceof Error && 'cause' in error && error.cause ? ` | cause: ${String(error.cause)}` : '';
    throw new Error(`Unable to reach auth worker auth endpoint ${authUrl}: ${message}${cause}`);
  }

  const contentType = response.headers.get('content-type') || '';
  const bodyText = await response.text();

  assert(response.status === 302, [
    `/auth returned HTTP ${response.status}`,
    contentType ? `content-type: ${contentType}` : '',
    previewText(bodyText) ? `body: ${previewText(bodyText)}` : '',
  ].filter(Boolean).join(' | '));

  const location = response.headers.get('location') || '';
  const cookie = response.headers.get('set-cookie') || '';

  assert(location.startsWith('https://github.com/login/oauth/authorize?'), '/auth did not redirect to GitHub OAuth');
  assert(location.includes(encodeURIComponent(expectedRedirectUri)), `/auth redirect did not include expected redirect URI: ${expectedRedirectUri}`);
  assert(cookie.includes('decap_oauth_state='), '/auth did not set decap_oauth_state cookie');
}

async function main() {
  try {
    await verifyHealth();
    await verifyAuthRedirect();
    console.log('Auth worker surface verification passed.');
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(withLikelyActions(message));
  }
}

await main();
