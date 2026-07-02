import { Controller, Get, Param } from '@nestjs/common';
import { EscrowService } from '../../application/services/escrow.service';

@Controller('contracts/:id/escrow')
export class EscrowController {
  constructor(private readonly escrowService: EscrowService) {}

  @Get()
  getSummary(@Param('id') id: string) {
    return this.escrowService.getSummary(id);
  }
}
