import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CharacterComponent } from './character.component';
import {PipeModule} from '../../pipes/pipe.module';
// import { CustomFilterPipe } from '../../pipes/filter.pipe'

@NgModule({
    imports: [CommonModule, FormsModule, PipeModule],
    declarations: [CharacterComponent],
})

export class CharacterModule { }