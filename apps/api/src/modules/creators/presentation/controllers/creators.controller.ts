import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreatorsService } from '../../application/services/creators.service';
import { CreateCreatorProfileDto } from '../../application/dto/create-creator-profile.dto';
import { PaginationQueryDto } from '../../../../common/dto/pagination.dto';
import { JwtAuthGuard } from '../../../../common/guards/jwt-auth.guard';
import { PermissionsGuard } from '../../../../common/guards/permissions.guard';
import { Permissions } from '../../../../common/decorators/permissions.decorator';
import { CurrentUserId } from '../../../../common/decorators/current-user-id.decorator';

@ApiTags('Creators')
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('creators')
export class CreatorsController {
  constructor(private readonly creatorsService: CreatorsService) {}

  @ApiOperation({ summary: 'Create creator profile' })
  @ApiBody({ type: CreateCreatorProfileDto })
  @Permissions('creator.profile.manage')
  @Post('profile')
  createProfile(@Body() body: CreateCreatorProfileDto, @CurrentUserId() userId: string) {
    return this.creatorsService.createProfile(userId, body);
  }

  @ApiOperation({ summary: 'Search creators' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get('search')
  search(@Query() query: PaginationQueryDto) {
    return this.creatorsService.search(query as unknown as any);
  }

  @ApiOperation({ summary: 'Get creator by id' })
  @ApiParam({ name: 'creatorId', type: String })
  @Get(':creatorId')
  getOne(@Param('creatorId') creatorId: string) {
    return this.creatorsService.getOne(creatorId);
  }

  @ApiOperation({ summary: 'Get my creator profile' })
  @Permissions('creator.profile.manage')
  @Get('me/profile')
  getMine(@CurrentUserId() userId: string) {
    return this.creatorsService.getMine(userId);
  }

  @ApiOperation({ summary: 'Update my creator profile' })
  @ApiBody({ type: CreateCreatorProfileDto })
  @Permissions('creator.profile.manage')
  @Patch('me/profile')
  updateMine(@Body() body: Partial<CreateCreatorProfileDto>, @CurrentUserId() userId: string) {
    return this.creatorsService.updateMine(userId, body);
  }
}
