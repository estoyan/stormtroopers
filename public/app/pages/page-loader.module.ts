import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { CharacterComponent } from './characters/character.component';

import { PageNotFoundComponent } from './page-not-fount/page-not-fount.component';

@NgModule({
    imports: [HomeModule, LoginModule],
    declarations: [PageNotFoundComponent, CharacterComponent],
    providers: [],
    exports: [HomeModule, LoginModule, PageNotFoundComponent, CharacterComponent]
})

export class PageLoaderModule { }