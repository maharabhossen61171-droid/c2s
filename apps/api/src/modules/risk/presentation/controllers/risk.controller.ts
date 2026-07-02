import { Controller, Get } from '@nestjs/common';
import { RiskService } from '../../application/services/risk.service';

@Controller('admin/risk')
export class RiskController {
  constructor(private readonly riskService: RiskService) {}

  @Get('signals')
  signals() {
    return this.riskService.signals();
  }
}
