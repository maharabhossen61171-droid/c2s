export function apiSuccess<T>(data: T, requestId?: string, meta?: Record<string, unknown>) {
  return {
    success: true,
    data,
    meta: {
      requestId,
      ...(meta || {}),
    },
    error: null,
  };
}

export function apiError(code: string, message: string, requestId?: string, details?: unknown[]) {
  return {
    success: false,
    data: null,
    meta: { requestId },
    error: {
      code,
      message,
      details,
    },
  };
}
