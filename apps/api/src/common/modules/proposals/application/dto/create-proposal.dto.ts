import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProposalDto {
  @ApiProperty({ example: 450 })
  @IsNumber()
  proposedTotal!: number;

  @ApiProperty({ example: 'USD' })
  @IsString()
  currencyCode!: string;

  @ApiPropertyOptional({ example: 'Can deliver within 5 days' })
  @IsOptional()
  @IsString()
  message?: string;
}
