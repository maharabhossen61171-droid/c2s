import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PaymentsService } from '../../application/services/payments.service';
import { FundEscrowDto } from '../../application/dto/fund-escrow.dto';
import { PaginationQueryDto } from '../../../../common/dto/pagination.dto';

@ApiTags('Payments')
@Controller()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('contracts/:id/escrow/fund')
  fundEscrow(@Param('id') id: string, @Body() body: FundEscrowDto) {
    return this.paymentsService.fundEscrow(id, body as unknown as any);
  }

  @Get('payments')
  list(@Query() query: PaginationQueryDto) {
    return this.paymentsService.list(query as unknown as any);
  }

  @Get('payments/:id')
  getOne(@Param('id') id: string) {
    return this.paymentsService.getOne(id);
  }
}
