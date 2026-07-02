export class ApiMetaDto {
  requestId?: string;
  page?: number;
  pageSize?: number;
  total?: number;
}

export class ApiErrorDetailDto {
  field?: string;
  message!: string;
}

export class ApiErrorDto {
  code!: string;
  message!: string;
  details?: ApiErrorDetailDto[];
}

export class ApiSuccessResponseDto<T = unknown> {
  success = true;
  data!: T;
  meta?: ApiMetaDto;
  error: null = null;
}

export class ApiFailureResponseDto {
  success = false;
  data: null = null;
  meta?: ApiMetaDto;
  error!: ApiErrorDto;
}
