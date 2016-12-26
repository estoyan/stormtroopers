
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppRoutingModule } from './routing/app-routing.module';
import { CoreModule } from './core/core.module';
<<<<<<< HEAD

//  Pages
import { CharacterComponent } from './pages/characters/cahracter.component';
import { PageNotFoundComponent } from './pages/page-not-fount/page-not-fount.component';
import { HomeComponent } from './pages/home/home.component';
// import { MoviesComponent } from './pages/movies/movies.component';
import { LoginComponent } from './pages/login/login.component';
=======
import { PageLoaderModule } from './pages/page-loader.module';
>>>>>>> 853a409d5d2438113ddf20d92e6359a465328d55
import { RegisterComponent } from './pages/register/register.component';

//  Services
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
    AppRoutingModule,
    PageLoaderModule
  ],
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CharacterComponent,
    HomeComponent,
    // MoviesComponent,
    PageNotFoundComponent,
    LoginComponent,
=======
>>>>>>> 853a409d5d2438113ddf20d92e6359a465328d55
    RegisterComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthService,
    RequesterService,
    ExceptionService,
    ToastService,
    AuthGuard
  ]
})
export class AppModule { }
