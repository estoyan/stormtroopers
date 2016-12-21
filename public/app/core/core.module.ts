import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavComponent } from './navbar/nav.component';
import { FooterComponent } from './footer/footer.component';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [
        CommonModule, FormsModule, RouterModule, Ng2BootstrapModule
    ],
    exports: [
        CommonModule, FormsModule, RouterModule, NavComponent, FooterComponent
    ],
    declarations: [NavComponent, FooterComponent],
    providers: [
    ]
})
export class CoreModule {
}