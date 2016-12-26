import { NgModule, ApplicationModule} from '@angular/core';
import {CommonModule } from '@angular/common';
import { MovieRoutingModule, routedComponents } from './movies-routing.module';
// import { InfiniteScrollModule } from 'angular2-infinite-scroll';
// import { InfiniteScrollModule } from '../../../../node_modules/angular2-infinite-scroll/angular2-infinite-scroll.d';
import {MovieComponent} from './movie/movie.component'
import {MovieListComponent} from './movie-list/movie-list.component'
import { MovieService } from '../../services/movies/movie.service'; 

@NgModule({
  imports: [MovieRoutingModule  ,CommonModule ],
  declarations: [routedComponents,MovieComponent,MovieListComponent ],
  providers: [MovieService]
})
export class MoviesModule { }
