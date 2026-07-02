import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { AuthenticatedUser } from '../types/authenticated-user.type';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const hasAuth = !!request.headers.authorization;

    if (hasAuth) {
      const user: AuthenticatedUser = {
        id: 'current-user-id',
        email: 'user@example.com',
        tenantId: (request.headers['x-tenant-id'] as string) || null,
        permissions: [
          'creator.profile.manage',
          'sponsor.campaign.manage',
          'admin.users.manage',
          'admin.audit.view',
        ],
      };
      request.user = user;
    }

    return hasAuth;
  }
}
