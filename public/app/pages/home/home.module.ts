import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { SharedModule } from '../../shared/shared.module';
import {StarsModule} from '../../shared/stars/stars.module';
import { PipeModule } from '../../pipes/pipe.module';

import { HomeComponent } from './home.component';

import { PublicatonsService } from '../../services/publications/publications.service';
import { ProductsService } from '../../services/products/products.service';

@NgModule({
    imports: [CommonModule, RouterModule, StarsModule, PipeModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: [PublicatonsService, ProductsService]
})

export class HomeModule { }