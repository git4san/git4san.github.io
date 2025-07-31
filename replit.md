# Academic Portfolio Website for Sanoop Mallissery

## Overview

This is a modern academic portfolio website built with React, TypeScript, and Tailwind CSS. It showcases Sanoop Mallissery's research in dependable systems security, cybersecurity, and emerging technologies. The website features a professional dark theme with clean design, category-based project filtering (matching the user's requested screenshot layout), and comprehensive academic content including projects, publications, CV, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Modern card-based layout with category filtering buttons as shown in provided screenshot
Content preference: No funding information displayed on projects
Personal branding: "Sanoop Mallissery, Ph.D." (also known as "San")
Portfolio branding: Custom "SanSPortfolio" logo with gradient blue design and "S" monogram
Page preferences: Renamed CV page to "About Me" with comprehensive biographical information

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **Theme**: Dark academic theme with modern design patterns

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Built-in session handling with connect-pg-simple
- **API Design**: RESTful API structure with /api prefix
- **Development**: Hot reload with tsx and integrated Vite middleware

### Database Architecture
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: Shared schema definitions between client and server
- **Migrations**: Drizzle Kit for database migrations and schema management

## Key Components

### 1. Project System
- **Data Structure**: Projects with categories (machine-learning, iot-iiot, security-privacy, systems-security, fuzzing)
- **Features**: Project filtering, status tracking, and detailed project pages with comprehensive content
- **Components**: Project cards, category filters, responsive grid layout, and detailed project pages
- **Current Projects**: 
  - AI-Driven Cybersecurity (ML/Security focus with adversarial defenses)
  - Explainable and Interpretable AI (XAI for transparency & trust in cybersecurity)
  - AI-Driven Threat Detection VANETs (Hybrid AI and blockchain approach for vehicular network security)
  - LLM powered Cyber Defence (LLM-SHIELD framework for AI-driven cybersecurity intelligence)
  - Secure Protocol Design - IIOT (IIoT security through secure communication protocols)
  - Surge of IoT Devices by AI (Exploring AI-enabled IoT growth and associated security challenges)
  - Quantum-Resilient Defense System for OT (Digital twins + quantum security for critical infrastructure)
  - Data Privacy Preservation (Comprehensive privacy mechanisms across data lifecycle stages)
  - Data Analytics for Edge (Privacy-preserving mechanisms for edge computing environments)
  - SCADA Systems Security (Securing industrial control systems through protocol analysis and fuzzing)
  - Secure ITS for Future Smart Cities (Multi-layered ITS framework with AI, blockchain, and IoT integration)
  - Fuzzing OT Apps and Protocols (OT security through advanced fuzzing techniques)
  - Next-Generation Fuzzing Tool (AI-augmented hybrid fuzzing framework for advanced vulnerability detection)

### 2. UI Component Library
- **Base**: Radix UI primitives for accessibility and behavior
- **Styling**: Tailwind CSS with consistent design tokens
- **Components**: Cards, buttons, navigation, forms, and layout components
- **Theme**: CSS custom properties for dynamic theming

### 3. Navigation System
- **Structure**: Fixed navigation with mobile responsive design - Home, Projects, About Me, Publications, S/W Tools, Contact
- **Logo**: Custom "SanSPortfolio" SVG logo with gradient blue design and "S" monogram
- **Active States**: Dynamic active page indication
- **Mobile**: Hamburger menu with overlay navigation including logo display
- **About Page**: Comprehensive biographical information with professional experience, education, and research interests

### 4. Database Schema
```typescript
// Users table for authentication
users: { id, username, password }

// Projects table for research projects
projects: { id, title, description, category, status, year, icon, image, tags }
```

## Data Flow

### 1. Static Content Flow
- Academic portfolio pages served as static HTML assets
- Responsive navigation across all pages
- Project data managed through React state and components

### 2. API Flow
- Express server handles API routes with /api prefix
- Drizzle ORM manages database queries and migrations
- TanStack Query handles client-side data fetching and caching

### 3. Authentication Flow
- Session-based authentication with PostgreSQL session store
- Protected routes and user management through Express middleware
- Shared user schema between client and server

## External Dependencies

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the entire stack
- **Drizzle Kit**: Database schema management and migrations
- **ESBuild**: Production bundling for server code

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Framer Motion**: Animation library for interactive elements

### Backend Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless connection
- **connect-pg-simple**: PostgreSQL session store
- **express**: Web framework
- **drizzle-orm**: TypeScript ORM

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR and React Fast Refresh
- **Backend**: tsx for TypeScript execution with hot reload
- **Database**: PostgreSQL with Drizzle migrations

### Production Build (Replit)
- **Frontend**: Vite production build to `dist/public`
- **Backend**: ESBuild bundle to `dist/index.js`
- **Static Assets**: Academic portfolio HTML files served from `attached_assets`
- **Database**: Drizzle push for schema deployment

### GitHub Pages Deployment
- **Static Build**: Vite production build to `dist/`
- **Workflow**: GitHub Actions automatic deployment on push to main
- **Contact Form**: Formspree.io integration for static hosting
- **Publications**: Static JSON data file for GitHub Pages compatibility
- **URL**: Available at `https://git4san.github.io`

### Configuration
- **Environment**: NODE_ENV-based configuration
- **Database**: DATABASE_URL environment variable required (Replit only)
- **Assets**: Path aliases configured for clean imports
- **TypeScript**: Strict mode with ESNext modules
- **GitHub Pages**: Static deployment with Formspree contact form integration

The application supports dual deployment: full-stack Node.js with PostgreSQL on Replit, and static React SPA on GitHub Pages with external form service.