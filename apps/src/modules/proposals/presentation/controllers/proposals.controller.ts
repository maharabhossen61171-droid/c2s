import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ProposalsService } from '../../application/services/proposals.service';
import { CreateProposalDto } from '../../application/dto/create-proposal.dto';

@ApiTags('Proposals')
@Controller('proposals')
export class ProposalsController {
  constructor(private readonly proposalsService: ProposalsService) {}

  @ApiOperation({ summary: 'Get proposal' })
  @ApiParam({ name: 'id', type: String })
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.proposalsService.getOne(id);
  }

  @ApiOperation({ summary: 'Update proposal' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: CreateProposalDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Partial<CreateProposalDto>) {
    return this.proposalsService.update(id, body);
  }

  @ApiOperation({ summary: 'Negotiate proposal' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: CreateProposalDto })
  @Post(':id/negotiate')
  negotiate(@Param('id') id: string, @Body() body: Partial<CreateProposalDto>) {
    return this.proposalsService.negotiate(id, body);
  }

  @ApiOperation({ summary: 'Accept proposal' })
  @ApiParam({ name: 'id', type: String })
  @Post(':id/accept')
  accept(@Param('id') id: string) {
    return this.proposalsService.accept(id);
  }
}
