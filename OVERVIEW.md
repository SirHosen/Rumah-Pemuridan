# Project Overview

## What This Is

A complete church website system with:
- Public-facing news/articles
- Admin dashboard for content management
- Secure authentication
- Clean, editorial design

## Key Decisions Made

### Architecture
- **Next.js App Router**: Server Components by default, minimal client JS
- **Supabase**: Handles auth + database, no custom backend needed
- **Server Actions**: Mutations handled securely server-side
- **RLS Policies**: Security enforced at database level

### Security
- Middleware protects `/admin/*` routes
- Row Level Security prevents unauthorized data access
- No exposed API endpoints
- CSRF protection built into Next.js
- Single admin user model (pastor only)

### Design
- **Colors**: Stone palette (neutrals), no dark mode
- **Typography**: Georgia serif for headings, system sans for UI
- **Layout**: Max-width 4xl containers, generous padding
- **Mobile**: Touch-friendly, no horizontal scroll
- **Admin**: Simple forms, large buttons, plain language

### Trade-offs

**Why no markdown editor?**
- Keeps dependencies minimal
- Plain textarea is more reliable
- Simple double-newline = paragraph works fine
- Can add later if needed

**Why no image uploads?**
- Text-only keeps it simple for v1
- Can add Supabase Storage later
- Reduces complexity for pastor

**Why single admin?**
- Church has one pastor
- Simpler permission model
- Can extend to roles later if needed

**Why no comments?**
- Not requested in requirements
- Adds moderation burden
- Can add Disqus/similar if needed

## File Organization

```
app/
├── (public routes - no auth)
│   ├── page.tsx           → Homepage
│   ├── news/page.tsx      → News list
│   └── news/[slug]/       → Article detail
│
├── (auth routes)
│   └── login/             → Login page + actions
│
└── (protected routes - requires auth)
    └── admin/
        ├── layout.tsx     → Enforces auth, shows header
        ├── page.tsx       → News management table
        └── news/
            ├── actions.ts → CRUD operations
            ├── new/       → Create form
            └── [id]/      → Edit form

components/
├── header.tsx   → Public site header
└── footer.tsx   → Public site footer

lib/
├── supabase/
│   ├── client.ts      → Browser Supabase client
│   ├── server.ts      → Server Supabase client
│   └── middleware.ts  → Auth session management
└── database.types.ts  → TypeScript types

middleware.ts         → Route protection (admin check)
```

## How It Works

### Public Pages
1. User visits homepage or news
2. Server Component fetches from Supabase
3. RLS allows reading published posts only
4. Page renders with data

### Admin Flow
1. Pastor visits `/admin`
2. Middleware checks for session → redirect to `/login` if none
3. After login, middleware allows access
4. Admin pages fetch all news (published + drafts)
5. Forms submit to Server Actions
6. Actions mutate database (RLS allows because authenticated)
7. Cache revalidation triggers re-render
8. Redirect back to admin dashboard

### Security Layers
1. **Middleware**: Blocks unauthenticated admin access
2. **RLS**: Blocks unauthorized database queries
3. **Server Actions**: No client-side API calls
4. **TypeScript**: Prevents type errors

## Content Model

### News Table
```sql
id          uuid      → Primary key
created_at  timestamp → Auto-set on insert
updated_at  timestamp → Auto-updated on edit
title       text      → Article title
slug        text      → URL-friendly version of title
content     text      → Full article body
excerpt     text      → Summary for lists
published   boolean   → Visibility toggle
published_at timestamp → First publish time
```

### Slug Generation
- Auto-generated from title
- Example: "Ibadah Minggu Ini" → "ibadah-minggu-ini"
- Updates if title changes
- Used in URL: `/news/ibadah-minggu-ini`

## Performance

### Static Generation
- News list and detail pages pre-rendered at build
- Served as static HTML (fast)
- Revalidated on mutations via `revalidatePath()`

### Database
- Indexes on `slug`, `published`, `published_at`
- Fast lookups, efficient ordering
- RLS policies use indexed columns

### Bundle Size
- Server Components = zero client JS for most pages
- Only admin forms are client components
- Tailwind purges unused CSS

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile Safari, Chrome Mobile
- No IE11 (Next.js doesn't support it)

## Future Enhancements (Not Implemented)

Easy to add later:
- Image uploads (Supabase Storage)
- Rich text editor (Tiptap, ProseMirror)
- Categories/tags for news
- Search functionality
- SEO metadata per article
- Social sharing buttons
- Analytics
- Email notifications on publish
- Multiple admins with roles
- Scheduled publishing

## Vercel Configuration

Auto-detected by Vercel:
- Framework: Next.js
- Build command: `npm run build`
- Output directory: `.next`
- Install command: `npm install`
- Dev command: `npm run dev`

No custom configuration needed.

## Environment Variables

Required in production (Vercel):
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

Both are safe to expose to browser (public keys).
RLS policies prevent unauthorized access regardless.

## Common Customizations

### Change homepage intro
Edit [app/page.tsx](app/page.tsx) lines 20-27

### Change site name
Edit [app/layout.tsx](app/layout.tsx) line 5

### Change colors
Edit [app/globals.css](app/globals.css) `@theme` section

### Add more fields
1. Update Supabase schema
2. Update [lib/database.types.ts](lib/database.types.ts)
3. Update forms and displays

### Change number of homepage posts
Edit [app/page.tsx](app/page.tsx) line 12 (`.limit(3)`)

## Development Workflow

1. Make changes locally
2. Test with `npm run dev`
3. Commit to git
4. Push to GitHub
5. Vercel auto-deploys
6. Test production build

## Support

If you need help:
1. Check error logs in Vercel dashboard
2. Check Supabase logs (Database → Logs)
3. Review this document and README.md
4. Check Next.js/Supabase documentation
