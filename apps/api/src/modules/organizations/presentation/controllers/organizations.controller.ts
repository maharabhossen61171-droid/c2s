import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { OrganizationsService } from '../../application/services/organizations.service';
import { CreateOrganizationDto } from '../../application/dto/create-organization.dto';
import { CurrentUserId } from '../../../../common/decorators/current-user-id.decorator';

@ApiTags('Organizations')
@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @ApiOperation({ summary: 'Create organization' })
  @ApiBody({ type: CreateOrganizationDto })
  @Post()
  create(@Body() body: CreateOrganizationDto, @CurrentUserId() userId: string) {
    return this.organizationsService.create(userId, body as unknown as Record<string, unknown>);
  }

  @ApiOperation({ summary: 'Get organization' })
  @ApiParam({ name: 'id', type: String })
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.organizationsService.getOne(id);
  }

  @ApiOperation({ summary: 'Update organization' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: CreateOrganizationDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Partial<CreateOrganizationDto>) {
    return this.organizationsService.update(id, body);
  }
}
