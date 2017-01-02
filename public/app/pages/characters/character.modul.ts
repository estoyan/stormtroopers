import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharacterComponent } from './character.component';
import { PipeModule } from '../../pipes/pipe.module';
import { FilterModule } from '../../shared/filter/filter.module';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';


@NgModule({
    imports: [CommonModule, FormsModule, PipeModule, FilterModule, PaginationModule.forRoot()],
    declarations: [CharacterComponent],
})

export class CharacterModule { }
