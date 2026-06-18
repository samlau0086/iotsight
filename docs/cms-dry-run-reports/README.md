# CMS Dry Run Reports

Store real `/admin` dry run records in this directory.

Naming convention:

- English report: `YYYY-MM-DD.md`
- Chinese report: `YYYY-MM-DD.zh-CN.md`

Recommended creation commands:

```bash
npm run create:cms-dry-run-report -- --lang en --date 2026-06-18
npm run create:cms-dry-run-report -- --lang zh-CN --date 2026-06-18
```

Use the generated files as working records for the actual production dry run, not as sample content.
