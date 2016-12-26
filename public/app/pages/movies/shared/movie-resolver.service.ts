import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Movie } from '../../../models/movie.model';
import { MovieService } from '../../../services/movies/movie.service';

@Injectable()
export class MovieResolver implements Resolve<Movie> {
  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  resolve(  route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let title = route.params['title'];
    return this.movieService.getMovie(title)
      .map(movie => {
        if (movie) {
          return movie;
        }
        // Return a new object, because we're going to create a new one
        return new Movie();
        // We could throw an error here and catch it
        // and route back to the speaker list
        // let msg = `vehicle id ${id} not found`;
        // console.log(msg);
        // throw new Error(msg)
      })
      .catch((error: any) => {
        console.log(`${error}. Heading back to vehicle list`);
        this.router.navigate(['/vehicles']);
        return Observable.from(null);
      });
  }
}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/