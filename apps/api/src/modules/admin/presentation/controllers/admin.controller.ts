import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AdminService } from '../../application/services/admin.service';
import { JwtAuthGuard } from '../../../../common/guards/jwt-auth.guard';
import { PermissionsGuard } from '../../../../common/guards/permissions.guard';
import { Permissions } from '../../../../common/decorators/permissions.decorator';

@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Permissions('admin.users.manage')
  @Get('users')
  users() {
    return this.adminService.users();
  }

  @Permissions('admin.users.manage')
  @Post('users/:id/suspend')
  suspend(@Param('id') id: string) {
    return this.adminService.suspend(id);
  }

  @Permissions('admin.audit.view')
  @Get('audit-logs')
  auditLogs() {
    return this.adminService.auditLogs();
  }
}
