# Jack Stewart - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a beautiful "Midnight Neon" design system with dark/light mode support.

## 🚀 Features

- **Modern Design**: Clean, professional design with the "Midnight Neon" color palette
- **Dark/Light Mode**: Toggle between dark and light themes with system preference detection
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Fast Performance**: Built with Next.js 14 for optimal loading speeds
- **SEO Optimized**: Proper meta tags and structured data
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## 📱 Pages

- **Home**: Hero section, about preview, featured projects, and call-to-action
- **About**: Detailed bio, skills, education, experience, and goals
- **Projects**: Interactive project showcase with filtering by technology tags
- **Résumé**: Downloadable PDF résumé with preview
- **Contact**: Contact form with social media links

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Deployment**: Vercel (recommended)

## 🎨 Design System

### Colors (Midnight Neon)
- **Primary**: #8B5CF6 (Purple)
- **Accent**: #06B6D4 (Cyan)
- **Text Dark**: #E5E7EB
- **Text Light**: #0B0F19
- **Background Dark**: #0A0E17
- **Background Light**: #F5F7FB
- **Surface Dark**: #0F1626
- **Surface Light**: #FFFFFF

### Typography
- **Headings**: Space Grotesk
- **Body**: Inter

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Update the following files with your information:

1. **Contact Details**: Update `src/app/contact/page.tsx`
2. **About Section**: Modify `src/app/about/page.tsx`
3. **Projects**: Edit `src/data/projects.ts`
4. **Résumé**: Replace `public/resume.pdf` with your actual résumé

### Styling
- Colors: Modify `tailwind.config.ts`
- Global styles: Edit `src/app/globals.css`
- Component styles: Update individual component files

### Content
- **Home Page**: `src/app/page.tsx`
- **About Page**: `src/app/about/page.tsx`
- **Projects Data**: `src/data/projects.ts`
- **Résumé Page**: `src/app/resume/page.tsx`
- **Contact Page**: `src/app/contact/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/          # Project images
│   └── resume.pdf       # Résumé file
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── projects/
│   │   ├── resume/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/      # Reusable components
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Tag.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeToggle.tsx
│   └── data/           # Static data
│       └── projects.ts
├── tailwind.config.ts
├── package.json
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please reach out:
- Email: jack@example.com
- GitHub: [@jackstewart](https://github.com/jackstewart)
- LinkedIn: [Jack Stewart](https://linkedin.com/in/jackstewart)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
