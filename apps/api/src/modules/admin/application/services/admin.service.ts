import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  users() {
    return { success: true, data: { items: [] } };
  }

  suspend(id: string) {
    return { success: true, action: 'suspendUser', id };
  }

  auditLogs() {
    return { success: true, data: { items: [] } };
  }
}
