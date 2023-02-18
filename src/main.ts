import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//on call serve (run project) it calls app module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
