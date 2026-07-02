import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse = exception instanceof HttpException
      ? exception.getResponse()
      : null;

    let message = 'Internal server error';
    let code = 'INTERNAL_SERVER_ERROR';
    let details: unknown[] | undefined;

    if (typeof exceptionResponse === 'string') {
      message = exceptionResponse;
    } else if (exceptionResponse && typeof exceptionResponse === 'object') {
      const res = exceptionResponse as Record<string, any>;
      message = res.message || message;
      details = Array.isArray(res.message)
        ? res.message.map((m: string) => ({ message: m }))
        : res.details;
      code = res.code || code;
    }

    response.status(status).json({
      success: false,
      data: null,
      meta: {
        requestId: request.requestId,
      },
      error: {
        code,
        message,
        details,
      },
    });
  }
}
