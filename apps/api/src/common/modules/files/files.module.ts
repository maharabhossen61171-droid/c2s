import { Module } from '@nestjs/common';
import { FilesController } from './presentation/controllers/files.controller';
import { FilesService } from './application/services/files.service';

@Module({ controllers: [FilesController], providers: [FilesService], exports: [FilesService] })
export class FilesModule {}
