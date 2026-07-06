import { Injectable } from '@nestjs/common';

@Injectable()
export class SponsorsService {
  create(payload: any) {
    return { success: true, action: 'createSponsorProfile', payload };
  }

  update(payload: any) {
    return { success: true, action: 'updateSponsorProfile', payload };
  }
}
