import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

import { NavComponent } from './navbar/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ToastComponent } from './toast/toast.component';

import { ColorDirective } from '../directives/color.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        Ng2BootstrapModule,
        DropdownModule.forRoot()
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NavComponent,
        FooterComponent,
        ToastComponent
    ],
    declarations: [
        NavComponent,
        FooterComponent,
        ToastComponent,
        ColorDirective
    ],
    providers: []
})
export class CoreModule {
}