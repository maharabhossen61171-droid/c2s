import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../../../../../common/database/database.service';
import { CampaignRepository } from '../../../../domain/repositories/campaign.repository';

@Injectable()
export class PostgresCampaignRepository implements CampaignRepository {
  constructor(private readonly db: DatabaseService) {}

  async findById(id: string): Promise<unknown | null> {
    const rows = await this.db.query('SELECT * FROM campaigns WHERE id = $1 LIMIT 1', [id]);
    return rows[0] ?? null;
  }

  async list(filters: Record<string, unknown>): Promise<unknown[]> {
    void filters;
    return this.db.query('SELECT * FROM campaigns ORDER BY created_at DESC LIMIT 20');
  }

  async create(payload: Record<string, unknown>): Promise<unknown> {
    return { id: 'generated-campaign-id', ...payload };
  }

  async update(id: string, payload: Record<string, unknown>): Promise<unknown> {
    return { id, ...payload };
  }
}
