interface Env {
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
  OAUTH_REDIRECT_URI?: string;
  OAUTH_SITE_ORIGIN?: string;
  OAUTH_SCOPE?: string;
}

const STATE_COOKIE = 'decap_oauth_state';
const DEFAULT_SCOPE = 'repo,user';

function json(data: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      ...init?.headers,
    },
    status: init?.status,
  });
}

function html(body: string, init?: ResponseInit) {
  return new Response(body, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      ...init?.headers,
    },
    status: init?.status,
  });
}

function getCookie(request: Request, name: string): string | null {
  const cookieHeader = request.headers.get('cookie');
  if (!cookieHeader) return null;

  const cookie = cookieHeader
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));

  return cookie ? decodeURIComponent(cookie.slice(name.length + 1)) : null;
}

function createState(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(24));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

function renderCallbackMessage(status: 'success' | 'error', content: Record<string, unknown>): string {
  const payload = JSON.stringify(`authorization:github:${status}:${JSON.stringify(content)}`);
  const targetOrigin = JSON.stringify(content.targetOrigin || '*');

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>IoTEdges CMS Auth</title>
  </head>
  <body>
    <script>
      (function () {
        var allowedOrigin = ${targetOrigin};

        function receiveMessage(message) {
          if (allowedOrigin !== "*" && message.origin !== allowedOrigin) {
            return;
          }

          window.opener.postMessage(${payload}, message.origin);
          window.removeEventListener("message", receiveMessage, false);
          window.close();
        }

        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", allowedOrigin);
      })();
    </script>
  </body>
</html>`;
}

function getRedirectUri(request: Request, env: Env): string {
  if (env.OAUTH_REDIRECT_URI) {
    return env.OAUTH_REDIRECT_URI;
  }

  const url = new URL(request.url);
  url.pathname = '/callback';
  url.search = '';
  url.hash = '';
  return url.toString();
}

function getAllowedSiteOrigin(env: Env): string | null {
  return env.OAUTH_SITE_ORIGIN || null;
}

async function exchangeCodeForToken(code: string, redirectUri: string, env: Env): Promise<{ access_token?: string; error?: string; error_description?: string }> {
  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'user-agent': 'iotedges-decap-auth-worker',
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: redirectUri,
    }),
  });

  return (await response.json()) as { access_token?: string; error?: string; error_description?: string };
}

function assertRequiredEnv(env: Env): string | null {
  if (!env.GITHUB_CLIENT_ID) return 'Missing GITHUB_CLIENT_ID';
  if (!env.GITHUB_CLIENT_SECRET) return 'Missing GITHUB_CLIENT_SECRET';
  return null;
}

async function handleAuth(request: Request, env: Env): Promise<Response> {
  const missingEnv = assertRequiredEnv(env);
  if (missingEnv) {
    return json({ ok: false, error: missingEnv }, { status: 500 });
  }

  const redirectUri = getRedirectUri(request, env);
  const state = createState();
  const scope = env.OAUTH_SCOPE || DEFAULT_SCOPE;
  const target = new URL('https://github.com/login/oauth/authorize');

  target.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
  target.searchParams.set('redirect_uri', redirectUri);
  target.searchParams.set('scope', scope);
  target.searchParams.set('state', state);

  return new Response(null, {
    status: 302,
    headers: {
      location: target.toString(),
      'set-cookie': `${STATE_COOKIE}=${encodeURIComponent(state)}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`,
      'cache-control': 'no-store',
    },
  });
}

async function handleCallback(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const expectedState = getCookie(request, STATE_COOKIE);
  const targetOrigin = getAllowedSiteOrigin(env) || '*';

  if (!code) {
    return html(renderCallbackMessage('error', { error: 'Missing code', targetOrigin }), {
      headers: {
        'set-cookie': `${STATE_COOKIE}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`,
      },
      status: 400,
    });
  }

  if (!state || !expectedState || state !== expectedState) {
    return html(renderCallbackMessage('error', { error: 'Invalid OAuth state', targetOrigin }), {
      headers: {
        'set-cookie': `${STATE_COOKIE}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`,
      },
      status: 400,
    });
  }

  const missingEnv = assertRequiredEnv(env);
  if (missingEnv) {
    return html(renderCallbackMessage('error', { error: missingEnv, targetOrigin }), {
      headers: {
        'set-cookie': `${STATE_COOKIE}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`,
      },
      status: 500,
    });
  }

  const redirectUri = getRedirectUri(request, env);
  const result = await exchangeCodeForToken(code, redirectUri, env);

  if (!result.access_token) {
    return html(
      renderCallbackMessage('error', {
        error: result.error || 'Token exchange failed',
        error_description: result.error_description || 'GitHub did not return an access token.',
        targetOrigin,
      }),
      {
        headers: {
          'set-cookie': `${STATE_COOKIE}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`,
        },
        status: 502,
      },
    );
  }

  return html(
    renderCallbackMessage('success', {
      token: result.access_token,
      provider: 'github',
      targetOrigin,
    }),
    {
      headers: {
        'set-cookie': `${STATE_COOKIE}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`,
      },
    },
  );
}

async function handleHealthz(env: Env): Promise<Response> {
  const missingEnv = assertRequiredEnv(env);

  return json({
    ok: !missingEnv,
    provider: 'github',
    hasClientId: Boolean(env.GITHUB_CLIENT_ID),
    hasClientSecret: Boolean(env.GITHUB_CLIENT_SECRET),
    allowedSiteOrigin: getAllowedSiteOrigin(env),
    error: missingEnv,
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method !== 'GET') {
      return json({ ok: false, error: 'Method not allowed' }, { status: 405 });
    }

    if (url.pathname === '/healthz') {
      return handleHealthz(env);
    }

    if (url.pathname === '/auth') {
      return handleAuth(request, env);
    }

    if (url.pathname === '/callback') {
      return handleCallback(request, env);
    }

    return json(
      {
        ok: true,
        service: 'iotedges-decap-auth-worker',
        routes: ['/auth', '/callback', '/healthz'],
      },
      { status: 200 },
    );
  },
};
