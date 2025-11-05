# Chronex - 3D Luxury Watch Customization Platform

## Overview
Chronex is an immersive e-commerce platform that revolutionizes online luxury watch shopping. Built with cutting-edge 3D technology, it allows customers to explore, customize, and personalize premium timepieces in real-time directly in their browser. Experience the future of luxury retail where craftsmanship meets digital innovation.

## Key Features

###  Interactive 3D Watch Customization
- **Real-time 3D Viewer**: Rotate, zoom, and inspect watches from every angle using Three.js
- **Live Customization**: Personalize dial colors, materials, and finishes with instant visual feedback
- **Material Selection**: Choose from various premium materials with dynamic pricing
- **Color Customization**: Select from curated color palettes for dials and watch bodies
- **Immersive Experience**: High-quality 3D models with realistic lighting and shadows

###  Complete E-Commerce Platform
- **Product Catalog**: Browse the full Chronex collection with detailed specifications
- **Store Locator**: Find physical retail locations with integrated Google Maps
- **Contact System**: Direct communication channel for inquiries and custom requests
- **Watch Request System**: Submit custom watch configuration requests
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices

###  Content Management
- **Payload CMS Integration**: Headless CMS for easy content and product management
- **Dynamic Product Data**: Manage watches, materials, dials, and images from admin panel
- **PostgreSQL Database**: Robust data storage and retrieval
- **AWS S3 Storage**: Scalable cloud storage for media assets

## Tech Stack

### Frontend
- **Next.js 15.5**: React framework with App Router for optimal performance
- **React 19**: Latest React features for modern UI development
- **TypeScript**: Type-safe development experience
- **Tailwind CSS 4**: Utility-first styling with modern design system
- **shadcn/ui**: Beautiful, accessible component library

### 3D Graphics
- **Three.js**: Industry-standard 3D rendering engine
- **react-three-fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers and abstractions for 3D scenes
- **GLTF Models**: Optimized 3D watch models with PBR materials

### Animations & Interactions
- **GSAP**: Professional-grade animation library
- **Embla Carousel**: Smooth, performant carousels
- **Lucide React**: Modern icon library

### Backend & CMS
- **Payload CMS 3.56**: Powerful headless CMS
- **PostgreSQL**: Relational database via @payloadcms/db-postgres
- **AWS S3**: Cloud storage for media files
- **Lexical Editor**: Rich text editing capabilities

### State Management & Utilities
- **Zustand**: Lightweight state management
- **Zod**: TypeScript-first schema validation
- **@t3-oss/env-nextjs**: Type-safe environment variables

##  Getting Started

### Prerequisites
- **Node.js**: Version 20 or higher
- **PostgreSQL**: Database instance
- **AWS S3**: Bucket for media storage (optional for local dev)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd 3d-watch-site
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URI=postgresql://user:password@localhost:5432/chronex

# Payload CMS
PAYLOAD_SECRET=your-secret-key-here

# AWS S3 (for media storage)
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-bucket-name
AWS_S3_ENDPOINT=https://s3.amazonaws.com

# Next.js
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

4. **Generate TypeScript types**
```bash
npm run generate:types
```

5. **Start the development server**
```bash
npm run dev
```

6. **Open the application**

Visit [http://localhost:3000](http://localhost:3000) in your browser.

Access the CMS admin panel at [http://localhost:3000/admin](http://localhost:3000/admin)

## Build for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## Customization Features

### Watch Dial Options
- Multiple color variations with hex color codes
- Dynamic pricing based on dial selection
- Real-time 3D preview of dial changes

### Material Selection
- Premium materials (steel, gold, titanium, etc.)
- Material-specific pricing
- Realistic material rendering with PBR textures

### Interactive 3D Viewer
- 360° rotation control
- Zoom and pan functionality
- High-quality shadows and reflections
- HDR environment lighting

## CMS Collections

### Watches
Main product collection with relationships to dials and materials

### Watch Dials
- Name and color code
- Pricing information
- Color validation (hex format)

### Watch Materials
- Material name and properties
- Pricing tiers
- Color/finish codes

### Watch Requests
Customer customization requests with specifications

### Shop Locations
Physical store locations for the store locator feature

##  Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run generate:types  # Generate Payload CMS types
```

## Key Highlights

1. **Real-time 3D Rendering**: Powered by Three.js and react-three-fiber for smooth, interactive 3D experiences
2. **Headless CMS**: Payload CMS provides flexible content management without compromising frontend performance
3. **Type Safety**: Full TypeScript coverage ensures robust, maintainable code
4. **Modern UI/UX**: Tailwind CSS and shadcn/ui deliver a polished, accessible interface
5. **Scalable Architecture**: Next.js App Router with server components for optimal performance
6. **Cloud-Ready**: AWS S3 integration for scalable media storage

##  Use Cases

- **Luxury Watch Retailers**: Showcase products with immersive 3D visualization
- **Custom Watch Makers**: Allow customers to design their perfect timepiece
- **E-Commerce Platforms**: Elevate product presentation with interactive 3D
- **Brand Showrooms**: Create engaging digital experiences for premium products

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

