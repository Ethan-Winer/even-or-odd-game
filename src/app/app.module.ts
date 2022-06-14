import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnswerButtonComponent } from './answer-button/answer-button.component';
import { NumberBoxComponent } from './number-box/number-box.component';
import { HeaderComponent } from './header/header.component';
import { CompletedTrackerComponent } from './completed-tracker/completed-tracker.component';
import { GameOverScreenComponent } from './game-over-screen/game-over-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerButtonComponent,
    NumberBoxComponent,
    HeaderComponent,
    CompletedTrackerComponent,
    GameOverScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
