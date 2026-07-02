import { UserRepository } from '../../../domain/repositories/user.repository';

export class InMemoryUserRepository implements UserRepository {
  async findById(id: string): Promise<unknown | null> {
    return { id };
  }

  async findByEmail(email: string): Promise<unknown | null> {
    return { email };
  }

  async create(payload: Record<string, unknown>): Promise<unknown> {
    return { id: 'user-id', ...payload };
  }
}
