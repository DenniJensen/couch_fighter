import { provideRouter, RouterConfig } from '@angular/router';
import { PlayersComponent } from './players.component';
import { LeagueComponent } from './league.component';

const routes: RouterConfig = [
  {
    path: 'league',
    component: LeagueComponent,
    pathMatch: 'full'
  },
  {
    path: 'players',
    component: PlayersComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
