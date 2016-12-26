import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { MovieResolver } from './shared/movie-resolver.service';

// import { VehicleResolver } from './shared/vehicle-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    children: [
      {
        path: '',
        component: MovieListComponent,
      },
      {
        path: ':title',
        component: MovieComponent,
        resolve: {
          movie: MovieResolver

        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MovieResolver]
})
export class MovieRoutingModule { }

export const routedComponents = [MovieComponent, MoviesComponent, MovieListComponent];

