
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppRoutingModule } from './routing/app-routing.module';
import { CoreModule } from './core/core.module';

//  Pages
import { CharacterComponent } from './pages/characters/cahracter.component';
import { PageNotFoundComponent } from './pages/page-not-fount/page-not-fount.component';
//  Services

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    Ng2BootstrapModule,
    CoreModule,
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
