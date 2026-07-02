import { Module } from '@nestjs/common';
import { RiskController } from './presentation/controllers/risk.controller';
import { RiskService } from './application/services/risk.service';

@Module({ controllers: [RiskController], providers: [RiskService], exports: [RiskService] })
export class RiskModule {}
