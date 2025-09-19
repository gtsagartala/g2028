# Modern Web Application

A comprehensive web application built with React, TypeScript, and modern web technologies. Features responsive design, dark/light theme support, admin panel, and professional business functionality.

## 🚀 Features

- **🎨 Modern UI/UX**: Beautiful, responsive design with shadcn/ui components
- **🌙 Theme Support**: Complete dark/light mode with system preference detection
- **📱 Mobile-First**: Fully responsive design optimized for all devices
- **⚡ High Performance**: Optimized builds with Vite and performance monitoring
- **🔍 SEO Optimized**: Dynamic meta tags, structured data, and semantic HTML
- **♿ Accessible**: WCAG 2.1 AA compliant with full keyboard navigation
- **🛡️ Admin Panel**: Complete administrative interface with dashboard and user management
- **📧 Contact Forms**: Integrated contact and inquiry handling
- **🔔 Toast Notifications**: User-friendly notification system
- **📊 Analytics Ready**: Built-in performance monitoring and tracking

## 🛠️ Technology Stack

### Core Technologies
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development with enhanced developer experience  
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework with custom design system

### UI & Components
- **shadcn/ui** - Beautiful, accessible React components built on Radix UI
- **Radix UI** - Headless UI primitives for maximum accessibility
- **Lucide React** - Consistent, beautiful icon library
- **React Icons** - Additional icon libraries (Feather Icons, etc.)

### State & Data Management
- **React Router DOM v6** - Modern client-side routing with nested routes
- **TanStack Query v5** - Powerful server state management and data fetching
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

### Development & Build Tools
- **ESLint** - Code linting with modern rules
- **TypeScript** - Static type checking
- **Vite** - Fast development and optimized production builds

## 📁 Project Structure

```
src/
├── app/                    # Backend-style organization
│   ├── controllers/       # Business logic handlers
│   ├── models/            # Data models and types
│   ├── routes/            # API route definitions
│   ├── views/             # View templates and components
│   └── config/            # Application configuration
├── components/            # React components
│   ├── ui/               # Base design system components
│   ├── Header.tsx        # Global navigation
│   ├── Footer.tsx        # Site footer
│   ├── AdminSidebar.tsx  # Admin navigation
│   └── ...               # Feature components
├── pages/                # Route-level pages
│   ├── Index.tsx         # Home page
│   ├── About.tsx         # About page
│   ├── AdminDashboard.tsx # Admin panel
│   └── ...               # Other pages
├── hooks/                # Custom React hooks
│   ├── useSEO.ts         # SEO management
│   ├── usePerformanceMonitor.ts # Performance tracking
│   └── use-mobile.ts     # Mobile detection
├── lib/                  # Utilities and configurations
├── assets/               # Static assets (images, icons)
└── index.css            # Global styles and design tokens
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (recommended: install with [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd <project-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

## 🎨 Design System

The application uses a comprehensive design system built with Tailwind CSS and CSS custom properties:

### Theme Configuration
- **Colors**: Semantic color tokens supporting light/dark themes
- **Typography**: Responsive type scale with custom font stacks
- **Spacing**: Consistent spacing system using Tailwind's scale
- **Components**: Reusable component variants with shadcn/ui

### Customization
Design tokens are defined in:
- `src/index.css` - CSS custom properties and global styles
- `tailwind.config.ts` - Tailwind configuration and theme extensions

## 🔧 Key Features

### Admin Panel
- **Dashboard**: Overview with key metrics and statistics
- **User Management**: Admin interface for user administration
- **Sidebar Navigation**: Collapsible navigation with active state management
- **System Status**: Real-time system monitoring

### SEO & Performance
- **Dynamic SEO**: Custom `useSEO` hook for meta tag management
- **Performance Monitoring**: Real-time Core Web Vitals tracking
- **Optimized Images**: Lazy loading and responsive image handling
- **Bundle Optimization**: Code splitting and tree shaking

### Accessibility
- **WCAG 2.1 AA**: Full compliance with accessibility standards
- **Keyboard Navigation**: Complete keyboard accessibility
- **Screen Reader Support**: Optimized for assistive technologies
- **High Contrast**: Support for high contrast mode

## 🚀 Production Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deployment Options

**Static Hosting (Recommended)**
- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Deploy with continuous integration
- **GitHub Pages**: Use GitHub Actions for deployment

**Custom Server**
```bash
npm run build
# Serve the dist/ folder with your preferred static server
```

### Environment Configuration
- Development: Automatically configured for localhost
- Production: Configure environment variables as needed for your deployment platform

## 📚 Documentation

- **[Architecture Guide](./ARCHITECTURE.md)** - Detailed system architecture documentation
- **[Contributing Guide](./CONTRIBUTING.md)** - Guidelines for contributors
- **[Contact Configuration](./CONTACT_CONFIG.md)** - Contact form setup

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details on:
- Code style and standards
- Development workflow  
- Submitting pull requests
- Reporting issues

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Check the documentation in the `docs/` directory
- Open an issue for bugs or feature requests
- Review the architecture documentation for technical details

---

Built with ❤️ using modern web technologies and following best practices for performance, accessibility, and user experience.