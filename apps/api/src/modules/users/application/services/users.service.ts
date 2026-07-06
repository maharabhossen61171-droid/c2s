import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getMe() {
    return { success: true, data: { message: 'current user profile placeholder' } };
  }

  updateMe(payload: any) {
    return { success: true, data: payload };
  }
}
