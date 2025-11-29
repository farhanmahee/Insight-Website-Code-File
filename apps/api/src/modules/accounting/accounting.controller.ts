import { Controller, Get, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AccountingService } from './accounting.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('accounting')
// @UseGuards(JwtAuthGuard) // Uncomment when Auth is fully ready
export class AccountingController {
    constructor(private readonly accountingService: AccountingService) { }

    @Post('accounts')
    createAccount(@Request() req: any, @Body() body: any) {
        // Mock tenantId for now if not present
        const tenantId = req.tenantId || 'default-tenant';
        return this.accountingService.createAccount(tenantId, body);
    }

    @Get('accounts')
    getAccounts(@Request() req: any) {
        const tenantId = req.tenantId || 'default-tenant';
        return this.accountingService.getAccounts(tenantId);
    }

    @Post('journal-entries')
    createJournalEntry(@Request() req: any, @Body() body: any) {
        const tenantId = req.tenantId || 'default-tenant';
        return this.accountingService.createJournalEntry(tenantId, body);
    }

    @Get('journal-entries')
    getJournalEntries(@Request() req: any) {
        const tenantId = req.tenantId || 'default-tenant';
        return this.accountingService.getJournalEntries(tenantId);
    }
}
