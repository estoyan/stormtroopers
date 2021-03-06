import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/authGuard';
import { LoggedInGuard } from '../guards/loggedInGuard';

import { pages } from '../pages/index';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: pages.login, canActivate: [LoggedInGuard] },
  { path: 'register', component: pages.register, canActivate: [LoggedInGuard] },
  { path: 'home', component: pages.home },
  { path: 'user/:username', loadChildren: 'app/pages/user/user.module#UserModule', canActivate: [AuthGuard] },
  { path: 'characters', component: pages.characters },
  { path: 'movies', loadChildren: 'app/pages/movies/movies.module#MoviesModule' },
  { path: 'publications', loadChildren: 'app/pages/publications/publications.module#PublicationsModule' },
  { path: 'products', loadChildren: 'app/pages/products/products.module#ProductsModule' },
  { path: 'basket', loadChildren: 'app/pages/basket/basket.module#BasketModule', canActivate: [AuthGuard] },
  { path: 'about', component: pages.about },
  { path: '**', pathMatch: 'full', component: pages.pageNotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [
  ]
})

export class AppRoutingModule { }
