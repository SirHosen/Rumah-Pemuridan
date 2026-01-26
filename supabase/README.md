# Supabase Setup Instructions

## 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Create a new project
3. Copy your project URL and anon key

## 2. Update Environment Variables

Edit `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your-actual-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key
```

## 3. Run Database Schema

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy the contents of `supabase/schema.sql`
4. Paste and run the SQL

This will:
- Create the `news` table
- Set up Row Level Security (RLS) policies
- Configure indexes for performance
- Add auto-update triggers

## 4. Create Admin User

1. In Supabase dashboard, go to Authentication > Users
2. Click "Add user" > "Create new user"
3. Enter the pastor's email and password
4. The user will be able to log in at `/login`

## Security Model

- **Public users**: Can only read news where `published = true`
- **Authenticated users**: Can read, create, update, delete all news
- **Authentication**: Required for `/admin/*` routes (enforced by middleware)
- **RLS**: Enforced at database level, independent of app code
