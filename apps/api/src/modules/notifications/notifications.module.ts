import { Module } from '@nestjs/common';
import { NotificationsController } from './presentation/controllers/notifications.controller';
import { NotificationsService } from './application/services/notifications.service';
import { NOTIFICATION_REPOSITORY } from '../../common/tokens/repository.tokens';
import { PostgresNotificationRepository } from './infrastructure/persistence/repositories/postgres/postgres-notification.repository';

@Module({
  controllers: [NotificationsController],
  providers: [
    NotificationsService,
    { provide: NOTIFICATION_REPOSITORY, useClass: PostgresNotificationRepository },
  ],
  exports: [NotificationsService],
})
export class NotificationsModule {}
