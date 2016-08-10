import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeagueComponent } from './league.component'
import { LeagueTableComponent } from './league-table.component'
import { PlayerService } from './player.service';
import { ResultComponent } from './result.component'
import { routing } from './app.routing'

@NgModule({
    declarations: [
      AppComponent,
      LeagueComponent,
      ResultComponent,
      LeagueTableComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      routing
    ],
    providers: [PlayerService],
    bootstrap: [AppComponent]
})
export class AppModule {}
