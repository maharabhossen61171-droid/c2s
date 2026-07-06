export interface NotificationRepository {
  listByUserId(userId: string, filters?: any): Promise<unknown[]>;
  updatePreferences(userId: string, payload: any): Promise<unknown>;
  markAllRead(userId: string): Promise<void>;
}
