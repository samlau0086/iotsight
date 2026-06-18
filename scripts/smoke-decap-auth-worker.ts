import worker from '../workers/decap-auth-cloudflare/src/index.ts';

type Env = {
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
  OAUTH_REDIRECT_URI?: string;
  OAUTH_SITE_ORIGIN?: string;
  OAUTH_SCOPE?: string;
};

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

async function readJson(response: Response) {
  return (await response.json()) as Record<string, unknown>;
}

async function main() {
  const env: Env = {
    GITHUB_CLIENT_ID: 'test-client-id',
    GITHUB_CLIENT_SECRET: 'test-client-secret',
    OAUTH_REDIRECT_URI: 'https://cms-auth.iotedges.com/callback',
    OAUTH_SITE_ORIGIN: 'https://iotedges.com',
    OAUTH_SCOPE: 'repo,user',
  };

  const healthResponse = await worker.fetch(new Request('https://cms-auth.iotedges.com/healthz'), env);
  assert(healthResponse.status === 200, `Expected /healthz 200, got ${healthResponse.status}`);
  const health = await readJson(healthResponse);
  assert(health.ok === true, 'Expected /healthz ok=true');
  assert(health.provider === 'github', 'Expected /healthz provider=github');
  assert(health.allowedSiteOrigin === 'https://iotedges.com', 'Expected /healthz allowedSiteOrigin');

  const authResponse = await worker.fetch(new Request('https://cms-auth.iotedges.com/auth'), env);
  assert(authResponse.status === 302, `Expected /auth 302, got ${authResponse.status}`);
  const authLocation = authResponse.headers.get('location') || '';
  const authCookie = authResponse.headers.get('set-cookie') || '';
  assert(authLocation.startsWith('https://github.com/login/oauth/authorize?'), 'Expected GitHub auth redirect');
  assert(authLocation.includes('client_id=test-client-id'), 'Expected client_id in auth redirect');
  assert(authLocation.includes(encodeURIComponent('https://cms-auth.iotedges.com/callback')), 'Expected redirect URI in auth redirect');
  assert(authLocation.includes('scope=repo%2Cuser'), 'Expected scope in auth redirect');
  assert(authCookie.includes('decap_oauth_state='), 'Expected state cookie from /auth');

  const stateMatch = authCookie.match(/decap_oauth_state=([^;]+)/);
  assert(stateMatch, 'Expected decap_oauth_state cookie value');
  const state = decodeURIComponent(stateMatch[1]);

  const invalidStateResponse = await worker.fetch(
    new Request('https://cms-auth.iotedges.com/callback?code=test-code&state=wrong-state', {
      headers: {
        cookie: `decap_oauth_state=${encodeURIComponent(state)}`,
      },
    }),
    env,
  );
  assert(invalidStateResponse.status === 400, `Expected invalid state 400, got ${invalidStateResponse.status}`);
  const invalidStateHtml = await invalidStateResponse.text();
  assert(invalidStateHtml.includes('Invalid OAuth state'), 'Expected invalid state message in callback HTML');
  assert(invalidStateHtml.includes('authorizing:github'), 'Expected Decap handshake message in callback HTML');

  const originalFetch = globalThis.fetch;

  globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url;

    if (url === 'https://github.com/login/oauth/access_token') {
      const body = init?.body ? JSON.parse(String(init.body)) as Record<string, string> : {};
      assert(body.client_id === env.GITHUB_CLIENT_ID, 'Expected GitHub client_id in token exchange');
      assert(body.client_secret === env.GITHUB_CLIENT_SECRET, 'Expected GitHub client_secret in token exchange');
      assert(body.code === 'good-code', 'Expected OAuth code in token exchange');
      assert(body.redirect_uri === env.OAUTH_REDIRECT_URI, 'Expected redirect URI in token exchange');

      return new Response(JSON.stringify({ access_token: 'mock-access-token' }), {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      });
    }

    return originalFetch(input as never, init);
  };

  try {
    const successResponse = await worker.fetch(
      new Request('https://cms-auth.iotedges.com/callback?code=good-code&state=' + encodeURIComponent(state), {
        headers: {
          cookie: `decap_oauth_state=${encodeURIComponent(state)}`,
        },
      }),
      env,
    );

    assert(successResponse.status === 200, `Expected successful callback 200, got ${successResponse.status}`);
    const successHtml = await successResponse.text();
    assert(successHtml.includes('authorization:github:success'), 'Expected success handshake payload in callback HTML');
    assert(successHtml.includes('mock-access-token'), 'Expected returned access token in callback HTML');
    assert(successHtml.includes('https://iotedges.com'), 'Expected allowed site origin in callback HTML');
  } finally {
    globalThis.fetch = originalFetch;
  }

  console.log('Decap auth worker smoke test passed.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
