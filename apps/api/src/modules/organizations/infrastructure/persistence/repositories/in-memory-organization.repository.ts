import { OrganizationRepository } from '../../../domain/repositories/organization.repository';

export class InMemoryOrganizationRepository implements OrganizationRepository {
  async findById(id: string): Promise<unknown | null> {
    return { id };
  }

  async create(payload: Record<string, unknown>): Promise<unknown> {
    return { id: 'org-id', ...payload };
  }

  async update(id: string, payload: Record<string, unknown>): Promise<unknown> {
    return { id, ...payload };
  }
}
