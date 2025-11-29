import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const tenantId = 'default-tenant-id';

    // Create Tenant
    const tenant = await prisma.tenant.upsert({
        where: { id: tenantId },
        update: {},
        create: {
            id: tenantId,
            name: 'Default Tenant',
            slug: 'default',
        },
    });

    console.log({ tenant });

    // Create Admin User
    const hashedPassword = await bcrypt.hash('password123', 10);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            password: hashedPassword,
            name: 'Admin User',
            role: 'ADMIN',
            tenantId: tenant.id,
        },
    });

    console.log({ admin });

    // Create Chart of Accounts (Sample)
    const accounts: Array<{ code: string; name: string; type: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE' }> = [
        { code: '1001', name: 'Cash', type: 'ASSET' },
        { code: '1002', name: 'Bank', type: 'ASSET' },
        { code: '2001', name: 'Accounts Payable', type: 'LIABILITY' },
        { code: '3001', name: 'Capital', type: 'EQUITY' },
        { code: '4001', name: 'Sales Revenue', type: 'REVENUE' },
        { code: '5001', name: 'Rent Expense', type: 'EXPENSE' },
    ];

    for (const acc of accounts) {
        await prisma.account.create({
            data: {
                code: acc.code,
                name: acc.name,
                type: acc.type,
                tenantId: tenant.id,
            },
        });
    }

    console.log('Accounts created');

    // Create Sample Customer
    const customer = await prisma.customer.create({
        data: {
            name: 'John Doe',
            email: 'john@example.com',
            tenantId: tenant.id,
        },
    });

    console.log({ customer });

    // Create Sample Product
    const product = await prisma.product.create({
        data: {
            name: 'Widget A',
            sku: 'WID-A',
            price: 19.99,
            tenantId: tenant.id,
        },
    });

    console.log({ product });

    // Create Sample Warehouse
    const warehouse = await prisma.warehouse.create({
        data: {
            name: 'Main Warehouse',
            location: 'New York',
            tenantId: tenant.id,
        },
    });

    console.log({ warehouse });

    // Create Sample Employee
    const employee = await prisma.employee.create({
        data: {
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane@example.com',
            position: 'Manager',
            salary: 5000,
            tenantId: tenant.id,
        },
    });

    console.log({ employee });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
