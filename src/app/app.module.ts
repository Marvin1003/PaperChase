import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { BlueprintComponent } from './components/blueprint/blueprint.component';
import { NextComponent } from './components/next/next.component';
import { QuestComponent } from './components/quest/quest.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    BlueprintComponent,
    NextComponent,
    QuestComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
