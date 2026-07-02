import { Controller, Get, Param, Post } from '@nestjs/common';
import { ContractsService } from '../../application/services/contracts.service';

@Controller('contracts')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.contractsService.getOne(id);
  }

  @Post(':id/sign')
  sign(@Param('id') id: string) {
    return this.contractsService.sign(id);
  }

  @Get(':id/milestones')
  milestones(@Param('id') id: string) {
    return this.contractsService.milestones(id);
  }
}
