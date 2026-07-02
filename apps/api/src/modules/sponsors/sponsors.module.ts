import { Module } from '@nestjs/common';
import { SponsorsController } from './presentation/controllers/sponsors.controller';
import { SponsorsService } from './application/services/sponsors.service';

@Module({ controllers: [SponsorsController], providers: [SponsorsService], exports: [SponsorsService] })
export class SponsorsModule {}
