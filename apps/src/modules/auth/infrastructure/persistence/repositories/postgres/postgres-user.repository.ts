import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../../../../../common/database/database.service';
import { UserRepository } from '../../../../domain/repositories/user.repository';

@Injectable()
export class PostgresUserRepository implements UserRepository {
  constructor(private readonly db: DatabaseService) {}

  async findById(id: string): Promise<unknown | null> {
    const rows = await this.db.query('SELECT * FROM users WHERE id = $1 LIMIT 1', [id]);
    return rows[0] ?? null;
  }

  async findByEmail(email: string): Promise<unknown | null> {
    const rows = await this.db.query('SELECT * FROM users WHERE email = $1 LIMIT 1', [email]);
    return rows[0] ?? null;
  }

  async create(payload: Record<string, unknown>): Promise<unknown> {
    return { id: 'generated-user-id', ...payload };
  }
}
