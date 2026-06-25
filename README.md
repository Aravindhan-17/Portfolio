# Aravindhan | Software Developer Portfolio ✨

> [!NOTE]
> A modern, high-performance personal portfolio built to showcase software development projects and skills. Designed with a focus on clean aesthetics, responsive typography, and seamless user experiences across both light and dark themes.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router v15+)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix & Base UI)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **State & Notifications:** [Sonner](https://sonner.emilkowal.ski/)
- **Form Handling:** [Web3Forms](https://web3forms.com/) & [Zod](https://zod.dev/)
- **Analytics:** [Vercel Web Analytics](https://vercel.com/analytics)

## ✨ Core Features

- **Dynamic Case Studies:** Dedicated, SEO-optimized dynamic routes (`/projects/[id]`) for deep-dive project presentations with sticky sidebars and scrolling content.
- **Working Contact Form:** Fully functional, serverless contact form powered by Web3Forms with real-time Zod validation and beautiful toast notifications via Sonner.
- **Dark/Light Mode:** Seamless theme switching (`next-themes`) with carefully curated color palettes, dynamic glassmorphism, and atmospheric purple glow effects.
- **Production Ready SEO:** Comprehensive global metadata, dynamic Open Graph images, and custom Favicons configured for premium social sharing.
- **Custom Error Boundaries:** Highly polished, themed 404 (Not Found) and 500 (Server Error) fallback pages to ensure users never hit a dead end.
- **Performance Optimized:** Uses `next/image` for WebP rendering, fast-loading system fonts, and strict React 19 / Turbopack optimizations.

## 💻 Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/Aravindhan-17/portfolio.git
cd portfolio
npm install
```

> [!IMPORTANT]
> **Environment Variables Setup**
> Before running the development server, you must set up your environment variables. Create a `.env.local` file in the root of the project and add the following keys:
> ```env
> NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY="your_web3forms_key_here"
> NEXT_PUBLIC_GITHUB_URL="https://github.com/Aravindhan-17"
> NEXT_PUBLIC_LINKEDIN_URL="https://www.linkedin.com/in/aravindhan1722/"
> ```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📈 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). Simply push your code to a GitHub repository, connect it to Vercel, and ensure you add your Environment Variables in the Vercel Dashboard project settings.

## 🛠️ CI/CD Pipeline

This repository includes a robust Continuous Integration (CI) pipeline powered by GitHub Actions. Every push and pull request to the `main` branch automatically triggers:
- **Environment Setup:** Node.js 24 clean installation
- **Code Quality Checks:** Strict linting using ESLint (`npm run lint`)
- **Build Verification:** Next.js production build check (`npm run build`)

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
*Built with ❤️ in India by [Aravindhan](https://github.com/Aravindhan-17).*
