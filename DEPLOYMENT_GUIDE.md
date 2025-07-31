# SanSPortfolio - GitHub Pages Deployment Guide

This guide will help you deploy your academic portfolio to GitHub Pages using the repository `git4san.github.io`.

## Prerequisites

1. GitHub account
2. Git installed on your local machine
3. Node.js and npm installed

## Step-by-Step Deployment Process

### 1. Create GitHub Repository

1. Go to GitHub and create a new **public** repository named `git4san.github.io`
2. Do not initialize with README, .gitignore, or license (we'll add these)

### 2. Prepare Local Repository

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: SanSPortfolio academic website"

# Add GitHub remote
git remote add origin https://github.com/git4san/git4san.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**, select **GitHub Actions** as the source
4. The workflow will automatically trigger on the next push

### 4. Add Build Script

Since package.json cannot be modified in this environment, you'll need to add this script manually after cloning to your local machine:

```json
{
  "scripts": {
    "build:static": "vite build"
  }
}
```

### 5. Environment Configuration

For GitHub Pages deployment, create a production environment configuration:

1. The site will be available at: `https://git4san.github.io`
2. Since this follows the username.github.io pattern, the base URL is "/"
3. No additional base path configuration needed

### 6. Static Data Configuration

Since GitHub Pages doesn't support backend functionality, you'll need to:

1. **Publications**: Convert dynamic API calls to static JSON data
2. **Contact Form**: Use a service like Formspree, Netlify Forms, or EmailJS
3. **Database Features**: Remove or convert to static content

### 7. Deploy

Once you push your code to the main branch:

1. GitHub Actions will automatically build your site
2. The deployment typically takes 2-3 minutes
3. Your site will be live at `https://git4san.github.io`

## Troubleshooting

### Common Issues

1. **Blank Page**: Check browser console for asset loading errors
2. **404 Errors**: Ensure routing is configured for single-page applications
3. **Build Failures**: Check GitHub Actions tab for detailed error logs

### Workflow Permissions

If deployment fails with permissions error:
1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Save and re-run the failed workflow

## Manual Deployment Alternative

If you prefer manual deployment:

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add script to package.json
"deploy": "gh-pages -d dist"

# Build and deploy
npm run build:static
npm run deploy
```

## Updating Your Site

To update your live site:
1. Make changes to your code
2. Commit and push to the main branch
3. GitHub Actions will automatically rebuild and deploy

Your portfolio will be automatically updated within a few minutes of pushing changes.

## Features Supported on GitHub Pages

✅ **Supported:**
- React single-page application
- Static routing with wouter
- CSS animations and styling
- Image assets and logos
- Client-side functionality

❌ **Not Supported:**
- Backend API endpoints
- Database connectivity
- Server-side rendering
- Environment variables (except VITE_ prefixed)

## Next Steps

1. Test your deployed site thoroughly
2. Set up a custom domain (optional)
3. Configure Google Analytics (optional)
4. Set up continuous integration for automated testing

Your SanSPortfolio will be live at `https://git4san.github.io` once deployed!