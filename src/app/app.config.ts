import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import LocaleEsPe from '@angular/common/locales/es-PE'; // configuracion regional
import { registerLocaleData } from '@angular/common';

// agregando la configuracion regional de Peru
// - Puedo usar la configuracion de Peru y de eeuu
// - se esta agregando la de Peru
registerLocaleData(LocaleEsPe); 

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
