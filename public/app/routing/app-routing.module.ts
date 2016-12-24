import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { pages } from '../pages/index';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'login', component: pages.login },
    { path: 'register', component: pages.register },
    { path: 'home', component: pages.home },
    { path: 'characters', component: pages.characters },
    { path: 'movies', component: pages.movies },
    { path: 'publications', loadChildren: 'app/pages/publications/publications.module#PublicationsModule' },
    { path: '**', pathMatch: 'full', component: pages.pageNotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule],
  providers: [
  ]
})

export class AppRoutingModule { }