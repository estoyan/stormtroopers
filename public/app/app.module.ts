
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutes } from './config/routes';

import { AppComponent } from './/app.component';

//  Pages
import { CharacterComponent } from './pages/characters/cahracter.component';
//  Services

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    CharacterComponent
  ],
  bootstrap: [AppComponent],
  providers: [
  ]
})
export class AppModule { }
