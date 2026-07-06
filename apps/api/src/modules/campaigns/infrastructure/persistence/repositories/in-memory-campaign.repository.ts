import { CampaignRepository } from '../../../domain/repositories/campaign.repository';

export class InMemoryCampaignRepository implements CampaignRepository {
  async findById(id: string): Promise<unknown | null> {
    return { id };
  }

  async list(filters: any): Promise<unknown[]> {
    return [{ filters }];
  }

  async create(payload: any): Promise<unknown> {
    return { id: 'campaign-id', ...payload };
  }

  async update(id: string, payload: any): Promise<unknown> {
    return { id, ...payload };
  }
}
