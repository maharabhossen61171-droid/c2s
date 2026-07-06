import { Inject, Injectable } from '@nestjs/common';
import { CAMPAIGN_REPOSITORY } from '../../../../common/tokens/repository.tokens';
import { CampaignRepository } from '../../domain/repositories/campaign.repository';

@Injectable()
export class CampaignsService {
  constructor(
    @Inject(CAMPAIGN_REPOSITORY)
    private readonly campaignRepository: CampaignRepository,
  ) {}

  async create(payload: any) {
    const campaign = await this.campaignRepository.create(payload);
    return { success: true, action: 'createCampaign', data: campaign };
  }

  async list(query: any) {
    const items = await this.campaignRepository.list(query);
    return { success: true, data: { items, query } };
  }

  async getOne(id: string) {
    const campaign = await this.campaignRepository.findById(id);
    return { success: true, data: campaign };
  }

  async update(id: string, payload: any) {
    const campaign = await this.campaignRepository.update(id, payload);
    return { success: true, data: campaign };
  }

  async publish(id: string) {
    const campaign = await this.campaignRepository.update(id, { status: 'published' });
    return { success: true, action: 'publishCampaign', data: campaign };
  }
}
