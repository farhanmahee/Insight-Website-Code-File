# Insight ERP

A production-grade, multi-tenant ERP Platform.

## Getting Started

### Prerequisites

- Node.js 18+
- Docker & Docker Compose

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start infrastructure (Postgres, Redis, MinIO):
   ```bash
   docker-compose up -d
   ```

3. Generate Prisma Client:
   ```bash
   npm run db:generate
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## Architecture

- **Apps**:
  - `apps/api`: NestJS Backend
  - `apps/web`: Next.js Frontend
- **Packages**:
  - `packages/database`: Prisma ORM
  - `packages/ui`: Shared UI components
  - `packages/config`: Shared configurations
