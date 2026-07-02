import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { MessagingService } from '../../application/services/messaging.service';
import { SendMessageDto } from '../../application/dto/send-message.dto';
import { CurrentUserId } from '../../../../common/decorators/current-user-id.decorator';

@ApiTags('Messaging')
@Controller('conversations')
export class MessagingController {
  constructor(private readonly messagingService: MessagingService) {}

  @ApiOperation({ summary: 'List conversations' })
  @Get()
  list(@CurrentUserId() userId: string) {
    return this.messagingService.list(userId);
  }

  @ApiOperation({ summary: 'Create conversation' })
  @Post()
  create(@Body() body: Record<string, unknown>) {
    return this.messagingService.create(body);
  }

  @ApiOperation({ summary: 'List conversation messages' })
  @ApiParam({ name: 'id', type: String })
  @Get(':id/messages')
  messages(@Param('id') id: string) {
    return this.messagingService.messages(id);
  }

  @ApiOperation({ summary: 'Send message' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: SendMessageDto })
  @Post(':id/messages')
  send(@Param('id') id: string, @Body() body: SendMessageDto) {
    return this.messagingService.send(id, body);
  }
}
