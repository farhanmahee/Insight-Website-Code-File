import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { TenantMiddleware } from './common/middleware/tenant.middleware';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { AccountingModule } from './modules/accounting/accounting.module';
import { SalesModule } from './modules/sales/sales.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { HrModule } from './modules/hr/hr.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        CommonModule,
        AuthModule,
        UsersModule,
        AccountingModule,
        SalesModule,
        InventoryModule,
        HrModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(TenantMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL });
    }
}
