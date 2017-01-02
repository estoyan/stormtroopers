import { CharacterComponent } from './characters/character.component';
import { PageNotFoundComponent } from './page-not-fount/page-not-fount.component';
import { PublicationsComponent } from './publications/publications.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';


export const pages = {
    pageNotFound: PageNotFoundComponent,
    characters: CharacterComponent,
    movies: MoviesComponent,
    publications: PublicationsComponent,
    home: HomeComponent,
    login: LoginComponent,
    register: RegisterComponent,
    about: AboutComponent
};
