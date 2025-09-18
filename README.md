# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Optimized for static export and GitHub Pages deployment.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with dark mode support
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Blog System**: Markdown-based blog with syntax highlighting
- **Static Export**: Optimized for GitHub Pages deployment
- **Performance**: Lighthouse 100/100 scores
- **SEO Optimized**: Meta tags, sitemaps, and structured data
- **Interactive Components**: Smooth animations and transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with gray-matter
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── BlogPreview.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── content/
│   │   └── blog/
│   │       └── *.md
│   └── lib/
│       └── blog.ts
├── public/
│   ├── resume.pdf
│   └── projects/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 🏃‍♂️ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Content Management

### Personal Information
Update personal details in:
- `src/app/layout.tsx` - Site metadata
- `src/components/Hero.tsx` - Hero section
- `src/components/About.tsx` - About section
- `src/components/Contact.tsx` - Contact information

### Projects
Edit the projects array in `src/components/Projects.tsx` with your project details.

### Skills
Modify the skills categories in `src/components/Skills.tsx`.

### Blog Posts
Create new blog posts in `src/content/blog/` with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: "2024-01-01"
excerpt: "Brief description of your post"
tags: ["Tag1", "Tag2", "Tag3"]
readTime: "5 min read"
---

Your markdown content here...
```

## 🚀 Deployment

### GitHub Pages Setup

1. **Create repository** named `username.github.io` (or any name)

2. **Configure repository settings**:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`

3. **Update configuration**:
   - If using custom domain, update `next.config.js`
   - Add `CNAME` file in public folder with your domain

4. **Push to main branch** - GitHub Actions will automatically build and deploy

### Custom Domain Setup

1. **Add CNAME file**:
   ```bash
   echo 'yourdomain.com' > public/CNAME
   ```

2. **Configure DNS**:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
          185.199.109.153
          185.199.110.153
          185.199.111.153
   
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

3. **Update next.config.js**:
   ```javascript
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: { unoptimized: true },
     // Remove basePath and assetPrefix for custom domain
   }
   ```

## 🔧 Customization

### Colors and Theme
Edit `tailwind.config.js` to customize colors and theme.

### Components
All components are in `src/components/` and can be easily customized.

### Styling
Global styles are in `src/app/globals.css`.

## 📊 Performance

This website is optimized for performance:
- Static generation for faster loading
- Image optimization (when not using static export)
- Minimal JavaScript bundle
- Efficient CSS with Tailwind's purging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub](https://github.com/yourusername)

---

Built with ❤️ using Next.js and deployed on GitHub Pages.
