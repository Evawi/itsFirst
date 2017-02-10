import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { NavModule } from './modules/navigation/nav.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);