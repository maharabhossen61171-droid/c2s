import { Controller, Get } from '@nestjs/common';
import { AnalyticsService } from '../../application/services/analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('marketplace')
  marketplace() {
    return this.analyticsService.marketplace();
  }
}
