import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateOrganizationDto {
  @ApiProperty({ enum: ['sponsor', 'agency'] })
  @IsEnum(['sponsor', 'agency'])
  orgType!: 'sponsor' | 'agency';

  @ApiProperty({ example: 'Acme Media LLC' })
  @IsString()
  @IsNotEmpty()
  legalName!: string;

  @ApiPropertyOptional({ example: 'Acme Media' })
  @IsOptional()
  @IsString()
  tradeName?: string;

  @ApiProperty({ example: 'BD' })
  @IsString()
  @IsNotEmpty()
  countryCode!: string;

  @ApiPropertyOptional({ example: 'https://acme.example.com' })
  @IsOptional()
  @IsUrl()
  websiteUrl?: string;
}
