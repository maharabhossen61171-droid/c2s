import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  createUploadIntent(payload: Record<string, unknown>) {
    return { success: true, action: 'createUploadIntent', payload };
  }
}
