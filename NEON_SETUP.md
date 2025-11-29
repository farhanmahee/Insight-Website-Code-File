# Neon Database Setup - Insight ERP

## Why Neon for Your ERP?

✅ **Serverless PostgreSQL** - Auto-scales with your business  
✅ **Database Branching** - Test changes safely before production  
✅ **Free Tier** - 0.5 GB storage, generous compute hours  
✅ **Fast Setup** - 2 minutes to get running  
✅ **Production Ready** - Used by Vercel, Replit, and thousands of apps  

---

## Step-by-Step Setup (5 minutes)

### Step 1: Create Neon Account (1 minute)

1. Open your browser and go to: **https://neon.tech**
2. Click **"Sign up"** button (top right)
3. Choose sign-up method:
   - **GitHub** (fastest - 1 click)
   - **Google** (1 click)
   - **Email** (requires verification)
4. Complete the sign-up process

### Step 2: Create Your ERP Database (1 minute)

After logging in, you'll see the dashboard:

1. Click **"Create a project"** button
2. Fill in the details:
   - **Project name**: `insight-erp`
   - **PostgreSQL version**: `16` (latest, recommended)
   - **Region**: Choose closest to you:
     - 🇺🇸 **US East (Ohio)** - for North America
     - 🇪🇺 **EU West (Frankfurt)** - for Europe
     - 🇸🇬 **Asia Pacific (Singapore)** - for Asia
3. Click **"Create project"**

⏱️ Wait 10-20 seconds for database to be created...

### Step 3: Get Your Connection String (30 seconds)

After project creation, you'll see a **connection string** displayed:

```
postgresql://username:password@ep-xxx-xxx.region.aws.neon.tech/neondb?sslmode=require
```

**🚨 IMPORTANT**: 
- Copy this ENTIRE string immediately
- The password is only shown ONCE
- Save it somewhere safe (password manager, notes)

**Can't see it?** Go to **Dashboard** → **Connection Details** → **Connection string**

### Step 4: Run Database Migrations (2 minutes)

Now let's set up your database schema:

```bash
# Navigate to database package
cd "d:/Insight Innovators/Insight Website Code File/packages/database"

# Run migrations (replace YOUR_NEON_CONNECTION_STRING with your actual string)
cmd /c "set DATABASE_URL=YOUR_NEON_CONNECTION_STRING && npx prisma migrate dev --name init_core_modules"
```

**Example** (replace with YOUR string):
```bash
cmd /c "set DATABASE_URL=postgresql://neondb_owner:abc123xyz@ep-cool-sound-123456.us-east-2.aws.neon.tech/neondb?sslmode=require && npx prisma migrate dev --name init_core_modules"
```

You should see:
```
✔ Prisma Migrate applied the following migration(s):
  └─ 20250129_init_core_modules
```

### Step 5: Seed Initial Data (30 seconds)

Load sample data (tenant, admin user, sample accounts, etc.):

```bash
# Still in packages/database directory
cmd /c "set DATABASE_URL=YOUR_NEON_CONNECTION_STRING && npx prisma db seed"
```

You should see:
```
{ tenant: { id: '...', name: 'Default Tenant', ... } }
{ admin: { id: '...', email: 'admin@example.com', ... } }
Accounts created
{ customer: { ... } }
{ product: { ... } }
{ warehouse: { ... } }
{ employee: { ... } }
```

### Step 6: Generate Prisma Client (10 seconds)

```bash
npm run db:generate
```

### Step 7: Configure API (1 minute)

You need to tell your API how to connect to Neon. Since `.env` files are gitignored, you have two options:

#### Option A: Environment Variable (Recommended for Development)

Create a file `apps/api/.env.local`:
```bash
DATABASE_URL="YOUR_NEON_CONNECTION_STRING"
JWT_SECRET="change-this-to-a-random-secret-key-in-production"
PORT=3001
```

#### Option B: Inline (Quick Testing)

When running the API, use:
```bash
cd apps/api
cmd /c "set DATABASE_URL=YOUR_NEON_CONNECTION_STRING && npm run dev"
```

### Step 8: Start Your ERP! 🚀

```bash
# Go to root directory
cd "d:/Insight Innovators/Insight Website Code File"

# Install all dependencies (if not done already)
npm install

# Start development servers
npm run dev
```

This will start:
- ✅ **API**: http://localhost:3001
- ✅ **Web**: http://localhost:3000

---

## ✅ Verify Everything Works

### 1. Check API Health
Open browser: http://localhost:3001/api

You should see Swagger API documentation.

### 2. Check Web Dashboard
Open browser: http://localhost:3000

You should see the Insight ERP homepage.

### 3. Login with Default Admin
- **Email**: `admin@example.com`
- **Password**: `password123`

### 4. Explore Modules
Navigate to:
- 📊 **Accounting**: http://localhost:3000/dashboard/accounting
- 💰 **Sales**: http://localhost:3000/dashboard/sales
- 📦 **Inventory**: http://localhost:3000/dashboard/inventory
- 👥 **HR**: http://localhost:3000/dashboard/hr

---

## 🎯 Neon Dashboard Features

### SQL Editor
1. Go to Neon dashboard
2. Click **"SQL Editor"**
3. Run queries directly:
   ```sql
   SELECT * FROM "User";
   SELECT * FROM "Customer";
   SELECT * FROM "Employee";
   ```

### Database Branching (Advanced)
Create a dev branch to test changes:
1. Click **"Branches"** in sidebar
2. Click **"Create branch"**
3. Name it `development`
4. Get new connection string for dev branch
5. Test migrations safely before applying to main!

### Monitoring
- **Metrics**: View database size, connections, queries
- **Query Performance**: See slow queries
- **Connection Pooling**: Automatically enabled

---

## 🔧 Troubleshooting

### Error: "Can't reach database server"
**Solution**: Check your connection string is correct and includes `?sslmode=require`

### Error: "SSL required"
**Solution**: Add `?sslmode=require` to end of connection string

### Error: "Too many connections"
**Solution**: Neon has connection pooling built-in. Use the pooled connection string from dashboard.

### Error: "Module not found"
**Solution**: Run `npm install` from root directory

### Migrations fail
**Solution**: 
1. Verify connection string is correct
2. Check Neon dashboard shows database is active
3. Try running migration again

---

## 📊 What's in Your Database Now?

After seeding, you have:

### Tenants
- 1 default tenant: "Default Tenant"

### Users
- 1 admin user: admin@example.com (password: password123)

### Accounting
- 6 sample accounts (Cash, Bank, Accounts Payable, Capital, Sales Revenue, Rent Expense)

### Sales
- 1 sample customer: John Doe
- 1 sample product: Widget A ($19.99)

### Inventory
- 1 sample warehouse: Main Warehouse (New York)

### HR
- 1 sample employee: Jane Smith (Manager, $5000 salary)

---

## 🚀 Next Steps

1. ✅ **Explore the API**: http://localhost:3001/api
2. ✅ **Test the Dashboard**: http://localhost:3000/dashboard
3. ✅ **Review the Code**: Check out the module structure
4. 🔨 **Start Building**: Add your custom features!

---

## 💡 Pro Tips

### Use Prisma Studio
Visual database editor:
```bash
cd packages/database
npm run db:studio
```
Opens at http://localhost:5555

### Database Backups
Neon automatically backs up your database. You can also:
1. Go to Neon dashboard
2. Click **"Backups"**
3. Create manual backup before major changes

### Connection Pooling
For production, use Neon's pooled connection string:
1. Go to **Connection Details**
2. Toggle **"Pooled connection"**
3. Use this string for production

### Cost Management
- Free tier: 0.5 GB storage, generous compute
- Monitor usage in Neon dashboard
- Set up billing alerts

---

## 📞 Need Help?

- **Neon Docs**: https://neon.tech/docs
- **Neon Discord**: https://discord.gg/neon
- **Prisma Docs**: https://www.prisma.io/docs

---

**🎉 Congratulations! Your Insight ERP is now running on Neon!**
