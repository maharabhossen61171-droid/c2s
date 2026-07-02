import { Module } from '@nestjs/common';
import { AuthController } from './presentation/controllers/auth.controller';
import { AuthService } from './application/services/auth.service';
import { USER_REPOSITORY } from '../../common/tokens/repository.tokens';
import { InMemoryUserRepository } from './infrastructure/persistence/repositories/in-memory-user.repository';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    { provide: USER_REPOSITORY, useClass: InMemoryUserRepository },
  ],
  exports: [AuthService],
})
export class AuthModule {}
