import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCreatorProfileDto {
  @ApiPropertyOptional({ example: 'Food and lifestyle creator' })
  @IsOptional()
  @IsString()
  headline?: string;

  @ApiProperty({ example: 'Food' })
  @IsString()
  nichePrimary!: string;

  @ApiPropertyOptional({ example: 'Lifestyle' })
  @IsOptional()
  @IsString()
  nicheSecondary?: string;

  @ApiPropertyOptional({ example: 'Audience in Bangladesh and UAE' })
  @IsOptional()
  @IsString()
  audienceSummary?: string;

  @ApiPropertyOptional({ example: 100 })
  @IsOptional()
  @IsNumber()
  minRate?: number;

  @ApiPropertyOptional({ example: 500 })
  @IsOptional()
  @IsNumber()
  maxRate?: number;

  @ApiProperty({ example: 'USD' })
  @IsString()
  currencyCode!: string;

  @ApiPropertyOptional({ enum: ['public', 'private', 'invite_only'] })
  @IsOptional()
  @IsEnum(['public', 'private', 'invite_only'])
  visibility?: 'public' | 'private' | 'invite_only';
}
