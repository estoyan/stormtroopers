import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { routedComponents } from './user-routing.module';

@NgModule({
    imports: [UserRoutingModule, SharedModule],
    declarations: [routedComponents]
})

export class UserModule { }