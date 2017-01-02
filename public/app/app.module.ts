import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './routing/app-routing.module';
import { CoreModule } from './core/core.module';
import { PageLoaderModule } from './pages/page-loader.module';

//  Services
import { AuthService } from './services/authentication/auth.service';
import { RequesterService } from './services/shared/requester.service';
import { ExceptionService } from './services/shared/exception.service';
import { ToastService } from './services/shared/toast.service';
import { NavbarService } from './services/shared/navbar.service';
import { LocalStorageService } from './services/shared/local-storage.service';

// Guards
import { AuthGuard } from './guards/authGuard';
import { LoggedInGuard } from './guards/loggedInGuard';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
    PageLoaderModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthService,
    RequesterService,
    ExceptionService,
    ToastService,
    AuthGuard,
    LoggedInGuard,
    LocalStorageService,
    NavbarService,
  ]
})
export class AppModule { }
