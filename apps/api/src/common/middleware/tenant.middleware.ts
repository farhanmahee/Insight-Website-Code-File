import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TenantMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const tenantId = req.headers['x-tenant-id'] as string;
        if (!tenantId) {
            // In a real app, we might throw an error or set a default
            // For now, we'll just log it or proceed if it's a public route
        }
        // Attach tenantId to the request object for easy access
        (req as any).tenantId = tenantId;
        next();
    }
}
