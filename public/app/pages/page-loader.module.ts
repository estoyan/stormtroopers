import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { CharacterModule } from './characters/character.module';

import { PageNotFoundComponent } from './page-not-fount/page-not-fount.component';

@NgModule({
    imports: [HomeModule, LoginModule, CharacterModule],
    declarations: [PageNotFoundComponent],
    providers: [],
    exports: [HomeModule, LoginModule, CharacterModule]
})

export class PageLoaderModule { }