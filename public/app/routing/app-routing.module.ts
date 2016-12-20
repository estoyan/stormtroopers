import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { pages } from '../pages/index';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '' },
    { path: 'characters', component: pages.characters },
    { path: '**', pathMatch: 'full', component: pages.pageNotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [
  ]
})

export class AppRoutingModule { }