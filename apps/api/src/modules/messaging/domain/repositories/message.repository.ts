export interface MessageRepository {
  listConversations(userId?: string): Promise<unknown[]>;
  listMessages(conversationId: string): Promise<unknown[]>;
  createConversation(payload: any): Promise<unknown>;
  createMessage(payload: any): Promise<unknown>;
}
