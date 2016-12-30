import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';

import { PublicatonsService } from '../../services/publications/publications.service';
import { ProductsService } from '../../services/products/products.service';

@NgModule({
    imports: [SharedModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: [PublicatonsService, ProductsService]
})

export class HomeModule { }