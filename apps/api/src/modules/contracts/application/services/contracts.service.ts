import { Injectable } from '@nestjs/common';

@Injectable()
export class ContractsService {
  getOne(id: string) {
    return { success: true, data: { id } };
  }

  sign(id: string) {
    return { success: true, action: 'signContract', id };
  }

  milestones(id: string) {
    return { success: true, data: { contractId: id, items: [] } };
  }
}
