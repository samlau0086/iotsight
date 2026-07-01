import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();
const relativeRoutePattern = /^\/[a-z0-9\-/]*$/;
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const allowedSpecGroupTitles = new Set([
  'Hardware I/O',
  'Communication',
  'Protocols',
  'Power & Mounting',
  'Environment',
  'Platform Scope',
  'Telemetry & Control',
  'Operations Interface',
]);
const allowedEditorialStatuses = new Set(['Draft', 'Review', 'Published']);
const allowedProductStatuses = new Set(['Draft', 'Preview', 'Available for project inquiry', 'Published']);

function readFile(relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Missing required file: ${relativePath}`);
  }
  return fs.readFileSync(absolutePath, 'utf8');
}

function assertIncludes(content, needle, label) {
  if (!content.includes(needle)) {
    throw new Error(`Missing expected content in ${label}: ${needle}`);
  }
}

function assertFile(relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Missing required file: ${relativePath}`);
  }
}

function assertValidContentLinks(relativeDir, checks) {
  const absoluteDir = path.join(root, relativeDir);
  const names = fs.readdirSync(absoluteDir).filter((name) => name.endsWith('.md'));

  for (const name of names) {
    const relativePath = path.join(relativeDir, name);
    const content = readFile(relativePath);
    const lines = content.split(/\r?\n/);

    for (const check of checks) {
      let inBlock = false;

      for (let index = 0; index < lines.length; index += 1) {
        const line = lines[index];

        if (check.blockStart && check.blockStart.test(line)) {
          inBlock = true;
          continue;
        }

        if (inBlock && /^[A-Za-z0-9_-]+:/.test(line)) {
          inBlock = false;
        }

        const match = (inBlock || !check.blockStart) && line.match(check.linePattern);
        if (!match) continue;

        const value = match[1];
        if (!check.valuePattern.test(value)) {
          throw new Error(`Invalid ${check.label} in ${relativePath}:${index + 1}: ${value}`);
        }
      }
    }
  }
}

function readFrontmatter(relativePath) {
  const source = readFile(relativePath);
  return matter(source).data || {};
}

function listMarkdownFiles(relativeDir) {
  const absoluteDir = path.join(root, relativeDir);
  const entries = fs.readdirSync(absoluteDir, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    const childRelativePath = path.join(relativeDir, entry.name);

    if (entry.isDirectory()) {
      results.push(...listMarkdownFiles(childRelativePath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(childRelativePath);
    }
  }

  return results;
}

function findUnsafePlainScalar(relativePath) {
  const source = readFile(relativePath);
  const frontmatterMatch = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatterMatch) return null;

  const lines = frontmatterMatch[1].split(/\r?\n/);
  const unsafeScalarPattern = /^\s*[A-Za-z0-9_-]+:\s+[^"'[{>|].*:\s+\S/;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (unsafeScalarPattern.test(line)) {
      return {
        line: index + 2,
        text: line.trim(),
      };
    }
  }

  return null;
}

function assertAllContentFrontmatterParses() {
  const contentFiles = listMarkdownFiles('src/content');

  for (const relativePath of contentFiles) {
    const source = readFile(relativePath);

    try {
      matter(source);
    } catch (error) {
      const unsafeScalar = findUnsafePlainScalar(relativePath);
      const hint = unsafeScalar
        ? ` Possible YAML-unsafe plain scalar at line ${unsafeScalar.line}: ${unsafeScalar.text}. Quote values that contain colon-space.`
        : '';
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(`Invalid frontmatter in ${relativePath}.${hint} Parser error: ${message}`);
    }
  }
}

function assertProductStructure() {
  const dir = path.join(root, 'src/content/products');
  const names = fs.readdirSync(dir).filter((name) => name.endsWith('.md'));

  for (const name of names) {
    const relativePath = path.join('src/content/products', name);
    const data = readFrontmatter(relativePath);
    const specGroups = Array.isArray(data.specGroups) ? data.specGroups : [];
    const chooseWhen = Array.isArray(data.selectionGuide?.chooseWhen) ? data.selectionGuide.chooseWhen : [];
    const notFitWhen = Array.isArray(data.selectionGuide?.notFitWhen) ? data.selectionGuide.notFitWhen : [];
    const compareLinks = Array.isArray(data.selectionGuide?.compareLinks) ? data.selectionGuide.compareLinks : [];
    const bomGroups = Array.isArray(data.bomGroups) ? data.bomGroups : [];
    const preSalesFaq = Array.isArray(data.preSalesFaq) ? data.preSalesFaq : [];

    if (!data.title || data.title === 'Untitled Product') {
      throw new Error(`Product title missing in ${relativePath}`);
    }
    if (!data.excerpt) {
      throw new Error(`Product excerpt missing in ${relativePath}`);
    }
    if (!data.model) {
      throw new Error(`Product model missing in ${relativePath}`);
    }
    if (!data.status) {
      throw new Error(`Product status missing in ${relativePath}`);
    }
    if (!allowedProductStatuses.has(data.status)) {
      throw new Error(`Product status invalid in ${relativePath}: ${data.status}`);
    }
    if (!data.route || typeof data.route !== 'string' || !relativeRoutePattern.test(data.route)) {
      throw new Error(`Product route invalid in ${relativePath}: ${data.route}`);
    }
    if (!data.imageUrl) {
      throw new Error(`Product hero image missing in ${relativePath}`);
    }
    if (specGroups.length < 3) {
      throw new Error(`Product specGroups too short in ${relativePath}`);
    }
    for (const group of specGroups) {
      if (!allowedSpecGroupTitles.has(group?.title)) {
        throw new Error(`Invalid product specGroups title in ${relativePath}: ${group?.title}`);
      }
    }
    if (chooseWhen.length < 2 || notFitWhen.length < 2 || compareLinks.length < 2) {
      throw new Error(`Product selectionGuide incomplete in ${relativePath}`);
    }
    if (bomGroups.length < 1) {
      throw new Error(`Product bomGroups missing in ${relativePath}`);
    }
    if (preSalesFaq.length < 2) {
      throw new Error(`Product preSalesFaq too short in ${relativePath}`);
    }
  }
}

function assertBlogStructure() {
  const dir = path.join(root, 'src/content/blog');
  const names = fs.readdirSync(dir).filter((name) => name.endsWith('.md'));

  for (const name of names) {
    const relativePath = path.join('src/content/blog', name);
    const data = readFrontmatter(relativePath);

    if (!data.title || data.title === 'Untitled Article') {
      throw new Error(`Blog title missing in ${relativePath}`);
    }
    if (!data.excerpt) {
      throw new Error(`Blog excerpt missing in ${relativePath}`);
    }
    if (!data.date) {
      throw new Error(`Blog date missing in ${relativePath}`);
    }
    if (!data.author) {
      throw new Error(`Blog author missing in ${relativePath}`);
    }
    if (!data.category) {
      throw new Error(`Blog category missing in ${relativePath}`);
    }
    if (!data.imageUrl) {
      throw new Error(`Blog hero image missing in ${relativePath}`);
    }
    if (data.status && !allowedEditorialStatuses.has(data.status)) {
      throw new Error(`Blog status invalid in ${relativePath}: ${data.status}`);
    }
  }
}

function assertKnowledgeStructure() {
  const dir = path.join(root, 'src/content/knowledge');
  const names = fs.readdirSync(dir).filter((name) => name.endsWith('.md'));

  for (const name of names) {
    const relativePath = path.join('src/content/knowledge', name);
    const data = readFrontmatter(relativePath);

    if (!data.title || data.title === 'Untitled Knowledge Page') {
      throw new Error(`Knowledge title missing in ${relativePath}`);
    }
    if (!data.excerpt) {
      throw new Error(`Knowledge excerpt missing in ${relativePath}`);
    }
    if (!data.category) {
      throw new Error(`Knowledge category missing in ${relativePath}`);
    }
    if (!data.primaryKeyword) {
      throw new Error(`Knowledge primaryKeyword missing in ${relativePath}`);
    }
    if (data.status && !allowedEditorialStatuses.has(data.status)) {
      throw new Error(`Knowledge status invalid in ${relativePath}: ${data.status}`);
    }
  }
}

function assertSolutionStructure() {
  const dir = path.join(root, 'src/content/solutions');
  const names = fs.readdirSync(dir).filter((name) => name.endsWith('.md'));

  for (const name of names) {
    const relativePath = path.join('src/content/solutions', name);
    const data = readFrontmatter(relativePath);
    const detailedContent = Array.isArray(data.detailedContent) ? data.detailedContent : [];
    const hardware = Array.isArray(data.hardware) ? data.hardware : [];
    const software = Array.isArray(data.software) ? data.software : [];
    const relatedProducts = Array.isArray(data.relatedProducts) ? data.relatedProducts : [];

    if (!data.title || data.title === 'Untitled Solution') {
      throw new Error(`Solution title missing in ${relativePath}`);
    }
    if (!data.description) {
      throw new Error(`Solution description missing in ${relativePath}`);
    }
    if (!data.image) {
      throw new Error(`Solution hero image missing in ${relativePath}`);
    }
    if (data.status && !allowedEditorialStatuses.has(data.status)) {
      throw new Error(`Solution status invalid in ${relativePath}: ${data.status}`);
    }
    if (!data.link || typeof data.link !== 'string' || !relativeRoutePattern.test(data.link)) {
      throw new Error(`Solution route invalid in ${relativePath}: ${data.link}`);
    }
    if (!data.recommendedProductType) {
      throw new Error(`Solution recommendedProductType missing in ${relativePath}`);
    }
    if (!data.recommendedUplink) {
      throw new Error(`Solution recommendedUplink missing in ${relativePath}`);
    }
    if (!data.deploymentEnvironment) {
      throw new Error(`Solution deploymentEnvironment missing in ${relativePath}`);
    }
    if (detailedContent.length < 3) {
      throw new Error(`Solution detailedContent too short in ${relativePath}`);
    }
    if (hardware.length < 4) {
      throw new Error(`Solution hardware list too short in ${relativePath}`);
    }
    if (software.length < 3) {
      throw new Error(`Solution software list too short in ${relativePath}`);
    }
    if (relatedProducts.length < 1) {
      throw new Error(`Solution relatedProducts missing in ${relativePath}`);
    }
  }
}

function main() {
  const adminHtml = readFile('public/admin/index.html');
  const adminConfig = readFile('public/admin/config.yml');
  const prerenderScript = readFile('scripts/prerender.mjs');
  const buildOutputVerifier = readFile('scripts/verify-cms-build-output.mjs');
  const draftVisibilityVerifier = readFile('scripts/verify-draft-visibility.mjs');
  const builtServerVerifier = readFile('scripts/verify-built-server-surface.mjs');
  const externalConfigVerifier = readFile('scripts/verify-cms-external-config.mjs');
  const productionSurfaceVerifier = readFile('scripts/verify-production-surface.mjs');
  const authWorkerSurfaceVerifier = readFile('scripts/verify-auth-worker-surface.mjs');
  const cmsLiveSurfaceVerifier = readFile('scripts/verify-cms-live-surface.mjs');
  const cmsGoLiveVerifier = readFile('scripts/verify-cms-go-live.mjs');
  const workerSource = readFile('workers/decap-auth-cloudflare/src/index.ts');
  const workerReadme = readFile('workers/decap-auth-cloudflare/README.md');
  const deployWorkflow = readFile('.github/workflows/deploy.yml');
  const validateWorkflow = readFile('.github/workflows/validate-cms-rollout.yml');
  const rolloutDoc = readFile('docs/decap-auth-rollout.md');
  const configDraftDoc = readFile('docs/decap-cms-config-draft.md');
  const dryRunChecklist = readFile('docs/cms-admin-dry-run-checklist.md');
  const dryRunReportTemplate = readFile('docs/cms-admin-dry-run-report-template.md');
  const runbookDoc = readFile('docs/github-cloudflare-cms-setup-runbook.md');
  const goLiveChecklist = readFile('docs/cms-go-live-checklist.md');
  const troubleshootingDoc = readFile('docs/cms-troubleshooting.md');
  const editorHandbook = readFile('docs/cms-editor-handbook.md');
  const fieldGlossary = readFile('docs/cms-field-glossary.md');
  const mediaGuidelines = readFile('docs/media-asset-guidelines.md');
  const minimumGoLiveDoc = readFile('docs/cms-minimum-go-live.md');
  const qaChecklist = readFile('docs/decap-cms-qa-checklist.md');
  const dryRunReportTemplateZh = readFile('docs/cms-admin-dry-run-report-template.zh-CN.md');
  const dryRunReportsReadme = readFile('docs/cms-dry-run-reports/README.md');
  const runbookZhDoc = readFile('docs/github-cloudflare-cms-setup-runbook.zh-CN.md');
  const goLiveChecklistZh = readFile('docs/cms-go-live-checklist.zh-CN.md');
  const troubleshootingZh = readFile('docs/cms-troubleshooting.zh-CN.md');
  const minimumGoLiveZhDoc = readFile('docs/cms-minimum-go-live.zh-CN.md');
  const readme = readFile('README.md');
  const authWorkflow = readFile('.github/workflows/deploy-decap-auth.yml');
  const packageJson = readFile('package.json');

  assertFile('public/admin/index.html');
  assertFile('public/admin/config.yml');
  assertFile('docs/cms-admin-dry-run-checklist.md');
  assertFile('docs/cms-admin-dry-run-report-template.md');
  assertFile('docs/cms-admin-dry-run-report-template.zh-CN.md');
  assertFile('docs/cms-dry-run-reports/README.md');
  assertFile('docs/cms-troubleshooting.md');
  assertFile('docs/cms-editor-handbook.md');
  assertFile('docs/cms-field-glossary.md');
  assertFile('docs/media-asset-guidelines.md');
  assertFile('docs/cms-minimum-go-live.md');
  assertFile('docs/cms-minimum-go-live.zh-CN.md');
  assertFile('workers/decap-auth-cloudflare/wrangler.jsonc');
  assertFile('workers/decap-auth-cloudflare/.dev.vars.example');
  assertFile('docs/decap-cms-qa-checklist.md');
  assertFile('scripts/verify-draft-visibility.mjs');

  assertAllContentFrontmatterParses();
  assertBlogStructure();
  assertKnowledgeStructure();
  assertProductStructure();
  assertSolutionStructure();

  assertIncludes(adminHtml, 'IoTEdges Content Admin', 'public/admin/index.html');
  assertIncludes(adminHtml, 'decap-cms.js', 'public/admin/index.html');
  assertIncludes(adminHtml, 'noindex, nofollow, noarchive', 'public/admin/index.html');
  assertIncludes(adminHtml, 'IoTEdges CMS requires JavaScript', 'public/admin/index.html');
  assertIncludes(adminConfig, 'repo: samlau0086/iotsight', 'public/admin/config.yml');
  assertIncludes(adminConfig, 'branch: main', 'public/admin/config.yml');
  assertIncludes(adminConfig, 'base_url: https://cms-auth.iotedges.com', 'public/admin/config.yml');
  assertIncludes(adminConfig, 'auth_endpoint: auth', 'public/admin/config.yml');
  assertIncludes(adminConfig, 'site_url: https://iotedges.com', 'public/admin/config.yml');
  assertIncludes(adminConfig, 'display_url: https://iotedges.com', 'public/admin/config.yml');
  assertIncludes(packageJson, '"verify:cms-preflight"', 'package.json');
  assertIncludes(packageJson, '"verify:cms-auth-preflight"', 'package.json');
  assertIncludes(packageJson, '"verify:draft-visibility"', 'package.json');
  assertIncludes(packageJson, '"verify:server-surface"', 'package.json');
  assertIncludes(packageJson, '"verify:cms-external-config"', 'package.json');
  assertIncludes(packageJson, '"verify:auth-worker-surface"', 'package.json');
  assertIncludes(packageJson, '"verify:production-surface"', 'package.json');
  assertIncludes(packageJson, '"verify:cms-live-surface"', 'package.json');
  assertIncludes(packageJson, '"verify:cms-go-live"', 'package.json');
  assertIncludes(packageJson, '"create:cms-dry-run-report"', 'package.json');
  assertIncludes(prerenderScript, "Disallow: /admin", 'scripts/prerender.mjs');
  assertIncludes(buildOutputVerifier, 'readAdminConfigExpectations', 'scripts/verify-cms-build-output.mjs');
  assertIncludes(buildOutputVerifier, 'dist/admin/config.yml', 'scripts/verify-cms-build-output.mjs');
  assertIncludes(draftVisibilityVerifier, 'publicProductStatuses', 'scripts/verify-draft-visibility.mjs');
  assertIncludes(draftVisibilityVerifier, 'private route should not appear in sitemap', 'scripts/verify-draft-visibility.mjs');
  assertIncludes(draftVisibilityVerifier, 'private route should not be prerendered', 'scripts/verify-draft-visibility.mjs');
  assertIncludes(builtServerVerifier, 'readAdminConfigExpectations', 'scripts/verify-built-server-surface.mjs');
  assertIncludes(builtServerVerifier, '/admin should redirect to /admin/', 'scripts/verify-built-server-surface.mjs');
  assertIncludes(builtServerVerifier, '/admin/config.yml', 'scripts/verify-built-server-surface.mjs');
  assertIncludes(externalConfigVerifier, 'public/admin/config.yml base_url', 'scripts/verify-cms-external-config.mjs');
  assertIncludes(externalConfigVerifier, 'public/admin/config.yml site_url', 'scripts/verify-cms-external-config.mjs');
  assertIncludes(externalConfigVerifier, 'public/admin/config.yml display_url', 'scripts/verify-cms-external-config.mjs');
  assertIncludes(externalConfigVerifier, 'DECAP_AUTH_HEALTH_URL', 'scripts/verify-cms-external-config.mjs');
  assertIncludes(productionSurfaceVerifier, 'readAdminConfigExpectations', 'scripts/verify-production-surface.mjs');
  assertIncludes(productionSurfaceVerifier, '/admin should redirect to /admin/', 'scripts/verify-production-surface.mjs');
  assertIncludes(productionSurfaceVerifier, '/admin/config.yml', 'scripts/verify-production-surface.mjs');
  assertIncludes(productionSurfaceVerifier, 'HTML fallback instead of the CMS YAML config', 'scripts/verify-production-surface.mjs');
  assertIncludes(productionSurfaceVerifier, 'homepage HTML fallback', 'scripts/verify-production-surface.mjs');
  assertIncludes(productionSurfaceVerifier, 'Likely next actions:', 'scripts/verify-production-surface.mjs');
  assertIncludes(authWorkerSurfaceVerifier, 'DECAP_AUTH_HEALTH_URL', 'scripts/verify-auth-worker-surface.mjs');
  assertIncludes(authWorkerSurfaceVerifier, 'Likely next actions:', 'scripts/verify-auth-worker-surface.mjs');
  assertIncludes(cmsLiveSurfaceVerifier, 'verify:production-surface', 'scripts/verify-cms-live-surface.mjs');
  assertIncludes(cmsLiveSurfaceVerifier, 'verify:auth-worker-surface', 'scripts/verify-cms-live-surface.mjs');
  assertIncludes(cmsLiveSurfaceVerifier, 'Likely next actions:', 'scripts/verify-cms-live-surface.mjs');
  assertIncludes(cmsLiveSurfaceVerifier, 'The auth worker endpoint is reachable but is not returning the expected Worker JSON.', 'scripts/verify-cms-live-surface.mjs');
  assertIncludes(cmsLiveSurfaceVerifier, 'Recommended order: fix and verify the auth worker hostname first', 'scripts/verify-cms-live-surface.mjs');
  assertIncludes(cmsGoLiveVerifier, 'verify:cms-preflight', 'scripts/verify-cms-go-live.mjs');
  assertIncludes(cmsGoLiveVerifier, 'verify:cms-external-config', 'scripts/verify-cms-go-live.mjs');
  assertIncludes(cmsGoLiveVerifier, 'verify:cms-live-surface', 'scripts/verify-cms-go-live.mjs');
  assertIncludes(cmsGoLiveVerifier, 'readAdminConfigExpectations', 'scripts/verify-cms-go-live.mjs');
  assertIncludes(cmsGoLiveVerifier, 'Stage summary:', 'scripts/verify-cms-go-live.mjs');
  assertIncludes(cmsGoLiveVerifier, 'Repo-side CMS gates passed.', 'scripts/verify-cms-go-live.mjs');

  assertIncludes(workerSource, "url.pathname === '/auth'", 'workers/decap-auth-cloudflare/src/index.ts');
  assertIncludes(workerSource, "url.pathname === '/callback'", 'workers/decap-auth-cloudflare/src/index.ts');
  assertIncludes(workerSource, "url.pathname === '/healthz'", 'workers/decap-auth-cloudflare/src/index.ts');

  assertIncludes(workerReadme, 'https://cms-auth.iotedges.com/healthz', 'workers/decap-auth-cloudflare/README.md');
  assertIncludes(workerReadme, 'npm run verify:cms-auth-preflight', 'workers/decap-auth-cloudflare/README.md');

  assertIncludes(authWorkflow, 'cloudflare/wrangler-action@v3', '.github/workflows/deploy-decap-auth.yml');
  assertIncludes(authWorkflow, 'scripts/lib/**', '.github/workflows/deploy-decap-auth.yml');
  assertIncludes(authWorkflow, 'DECAP_GITHUB_CLIENT_ID', '.github/workflows/deploy-decap-auth.yml');
  assertIncludes(authWorkflow, 'DECAP_AUTH_HEALTH_URL', '.github/workflows/deploy-decap-auth.yml');
  assertIncludes(authWorkflow, 'DECAP_OAUTH_SITE_ORIGIN', '.github/workflows/deploy-decap-auth.yml');
  assertIncludes(authWorkflow, 'Run CMS auth preflight', '.github/workflows/deploy-decap-auth.yml');
  assertIncludes(authWorkflow, 'npm run verify:cms-external-config', '.github/workflows/deploy-decap-auth.yml');
  assertIncludes(authWorkflow, 'npm run verify:cms-auth-preflight', '.github/workflows/deploy-decap-auth.yml');
  assertIncludes(authWorkflow, 'npm run verify:auth-worker-surface', '.github/workflows/deploy-decap-auth.yml');
  assertIncludes(authWorkflow, 'scripts/smoke-decap-auth-worker.ts', '.github/workflows/deploy-decap-auth.yml');
  assertIncludes(authWorkflow, 'package.json', '.github/workflows/deploy-decap-auth.yml');
  assertIncludes(authWorkflow, 'public/admin/index.html', '.github/workflows/deploy-decap-auth.yml');
  assertIncludes(deployWorkflow, 'Run CMS preflight', '.github/workflows/deploy.yml');
  assertIncludes(deployWorkflow, 'vars.APP_URL || secrets.APP_URL', '.github/workflows/deploy.yml');
  assertIncludes(deployWorkflow, 'CMS_CONFIG_VERIFY_MODE: website', '.github/workflows/deploy.yml');
  assertIncludes(deployWorkflow, 'npm run verify:cms-external-config', '.github/workflows/deploy.yml');
  assertIncludes(deployWorkflow, 'npm run verify:cms-preflight', '.github/workflows/deploy.yml');
  assertIncludes(deployWorkflow, 'npm run verify:cms-live-surface', '.github/workflows/deploy.yml');
  assertIncludes(validateWorkflow, 'scripts/create-cms-dry-run-report.mjs', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'scripts/prerender.mjs', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'scripts/verify-cms-build-output.mjs', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'scripts/verify-built-server-surface.mjs', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'scripts/verify-cms-external-config.mjs', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'scripts/verify-production-surface.mjs', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'scripts/verify-auth-worker-surface.mjs', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'scripts/verify-cms-live-surface.mjs', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'scripts/verify-cms-go-live.mjs', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'src/content/**', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'src/data/**', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'src/lib/**', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'public/uploads/**', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'docs/content-model-schema.md', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'docs/cms-admin-dry-run-checklist.zh-CN.md', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'docs/cms-editor-handbook.zh-CN.md', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'docs/cms-field-glossary.zh-CN.md', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'docs/cms-minimum-go-live.md', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'docs/cms-minimum-go-live.zh-CN.md', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'docs/cms-rollout-sequence.md', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'docs/cms-rollout-sequence.zh-CN.md', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'docs/media-asset-guidelines.zh-CN.md', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'docs/cms-dry-run-reports/**', '.github/workflows/validate-cms-rollout.yml');
  assertIncludes(validateWorkflow, 'npm run verify:cms-preflight', '.github/workflows/validate-cms-rollout.yml');

  assertIncludes(rolloutDoc, 'docs/github-cloudflare-cms-setup-runbook.md', 'docs/decap-auth-rollout.md');
  assertIncludes(rolloutDoc, 'docs/cms-go-live-checklist.md', 'docs/decap-auth-rollout.md');
  assertIncludes(rolloutDoc, 'npm run verify:cms-auth-preflight', 'docs/decap-auth-rollout.md');
  assertIncludes(rolloutDoc, 'npm run verify:cms-external-config', 'docs/decap-auth-rollout.md');
  assertIncludes(rolloutDoc, 'npm run verify:auth-worker-surface', 'docs/decap-auth-rollout.md');
  assertIncludes(rolloutDoc, 'npm run verify:cms-live-surface', 'docs/decap-auth-rollout.md');
  assertIncludes(configDraftDoc, 'base_url: https://cms-auth.iotedges.com', 'docs/decap-cms-config-draft.md');
  assertIncludes(configDraftDoc, 'media_folder: public/uploads', 'docs/decap-cms-config-draft.md');
  assertIncludes(configDraftDoc, 'docs/content-model-schema.md', 'docs/decap-cms-config-draft.md');
  assertIncludes(dryRunChecklist, 'https://iotedges.com/admin/', 'docs/cms-admin-dry-run-checklist.md');
  assertIncludes(dryRunChecklist, 'editorial_workflow', 'docs/cms-admin-dry-run-checklist.md');
  assertIncludes(dryRunChecklist, 'Products', 'docs/cms-admin-dry-run-checklist.md');
  assertIncludes(dryRunChecklist, 'docs/cms-admin-dry-run-report-template.md', 'docs/cms-admin-dry-run-checklist.md');
  assertIncludes(dryRunReportTemplate, 'Session Summary', 'docs/cms-admin-dry-run-report-template.md');
  assertIncludes(dryRunReportTemplate, 'Path One: First Login', 'docs/cms-admin-dry-run-report-template.md');
  assertIncludes(dryRunReportTemplate, 'Final Decision', 'docs/cms-admin-dry-run-report-template.md');
  assertIncludes(dryRunReportTemplate, 'npm run create:cms-dry-run-report', 'docs/cms-admin-dry-run-report-template.md');
  assertIncludes(dryRunReportTemplateZh, '会话摘要', 'docs/cms-admin-dry-run-report-template.zh-CN.md');
  assertIncludes(dryRunReportTemplateZh, '路径一：首次登录', 'docs/cms-admin-dry-run-report-template.zh-CN.md');
  assertIncludes(dryRunReportTemplateZh, '最终结论', 'docs/cms-admin-dry-run-report-template.zh-CN.md');
  assertIncludes(dryRunReportTemplateZh, 'npm run create:cms-dry-run-report', 'docs/cms-admin-dry-run-report-template.zh-CN.md');
  assertIncludes(dryRunReportsReadme, 'YYYY-MM-DD.md', 'docs/cms-dry-run-reports/README.md');
  assertIncludes(dryRunReportsReadme, 'npm run create:cms-dry-run-report', 'docs/cms-dry-run-reports/README.md');
  assertIncludes(troubleshootingDoc, 'https://iotedges.com/admin/', 'docs/cms-troubleshooting.md');
  assertIncludes(troubleshootingDoc, 'Deploy Decap Auth Worker', 'docs/cms-troubleshooting.md');
  assertIncludes(troubleshootingDoc, 'npm run verify:server-surface', 'docs/cms-troubleshooting.md');
  assertIncludes(troubleshootingDoc, 'If `/admin/config.yml` opens as HTML instead of YAML:', 'docs/cms-troubleshooting.md');
  assertIncludes(troubleshootingDoc, 'looks identical to the homepage', 'docs/cms-troubleshooting.md');
  assertIncludes(troubleshootingDoc, 'HTML page is returned instead of JSON', 'docs/cms-troubleshooting.md');
  assertIncludes(troubleshootingDoc, 'Untitled Product', 'docs/cms-troubleshooting.md');
  assertIncludes(editorHandbook, 'https://iotedges.com/admin/', 'docs/cms-editor-handbook.md');
  assertIncludes(editorHandbook, 'docs/cms-admin-dry-run-checklist.md', 'docs/cms-editor-handbook.md');
  assertIncludes(fieldGlossary, 'Engineering Team', 'docs/cms-field-glossary.md');
  assertIncludes(fieldGlossary, '/products/ieg-100-ethernet-industrial-iot-gateway', 'docs/cms-field-glossary.md');
  assertIncludes(mediaGuidelines, 'public/uploads', 'docs/media-asset-guidelines.md');
  assertIncludes(mediaGuidelines, '4:3', 'docs/media-asset-guidelines.md');
  assertIncludes(qaChecklist, 'authorized editor can open all six collections', 'docs/decap-cms-qa-checklist.md');
  assertIncludes(qaChecklist, 'Accessories And Site Copy', 'docs/decap-cms-qa-checklist.md');
  assertIncludes(qaChecklist, 'editing an existing product preserves valid nested frontmatter', 'docs/decap-cms-qa-checklist.md');
  assertIncludes(qaChecklist, 'editing an existing solution preserves valid Markdown and frontmatter', 'docs/decap-cms-qa-checklist.md');

  assertIncludes(runbookDoc, 'https://cms-auth.iotedges.com/callback', 'docs/github-cloudflare-cms-setup-runbook.md');
  assertIncludes(runbookDoc, 'Deploy Decap Auth Worker', 'docs/github-cloudflare-cms-setup-runbook.md');
  assertIncludes(runbookDoc, 'docs/cms-go-live-checklist.md', 'docs/github-cloudflare-cms-setup-runbook.md');
  assertIncludes(runbookDoc, 'docs/cms-admin-dry-run-checklist.md', 'docs/github-cloudflare-cms-setup-runbook.md');
  assertIncludes(runbookDoc, 'docs/cms-troubleshooting.md', 'docs/github-cloudflare-cms-setup-runbook.md');
  assertIncludes(runbookDoc, 'all six collections', 'docs/github-cloudflare-cms-setup-runbook.md');
  assertIncludes(runbookDoc, 'docs/cms-admin-dry-run-report-template.md', 'docs/github-cloudflare-cms-setup-runbook.md');
  assertIncludes(runbookDoc, 'npm run verify:cms-preflight', 'docs/github-cloudflare-cms-setup-runbook.md');
  assertIncludes(runbookDoc, 'npm run verify:cms-external-config', 'docs/github-cloudflare-cms-setup-runbook.md');

  assertIncludes(goLiveChecklist, 'https://cms-auth.iotedges.com/healthz', 'docs/cms-go-live-checklist.md');
  assertIncludes(goLiveChecklist, 'APP_URL', 'docs/cms-go-live-checklist.md');
  assertIncludes(goLiveChecklist, 'site_url: https://iotedges.com', 'docs/cms-go-live-checklist.md');
  assertIncludes(goLiveChecklist, 'display_url: https://iotedges.com', 'docs/cms-go-live-checklist.md');
  assertIncludes(goLiveChecklist, 'npm run verify:cms-auth-preflight', 'docs/cms-go-live-checklist.md');
  assertIncludes(goLiveChecklist, 'npm run verify:cms-preflight', 'docs/cms-go-live-checklist.md');
  assertIncludes(goLiveChecklist, 'npm run verify:cms-external-config', 'docs/cms-go-live-checklist.md');
  assertIncludes(goLiveChecklist, 'npm run verify:server-surface', 'docs/cms-go-live-checklist.md');
  assertIncludes(goLiveChecklist, 'npm run verify:auth-worker-surface', 'docs/cms-go-live-checklist.md');
  assertIncludes(goLiveChecklist, 'npm run verify:production-surface', 'docs/cms-go-live-checklist.md');
  assertIncludes(goLiveChecklist, 'npm run verify:cms-live-surface', 'docs/cms-go-live-checklist.md');
  assertIncludes(goLiveChecklist, 'npm run verify:cms-go-live', 'docs/cms-go-live-checklist.md');
  assertIncludes(goLiveChecklist, 'Deploy Decap Auth Worker', 'docs/cms-go-live-checklist.md');
  assertIncludes(goLiveChecklist, 'docs/cms-minimum-go-live.md', 'docs/cms-go-live-checklist.md');
  assertIncludes(goLiveChecklist, 'docs/cms-admin-dry-run-checklist.md', 'docs/cms-go-live-checklist.md');
  assertIncludes(goLiveChecklist, 'docs/cms-admin-dry-run-report-template.md', 'docs/cms-go-live-checklist.md');
  assertIncludes(minimumGoLiveDoc, 'one existing blog post edit only', 'docs/cms-minimum-go-live.md');
  assertIncludes(minimumGoLiveDoc, 'Deploy Decap Auth Worker', 'docs/cms-minimum-go-live.md');
  assertIncludes(minimumGoLiveDoc, 'npm run verify:cms-live-surface', 'docs/cms-minimum-go-live.md');
  assertIncludes(minimumGoLiveDoc, 'npm run verify:cms-go-live', 'docs/cms-minimum-go-live.md');
  assertIncludes(minimumGoLiveDoc, 'fix and verify `cms-auth.iotedges.com` first', 'docs/cms-minimum-go-live.md');
  assertIncludes(runbookZhDoc, 'cms-auth.iotedges.com/callback', 'docs/github-cloudflare-cms-setup-runbook.zh-CN.md');
  assertIncludes(runbookZhDoc, '6 个集合', 'docs/github-cloudflare-cms-setup-runbook.zh-CN.md');
  assertIncludes(runbookZhDoc, 'docs/cms-admin-dry-run-report-template.zh-CN.md', 'docs/github-cloudflare-cms-setup-runbook.zh-CN.md');
  assertIncludes(runbookZhDoc, 'npm run verify:cms-preflight', 'docs/github-cloudflare-cms-setup-runbook.zh-CN.md');
  assertIncludes(runbookZhDoc, 'npm run verify:cms-external-config', 'docs/github-cloudflare-cms-setup-runbook.zh-CN.md');
  assertIncludes(goLiveChecklistZh, 'cms-auth.iotedges.com/healthz', 'docs/cms-go-live-checklist.zh-CN.md');
  assertIncludes(goLiveChecklistZh, 'APP_URL', 'docs/cms-go-live-checklist.zh-CN.md');
  assertIncludes(goLiveChecklistZh, 'site_url: https://iotedges.com', 'docs/cms-go-live-checklist.zh-CN.md');
  assertIncludes(goLiveChecklistZh, 'display_url: https://iotedges.com', 'docs/cms-go-live-checklist.zh-CN.md');
  assertIncludes(goLiveChecklistZh, 'npm run verify:cms-auth-preflight', 'docs/cms-go-live-checklist.zh-CN.md');
  assertIncludes(goLiveChecklistZh, 'npm run verify:cms-preflight', 'docs/cms-go-live-checklist.zh-CN.md');
  assertIncludes(goLiveChecklistZh, 'npm run verify:cms-external-config', 'docs/cms-go-live-checklist.zh-CN.md');
  assertIncludes(goLiveChecklistZh, 'npm run verify:server-surface', 'docs/cms-go-live-checklist.zh-CN.md');
  assertIncludes(goLiveChecklistZh, 'npm run verify:auth-worker-surface', 'docs/cms-go-live-checklist.zh-CN.md');
  assertIncludes(goLiveChecklistZh, 'npm run verify:production-surface', 'docs/cms-go-live-checklist.zh-CN.md');
  assertIncludes(goLiveChecklistZh, 'npm run verify:cms-live-surface', 'docs/cms-go-live-checklist.zh-CN.md');
  assertIncludes(goLiveChecklistZh, 'npm run verify:cms-go-live', 'docs/cms-go-live-checklist.zh-CN.md');
  assertIncludes(goLiveChecklistZh, 'docs/cms-minimum-go-live.zh-CN.md', 'docs/cms-go-live-checklist.zh-CN.md');
  assertIncludes(goLiveChecklistZh, 'docs/cms-admin-dry-run-report-template.zh-CN.md', 'docs/cms-go-live-checklist.zh-CN.md');
  assertIncludes(minimumGoLiveZhDoc, '只修改一篇现有 Blog', 'docs/cms-minimum-go-live.zh-CN.md');
  assertIncludes(minimumGoLiveZhDoc, 'Deploy Decap Auth Worker', 'docs/cms-minimum-go-live.zh-CN.md');
  assertIncludes(minimumGoLiveZhDoc, 'npm run verify:cms-live-surface', 'docs/cms-minimum-go-live.zh-CN.md');
  assertIncludes(minimumGoLiveZhDoc, 'npm run verify:cms-go-live', 'docs/cms-minimum-go-live.zh-CN.md');
  assertIncludes(minimumGoLiveZhDoc, '先修复并验证 `cms-auth.iotedges.com`', 'docs/cms-minimum-go-live.zh-CN.md');
  assertIncludes(troubleshootingZh, 'cms-auth.iotedges.com/healthz', 'docs/cms-troubleshooting.zh-CN.md');
  assertIncludes(troubleshootingZh, 'npm run verify:cms-preflight', 'docs/cms-troubleshooting.zh-CN.md');
  assertIncludes(troubleshootingZh, 'npm run verify:cms-external-config', 'docs/cms-troubleshooting.zh-CN.md');
  assertIncludes(troubleshootingZh, 'npm run verify:server-surface', 'docs/cms-troubleshooting.zh-CN.md');
  assertIncludes(troubleshootingZh, 'npm run verify:auth-worker-surface', 'docs/cms-troubleshooting.zh-CN.md');
  assertIncludes(troubleshootingZh, 'npm run verify:production-surface', 'docs/cms-troubleshooting.zh-CN.md');
  assertIncludes(troubleshootingZh, '/admin/config.yml', 'docs/cms-troubleshooting.zh-CN.md');
  assertIncludes(troubleshootingZh, '和首页几乎一致', 'docs/cms-troubleshooting.zh-CN.md');
  assertIncludes(troubleshootingZh, '返回的是 HTML 页面而不是 JSON', 'docs/cms-troubleshooting.zh-CN.md');

  assertIncludes(readme, 'docs/github-cloudflare-cms-setup-runbook.md', 'README.md');
  assertIncludes(readme, 'docs/cms-admin-dry-run-checklist.md', 'README.md');
  assertIncludes(readme, 'docs/cms-admin-dry-run-report-template.md', 'README.md');
  assertIncludes(readme, 'docs/cms-go-live-checklist.md', 'README.md');
  assertIncludes(readme, 'docs/cms-troubleshooting.md', 'README.md');
  assertIncludes(readme, 'docs/cms-editor-handbook.md', 'README.md');
  assertIncludes(readme, 'docs/cms-field-glossary.md', 'README.md');
  assertIncludes(readme, 'docs/media-asset-guidelines.md', 'README.md');
  assertIncludes(readme, 'docs/decap-cms-config-draft.md', 'README.md');
  assertIncludes(readme, 'docs/cms-troubleshooting.zh-CN.md', 'README.md');
  assertIncludes(readme, 'docs/cms-admin-dry-run-report-template.zh-CN.md', 'README.md');
  assertIncludes(readme, 'npm run verify:cms-preflight', 'README.md');
  assertIncludes(readme, 'npm run verify:cms-auth-preflight', 'README.md');
  assertIncludes(readme, 'npm run verify:server-surface', 'README.md');
  assertIncludes(readme, 'npm run verify:draft-visibility', 'README.md');
  assertIncludes(readme, 'npm run verify:cms-external-config', 'README.md');
  assertIncludes(readme, 'base_url` / `site_url` / `display_url`', 'README.md');
  assertIncludes(readme, 'npm run verify:auth-worker-surface', 'README.md');
  assertIncludes(readme, 'npm run verify:production-surface', 'README.md');
  assertIncludes(readme, 'npm run verify:cms-live-surface', 'README.md');
  assertIncludes(readme, 'npm run verify:cms-go-live', 'README.md');
  assertIncludes(readme, 'Use `https://iotedges.com/admin/` as the canonical CMS URL.', 'README.md');
  assertIncludes(readme, 'docs/github-cloudflare-cms-setup-runbook.zh-CN.md', 'README.md');
  assertIncludes(readme, 'docs/cms-go-live-checklist.zh-CN.md', 'README.md');
  assertIncludes(readme, 'base_url: https://cms-auth.iotedges.com', 'README.md');

  assertValidContentLinks('src/content/blog', [
    {
      label: 'relatedProducts slug',
      blockStart: /^relatedProducts:\s*$/,
      linePattern: /^\s*-\s*(\S+)\s*$/,
      valuePattern: slugPattern,
    },
    {
      label: 'relatedResources route',
      blockStart: /^relatedResources:\s*$/,
      linePattern: /^\s*-\s*(\S+)\s*$/,
      valuePattern: relativeRoutePattern,
    },
  ]);

  assertValidContentLinks('src/content/knowledge', [
    {
      label: 'relatedProducts slug',
      blockStart: /^relatedProducts:\s*$/,
      linePattern: /^\s*-\s*(\S+)\s*$/,
      valuePattern: slugPattern,
    },
  ]);

  assertValidContentLinks('src/content/products', [
    {
      label: 'compareLinks href',
      blockStart: /^\s*compareLinks:\s*$/,
      linePattern: /^\s*-\s*href:\s*"?([^"\s]+)"?\s*$/,
      valuePattern: relativeRoutePattern,
    },
  ]);

  assertValidContentLinks('src/content/solutions', [
    {
      label: 'solution related link href',
      linePattern: /^\s*href:\s*"?([^"\s]+)"?\s*$/,
      valuePattern: relativeRoutePattern,
    },
  ]);

  console.log('CMS rollout verification passed.');
}

main();
