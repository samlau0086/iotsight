# IoTEdges Media Asset Guidelines

Last updated: 2026-06-18

## 1. Goal

Use this guide to keep CMS-managed images consistent and production-safe.

It is meant to prevent:

- inconsistent hero-image style
- broken card crops from bad aspect ratios
- oversized files that slow page load
- chaotic filenames that are hard to maintain
- unstable third-party hotlinked images

Applies to:

- product hero images
- solution hero images
- solution architecture images
- blog cover images
- knowledge article images

## 2. Core Rules

### Prefer Locally Hosted Assets

Upload assets under:

- `public/uploads`

Use them in content as:

- `/uploads/...`

Avoid long-term reliance on:

- temporary image hosts
- uncontrolled third-party CDNs
- hotlinked external images

### One Image, One Main Job

Do not force one complicated source image to act as all of these at once:

- product hero
- list thumbnail
- blog cover
- architecture diagram

Prepare the correct asset version for each job.

### Keep Visual Style Stable

IoTEdges currently uses a restrained industrial B2B style. Images should be:

- clear
- easy to identify
- focused on devices, panels, wiring, or real field scenes
- free of exaggerated marketing effects
- free of strong neon-blue glow backgrounds
- free of abstract visuals where the subject cannot be recognized

## 3. File Formats

Preferred order:

1. `jpg` or `jpeg`
2. `png`
3. `webp`

Use:

- `jpg` for photos and site scenes
- `png` for transparent-background product cuts and diagrams
- `webp` if your workflow handles it consistently

Avoid:

- `gif`
- oversized uncompressed `png`
- `bmp`

## 4. File Size Targets

Recommended sizes per image:

- standard cover image: `150 KB - 500 KB`
- larger visual: stay under `800 KB` where possible

If an image is clearly above `1 MB`, compress it before upload.

## 5. File Naming

Use lowercase English and hyphens:

```text
product-ieg-100-main.jpg
product-ier-140-front-angle.jpg
solution-factory-energy-hero.jpg
solution-factory-energy-architecture.png
blog-how-to-choose-modbus-mqtt-gateway-cover.jpg
knowledge-rs485-cable-shielding-guide-cover.jpg
```

Avoid:

- Chinese filenames
- spaces
- phone camera defaults such as `IMG_4837.JPG`
- unstable names such as `final-final-v2-last.png`

## 6. Product Hero Images

Recommended ratio:

- `4:3`

Recommended sizes:

- `1600 x 1200`
- `1200 x 900`

Product hero images should show:

- the device clearly
- ports, enclosure, or mounting shape when visible
- a neutral or production-appropriate background

Avoid:

- overly stylized glow effects
- angles that hide the device identity
- tiny low-resolution crops

## 7. Solution Images

Hero images should support the scenario being sold, for example:

- factory cabinet or workshop scenes
- solar energy sites
- water or pump station scenes
- access-control hardware scenes

Architecture images should be:

- readable
- simple
- useful for explaining structure

Avoid decorative diagrams that do not explain the deployment model.

## 8. Blog And Knowledge Images

Use covers and supporting images that are relevant to the topic.

Good examples:

- protocol-related wiring or device photos
- application deployment scenes
- industrial control environments

Avoid:

- generic stock imagery with no industrial relevance
- purely abstract “tech background” images

## 9. Before Uploading

Check:

- aspect ratio fits the page role
- file size is reasonable
- filename is clean
- subject is recognizable
- the image matches the page topic

## 10. After Uploading

Check:

- the saved path uses `/uploads/...`
- the image renders on the live page
- the image does not break layout
- mobile and desktop crops both remain usable

## 11. Related Docs

- [docs/cms-editor-handbook.md](./cms-editor-handbook.md)
- [docs/decap-cms-config-draft.md](./decap-cms-config-draft.md)
- [docs/cms-admin-dry-run-checklist.md](./cms-admin-dry-run-checklist.md)
