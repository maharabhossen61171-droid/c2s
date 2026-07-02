import { Module } from '@nestjs/common';
import { OrganizationsController } from './presentation/controllers/organizations.controller';
import { OrganizationsService } from './application/services/organizations.service';
import { ORGANIZATION_REPOSITORY } from '../../common/tokens/repository.tokens';
import { PostgresOrganizationRepository } from './infrastructure/persistence/repositories/postgres/postgres-organization.repository';

@Module({
  controllers: [OrganizationsController],
  providers: [
    OrganizationsService,
    { provide: ORGANIZATION_REPOSITORY, useClass: PostgresOrganizationRepository },
  ],
  exports: [OrganizationsService],
})
export class OrganizationsModule {}
