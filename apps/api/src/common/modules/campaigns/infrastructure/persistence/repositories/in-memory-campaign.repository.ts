import { CampaignRepository } from '../../../domain/repositories/campaign.repository';

export class InMemoryCampaignRepository implements CampaignRepository {
  async findById(id: string): Promise<unknown | null> {
    return { id };
  }

  async list(filters: Record<string, unknown>): Promise<unknown[]> {
    return [{ filters }];
  }

  async create(payload: Record<string, unknown>): Promise<unknown> {
    return { id: 'campaign-id', ...payload };
  }

  async update(id: string, payload: Record<string, unknown>): Promise<unknown> {
    return { id, ...payload };
  }
}
