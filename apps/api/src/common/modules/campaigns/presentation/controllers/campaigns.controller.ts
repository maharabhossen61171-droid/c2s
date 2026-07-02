import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CampaignsService } from '../../application/services/campaigns.service';
import { CreateCampaignDto } from '../../application/dto/create-campaign.dto';
import { PaginationQueryDto } from '../../../../common/dto/pagination.dto';
import { JwtAuthGuard } from '../../../../common/guards/jwt-auth.guard';
import { PermissionsGuard } from '../../../../common/guards/permissions.guard';
import { Permissions } from '../../../../common/decorators/permissions.decorator';

@ApiTags('Campaigns')
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @ApiOperation({ summary: 'Create campaign' })
  @ApiBody({ type: CreateCampaignDto })
  @Permissions('sponsor.campaign.manage')
  @Post()
  create(@Body() body: CreateCampaignDto) {
    return this.campaignsService.create(body);
  }

  @ApiOperation({ summary: 'List campaigns' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get()
  list(@Query() query: PaginationQueryDto) {
    return this.campaignsService.list(query as unknown as Record<string, unknown>);
  }

  @ApiOperation({ summary: 'Get campaign' })
  @ApiParam({ name: 'id', type: String })
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.campaignsService.getOne(id);
  }

  @ApiOperation({ summary: 'Update campaign' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: CreateCampaignDto })
  @Permissions('sponsor.campaign.manage')
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Partial<CreateCampaignDto>) {
    return this.campaignsService.update(id, body);
  }

  @ApiOperation({ summary: 'Publish campaign' })
  @ApiParam({ name: 'id', type: String })
  @Permissions('sponsor.campaign.manage')
  @Post(':id/publish')
  publish(@Param('id') id: string) {
    return this.campaignsService.publish(id);
  }
}
