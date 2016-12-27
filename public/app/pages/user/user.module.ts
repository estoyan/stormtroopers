import { NgModule } from '@angular/core';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { routedComponents } from './user-routing.module';

@NgModule({
    imports: [UserRoutingModule, SharedModule],
    declarations: [routedComponents],
    providers: [Ng2BootstrapModule]
})

export class UserModule { }