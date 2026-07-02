import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { tap, Observable } from 'rxjs';

@Injectable()
export class AuditLogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest();

    return next.handle().pipe(
      tap(() => {
        const method = request.method;
        if (['POST', 'PATCH', 'PUT', 'DELETE'].includes(method)) {
          // Placeholder: replace with async audit log service/event
          console.log('[AUDIT]', {
            method,
            path: request.url,
            requestId: request.requestId,
          });
        }
      }),
    );
  }
}
