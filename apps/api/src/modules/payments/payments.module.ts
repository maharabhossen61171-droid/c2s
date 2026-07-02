import { Module } from '@nestjs/common';
import { PaymentsController } from './presentation/controllers/payments.controller';
import { PaymentsService } from './application/services/payments.service';
import { PAYMENT_REPOSITORY } from '../../common/tokens/repository.tokens';
import { PostgresPaymentRepository } from './infrastructure/persistence/repositories/postgres/postgres-payment.repository';

@Module({
  controllers: [PaymentsController],
  providers: [
    PaymentsService,
    { provide: PAYMENT_REPOSITORY, useClass: PostgresPaymentRepository },
  ],
  exports: [PaymentsService],
})
export class PaymentsModule {}
