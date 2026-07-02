import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../../../../../common/database/database.service';
import { OrganizationRepository } from '../../../../domain/repositories/organization.repository';

@Injectable()
export class PostgresOrganizationRepository implements OrganizationRepository {
  constructor(private readonly db: DatabaseService) {}

  async findById(id: string): Promise<unknown | null> {
    const rows = await this.db.query('SELECT * FROM organizations WHERE id = $1 LIMIT 1', [id]);
    return rows[0] ?? null;
  }

  async create(payload: Record<string, unknown>): Promise<unknown> {
    return { id: 'generated-org-id', ...payload };
  }

  async update(id: string, payload: Record<string, unknown>): Promise<unknown> {
    return { id, ...payload };
  }
}
