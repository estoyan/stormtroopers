
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
import { LoginComponent } from './pages/login/login.component';
import { AcStar, AcStars } from './shared/index';

//  Services
import { PublicatonsService } from './services/publications/publications.service';
import { ProductsService } from './services/products/products.service';
import { AuthService} from './services/authentication/auth.service';

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
    LoginComponent,
    AcStar,
    AcStars
  ],
  bootstrap: [AppComponent],
  providers: [
    PublicatonsService,
    ProductsService,
    AuthService
  ]
})
export class AppModule { }
