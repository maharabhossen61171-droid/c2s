import { Module } from '@nestjs/common';
import { AgenciesController } from './presentation/controllers/agencies.controller';
import { AgenciesService } from './application/services/agencies.service';

@Module({ controllers: [AgenciesController], providers: [AgenciesService], exports: [AgenciesService] })
export class AgenciesModule {}
