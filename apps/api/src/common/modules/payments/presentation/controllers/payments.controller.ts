import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PaymentsService } from '../../application/services/payments.service';
import { FundEscrowDto } from '../../application/dto/fund-escrow.dto';
import { PaginationQueryDto } from '../../../../common/dto/pagination.dto';

@ApiTags('Payments')
@Controller()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @ApiOperation({ summary: 'Fund contract escrow' })
  @ApiParam({ name: 'id', type: String })
  @ApiHeader({ name: 'Idempotency-Key', required: false })
  @ApiBody({ type: FundEscrowDto })
  @Post('contracts/:id/escrow/fund')
  fund(@Param('id') id: string, @Body() body: FundEscrowDto) {
    return this.paymentsService.fundEscrow(id, body);
  }

  @ApiOperation({ summary: 'List payments' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get('payments')
  list(@Query() query: PaginationQueryDto) {
    return this.paymentsService.list(query as unknown as Record<string, unknown>);
  }

  @ApiOperation({ summary: 'Get payment detail' })
  @ApiParam({ name: 'id', type: String })
  @Get('payments/:id')
  getOne(@Param('id') id: string) {
    return this.paymentsService.getOne(id);
  }
}
