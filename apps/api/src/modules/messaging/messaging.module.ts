import { Module } from '@nestjs/common';
import { MessagingController } from './presentation/controllers/messaging.controller';
import { MessagingService } from './application/services/messaging.service';
import { MESSAGE_REPOSITORY } from '../../common/tokens/repository.tokens';
import { PostgresMessageRepository } from './infrastructure/persistence/repositories/postgres/postgres-message.repository';

@Module({
  controllers: [MessagingController],
  providers: [
    MessagingService,
    { provide: MESSAGE_REPOSITORY, useClass: PostgresMessageRepository },
  ],
  exports: [MessagingService],
})
export class MessagingModule {}
