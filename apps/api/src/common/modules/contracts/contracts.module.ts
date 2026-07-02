import { Module } from '@nestjs/common';
import { ContractsController } from './presentation/controllers/contracts.controller';
import { ContractsService } from './application/services/contracts.service';

@Module({ controllers: [ContractsController], providers: [ContractsService], exports: [ContractsService] })
export class ContractsModule {}
