import { Module } from '@nestjs/common';
import { AdminController } from './presentation/controllers/admin.controller';
import { AdminService } from './application/services/admin.service';

@Module({ controllers: [AdminController], providers: [AdminService], exports: [AdminService] })
export class AdminModule {}
