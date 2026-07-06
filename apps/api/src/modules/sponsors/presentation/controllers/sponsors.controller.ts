import { Body, Controller, Patch, Post } from '@nestjs/common';
import { SponsorsService } from '../../application/services/sponsors.service';

@Controller('sponsors/profile')
export class SponsorsController {
  constructor(private readonly sponsorsService: SponsorsService) {}

  @Post()
  create(@Body() body: any) {
    return this.sponsorsService.create(body);
  }

  @Patch()
  update(@Body() body: any) {
    return this.sponsorsService.update(body);
  }
}
