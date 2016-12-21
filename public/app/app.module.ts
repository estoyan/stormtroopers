
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
import { HomeComponent } from './pages/home/home.component';
import { AcStar, AcStars } from './shared/index';

//  Services
import { PublicatonsService } from './services/publications/publications.service';

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
    HomeComponent,
    PageNotFoundComponent,
    AcStar,
    AcStars
  ],
  bootstrap: [AppComponent],
  providers: [
    PublicatonsService
  ]
})
export class AppModule { }
