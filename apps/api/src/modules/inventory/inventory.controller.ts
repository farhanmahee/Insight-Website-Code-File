import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) { }

    @Post('warehouses')
    createWarehouse(@Request() req: any, @Body() body: any) {
        const tenantId = req.tenantId || 'default-tenant';
        return this.inventoryService.createWarehouse(tenantId, body);
    }

    @Get('warehouses')
    getWarehouses(@Request() req: any) {
        const tenantId = req.tenantId || 'default-tenant';
        return this.inventoryService.getWarehouses(tenantId);
    }

    @Post('stock-moves')
    createStockMove(@Request() req: any, @Body() body: any) {
        const tenantId = req.tenantId || 'default-tenant';
        return this.inventoryService.createStockMove(tenantId, body);
    }

    @Get('stock-moves')
    getStockMoves(@Request() req: any) {
        const tenantId = req.tenantId || 'default-tenant';
        return this.inventoryService.getStockMoves(tenantId);
    }
}
