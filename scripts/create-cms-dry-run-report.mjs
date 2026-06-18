import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const reportsDir = path.join(root, 'docs', 'cms-dry-run-reports');

function getArg(flag) {
  const index = process.argv.indexOf(flag);
  if (index === -1) return undefined;
  return process.argv[index + 1];
}

function hasFlag(flag) {
  return process.argv.includes(flag);
}

function validateDate(date) {
  return /^\d{4}-\d{2}-\d{2}$/.test(date);
}

function resolveTemplateRelativePath(lang) {
  if (lang === 'zh-CN') return 'docs/cms-admin-dry-run-report-template.zh-CN.md';
  return 'docs/cms-admin-dry-run-report-template.md';
}

function resolveOutputName(date, lang) {
  if (lang === 'zh-CN') return `${date}.zh-CN.md`;
  return `${date}.md`;
}

function renderTemplate(template, date, lang) {
  if (lang === 'zh-CN') {
    return template
      .replace('# IoTEdges CMS /admin 试运行记录模板', `# IoTEdges CMS /admin 试运行记录 - ${date}`)
      .replace('- 日期：', `- 日期：${date}`)
      .replace('- 试运行状态：', '- 试运行状态：Draft');
  }

  return template
    .replace('# IoTEdges CMS /admin Dry Run Report Template', `# IoTEdges CMS /admin Dry Run Report - ${date}`)
    .replace('- Date:', `- Date: ${date}`)
    .replace('- Dry run status:', '- Dry run status: Draft');
}

function main() {
  const lang = getArg('--lang') || 'en';
  const date = getArg('--date') || new Date().toISOString().slice(0, 10);
  const dryRun = hasFlag('--dry-run');
  const force = hasFlag('--force');

  if (!['en', 'zh-CN'].includes(lang)) {
    throw new Error('Unsupported --lang value. Use en or zh-CN.');
  }

  if (!validateDate(date)) {
    throw new Error('Invalid --date value. Use YYYY-MM-DD.');
  }

  const templateRelativePath = resolveTemplateRelativePath(lang);
  const templateAbsolutePath = path.join(root, templateRelativePath);
  const template = fs.readFileSync(templateAbsolutePath, 'utf8');

  const outputName = resolveOutputName(date, lang);
  const outputRelativePath = path.join('docs', 'cms-dry-run-reports', outputName);
  const outputAbsolutePath = path.join(root, outputRelativePath);
  const rendered = renderTemplate(template, date, lang);

  if (dryRun) {
    console.log(`Would create ${outputRelativePath}`);
    return;
  }

  fs.mkdirSync(reportsDir, { recursive: true });

  if (fs.existsSync(outputAbsolutePath) && !force) {
    throw new Error(`Report already exists: ${outputRelativePath}. Use --force to overwrite.`);
  }

  fs.writeFileSync(outputAbsolutePath, rendered);
  console.log(`Created ${outputRelativePath}`);
}

main();
