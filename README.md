# Bend Website

Official website for Bend - Backend Scaffolder for Modern Development.

## Features

- 🎨 Modern, responsive design with dark theme
- 🎯 Interactive 3D hero section with React Three Fiber
- 🔍 Functional search system
- 📱 Mobile-friendly navigation
- ⚡ Built with Next.js 16 and React 19
- 🎭 Smooth animations with Framer Motion
- 🎨 Styled with Tailwind CSS v4

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/bendhq/bend-website.git
cd bend-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## Deployment

This project is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bendhq/bend-website)

## Project Structure

\`\`\`
bend-website/
├── app/                    # Next.js app directory
│   ├── docs/              # Documentation pages
│   ├── guide/             # Guide pages
│   ├── resources/         # Resources page
│   ├── search/            # Search functionality
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── hero.tsx          # Hero section
│   ├── hero-3d.tsx       # 3D interactive background
│   ├── features.tsx      # Features section
│   └── ...               # Other components
└── public/               # Static assets
\`\`\`

## Technologies

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **3D Graphics**: React Three Fiber & Three.js
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: shadcn/ui

## License

MIT License - see LICENSE file for details

## Links

- [GitHub Repository](https://github.com/bendhq/bend)
- [npm Package](https://www.npmjs.com/package/bendjs)
- [Documentation](https://bendhq.org/docs)
