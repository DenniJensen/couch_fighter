import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players.component';
import { LeagueComponent } from './league.component';

const appRoutes: Routes = [
  { path: '', component: PlayersComponent },
  { path: 'league', component: LeagueComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
