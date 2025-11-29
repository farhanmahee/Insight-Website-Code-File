import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class HrService {
    constructor(private prisma: PrismaService) { }

    async createEmployee(tenantId: string, data: any) {
        return this.prisma.employee.create({
            data: {
                ...data,
                tenantId,
            },
        });
    }

    async getEmployees(tenantId: string) {
        return this.prisma.employee.findMany({
            where: { tenantId },
        });
    }

    async recordAttendance(tenantId: string, data: any) {
        return this.prisma.attendance.create({
            data: {
                ...data,
                tenantId,
            },
        });
    }

    async getAttendance(tenantId: string) {
        return this.prisma.attendance.findMany({
            where: { tenantId },
            include: { employee: true },
        });
    }
}
