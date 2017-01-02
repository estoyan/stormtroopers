import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UserPublicationsComponent } from './user-publications/user-publications.component';
import { PastOrdersComponent } from './past-orders/past-orders.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: UserProfileComponent
      },
      {
        path: 'update',
        component: UpdateProfileComponent,
      },
      {
        path: 'publications',
        component: UserPublicationsComponent,
      },
      {
        path: 'pastorders',
        component: PastOrdersComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }

export const routedComponents = [
  UserProfileComponent,
  UserComponent,
  UpdateProfileComponent,
  UserPublicationsComponent,
  PastOrdersComponent
];
