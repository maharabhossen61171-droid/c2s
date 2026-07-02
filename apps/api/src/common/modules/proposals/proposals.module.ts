import { Module } from '@nestjs/common';
import { ProposalsController } from './presentation/controllers/proposals.controller';
import { ProposalsService } from './application/services/proposals.service';

@Module({ controllers: [ProposalsController], providers: [ProposalsService], exports: [ProposalsService] })
export class ProposalsModule {}
