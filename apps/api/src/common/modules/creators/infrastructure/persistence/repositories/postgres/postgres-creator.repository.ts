import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../../../../../common/database/database.service';
import { CreatorRepository } from '../../../../domain/repositories/creator.repository';

@Injectable()
export class PostgresCreatorRepository implements CreatorRepository {
  constructor(private readonly db: DatabaseService) {}

  async findById(id: string): Promise<unknown | null> {
    const rows = await this.db.query('SELECT * FROM creators WHERE id = $1 LIMIT 1', [id]);
    return rows[0] ?? null;
  }

  async findByUserId(userId: string): Promise<unknown | null> {
    const rows = await this.db.query('SELECT * FROM creators WHERE user_id = $1 LIMIT 1', [userId]);
    return rows[0] ?? null;
  }

  async search(filters: Record<string, unknown>): Promise<unknown[]> {
    void filters;
    return this.db.query('SELECT * FROM creators LIMIT 20');
  }

  async create(payload: Record<string, unknown>): Promise<unknown> {
    return { id: 'generated-creator-id', ...payload };
  }

  async updateByUserId(userId: string, payload: Record<string, unknown>): Promise<unknown> {
    return { userId, ...payload };
  }
}
