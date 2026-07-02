import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class FundEscrowDto {
  @ApiProperty({ enum: ['sslcommerz', 'stripe'] })
  @IsEnum(['sslcommerz', 'stripe'])
  gateway!: 'sslcommerz' | 'stripe';

  @ApiProperty({ example: 500 })
  @IsNumber()
  amount!: number;

  @ApiProperty({ example: 'USD' })
  @IsString()
  currencyCode!: string;
}
