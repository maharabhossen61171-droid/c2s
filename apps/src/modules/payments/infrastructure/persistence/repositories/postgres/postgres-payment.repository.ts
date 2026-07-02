import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../../../../../common/database/database.service';
import { PaymentRepository } from '../../../../domain/repositories/payment.repository';

@Injectable()
export class PostgresPaymentRepository implements PaymentRepository {
  constructor(private readonly db: DatabaseService) {}

  async findById(id: string): Promise<unknown | null> {
    const rows = await this.db.query('SELECT * FROM payments WHERE id = $1 LIMIT 1', [id]);
    return rows[0] ?? null;
  }

  async list(filters: Record<string, unknown>): Promise<unknown[]> {
    void filters;
    return this.db.query('SELECT * FROM payments ORDER BY created_at DESC LIMIT 20');
  }

  async create(payload: Record<string, unknown>): Promise<unknown> {
    return { id: 'generated-payment-id', ...payload };
  }

  async update(id: string, payload: Record<string, unknown>): Promise<unknown> {
    return { id, ...payload };
  }
}
