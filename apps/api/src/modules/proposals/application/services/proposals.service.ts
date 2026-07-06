import { Injectable } from '@nestjs/common';

@Injectable()
export class ProposalsService {
  getOne(id: string) {
    return { success: true, data: { id } };
  }

  update(id: string, payload: any) {
    return { success: true, data: { id, ...payload } };
  }

  negotiate(id: string, payload: any) {
    return { success: true, action: 'negotiateProposal', id, payload };
  }

  accept(id: string) {
    return { success: true, action: 'acceptProposal', id };
  }
}
