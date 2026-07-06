import { Inject, Injectable } from '@nestjs/common';
import { MESSAGE_REPOSITORY } from '../../../../common/tokens/repository.tokens';
import { MessageRepository } from '../../domain/repositories/message.repository';

@Injectable()
export class MessagingService {
  constructor(
    @Inject(MESSAGE_REPOSITORY)
    private readonly messageRepository: MessageRepository,
  ) {}

  async list(userId = 'current-user-id') {
    const items = await this.messageRepository.listConversations(userId);
    return { success: true, data: { items } };
  }

  async create(payload: any) {
    const conversation = await this.messageRepository.createConversation(payload);
    return { success: true, action: 'createConversation', data: conversation };
  }

  async messages(id: string) {
    const items = await this.messageRepository.listMessages(id);
    return { success: true, data: { conversationId: id, items } };
  }

  async send(id: string, payload: any) {
    const message = await this.messageRepository.createMessage({ conversationId: id, ...payload });
    return { success: true, action: 'sendMessage', data: message };
  }
}
