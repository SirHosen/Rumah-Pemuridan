# Rumah Pemuridan - Church Website

A production-ready church website built with Next.js, Supabase, and Tailwind CSS. Features a clean editorial design with robust security.

## Features

- **Public Pages**: Homepage, news list, and article detail (no authentication required)
- **Admin Dashboard**: Complete news management system (authentication required)
- **Security**: Row Level Security (RLS) at database level + middleware protection
- **Design**: Editorial, minimalist, responsive design with "quiet luxury" aesthetic
- **Single Admin**: One pastor account with full content control

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database & Auth**: Supabase (PostgreSQL + Auth)
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel-ready
- **Language**: TypeScript

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Supabase

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Copy your project URL and anon key
3. Update `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your-actual-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key
```

### 3. Run Database Migration

1. Go to Supabase dashboard → SQL Editor
2. Copy contents of `supabase/schema.sql`
3. Paste and execute

### 4. Create Admin User

1. Supabase dashboard → Authentication → Users
2. Click "Add user" → Enter pastor's email and password
3. User can now login at `/login`

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## Security Model

### Authentication
- Admin routes (`/admin/*`) protected by middleware
- Session managed via Supabase Auth cookies

### Row Level Security
- **Public**: Can only read published news
- **Authenticated**: Full CRUD access
- Enforced at database level

## Design Philosophy

- **Editorial**: Clean typography, generous spacing
- **Calm**: No flashy animations or effects
- **Responsive**: Mobile-first, touch-friendly
- **Simple**: Designed for non-technical admin users

## Deployment to Vercel

1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

Auto-deploys on every push to main.

## Documentation

- Full setup: `supabase/README.md`
- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
