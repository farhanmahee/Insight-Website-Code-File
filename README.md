# Insight ERP Platform

A complete, production-grade, multi-tenant ERP system built with free, open-source technologies.

## Tech Stack

- **Backend**: NestJS, Prisma ORM, PostgreSQL
- **Frontend**: Next.js 14, TailwindCSS, shadcn/ui
- **Infrastructure**: Docker, Redis, MinIO
- **Monorepo**: Turborepo

## Prerequisites

- Node.js 18+ and npm
- Docker Desktop (for local development)
- Git

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Infrastructure Services

Start PostgreSQL, Redis, and MinIO using Docker Compose:

```bash
docker-compose up -d
```

Verify services are running:

```bash
docker-compose ps
```

### 3. Setup Database

Create a `.env` file in `packages/database/` (copy from `.env.example`):

```bash
# packages/database/.env
DATABASE_URL="postgresql://postgres:password@localhost:5432/insight_erp?schema=public"
```

Run database migrations:

```bash
cd packages/database
npx prisma migrate dev --name init_core_modules
```

Seed the database with initial data:

```bash
npx prisma db seed
```

Generate Prisma Client:

```bash
npm run db:generate
```

### 4. Start Development Servers

From the root directory:

```bash
# Start all apps in development mode
npm run dev
```

Or start individually:

```bash
# Backend API (port 3001)
cd apps/api
npm run dev

# Frontend Web (port 3000)
cd apps/web
npm run dev
```

## Project Structure

```
insight-erp/
├── apps/
│   ├── api/          # NestJS backend
│   └── web/          # Next.js frontend
├── packages/
│   ├── database/     # Prisma schema & migrations
│   ├── ui/           # Shared UI components
│   ├── typescript-config/  # Shared TS configs
│   └── eslint-config/      # Shared ESLint configs
└── docker-compose.yml
```

## Core Modules

- ✅ **Accounting & Finance** - Ledger, Journal Entries, Chart of Accounts
- ✅ **Sales & CRM** - Customers, Orders, Invoices, POS
- ✅ **Inventory & Supply Chain** - Products, Warehouses, Stock Moves
- ✅ **HR & Payroll** - Employees, Attendance, Payroll Processing

## API Documentation

Once the API is running, visit:
- Swagger UI: `http://localhost:3001/api`

## Database Management

- Prisma Studio: `npm run db:studio` (from packages/database)
- MinIO Console: `http://localhost:9001` (minioadmin/minioadmin)

## Troubleshooting

### Docker not running
```bash
# Start Docker Desktop, then:
docker-compose up -d
```

### Database connection errors
```bash
# Check if PostgreSQL is running:
docker-compose ps

# View logs:
docker-compose logs postgres
```

### Port conflicts
If ports 3000, 3001, 5432, 6379, 9000, or 9001 are in use, stop the conflicting services or modify `docker-compose.yml`.

## Development Workflow

1. Make changes to code
2. Run migrations if schema changed: `npx prisma migrate dev`
3. Test locally
4. Commit and push

## License

MIT
