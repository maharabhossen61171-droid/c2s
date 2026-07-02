import { Inject, Injectable } from '@nestjs/common';
import { CREATOR_REPOSITORY } from '../../../../common/tokens/repository.tokens';
import { CreatorRepository } from '../../domain/repositories/creator.repository';

@Injectable()
export class CreatorsService {
  constructor(
    @Inject(CREATOR_REPOSITORY)
    private readonly creatorRepository: CreatorRepository,
  ) {}

  async createProfile(userId: string, payload: Record<string, unknown>) {
    const creator = await this.creatorRepository.create({ userId, ...payload });
    return { success: true, action: 'createCreatorProfile', data: creator };
  }

  async search(query: Record<string, unknown>) {
    const items = await this.creatorRepository.search(query);
    return { success: true, data: { items, query } };
  }

  async getOne(creatorId: string) {
    const creator = await this.creatorRepository.findById(creatorId);
    return { success: true, data: creator };
  }

  async getMine(userId: string) {
    const creator = await this.creatorRepository.findByUserId(userId);
    return { success: true, data: creator };
  }

  async updateMine(userId: string, payload: Record<string, unknown>) {
    const creator = await this.creatorRepository.updateByUserId(userId, payload);
    return { success: true, data: creator };
  }
}
