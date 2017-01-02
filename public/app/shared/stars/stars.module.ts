import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AcStar } from './star.js';
import { AcStars } from './stars.js';

@NgModule({
    imports: [FormsModule, CommonModule],
    exports: [AcStar, AcStars],
    declarations: [AcStar, AcStars],
    providers: []
})

export class StarsModule { }
