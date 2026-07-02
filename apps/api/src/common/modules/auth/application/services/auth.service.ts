import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '../../../../common/tokens/repository.tokens';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  async login(payload: Record<string, unknown>) {
    const user = typeof payload.email === 'string'
      ? await this.userRepository.findByEmail(payload.email)
      : null;

    return { success: true, action: 'login', data: { user, payload } };
  }

  async register(payload: Record<string, unknown>) {
    const createdUser = await this.userRepository.create(payload);
    return { success: true, action: 'register', data: createdUser };
  }
}
