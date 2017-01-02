import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { CharacterModule } from './characters/character.modul';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-fount/page-not-fount.component';
import { AboutComponent } from './about/about.component';

import { CharacterService } from '../services/character/character.service';
import { UserService } from '../services/user/user.service';


@NgModule({
    imports: [FormsModule, CommonModule, HomeModule, LoginModule],
    declarations: [RegisterComponent, PageNotFoundComponent, AboutComponent],
    providers: [CharacterService, UserService],
    exports: [HomeModule, LoginModule, RegisterComponent, PageNotFoundComponent, CharacterModule]
})

export class PageLoaderModule { }
