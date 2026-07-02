import { Injectable } from '@nestjs/common';

@Injectable()
export class EscrowService {
  getSummary(contractId: string) {
    return { success: true, data: { contractId, escrow: {} } };
  }
}
