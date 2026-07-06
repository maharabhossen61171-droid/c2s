import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  createUploadIntent(payload: any) {
    return { success: true, action: 'createUploadIntent', payload };
  }
}
