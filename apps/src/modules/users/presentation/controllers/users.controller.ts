import { Controller, Get, Patch, Body } from '@nestjs/common';
import { UsersService } from '../../application/services/users.service';

@Controller('me')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getMe() {
    return this.usersService.getMe();
  }

  @Patch()
  updateMe(@Body() body: Record<string, unknown>) {
    return this.usersService.updateMe(body);
  }
}
