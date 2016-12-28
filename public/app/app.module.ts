import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppRoutingModule } from './routing/app-routing.module';
import { CoreModule } from './core/core.module';
import { PageLoaderModule } from './pages/page-loader.module';
import { RegisterComponent } from './pages/register/register.component';

//  Services
import { AuthService } from './services/authentication/auth.service';
import { RequesterService } from './services/shared/requester.service';
import { ExceptionService } from './services/shared/exception.service';
import { ToastService } from './services/shared/toast.service';
import { UserService } from './services/shared/user.service';
import { LocalStorageService } from './services/shared/local-storage.service';


// Guards
import { AuthGuard } from './guards/authGuard';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    // Ng2BootstrapModule,
    CoreModule,
    AppRoutingModule,
    PageLoaderModule
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthService,
    RequesterService,
    ExceptionService,
    ToastService,
    UserService,
    AuthGuard,
    LocalStorageService
  ]
})
export class AppModule { }