import { Module } from '@nestjs/common';
import { CampaignsController } from './presentation/controllers/campaigns.controller';
import { CampaignsService } from './application/services/campaigns.service';
import { CAMPAIGN_REPOSITORY } from '../../common/tokens/repository.tokens';
import { InMemoryCampaignRepository } from './infrastructure/persistence/repositories/in-memory-campaign.repository';

@Module({
  controllers: [CampaignsController],
  providers: [
    CampaignsService,
    { provide: CAMPAIGN_REPOSITORY, useClass: InMemoryCampaignRepository },
  ],
  exports: [CampaignsService],
})
export class CampaignsModule {}
