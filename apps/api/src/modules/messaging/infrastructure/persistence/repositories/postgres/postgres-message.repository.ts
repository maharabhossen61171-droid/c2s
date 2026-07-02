import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../../../../../common/database/database.service';
import { MessageRepository } from '../../../../domain/repositories/message.repository';

@Injectable()
export class PostgresMessageRepository implements MessageRepository {
  constructor(private readonly db: DatabaseService) {}

  async listConversations(userId?: string): Promise<unknown[]> {
    if (!userId) return [];
    return this.db.query('SELECT * FROM conversations LIMIT 20');
  }

  async listMessages(conversationId: string): Promise<unknown[]> {
    return this.db.query('SELECT * FROM messages WHERE conversation_id = $1 ORDER BY sent_at DESC LIMIT 50', [conversationId]);
  }

  async createConversation(payload: Record<string, unknown>): Promise<unknown> {
    return { id: 'generated-conversation-id', ...payload };
  }

  async createMessage(payload: Record<string, unknown>): Promise<unknown> {
    return { id: 'generated-message-id', ...payload };
  }
}
