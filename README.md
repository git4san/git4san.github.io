# SanSPortfolio - Academic Portfolio Website

A modern, responsive academic portfolio website for Sanoop Mallissery, Ph.D., showcasing research in cybersecurity, AI, and dependable systems security.

## 🌟 Features

- **Modern Design**: Dark academic theme with clean, professional layout
- **Interactive Projects**: Category-based project filtering and detailed project pages
- **Research Showcase**: Publications, tools, and comprehensive research documentation
- **Responsive**: Mobile-friendly design with smooth animations
- **Fast Loading**: Built with React + Vite for optimal performance

## 🚀 Live Demo

**Live Site**: [https://git4san.github.io](https://git4san.github.io)

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom CSS properties
- **UI Components**: Radix UI primitives with shadcn/ui
- **Animations**: Framer Motion
- **Routing**: Wouter (lightweight client-side routing)
- **Icons**: Lucide React

## 📁 Project Structure

```
SanSPortfolio/
├── client/src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── data/          # Static data files
│   ├── assets/        # Logo and images
│   └── index.css      # Global styles
├── .github/workflows/ # GitHub Actions deployment
├── attached_assets/   # Academic content files
└── dist/             # Production build
```

## 🔧 Quick Setup for Development

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/git4san/git4san.github.io.git
   cd git4san.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add build script to package.json**
   ```json
   {
     "scripts": {
       "build:static": "vite build"
     }
   }
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build:static
   ```

## 🌐 GitHub Pages Deployment

### Automatic Deployment (Recommended)

The repository includes GitHub Actions workflow for automatic deployment:

1. **Create GitHub repository named `git4san.github.io`**

2. **Push your code**
   ```bash
   git add .
   git commit -m "Initial commit: SanSPortfolio website"
   git branch -M main
   git remote add origin https://github.com/git4san/git4san.github.io.git
   git push -u origin main
   ```

3. **Configure GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Select **GitHub Actions** as source
   - The workflow will automatically deploy on every push to main

4. **Set workflow permissions**
   - **Settings** → **Actions** → **General**
   - Select **Read and write permissions**
   - Save settings

### Manual Deployment

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run build:static
   npm run deploy
   ```

## 📧 Contact Form Setup

The contact form uses Formspree for GitHub Pages compatibility:

1. **Sign up at [Formspree.io](https://formspree.io)**
2. **Create a new form**
3. **Replace `YOUR_FORM_ID` in contact.tsx with your Formspree form ID**
4. **Update the form action URL**:
   ```html
   action="https://formspree.io/f/YOUR_ACTUAL_FORM_ID"
   ```

## 📊 Publications Data

Publications are stored in `client/src/data/publications.json`. Update this file with your actual publication data:

```json
{
  "publications": [
    {
      "title": "Your Paper Title",
      "authors": ["Author 1", "Author 2"],
      "journal": "Journal Name",
      "year": 2024,
      "doi": "10.1000/example"
    }
  ]
}
```

## 🎨 Customization

### Colors and Themes

Update CSS custom properties in `client/src/index.css`:

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --bg-primary: #0f172a;
  /* ... other variables */
}
```

### Logo

Replace `client/src/assets/logo.svg` with your custom logo.

### Content

- **About**: Edit `client/src/pages/about.tsx`
- **Projects**: Update project data in respective page files
- **Publications**: Modify `client/src/data/publications.json`

## 🚨 Troubleshooting

### Common Issues

1. **Blank page after deployment**
   - Check browser console for errors
   - Verify asset paths are correct
   - Ensure GitHub Pages is enabled

2. **404 errors**
   - Single-page applications need proper routing
   - GitHub Pages serves from `/` for username.github.io repos

3. **Contact form not working**
   - Verify Formspree form ID is correct
   - Check Formspree dashboard for submissions

### Build Errors

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build:static
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions about deployment or customization:
- Check the [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- Open an issue on GitHub
- Contact via the website form (once deployed)

---

**Built with ❤️ for academic excellence**

*SanSPortfolio - Showcasing research in cybersecurity and dependable systems security*