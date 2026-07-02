import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ minLength: 8, example: 'StrongPass123' })
  @IsString()
  @MinLength(8)
  password!: string;

  @ApiProperty({ enum: ['creator', 'sponsor', 'agency'] })
  @IsEnum(['creator', 'sponsor', 'agency'])
  roleIntent!: 'creator' | 'sponsor' | 'agency';

  @ApiPropertyOptional({ example: 'en' })
  @IsOptional()
  @IsString()
  locale?: string;
}
