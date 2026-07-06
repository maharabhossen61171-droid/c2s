import { Inject, Injectable } from '@nestjs/common';
import { ORGANIZATION_REPOSITORY } from '../../../../common/tokens/repository.tokens';
import { OrganizationRepository } from '../../domain/repositories/organization.repository';

@Injectable()
export class OrganizationsService {
  constructor(
    @Inject(ORGANIZATION_REPOSITORY)
    private readonly organizationRepository: OrganizationRepository,
  ) {}

  async create(userId: string, payload: any) {
    const organization = await this.organizationRepository.create({ createdBy: userId, ...payload });
    return { success: true, action: 'createOrganization', data: organization };
  }

  async getOne(id: string) {
    const organization = await this.organizationRepository.findById(id);
    return { success: true, data: organization };
  }

  async update(id: string, payload: any) {
    const organization = await this.organizationRepository.update(id, payload);
    return { success: true, data: organization };
  }
}
