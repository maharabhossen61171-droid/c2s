import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalizationService {
  getLocalePack(locale: string) {
    return { success: true, data: { locale, translations: {} } };
  }
}
