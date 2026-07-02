import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class ResponseTransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest();

    return next.handle().pipe(
      map((data: any) => {
        if (data && typeof data === 'object' && 'success' in data && 'meta' in data) {
          return data;
        }

        return {
          success: true,
          data,
          meta: {
            requestId: request.requestId,
          },
          error: null,
        };
      }),
    );
  }
}
