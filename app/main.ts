import { bootstrap }    from '@angular/platform-browser-dynamic';

import { appRouterProviders } from './app.routes'
import { AppComponent } from './app.component';
import { PlayerService } from './player.service';

bootstrap(AppComponent, [PlayerService, appRouterProviders]);
