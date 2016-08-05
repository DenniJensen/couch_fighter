import { provideRouter, RouterConfig } from '@angular/router';

import { PlayersComponent } from './players.component';
import { LeagueComponent } from './league.component';

const routes: RouterConfig = [
  { path: '', component: PlayersComponent },
  { path: 'league', component: LeagueComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
