
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
import { MoviesComponent } from './pages/movies/movie.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AcStar, AcStars } from './shared/index';

//  Services
import { PublicatonsService } from './services/publications/publications.service';
import { ProductsService } from './services/products/products.service';
import { AuthService } from './services/authentication/auth.service';
import { RequesterService } from './services/shared/requester.service';
import { ExceptionService } from './services/shared/exception.service';
import { ToastService } from './services/shared/toast.service';


// Guards
import { AuthGuard } from './guards/authGuard';

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
    MoviesComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    AcStar,
    AcStars
  ],
  bootstrap: [AppComponent],
  providers: [
    PublicatonsService,
    ProductsService,
    AuthService,
    RequesterService,
    ExceptionService,
    ToastService,
    AuthGuard
  ]
})
export class AppModule { }
