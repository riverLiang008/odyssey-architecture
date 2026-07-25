# odyssey-architecture

Documentation site for Odyssey, built with VitePress. The default documentation track is **v1.0 (Latest)** and the structure is ready for future versioned content.

## Local development

```bash
npm install
npm run docs:dev
```

## Build

```bash
npm run docs:build
npm run docs:preview
```

## Deployment

Pushing to `main` builds and deploys the site to GitHub Pages through the included GitHub Actions workflow. In repository **Settings → Pages**, select **GitHub Actions** as the deployment source once.
