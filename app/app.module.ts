import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing'
import { PlayerService } from './player.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      FormsModule,
      routing
    ],
    providers: [PlayerService],
    bootstrap: [AppComponent]
})
export class AppModule {}
