import { NgModule, ApplicationModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

import { MovieRoutingModule, routedComponents } from './movies-routing.module';
import { MovieComponent } from './movie/movie.component'
import { MovieListComponent } from './movie-list/movie-list.component'

import { MovieService } from '../../services/movies/movie.service';

@NgModule({
  // ,PaginationModule.forRoot()
  imports: [MovieRoutingModule,FormsModule, CommonModule,PaginationModule.forRoot()],
  declarations: [routedComponents, MovieComponent, MovieListComponent],
  providers: [MovieService]
})
export class MoviesModule { }
