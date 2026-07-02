import { Injectable } from '@nestjs/common';

@Injectable()
export class SponsorsService {
  create(payload: Record<string, unknown>) {
    return { success: true, action: 'createSponsorProfile', payload };
  }

  update(payload: Record<string, unknown>) {
    return { success: true, action: 'updateSponsorProfile', payload };
  }
}
