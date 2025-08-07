# Jack Stewart - Personal Portfolio

## Features

- **Modern Design**: Clean, professional design with the "Midnight Neon" color palette
- **Dark/Light Mode**: Toggle between dark and light themes with system preference detection
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Fast Performance**: Built with Next.js 14 for optimal loading speeds
- **SEO Optimized**: Proper meta tags and structured data
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## Pages

- **Home**: Hero section, about preview, featured projects, and call-to-action
- **About**: Detailed bio, skills, education, experience, and goals
- **Projects**: Interactive project showcase with filtering by technology tags
- **Résumé**: Downloadable PDF résumé with preview
- **Contact**: Contact form with social media links

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Deployment**: Vercel (recommended)

## Design System

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

## Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
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

## Deployment

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

## Project Structure

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

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

