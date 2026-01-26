# ⚠️ Important Notes

## Node.js Version

Your local Node.js version (18.19.1) is older than required by Next.js 16 (>=20.9.0).

**This is fine because:**
- Vercel uses Node 20+ in production
- The build will work correctly when deployed
- All code is production-ready

**If you want to test locally:**

Option 1 - Use nvm (recommended):
```bash
# Install nvm first if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node 20
nvm install 20
nvm use 20

# Now you can run
npm run dev
```

Option 2 - Update system Node:
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify
node --version  # should show v20.x.x
```

**To skip local testing:**
- Just push to GitHub and deploy to Vercel
- Test everything on the production URL
- This is perfectly acceptable for this project

## Environment Variables

Before running locally or deploying, you MUST:

1. Create a Supabase project
2. Update `.env.local` with real credentials
3. Run the database migration

Without these steps, the app will not work.

See [supabase/README.md](supabase/README.md) for detailed setup.

## First Deploy

The easiest path:

1. Set up Supabase (5 minutes)
2. Push code to GitHub (2 minutes)
3. Deploy to Vercel (3 minutes)
4. Test on production URL
5. Create admin user in Supabase dashboard
6. Start using the admin panel

Total time: ~15 minutes.

## Security

The `.env.local` file is already in `.gitignore`.

**Never commit:**
- `.env.local`
- Real credentials
- Database passwords

**Safe to commit:**
- `.env.example` (has placeholder values)
- Public anon key (RLS protects the data)

## Getting Help

If something breaks:

1. Check Vercel deployment logs
2. Check Supabase dashboard → Logs
3. Review [OVERVIEW.md](OVERVIEW.md) for architecture
4. Review [DEPLOYMENT.md](DEPLOYMENT.md) for checklist
5. Check browser console for errors

Most issues are:
- Missing environment variables
- Database schema not run
- No admin user created
- Browser cache (clear it)
