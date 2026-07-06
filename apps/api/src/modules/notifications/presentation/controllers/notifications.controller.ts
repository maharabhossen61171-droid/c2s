import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { NotificationsService } from '../../application/services/notifications.service';
import { UpdateNotificationPreferencesDto } from '../../application/dto/update-notification-preferences.dto';
import { PaginationQueryDto } from '../../../../common/dto/pagination.dto';
import { CurrentUserId } from '../../../../common/decorators/current-user-id.decorator';

@ApiTags('Notifications')
@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @ApiOperation({ summary: 'List notifications' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get('notifications')
  list(@CurrentUserId() userId: string, @Query() query: PaginationQueryDto) {
    return this.notificationsService.list(userId, query as unknown as Record<string, unknown>);
  }

  @ApiOperation({ summary: 'Get notification preferences' })
  @Get('notification-preferences')
  preferences(@CurrentUserId() userId: string) {
    return this.notificationsService.preferences(userId);
  }

  @ApiOperation({ summary: 'Update notification preferences' })
  @ApiBody({ type: UpdateNotificationPreferencesDto })
  @Patch('notification-preferences')
  updatePreferences(@CurrentUserId() userId: string, @Body() body: UpdateNotificationPreferencesDto) {
    return this.notificationsService.updatePreferences(userId, body as unknown as Record<string, unknown>);
  }

  @ApiOperation({ summary: 'Mark all notifications as read' })
  @Post('notifications/read-all')
  readAll(@CurrentUserId() userId: string) {
    return this.notificationsService.readAll(userId);
  }
}
