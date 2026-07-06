import { Body, Controller, Post } from '@nestjs/common';
import { FilesService } from '../../application/services/files.service';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload-intent')
  createUploadIntent(@Body() body: any) {
    return this.filesService.createUploadIntent(body);
  }
}
