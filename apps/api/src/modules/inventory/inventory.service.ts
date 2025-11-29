import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class InventoryService {
    constructor(private prisma: PrismaService) { }

    async createWarehouse(tenantId: string, data: any) {
        return this.prisma.warehouse.create({
            data: {
                ...data,
                tenantId,
            },
        });
    }

    async getWarehouses(tenantId: string) {
        return this.prisma.warehouse.findMany({
            where: { tenantId },
        });
    }

    async createStockMove(tenantId: string, data: any) {
        return this.prisma.stockMove.create({
            data: {
                ...data,
                tenantId,
            },
        });
    }

    async getStockMoves(tenantId: string) {
        return this.prisma.stockMove.findMany({
            where: { tenantId },
            include: { product: true, warehouse: true },
        });
    }
}
