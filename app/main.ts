import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { PlayerService } from './player.service';

import { appRouterProviders } from './app.routes'

bootstrap(AppComponent, [PlayerService, appRouterProviders]);
