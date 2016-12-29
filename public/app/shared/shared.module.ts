import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PublicationListComponent } from './publication-list/publication-list.component';

import { AcStar } from './stars/star';
import { AcStars } from './stars/stars';

import { SumPipe } from '../pipes/sum.pipe';

// imports: imports the module's exports. which are usually
// declarables(components / directives / pipes) and providers.
// in our case the FilterTextModule has a provider.
//
// exports: exports modules AND declarables (components/directives/pipes) that other modules may want to use
// SharedModule does not use CommonModule, but does use FormsModule.
// Even so, we import/export both of these because most other modules will import SharedModule and will need them.
@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        PublicationListComponent,
        AcStar,
        AcStars,
        SumPipe
    ],
    declarations: [AcStar, AcStars, PublicationListComponent, SumPipe]
})
export class SharedModule { }