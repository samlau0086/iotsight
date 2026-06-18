# IoTEdges CMS /admin Dry Run Report Template

Last updated: 2026-06-18

Use this template to record the outcome of a real `/admin` dry run.

To generate a working copy in `docs/cms-dry-run-reports/`, run:

```bash
npm run create:cms-dry-run-report -- --lang en --date 2026-06-18
```

Recommended companion documents:

- [docs/cms-admin-dry-run-checklist.md](./cms-admin-dry-run-checklist.md)
- [docs/cms-go-live-checklist.md](./cms-go-live-checklist.md)
- [docs/cms-troubleshooting.md](./cms-troubleshooting.md)

## 1. Session Summary

- Date:
- Operator:
- Environment:
- Site URL:
- Admin URL:
- Auth Worker URL:
- GitHub repository:
- Branch:
- Result:
  - Pass
  - Pass with follow-up
  - Blocked
  - Failed

## 2. Preconditions

- `/admin/` reachable:
- `/healthz` reachable:
- GitHub OAuth app verified:
- Website deploy workflow healthy:
- Auth worker deploy workflow healthy:

## 3. Execution Record

### Path One: First Login

- Result:
- Notes:
- Evidence:

### Path Two: Create One Blog Post

- Result:
- Test page or slug:
- Notes:
- Evidence:

### Path Three: Edit One Knowledge Page

- Result:
- Edited page:
- Notes:
- Evidence:

### Path Four: Edit One Product

- Result:
- Edited product:
- Notes:
- Evidence:

### Path Five: Edit One Solution

- Result:
- Edited solution:
- Notes:
- Evidence:

### Path Six: Upload One Image

- Result:
- Uploaded file:
- Notes:
- Evidence:

### Path Seven: Save And Publish Flow

- Result:
- Workflow or commit reference:
- Notes:
- Evidence:

### Path Eight: Live Output Review

- Result:
- Checked pages:
- Notes:
- Evidence:

### Rollback Drill

- Result:
- Revert method checked:
- Notes:
- Evidence:

## 4. Workflow Evidence

- Website deploy workflow run:
- Auth worker workflow run:
- CMS-authored commit or editorial entry:
- Live page URLs checked:

## 5. Issues Found

List every issue discovered during the dry run.

### Issue 1

- Title:
- Severity:
- Affected area:
- Reproduction:
- Evidence:
- Proposed fix:
- Owner:
- Status:

### Issue 2

- Title:
- Severity:
- Affected area:
- Reproduction:
- Evidence:
- Proposed fix:
- Owner:
- Status:

## 6. Follow-Up Actions

1. 
2. 
3. 

## 7. Final Decision

- Dry run status:
- Ready for go-live:
  - Yes
  - No
- Blocking items:
- Re-test required:
  - Yes
  - No
- Next planned run date:
