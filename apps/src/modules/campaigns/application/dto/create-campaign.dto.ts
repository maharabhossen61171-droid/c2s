import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCampaignDto {
  @ApiProperty({ example: 'Ramadan Food Campaign' })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({ example: 'Brand awareness' })
  @IsString()
  objective!: string;

  @ApiProperty({ example: 'Looking for food creators for UAE audience' })
  @IsString()
  description!: string;

  @ApiProperty({ enum: ['public', 'invite_only', 'private'] })
  @IsEnum(['public', 'invite_only', 'private'])
  visibility!: 'public' | 'invite_only' | 'private';

  @ApiProperty({ example: 2000 })
  @IsNumber()
  totalBudget!: number;

  @ApiProperty({ example: 'USD' })
  @IsString()
  currencyCode!: string;

  @ApiPropertyOptional({ type: [String], example: ['BD', 'AE'] })
  @IsOptional()
  @IsArray()
  marketCountryCodes?: string[];

  @ApiPropertyOptional({ type: [String], example: ['en', 'bn', 'ar'] })
  @IsOptional()
  @IsArray()
  targetLanguages?: string[];

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  requiresEscrow?: boolean;
}
