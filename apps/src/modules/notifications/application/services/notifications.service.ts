import { Inject, Injectable } from '@nestjs/common';
import { NOTIFICATION_REPOSITORY } from '../../../../common/tokens/repository.tokens';
import { NotificationRepository } from '../../domain/repositories/notification.repository';

@Injectable()
export class NotificationsService {
  constructor(
    @Inject(NOTIFICATION_REPOSITORY)
    private readonly notificationRepository: NotificationRepository,
  ) {}

  async list(userId: string, filters: Record<string, unknown> = {}) {
    const items = await this.notificationRepository.listByUserId(userId, filters);
    return { success: true, data: { items, filters } };
  }

  preferences(userId?: string) {
    return { success: true, data: { userId, items: [] } };
  }

  async updatePreferences(userId: string, payload: Record<string, unknown>) {
    const preferences = await this.notificationRepository.updatePreferences(userId, payload);
    return { success: true, data: preferences };
  }

  async readAll(userId: string) {
    await this.notificationRepository.markAllRead(userId);
    return { success: true, action: 'readAllNotifications' };
  }
}
