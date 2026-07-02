import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  marketplace() {
    return { success: true, data: { metrics: {} } };
  }
}
