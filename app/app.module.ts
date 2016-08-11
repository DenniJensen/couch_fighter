import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfigComponent } from './config.component';
import { ConfigService } from './config.service';
import { LeagueComponent } from './league.component'
import { LeagueTableComponent } from './league-table.component'
import { PlayersComponent } from './players.component';
import { PlayerService } from './player.service';
import { ResultComponent } from './result.component'
import { routing } from './app.routing'

@NgModule({
    declarations: [
      AppComponent,
      ConfigComponent,
      LeagueComponent,
      LeagueTableComponent,
      PlayersComponent,
      ResultComponent,
    ],
    imports: [
      BrowserModule,
      FormsModule,
      routing
    ],
    providers: [PlayerService, ConfigService],
    bootstrap: [AppComponent]
})
export class AppModule {}
