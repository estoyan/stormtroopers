import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharacterComponent } from './character.component';
import { PipeModule } from '../../pipes/pipe.module';
import { FilterModule } from '../../shared/filter/filter.module';

@NgModule({
    imports: [CommonModule, FormsModule, PipeModule, FilterModule],
    declarations: [CharacterComponent],
})

export class CharacterModule { }
