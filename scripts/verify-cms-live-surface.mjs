import { spawnSync } from 'node:child_process';

const commands = [
  { name: 'production-surface', script: 'verify:production-surface' },
  { name: 'live-route-samples', script: 'verify:live-route-samples' },
  { name: 'auth-worker-surface', script: 'verify:auth-worker-surface' },
];

function runScript(scriptName) {
  return spawnSync('npm', ['run', scriptName], {
    cwd: process.cwd(),
    env: process.env,
    encoding: 'utf8',
    shell: true,
  });
}

function formatOutput(result) {
  const parts = [];

  if (result.stdout?.trim()) {
    parts.push(`STDOUT:\n${result.stdout.trim()}`);
  }

  if (result.stderr?.trim()) {
    parts.push(`STDERR:\n${result.stderr.trim()}`);
  }

  return parts.join('\n\n');
}

function deriveHints(failureText) {
  const hints = [];
  const hasAuthDnsFailure = failureText.includes('getaddrinfo ENOTFOUND cms-auth.iotedges.com');
  const hasAuthHtmlFailure =
    failureText.includes('/healthz did not return valid JSON') ||
    failureText.includes('Cloudflare error page is returned instead of Worker JSON') ||
    failureText.includes('content-type: text/html');
  const hasAdminFallbackFailure =
    failureText.includes('/admin/config.yml appears to be HTML fallback instead of the CMS YAML config') ||
    failureText.includes('appears to be serving the homepage fallback instead of page-specific content') ||
    (
      failureText.includes('/admin/ is missing "IoTEdges Content Admin"') &&
      failureText.includes('/admin/config.yml is missing "backend:"')
    );
  const hasApiSurfaceFailure =
    failureText.includes('/api/health returned HTTP') ||
    failureText.includes('/api/health did not return valid JSON') ||
    failureText.includes('/api/quote-request returned HTTP') ||
    failureText.includes('/api/quote-request did not return valid JSON');
  const hasRobotsMismatch =
    failureText.includes('robots.txt is missing "Disallow: /admin"') ||
    failureText.includes('robots.txt is missing "Disallow: /admin/"');

  if (hasAuthDnsFailure) {
    hints.push('Auth worker hostname is not resolving. Check Cloudflare custom-domain binding and DNS for cms-auth.iotedges.com before debugging OAuth logic.');
  }

  if (hasAuthHtmlFailure) {
    hints.push('The auth worker endpoint is reachable but is not returning the expected Worker JSON. Check Cloudflare custom-domain binding, worker route attachment, and whether /healthz is serving an HTML or Cloudflare fallback page.');
  }

  if (hasAdminFallbackFailure) {
    hints.push('The live site is likely still serving the app shell or homepage fallback for /admin and/or one or more prerendered content routes. Check the VPS deployment version, prerender output, Express static routing, and any CDN or reverse-proxy rewrites.');
  }

  if (hasRobotsMismatch) {
    hints.push('The live robots.txt does not match the current prerender output. This usually means the website deployment is still serving an older build.');
  }

  if (hasApiSurfaceFailure) {
    hints.push('The live server API surface is not responding as expected. Check the VPS process, PM2 reload, current release contents, and whether the live server is running the latest bundled server build.');
  }

  if ((hasAuthDnsFailure || hasAuthHtmlFailure) && (hasAdminFallbackFailure || hasRobotsMismatch)) {
    hints.push('Recommended order: fix and verify the auth worker hostname first, then redeploy the website, then rerun `npm run verify:cms-live-surface`.');
  }

  return [...new Set(hints)];
}

function main() {
  const failures = [];

  for (const command of commands) {
    const result = runScript(command.script);

    if (result.status !== 0) {
      failures.push([
        `[${command.name}] npm run ${command.script} failed with exit code ${result.status ?? 'unknown'}`,
        formatOutput(result),
      ].filter(Boolean).join('\n\n'));
    }
  }

  if (failures.length > 0) {
    const combinedFailureText = failures.join('\n\n');
    const hints = deriveHints(combinedFailureText);
    const hintSection = hints.length > 0
      ? `\n\nLikely next actions:\n- ${hints.join('\n- ')}`
      : '';

    throw new Error(`CMS live surface verification failed.\n\n${combinedFailureText}${hintSection}`);
  }

  console.log('CMS live surface verification passed.');
}

main();
