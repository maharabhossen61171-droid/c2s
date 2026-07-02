import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  async query<T = unknown>(_sql: string, _params: unknown[] = []): Promise<T[]> {
    return [];
  }
}
