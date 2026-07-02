import { Module } from '@nestjs/common';
import { CreatorsController } from './presentation/controllers/creators.controller';
import { CreatorsService } from './application/services/creators.service';
import { CREATOR_REPOSITORY } from '../../common/tokens/repository.tokens';
import { InMemoryCreatorRepository } from './infrastructure/persistence/repositories/in-memory-creator.repository';

@Module({
  controllers: [CreatorsController],
  providers: [
    CreatorsService,
    { provide: CREATOR_REPOSITORY, useClass: InMemoryCreatorRepository },
  ],
  exports: [CreatorsService],
})
export class CreatorsModule {}
