import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../../../../../common/database/database.service';
import { NotificationRepository } from '../../../../domain/repositories/notification.repository';

@Injectable()
export class PostgresNotificationRepository implements NotificationRepository {
  constructor(private readonly db: DatabaseService) {}

  async listByUserId(userId: string, filters?: Record<string, unknown>): Promise<unknown[]> {
    void filters;
    return this.db.query('SELECT * FROM notifications WHERE user_id = $1 ORDER BY created_at DESC LIMIT 50', [userId]);
  }

  async updatePreferences(userId: string, payload: Record<string, unknown>): Promise<unknown> {
    return { userId, ...payload };
  }

  async markAllRead(userId: string): Promise<void> {
    await this.db.query('UPDATE notifications SET read_at = now() WHERE user_id = $1 AND read_at IS NULL', [userId]);
  }
}
