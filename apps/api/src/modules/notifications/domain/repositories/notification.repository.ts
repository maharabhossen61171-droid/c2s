export interface NotificationRepository {
  listByUserId(userId: string, filters?: Record<string, unknown>): Promise<unknown[]>;
  updatePreferences(userId: string, payload: Record<string, unknown>): Promise<unknown>;
  markAllRead(userId: string): Promise<void>;
}
