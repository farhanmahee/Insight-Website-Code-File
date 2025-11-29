import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { HrService } from './hr.service';

@Controller('hr')
export class HrController {
    constructor(private readonly hrService: HrService) { }

    @Post('employees')
    createEmployee(@Request() req: any, @Body() body: any) {
        const tenantId = req.tenantId || 'default-tenant';
        return this.hrService.createEmployee(tenantId, body);
    }

    @Get('employees')
    getEmployees(@Request() req: any) {
        const tenantId = req.tenantId || 'default-tenant';
        return this.hrService.getEmployees(tenantId);
    }

    @Post('attendance')
    recordAttendance(@Request() req: any, @Body() body: any) {
        const tenantId = req.tenantId || 'default-tenant';
        return this.hrService.recordAttendance(tenantId, body);
    }

    @Get('attendance')
    getAttendance(@Request() req: any) {
        const tenantId = req.tenantId || 'default-tenant';
        return this.hrService.getAttendance(tenantId);
    }
}
