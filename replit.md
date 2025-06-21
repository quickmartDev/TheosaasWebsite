# Theosaas Consulting Web Application

## Overview

This is a React-based web application for Theosaas Consulting, a Toronto-based consulting company that provides fractional CTO services and full-stack development. The application serves as a marketing website with a contact form to capture leads from potential clients.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Animation**: Framer Motion for smooth animations
- **Build Tool**: Vite for fast development and building

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful API endpoints

### UI Component System
- **Component Library**: shadcn/ui (Radix UI primitives)
- **Design System**: Consistent theming with CSS variables
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Built-in accessibility features from Radix UI

## Key Components

### Database Schema
The application uses two main tables:
- **users**: Basic user authentication (username, password)
- **contact_inquiries**: Lead capture form submissions with fields for name, email, company, project stage, description, and budget

### API Endpoints
- `POST /api/contact`: Submit contact form inquiries
- `GET /api/contact`: Retrieve all contact inquiries (admin functionality)

### Frontend Pages
- **Home Page**: Single-page application with multiple sections:
  - Hero section with value proposition
  - Services showcase
  - Team information
  - Process explanation
  - Testimonials
  - Contact form

### Storage Layer
- **Production**: PostgreSQL database via Neon serverless
- **Development**: In-memory storage for rapid development
- **Interface**: IStorage interface allows switching between storage implementations

## Data Flow

1. **User Interaction**: Users navigate through the marketing website sections
2. **Form Submission**: Contact form data is validated client-side using Zod schema
3. **API Request**: Form data is sent to `/api/contact` endpoint via TanStack Query
4. **Data Persistence**: Inquiry data is stored in PostgreSQL database
5. **Response Handling**: Success/error feedback is shown via toast notifications

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui/***: Headless UI components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **vite**: Frontend build tool and development server

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

### Build Process
- **Development**: `npm run dev` - Runs server with hot reload
- **Production Build**: `npm run build` - Builds client assets and server bundle
- **Production Start**: `npm run start` - Runs production server

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection
- **Port**: Configured to run on port 5000 with external port 80
- **Auto-scaling**: Configured for Replit's autoscale deployment target

### Database Migration
- **Schema Management**: Drizzle Kit for schema migrations
- **Push Command**: `npm run db:push` to sync schema with database

## Changelog

Changelog:
- June 21, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.