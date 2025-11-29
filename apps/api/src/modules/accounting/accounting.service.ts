import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { AccountType } from '@repo/database';

@Injectable()
export class AccountingService {
    constructor(private prisma: PrismaService) { }

    async createAccount(tenantId: string, data: any) {
        return this.prisma.account.create({
            data: {
                ...data,
                tenantId,
            },
        });
    }

    async getAccounts(tenantId: string) {
        return this.prisma.account.findMany({
            where: { tenantId },
        });
    }

    async createJournalEntry(tenantId: string, data: any) {
        const { lines, ...entryData } = data;
        return this.prisma.journalEntry.create({
            data: {
                ...entryData,
                tenantId,
                lines: {
                    create: lines.map((line: any) => ({
                        ...line,
                        tenantId,
                    })),
                },
            },
        });
    }

    async getJournalEntries(tenantId: string) {
        return this.prisma.journalEntry.findMany({
            where: { tenantId },
            include: { lines: { include: { account: true } } },
        });
    }
}
