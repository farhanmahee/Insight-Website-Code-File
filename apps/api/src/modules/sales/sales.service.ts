import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class SalesService {
    constructor(private prisma: PrismaService) { }

    async createCustomer(tenantId: string, data: any) {
        return this.prisma.customer.create({
            data: {
                ...data,
                tenantId,
            },
        });
    }

    async getCustomers(tenantId: string) {
        return this.prisma.customer.findMany({
            where: { tenantId },
        });
    }

    async createOrder(tenantId: string, data: any) {
        const { items, ...orderData } = data;
        return this.prisma.order.create({
            data: {
                ...orderData,
                tenantId,
                items: {
                    create: items.map((item: any) => ({
                        ...item,
                        tenantId,
                    })),
                },
            },
        });
    }

    async getOrders(tenantId: string) {
        return this.prisma.order.findMany({
            where: { tenantId },
            include: { customer: true, items: true },
        });
    }
}
