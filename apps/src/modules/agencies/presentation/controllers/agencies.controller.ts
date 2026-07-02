import { Body, Controller, Get, Param, Patch, Post, Delete } from '@nestjs/common';
import { AgenciesService } from '../../application/services/agencies.service';

@Controller()
export class AgenciesController {
  constructor(private readonly agenciesService: AgenciesService) {}

  @Post('agencies/profile')
  create(@Body() body: Record<string, unknown>) {
    return this.agenciesService.create(body);
  }

  @Patch('agencies/profile')
  update(@Body() body: Record<string, unknown>) {
    return this.agenciesService.update(body);
  }

  @Get('agencies/roster')
  roster() {
    return this.agenciesService.roster();
  }

  @Post('agencies/roster/:creatorId')
  addToRoster(@Param('creatorId') creatorId: string) {
    return this.agenciesService.addToRoster(creatorId);
  }

  @Delete('agencies/roster/:creatorId')
  removeFromRoster(@Param('creatorId') creatorId: string) {
    return this.agenciesService.removeFromRoster(creatorId);
  }
}
