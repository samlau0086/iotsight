# IoTEdges CMS /admin Dry Run Checklist

Last updated: 2026-06-18

## 1. Purpose

Use this checklist to run `/admin` through a real operator path before declaring Decap CMS ready for production use.

The goal is not to confirm that the config merely looks correct. The goal is to confirm that these flows actually work:

- login
- collection access
- new content creation
- existing content editing
- image upload
- save and publish flow
- deployed page output after a CMS-authored change

## 2. Preconditions

Confirm all of these before starting:

- [ ] `https://iotedges.com/admin/` is reachable
- [ ] `https://cms-auth.iotedges.com/healthz` returns normally
- [ ] GitHub OAuth for the CMS is configured
- [ ] the main site deployment workflow is healthy
- [ ] the auth worker deployment workflow is healthy

## 3. Path One: First Login

- [ ] open `https://iotedges.com/admin/`
- [ ] confirm the CMS UI loads without a blank screen or console crash
- [ ] click login and confirm the GitHub OAuth popup opens
- [ ] complete GitHub authorization and return to the CMS
- [ ] confirm these collections are visible:
- [ ] `Blog`
- [ ] `Knowledge Base`
- [ ] `Products`
- [ ] `Solutions`
- [ ] `Accessories`
- [ ] `Site Copy`

If this path fails, check [docs/cms-troubleshooting.md](./cms-troubleshooting.md).

## 4. Path Two: Create One Blog Post

Create one test article first instead of editing a production article immediately.

- [ ] open `Blog`
- [ ] click create
- [ ] fill `id`
- [ ] fill `title`
- [ ] fill `excerpt`
- [ ] fill `date`
- [ ] choose `author`
- [ ] choose `category`
- [ ] upload one cover image
- [ ] write `body`
- [ ] save successfully
- [ ] confirm no schema validation error appears
- [ ] confirm the save produces a readable content change

Verification focus:

- [ ] category options behave correctly
- [ ] uploaded image path stays under `/uploads/...`
- [ ] Markdown body content is preserved correctly

## 5. Path Three: Edit One Knowledge Page

Pick one existing knowledge page and verify the edit-existing-content path.

- [ ] open one existing knowledge page
- [ ] confirm `category` resolves to the current value
- [ ] confirm `primaryKeyword` remains stable
- [ ] update a small part of `excerpt` or `body`
- [ ] save successfully
- [ ] confirm there is no missing-field or invalid-value error

Verification focus:

- [ ] existing frontmatter loads back into the editor correctly
- [ ] controlled select fields do not reject current values

## 6. Path Four: Edit One Product

Products are the most complex collection and must be tested separately.

Recommended examples:

- `IEG-100`
- `IER-140`

Check all of these:

- [ ] open one existing product
- [ ] confirm `category` displays correctly
- [ ] confirm `status` displays correctly
- [ ] confirm `route` is not unintentionally changed
- [ ] confirm `specGroups` can be edited
- [ ] confirm `selectionGuide` can be edited
- [ ] confirm `bomGroups` can be edited
- [ ] confirm `preSalesFaq` can be edited
- [ ] save successfully

Verification focus:

- [ ] nested list fields stay ordered
- [ ] saved frontmatter remains readable
- [ ] multi-level structured fields do not break save

## 7. Path Five: Edit One Solution

Solution validation focuses on controlled labels and list fields.

- [ ] open one existing solution
- [ ] confirm `iconKey` displays the current value correctly
- [ ] confirm `recommendedProductType` displays the current value correctly
- [ ] confirm `recommendedUplink` displays the current value correctly
- [ ] confirm `detailedContent` can be edited
- [ ] confirm `hardware` can be edited
- [ ] confirm `software` can be edited
- [ ] confirm `relatedProducts` can be edited
- [ ] confirm `relatedResources` can be edited
- [ ] save successfully

## 8. Path Six: Upload One Image

Validate the media flow separately.

- [ ] upload one new image from Blog, Product, or Solution
- [ ] confirm the filename is controlled and readable
- [ ] confirm upload succeeds
- [ ] confirm the saved path is under `/uploads/...`
- [ ] confirm the deployed page can load the image

Also confirm:

- [ ] the image ratio does not break layout
- [ ] file size remains reasonable

## 9. Path Seven: Save And Publish Flow

If `editorial_workflow` is enabled, verify both draft and publish behavior.

- [ ] confirm a draft or workflow item appears after save
- [ ] confirm review or publish actions work
- [ ] confirm the GitHub repository shows the corresponding content change
- [ ] confirm the downstream deployment succeeds

If the current environment writes directly to the main branch, still confirm:

- [ ] the content change triggers the deployment workflow
- [ ] the site redeploy finishes normally

## 10. Path Eight: Live Output Review

Do not stop at “save succeeded in CMS.” Check the deployed result.

At minimum confirm:

- [ ] page title is correct
- [ ] image renders correctly
- [ ] list-page excerpt renders correctly
- [ ] Markdown body renders correctly
- [ ] CTA blocks remain intact
- [ ] internal links remain intact
- [ ] URL was not unintentionally changed

## 11. Rollback Drill

Before go-live, run one small rollback exercise.

- [ ] identify the CMS-authored Git commit
- [ ] confirm maintainers know how to revert a bad content change
- [ ] confirm maintainers know how to redeploy after revert

## 12. Pass Criteria

Treat the `/admin` dry run as passed only when all of these are true:

- [ ] login works
- [ ] all six collections open
- [ ] Blog create works
- [ ] Knowledge edit works
- [ ] Product edit works
- [ ] Solution edit works
- [ ] Accessories edit works
- [ ] Site Copy edit works
- [ ] image upload works
- [ ] deployment after save works
- [ ] live page output is correct

## 13. Record The Outcome

After the dry run, write the result into:

- [docs/cms-admin-dry-run-report-template.md](./cms-admin-dry-run-report-template.md)
- or generate a dated working copy with `npm run create:cms-dry-run-report -- --lang en --date YYYY-MM-DD`

## 14. Related Docs

- [docs/cms-go-live-checklist.md](./cms-go-live-checklist.md)
- [docs/cms-troubleshooting.md](./cms-troubleshooting.md)
- [docs/cms-editor-handbook.md](./cms-editor-handbook.md)
- [docs/cms-field-glossary.md](./cms-field-glossary.md)
- [docs/media-asset-guidelines.md](./media-asset-guidelines.md)
