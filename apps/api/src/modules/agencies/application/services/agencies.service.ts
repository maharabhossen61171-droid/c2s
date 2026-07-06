import { Injectable } from '@nestjs/common';

@Injectable()
export class AgenciesService {
  create(payload: any) {
    return { success: true, action: 'createAgencyProfile', payload };
  }

  update(payload: any) {
    return { success: true, action: 'updateAgencyProfile', payload };
  }

  roster() {
    return { success: true, data: { items: [] } };
  }

  addToRoster(creatorId: string) {
    return { success: true, action: 'addToRoster', creatorId };
  }

  removeFromRoster(creatorId: string) {
    return { success: true, action: 'removeFromRoster', creatorId };
  }
}
