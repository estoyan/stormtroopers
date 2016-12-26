import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/authGuard';

import { pages } from '../pages/index';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: pages.login },
  { path: 'register', component: pages.register },
  { path: 'home', component: pages.home },
  { path: 'user', component: pages.home, canActivate: [AuthGuard] },
  { path: 'characters', component: pages.characters },
  { path: 'movies', loadChildren: 'app/pages/movies/movies.module#MoviesModule' },
  { path: 'publications', loadChildren: 'app/pages/publications/publications.module#PublicationsModule' },
  { path: '**', pathMatch: 'full', component: pages.pageNotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
  // imports: [RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  // exports: [RouterModule],
  providers: [
  ]
})

export class AppRoutingModule { }