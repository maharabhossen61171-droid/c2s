import { Module } from '@nestjs/common';
import { DatabaseModule } from './common/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { CreatorsModule } from './modules/creators/creators.module';
import { SponsorsModule } from './modules/sponsors/sponsors.module';
import { AgenciesModule } from './modules/agencies/agencies.module';
import { CampaignsModule } from './modules/campaigns/campaigns.module';
import { ProposalsModule } from './modules/proposals/proposals.module';
import { ContractsModule } from './modules/contracts/contracts.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { EscrowModule } from './modules/escrow/escrow.module';
import { MessagingModule } from './modules/messaging/messaging.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { FilesModule } from './modules/files/files.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { RiskModule } from './modules/risk/risk.module';
import { AdminModule } from './modules/admin/admin.module';
import { LocalizationModule } from './modules/localization/localization.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UsersModule,
    OrganizationsModule,
    CreatorsModule,
    SponsorsModule,
    AgenciesModule,
    CampaignsModule,
    ProposalsModule,
    ContractsModule,
    PaymentsModule,
    EscrowModule,
    MessagingModule,
    NotificationsModule,
    FilesModule,
    AnalyticsModule,
    RiskModule,
    AdminModule,
    LocalizationModule,
  ],
})
export class AppModule {}
