import { Module } from '@nestjs/common';
import { LocalizationController } from './presentation/controllers/localization.controller';
import { LocalizationService } from './application/services/localization.service';

@Module({ controllers: [LocalizationController], providers: [LocalizationService], exports: [LocalizationService] })
export class LocalizationModule {}
