import { Injectable } from '@nestjs/common';

@Injectable()
export class RiskService {
  signals() {
    return { success: true, data: { items: [] } };
  }
}
