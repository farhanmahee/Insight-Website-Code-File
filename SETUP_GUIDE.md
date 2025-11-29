# Setup Guide - Insight ERP Platform

## Step-by-Step Installation

### Step 1: Install Docker Desktop

1. Download Docker Desktop for Windows from: https://www.docker.com/products/docker-desktop/
2. Run the installer
3. Restart your computer if prompted
4. Open Docker Desktop and wait for it to start
5. Verify installation:
   ```bash
   docker --version
   docker-compose --version
   ```

### Step 2: Clone and Install Dependencies

```bash
cd "d:/Insight Innovators/Insight Website Code File"
npm install
```

### Step 3: Start Infrastructure Services

```bash
# Start PostgreSQL, Redis, and MinIO
docker-compose up -d

# Verify all services are running
docker-compose ps

# You should see:
# - postgres (port 5432)
# - redis (port 6379)
# - minio (ports 9000, 9001)
```

### Step 4: Setup Database Environment

**Important**: You cannot create a `.env` file directly (it's gitignored), so you'll need to set the environment variable when running commands.

The database connection string is:
```
postgresql://postgres:password@localhost:5432/insight_erp?schema=public
```

### Step 5: Run Database Migrations

```bash
cd packages/database

# Run migration with inline environment variable
cmd /c "set DATABASE_URL=postgresql://postgres:password@localhost:5432/insight_erp?schema=public && npx prisma migrate dev --name init_core_modules"
```

### Step 6: Seed the Database

```bash
# Still in packages/database directory
cmd /c "set DATABASE_URL=postgresql://postgres:password@localhost:5432/insight_erp?schema=public && npx prisma db seed"
```

### Step 7: Generate Prisma Client

```bash
# Still in packages/database directory
npm run db:generate
```

### Step 8: Start Development Servers

```bash
# Go back to root
cd ../..

# Start all services
npm run dev
```

This will start:
- **API**: http://localhost:3001
- **Web**: http://localhost:3000

## Default Credentials

After seeding, you can login with:
- **Email**: admin@example.com
- **Password**: password123

## Verifying Everything Works

1. **Check API**: Visit http://localhost:3001/api (Swagger docs)
2. **Check Web**: Visit http://localhost:3000
3. **Check Database**: Run `npm run db:studio` from `packages/database`
4. **Check MinIO**: Visit http://localhost:9001 (minioadmin/minioadmin)

## Common Issues

### Issue: "Can't reach database server"
**Solution**: Make sure Docker is running and PostgreSQL container is up:
```bash
docker-compose ps
docker-compose logs postgres
```

### Issue: "Port already in use"
**Solution**: Stop the conflicting service or change ports in docker-compose.yml

### Issue: PowerShell script execution disabled
**Solution**: Use `cmd /c` prefix for commands as shown above

### Issue: Module not found errors
**Solution**: Run `npm install` from root directory

## Next Steps

1. Explore the API documentation at http://localhost:3001/api
2. Check out the dashboard at http://localhost:3000/dashboard
3. Review the code structure in the README.md
4. Start building additional features!

## Stopping Services

```bash
# Stop all Docker services
docker-compose down

# Stop and remove volumes (WARNING: deletes all data)
docker-compose down -v
```
