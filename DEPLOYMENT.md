# Deployment Guide

## Deploy to Netlify

### Option 1: Netlify CLI (Recommended)

1. Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy:
```bash
cd website
npm run build
netlify deploy --prod
```

### Option 2: GitHub Integration

1. Push this repository to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Netlify will auto-detect Astro settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: `website`

### Option 3: Drag & Drop

1. Build the site:
```bash
npm run build
```

2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder to deploy

## Environment Variables

No environment variables required for this static site.

## Custom Domain

After deployment, you can add a custom domain in Netlify:
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS records as instructed

## Performance

The site is optimized for:
- Fast initial load with Astro's static generation
- Lazy loading of components with `client:visible`
- Optimized images and fonts
- Minimal JavaScript bundle
- Automatic sitemap generation
