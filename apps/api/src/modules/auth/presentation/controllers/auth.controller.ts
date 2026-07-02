import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../../application/services/auth.service';
import { LoginDto } from '../../application/dto/login.dto';
import { RegisterDto } from '../../application/dto/register.dto';
import { Public } from '../../../../common/decorators/public.decorator';
import { JwtAuthGuard } from '../../../../common/guards/jwt-auth.guard';

@ApiTags('Auth')
@UseGuards(JwtAuthGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @ApiOperation({ summary: 'Login user with email/password' })
  @ApiBody({ type: LoginDto })
  @Post('login')
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @Public()
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: RegisterDto })
  @Post('register')
  register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }
}
