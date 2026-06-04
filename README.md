<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/58d2502b-ce81-40d9-bd03-0d66befbec45

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to a VPS with GitHub Actions

The workflow in `.github/workflows/deploy.yml` builds the app, uploads the production bundle to your VPS over SSH, installs production dependencies, and restarts the app with PM2.

Add these repository secrets in GitHub:

- `VPS_HOST`: your VPS IP address or domain
- `VPS_USER`: SSH user, for example `root` or `deploy`
- `VPS_SSH_KEY`: private key that can SSH into the VPS
- `VPS_PORT`: optional SSH port, defaults to `22`
- `VPS_DEPLOY_PATH`: optional deploy path, defaults to `/var/www/iotsight`

On the VPS, install Node.js 22 or newer. If PM2 is not installed, the workflow will install it during deployment.

If the production app needs environment variables, create `/var/www/iotsight/.env` on the VPS, or use your custom `VPS_DEPLOY_PATH`. The deployment keeps this file in place.

By default, the production server listens on port `3005`. Set `PORT` in the VPS `.env` file to override it.

After pushing to `main`, GitHub Actions will deploy automatically. You can also run the workflow manually from the Actions tab.

Useful production commands on the VPS:

```bash
pm2 status
pm2 logs iotsight
pm2 restart iotsight
```
