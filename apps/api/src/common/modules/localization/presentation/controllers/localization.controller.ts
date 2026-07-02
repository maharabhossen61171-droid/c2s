import { Controller, Get, Param } from '@nestjs/common';
import { LocalizationService } from '../../application/services/localization.service';

@Controller('localization')
export class LocalizationController {
  constructor(private readonly localizationService: LocalizationService) {}

  @Get(':locale')
  getLocalePack(@Param('locale') locale: string) {
    return this.localizationService.getLocalePack(locale);
  }
}
