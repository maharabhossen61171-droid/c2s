export interface MessageRepository {
  listConversations(userId?: string): Promise<unknown[]>;
  listMessages(conversationId: string): Promise<unknown[]>;
  createConversation(payload: Record<string, unknown>): Promise<unknown>;
  createMessage(payload: Record<string, unknown>): Promise<unknown>;
}
