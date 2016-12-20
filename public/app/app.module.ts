
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutes } from './config/routes';

import { AppComponent } from './/app.component';

import { AppRoutingModule } from './routing/app-routing.module';

//  Pages
import { CharacterComponent } from './pages/characters/cahracter.component';
import { PageNotFoundComponent } from './pages/page-not-fount/page-not-fount.component';
//  Services

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CharacterComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
  providers: [
  ]
})
export class AppModule { }
