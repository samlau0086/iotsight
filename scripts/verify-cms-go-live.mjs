import { spawnSync } from 'node:child_process';
import { readAdminConfigExpectations } from './lib/read-admin-config-expected.mjs';

const commands = [
  { name: 'cms-preflight', script: 'verify:cms-preflight' },
  { name: 'cms-external-config', script: 'verify:cms-external-config' },
  { name: 'cms-live-surface', script: 'verify:cms-live-surface' },
];
const adminConfig = readAdminConfigExpectations();
const defaultSiteOrigin = new URL(adminConfig.siteUrl).origin;
const defaultAuthOrigin = new URL(adminConfig.baseUrl).origin;

function runScript(scriptName) {
  return spawnSync('npm', ['run', scriptName], {
    cwd: process.cwd(),
    env: {
      ...process.env,
      APP_URL: process.env.APP_URL || defaultSiteOrigin,
      VERIFY_SITE_URL: process.env.VERIFY_SITE_URL || process.env.APP_URL || defaultSiteOrigin,
      DECAP_OAUTH_SITE_ORIGIN: process.env.DECAP_OAUTH_SITE_ORIGIN || defaultSiteOrigin,
      DECAP_AUTH_HEALTH_URL: process.env.DECAP_AUTH_HEALTH_URL || `${defaultAuthOrigin}/healthz`,
      DECAP_OAUTH_REDIRECT_URI: process.env.DECAP_OAUTH_REDIRECT_URI || `${defaultAuthOrigin}/callback`,
    },
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

function summarizeStatus(results) {
  return results.map((result) => {
    const status = result.status === 0 ? 'PASS' : 'FAIL';
    return `- ${result.name}: ${status}`;
  }).join('\n');
}

function main() {
  const results = [];
  const failures = [];

  for (const command of commands) {
    const result = runScript(command.script);
    results.push({
      name: command.name,
      status: result.status ?? 1,
    });

    if (result.status !== 0) {
      failures.push([
        `[${command.name}] npm run ${command.script} failed with exit code ${result.status ?? 'unknown'}`,
        formatOutput(result),
      ].filter(Boolean).join('\n\n'));
    }
  }

  if (failures.length > 0) {
    const summary = summarizeStatus(results);
    const preflightPassed = results.find((item) => item.name === 'cms-preflight')?.status === 0;
    const externalConfigPassed = results.find((item) => item.name === 'cms-external-config')?.status === 0;
    const liveFailed = results.find((item) => item.name === 'cms-live-surface')?.status !== 0;
    const likelyState = preflightPassed && externalConfigPassed && liveFailed
      ? '\n\nInterpretation:\n- Repo-side CMS gates passed.\n- Remaining failures are on the live deployment surface, not in the current local build.'
      : '';

    throw new Error(`CMS go-live verification failed.\n\nStage summary:\n${summary}\n\n${failures.join('\n\n')}${likelyState}`);
  }

  console.log(`CMS go-live verification passed.\n\nStage summary:\n${summarizeStatus(results)}`);
}

main();
