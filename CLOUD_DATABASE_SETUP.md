# Cloud Database Setup for Insight ERP

## Option 1: Neon (Recommended) ⚡

### Why Neon for ERP?
- **Serverless PostgreSQL** - Auto-scales based on usage
- **Database Branching** - Test migrations safely before production
- **Cost-effective** - Free tier: 0.5 GB storage + generous compute
- **Fast** - Optimized for performance with connection pooling
- **Production-ready** - Used by companies like Vercel, Replit

### Setup Steps

#### 1. Create Neon Account
1. Go to https://neon.tech
2. Click "Sign up" (can use GitHub, Google, or email)
3. Verify your email if needed

#### 2. Create Your Database
1. After login, click "Create Project"
2. **Project name**: `insight-erp`
3. **Region**: Choose closest to your users (e.g., US East, EU West, Asia Pacific)
4. **PostgreSQL version**: 15 or 16 (recommended)
5. Click "Create Project"

#### 3. Get Connection String
After project creation, you'll see a connection string like:
```
postgresql://username:password@ep-xxx-xxx.region.aws.neon.tech/neondb?sslmode=require
```

**Important**: Copy this immediately! The password is only shown once.

#### 4. Configure Your Project

Create a file at `packages/database/.env.local` (this won't be committed):
```bash
DATABASE_URL="your-neon-connection-string-here"
```

Or use inline for commands:
```bash
set DATABASE_URL=your-neon-connection-string-here
```

#### 5. Run Migrations

```bash
cd packages/database

# Run migrations
cmd /c "set DATABASE_URL=your-neon-connection-string && npx prisma migrate dev --name init_core_modules"

# Seed database
cmd /c "set DATABASE_URL=your-neon-connection-string && npx prisma db seed"

# Generate Prisma Client
npm run db:generate
```

#### 6. Update API Configuration

In `apps/api/.env.local`:
```bash
DATABASE_URL="your-neon-connection-string"
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
PORT=3001
```

### Neon Dashboard Features

- **SQL Editor**: Run queries directly
- **Monitoring**: View database metrics, queries, connections
- **Branching**: Create dev/staging branches
- **Connection Pooling**: Built-in for better performance

---

## Option 2: Supabase 🚀

### Why Supabase for ERP?
- **PostgreSQL + extras** (Auth, Storage, Realtime subscriptions)
- **Free tier**: 500 MB database + 1 GB file storage
- **Built-in Auth** - Can replace your JWT auth later
- **Storage** - For documents, invoices, employee photos
- **Realtime** - Live updates for dashboards

### Setup Steps

#### 1. Create Supabase Account
1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up with GitHub or email

#### 2. Create New Project
1. Click "New Project"
2. **Name**: `insight-erp`
3. **Database Password**: Choose a strong password (save it!)
4. **Region**: Choose closest to your users
5. **Pricing Plan**: Free
6. Click "Create new project" (takes ~2 minutes)

#### 3. Get Connection String
1. Go to **Project Settings** → **Database**
2. Scroll to **Connection string**
3. Choose **URI** tab
4. Copy the connection string
5. Replace `[YOUR-PASSWORD]` with your database password

Example:
```
postgresql://postgres.xxx:[YOUR-PASSWORD]@aws-0-region.pooler.supabase.com:5432/postgres
```

#### 4. Configure Your Project

Same as Neon - create `.env.local` or use inline commands with your Supabase connection string.

#### 5. Run Migrations

```bash
cd packages/database
cmd /c "set DATABASE_URL=your-supabase-connection-string && npx prisma migrate dev --name init_core_modules"
cmd /c "set DATABASE_URL=your-supabase-connection-string && npx prisma db seed"
npm run db:generate
```

### Supabase Dashboard Features

- **Table Editor**: Visual database editor
- **SQL Editor**: Run queries
- **Auth**: User management (can integrate later)
- **Storage**: File uploads for invoices, documents
- **API**: Auto-generated REST and GraphQL APIs

---

## Option 3: Railway 🚂

### Quick Setup
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Provision PostgreSQL"
4. Copy connection string from "Connect" tab
5. Use in your project

**Free tier**: $5 credit/month (usually enough for development)

---

## Comparison Table

| Feature | Neon | Supabase | Railway |
|---------|------|----------|---------|
| **Free Storage** | 0.5 GB | 500 MB | ~1 GB |
| **Free Compute** | Generous | Limited hours | $5/month credit |
| **Branching** | ✅ Yes | ❌ No | ❌ No |
| **Extra Features** | Connection pooling | Auth, Storage, Realtime | Easy deployment |
| **Best For** | Pure PostgreSQL, ERP | Full-stack apps | Quick prototypes |
| **Production Ready** | ✅ Yes | ✅ Yes | ✅ Yes |

---

## Recommended Choice for Insight ERP

**🏆 Neon** - Best for your ERP because:
1. **Database branching** - Test migrations safely
2. **Serverless** - Auto-scales as your ERP grows
3. **Cost-effective** - Pay only for what you use
4. **Performance** - Built-in connection pooling
5. **Simple** - Just PostgreSQL, no extras to configure

---

## Next Steps After Setup

1. ✅ Create cloud database account
2. ✅ Get connection string
3. ✅ Run migrations
4. ✅ Seed database
5. ✅ Update API configuration
6. 🚀 Start development: `npm run dev`

## Security Best Practices

### For Development
- Use `.env.local` files (gitignored)
- Never commit connection strings
- Use different databases for dev/staging/prod

### For Production
- Enable SSL (already in Neon/Supabase)
- Use connection pooling
- Set up database backups
- Monitor query performance
- Implement row-level security (RLS)

---

## Troubleshooting

### "SSL required" error
Add `?sslmode=require` to your connection string

### "Too many connections"
Use connection pooling URL (Neon provides this automatically)

### Migration fails
Check your connection string is correct and database is accessible

### Slow queries
- Use Neon's query insights
- Add database indexes
- Enable connection pooling

---

## Cost Estimates (Monthly)

### Development (Free Tier)
- **Neon**: Free (0.5 GB storage)
- **Supabase**: Free (500 MB database)
- **Railway**: $5 credit

### Production (Small ERP - 10-50 users)
- **Neon**: ~$10-20/month (1-2 GB, compute)
- **Supabase**: ~$25/month (Pro plan)
- **Railway**: ~$20-30/month

### Production (Medium ERP - 100-500 users)
- **Neon**: ~$50-100/month (autoscaling)
- **Supabase**: ~$25-100/month
- **Self-hosted**: Consider AWS RDS or DigitalOcean

---

**Ready to proceed? Let me know which option you choose, and I'll help you complete the setup!**