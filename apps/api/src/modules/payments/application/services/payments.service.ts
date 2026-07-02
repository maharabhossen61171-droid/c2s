import { Inject, Injectable } from '@nestjs/common';
import { PAYMENT_REPOSITORY } from '../../../../common/tokens/repository.tokens';
import { PaymentRepository } from '../../domain/repositories/payment.repository';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject(PAYMENT_REPOSITORY)
    private readonly paymentRepository: PaymentRepository,
  ) {}

  async fundEscrow(contractId: string, payload: Record<string, unknown>) {
    const payment = await this.paymentRepository.create({ contractId, ...payload, type: 'escrow_fund' });
    return { success: true, action: 'fundEscrow', data: payment };
  }

  async list(filters: Record<string, unknown> = {}) {
    const items = await this.paymentRepository.list(filters);
    return { success: true, data: { items } };
  }

  async getOne(id: string) {
    const payment = await this.paymentRepository.findById(id);
    return { success: true, data: payment };
  }
}
