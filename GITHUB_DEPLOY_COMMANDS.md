# GitHub Deployment Commands for SanSPortfolio

Follow these exact commands to deploy your portfolio to `git4san.github.io`:

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click "New repository" 
3. Name it exactly: `git4san.github.io`
4. Make it **Public**
5. Do NOT initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Terminal Commands

Copy and paste these commands one by one in your terminal:

### Initialize Git Repository
```bash
git init
```

### Add All Files
```bash
git add .
```

### Create Initial Commit
```bash
git commit -m "Initial commit: SanSPortfolio academic website"
```

### Set Main Branch
```bash
git branch -M main
```

### Add GitHub Remote (Replace 'git4san' with your actual GitHub username)
```bash
git remote add origin https://github.com/git4san/git4san.github.io.git
```

### Push to GitHub
```bash
git push -u origin main
```

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub: `https://github.com/git4san/git4san.github.io`
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Build and deployment**, select **GitHub Actions** as source
5. Click **Save**

## Step 4: Set Workflow Permissions

1. In your repository, go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Click **Save**

## Step 5: Add Build Script to package.json

After cloning to your local machine, add this script to your package.json:

```json
{
  "scripts": {
    "build:static": "vite build"
  }
}
```

## Step 6: Set Up Contact Form (Optional)

1. Go to [Formspree.io](https://formspree.io)
2. Sign up for free account
3. Create a new form
4. Copy your form ID (something like `abc123def`)
5. In `client/src/pages/contact.tsx`, replace `YOUR_FORM_ID` with your actual form ID:
   ```html
   action="https://formspree.io/f/abc123def"
   ```

## Step 7: Wait for Deployment

1. GitHub Actions will automatically build your site (takes 2-3 minutes)
2. Check the **Actions** tab to see deployment progress
3. Your site will be live at: `https://git4san.github.io`

## Future Updates

To update your live site:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

GitHub will automatically rebuild and deploy your changes.

## Troubleshooting

If deployment fails:
1. Check **Actions** tab for error details
2. Ensure workflow permissions are set correctly
3. Make sure repository is public
4. Verify the build script exists in package.json

Your SanSPortfolio will be live at `https://git4san.github.io` once deployed!