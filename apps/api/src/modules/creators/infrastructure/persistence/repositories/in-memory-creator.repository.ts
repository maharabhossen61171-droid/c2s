import { CreatorRepository } from '../../../domain/repositories/creator.repository';

export class InMemoryCreatorRepository implements CreatorRepository {
  async findById(id: string): Promise<unknown | null> {
    return { id };
  }

  async findByUserId(userId: string): Promise<unknown | null> {
    return { userId };
  }

  async search(filters: Record<string, unknown>): Promise<unknown[]> {
    return [{ filters }];
  }

  async create(payload: Record<string, unknown>): Promise<unknown> {
    return { id: 'creator-id', ...payload };
  }

  async updateByUserId(userId: string, payload: Record<string, unknown>): Promise<unknown> {
    return { userId, ...payload };
  }
}
