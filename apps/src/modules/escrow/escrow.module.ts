import { Module } from '@nestjs/common';
import { EscrowController } from './presentation/controllers/escrow.controller';
import { EscrowService } from './application/services/escrow.service';

@Module({ controllers: [EscrowController], providers: [EscrowService], exports: [EscrowService] })
export class EscrowModule {}
