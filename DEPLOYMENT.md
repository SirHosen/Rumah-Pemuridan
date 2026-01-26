# Deployment Checklist

Use this checklist when deploying the church website for the first time.

## Pre-Deployment

### 1. Supabase Setup
- [ ] Create Supabase project at [supabase.com](https://supabase.com)
- [ ] Copy project URL and anon key
- [ ] Update `.env.local` with credentials
- [ ] Run database migration (`supabase/schema.sql` in SQL Editor)
- [ ] Create admin user account
- [ ] Test login locally

### 2. Local Testing
- [ ] Run `npm run dev`
- [ ] Test homepage loads
- [ ] Test `/news` page (should show "no posts" initially)
- [ ] Test `/login` page
- [ ] Login with admin credentials
- [ ] Create a test news post (draft)
- [ ] Publish the test post
- [ ] Verify it appears on homepage and `/news`
- [ ] Click into article detail page
- [ ] Edit and delete the test post
- [ ] Sign out

### 3. Content Preparation
- [ ] Update site name/description in [app/layout.tsx](app/layout.tsx) if needed
- [ ] Update homepage intro text in [app/page.tsx](app/page.tsx) if desired
- [ ] Create 2-3 initial news posts
- [ ] Review all content for typos

## Deployment to Vercel

### 4. GitHub Setup
- [ ] Create GitHub repository
- [ ] Push code to GitHub:
  ```bash
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin your-repo-url
  git push -u origin main
  ```

### 5. Vercel Deployment
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Click "Import Project"
- [ ] Select your GitHub repository
- [ ] Add environment variables:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Click "Deploy"
- [ ] Wait for build to complete

### 6. Post-Deployment Testing
- [ ] Visit production URL
- [ ] Test homepage
- [ ] Test news list
- [ ] Test article detail pages
- [ ] Test login (use `/login`)
- [ ] Create a news post from production
- [ ] Verify it appears immediately after creation
- [ ] Test editing and deleting
- [ ] Test publish/unpublish toggle

### 7. Domain Setup (Optional)
- [ ] Add custom domain in Vercel dashboard
- [ ] Update DNS records
- [ ] Wait for SSL certificate
- [ ] Test site on custom domain

## Post-Launch

### 8. Final Steps
- [ ] Share login credentials with pastor (securely)
- [ ] Provide brief walkthrough of admin interface
- [ ] Bookmark admin URL: `your-domain.com/admin`
- [ ] Set up monitoring (optional): Vercel Analytics
- [ ] Document any customizations made

## Ongoing Maintenance

- Review Supabase usage monthly (free tier limits)
- Keep environment variables secure
- Test admin interface after major updates
- Monitor Vercel build logs for errors

## Troubleshooting

**Problem**: Can't log in
- Check Supabase user exists
- Verify environment variables in Vercel
- Check browser console for errors

**Problem**: News not appearing
- Check RLS policies in Supabase
- Verify `published` is set to `true`
- Check browser network tab

**Problem**: Build fails on Vercel
- Check build logs
- Verify all dependencies in `package.json`
- Ensure environment variables are set

**Problem**: Middleware not working
- Clear browser cache/cookies
- Check [middleware.ts](middleware.ts) is at root
- Verify Supabase URL/key are correct
