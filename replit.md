# Replit.md

## Overview

This is a full-stack portfolio application built with React, Express, and TypeScript. The application features a modern portfolio website for Whdrxyz with a chat interface, showcasing projects, skills, and contact information. It includes dark/light mode toggle functionality and uses a client-server architecture with Vite for frontend development and Express for the backend API.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but not actively used, falling back to in-memory storage)
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration for development and production
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for API state, local React state for UI
- **Theme System**: Dark/Light mode toggle with ThemeProvider context

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Development**: Hot reload with tsx for development server
- **Storage**: Currently using in-memory storage (MemStorage class) with interface for future database integration
- **API Structure**: RESTful API with `/api` prefix (routes not yet implemented)

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Provider**: Neon Database serverless driver
- **Schema**: User table defined but storage currently uses in-memory implementation
- **Migration**: Drizzle-kit for database migrations

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express server handles requests with middleware for logging and error handling
3. **Storage Layer**: Currently uses in-memory storage (MemStorage) with plans for database integration
4. **Response**: JSON responses sent back to client and cached by TanStack Query

## External Dependencies

### Key Libraries
- **@neondatabase/serverless**: PostgreSQL serverless driver for Neon
- **drizzle-orm**: TypeScript ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Headless UI components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight client-side routing
- **class-variance-authority**: Utility for managing component variants

### Development Tools
- **vite**: Fast build tool and dev server
- **typescript**: Type safety across the stack
- **drizzle-kit**: Database migration and introspection tool
- **tsx**: TypeScript execution for Node.js

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Database**: Drizzle migrations can be pushed using `npm run db:push`

### Production Setup
- Environment variables required: `DATABASE_URL`
- Server runs on Node.js with production optimizations
- Static files served from the built client directory

### Development Environment
- Concurrent development with Vite dev server and Express API
- Hot module replacement for React components
- TypeScript checking across the entire codebase
- Replit-specific plugins for cartographer and runtime error handling

The application is designed to be deployed on platforms like Replit, Vercel, or similar services that support Node.js applications with PostgreSQL databases.