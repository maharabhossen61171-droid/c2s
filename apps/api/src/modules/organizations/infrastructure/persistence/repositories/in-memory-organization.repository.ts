import { OrganizationRepository } from '../../../domain/repositories/organization.repository';

export class InMemoryOrganizationRepository implements OrganizationRepository {
  async findById(id: string): Promise<unknown | null> {
    return { id };
  }

  async create(payload: any): Promise<unknown> {
    return { id: 'org-id', ...payload };
  }

  async update(id: string, payload: any): Promise<unknown> {
    return { id, ...payload };
  }
}
