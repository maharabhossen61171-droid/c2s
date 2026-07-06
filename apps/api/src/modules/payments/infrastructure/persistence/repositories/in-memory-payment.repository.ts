import { PaymentRepository } from '../../../domain/repositories/payment.repository';

export class InMemoryPaymentRepository implements PaymentRepository {
  async findById(id: string): Promise<unknown | null> {
    return { id };
  }

  async list(filters: any): Promise<unknown[]> {
    return [{ filters }];
  }

  async create(payload: any): Promise<unknown> {
    return { id: 'payment-id', ...payload };
  }

  async update(id: string, payload: any): Promise<unknown> {
    return { id, ...payload };
  }
}
