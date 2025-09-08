# Harmony Oak Studio Website

A modern, responsive website for Harmony Oak Yoga Studio in Huntsville, Alabama.

## 🧘🏽‍♀️ About

Creating a safe space for yoga practice, offering private sessions, small groups, online classes, women's gatherings, holistic ceremonies, and sound healing.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Fonts**: Inter (body), Playfair Display (headings), Dancing Script (accent)
- **Deployment**: Static export ready for AWS Amplify or Netlify

## 🎨 Design System

### Colors
- **Primary**: #F1E3DA (Warm peach)
- **Secondary**: #EAD5C8 (Dusty rose)
- **Accent**: #CE9C7E (Terracotta)
- **Neutral**: #333333 (Charcoal)
- **Light**: #FEFEFE (Off-white)

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)
- **Accent**: Dancing Script (decorative)

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with fonts and metadata
│   └── page.tsx           # Homepage component
├── components/            # Reusable React components
│   ├── layout/           # Layout components (Header, Footer)
│   └── ui/               # UI components (Button, Card)
└── config/               # Configuration files
    └── site.ts           # Site-wide settings and content

public/
└── images/               # Organized image assets
    ├── community/        # Community event photos
    ├── gallery/          # General gallery images
    ├── hero/             # Hero section images
    ├── instructor/       # Instructor photos
    ├── services/         # Service-related images
    └── studio/           # Studio space photos
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build and export static files

## 📦 Deployment

This project is configured for static export and optimized for AWS Amplify deployment.

### Quick Deploy to AWS Amplify

1. **Set up environment variables** (copy from `.env.example`):
   - `NEXT_PUBLIC_SITE_URL` - Your Amplify app URL
   - `NEXT_PUBLIC_FORMSPREE_FORM_ID` - Your Formspree form ID
   - `NEXT_PUBLIC_CALENDLY_URL` - Your Calendly booking URL

2. **Test configuration**:
   ```bash
   npm run test:env
   npm run deploy:check
   ```

3. **Deploy to Amplify**:
   - Connect your Git repository in the [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - The `amplify.yml` file will automatically configure the build
   - Add environment variables in the Amplify console

For detailed deployment instructions, see:
- [`DEPLOYMENT.md`](./DEPLOYMENT.md) - Complete deployment guide
- [`DEPLOYMENT_CHECKLIST.md`](./DEPLOYMENT_CHECKLIST.md) - Step-by-step checklist

### Alternative Hosting
The static export can also be deployed to:
- Netlify
- Vercel  
- GitHub Pages
- Any static hosting service

The build output will be in the `out/` directory after running `npm run build`.

## 🎯 Features

- ✅ Responsive design (mobile-first)
- ✅ TypeScript for type safety
- ✅ Tailwind CSS with custom design system
- ✅ Next.js Image optimization
- ✅ SEO-friendly with proper meta tags
- ✅ Static export ready
- ✅ Organized image assets
- ✅ Custom font loading (Google Fonts)

## 📋 Next Steps

This is the foundation setup. Upcoming tasks will add:
- Navigation and layout components
- Individual pages (About, Services, Book, Contact, Testimonials)
- Calendly integration for booking
- Contact form with Formspree/EmailJS
- Image galleries and testimonials
- SEO optimization
- Accessibility features

## 📞 Contact

**Harmony Oak Studio**  
Creating a safe space 🧘🏽‍♀️ Huntsville Al 🪷

- Email: jentostado@gmail.com
- Phone: (425) 414-6054
- Location: Huntsville, Alabama
- Instagram: @harmonyoakstudio