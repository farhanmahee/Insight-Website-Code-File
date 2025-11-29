import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
    constructor(private readonly salesService: SalesService) { }

    @Post('customers')
    createCustomer(@Request() req: any, @Body() body: any) {
        const tenantId = req.tenantId || 'default-tenant';
        return this.salesService.createCustomer(tenantId, body);
    }

    @Get('customers')
    getCustomers(@Request() req: any) {
        const tenantId = req.tenantId || 'default-tenant';
        return this.salesService.getCustomers(tenantId);
    }

    @Post('orders')
    createOrder(@Request() req: any, @Body() body: any) {
        const tenantId = req.tenantId || 'default-tenant';
        return this.salesService.createOrder(tenantId, body);
    }

    @Get('orders')
    getOrders(@Request() req: any) {
        const tenantId = req.tenantId || 'default-tenant';
        return this.salesService.getOrders(tenantId);
    }
}
