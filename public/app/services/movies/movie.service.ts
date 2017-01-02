import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Movie } from '../../models/movie.model';
import { ExceptionService } from '../shared/exception.service';

let omdbapi = 'https://www.omdbapi.com/';
let starWarsmoviesSearch = '?s=%22Star%20Wars%22&type=movie';

@Injectable()
export class MovieService {

  constructor(private http: Http,
    private exceptionService: ExceptionService) {
  }
  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    let results: Movie[];
    if (body.Search) {
      results = body && body.Search || {};
    } else {
      results = body;
    }
    let total: Number = body && body.totalResults || {};
    return [results, total];
  }

  getMovies(page = 1) {
    return <Observable<[Movie[], number]>>this.http
      .get(omdbapi + starWarsmoviesSearch + `&page=${page}`)
      .map(res => this.extractData<[Movie[], Number]>(res))
      .catch(this.exceptionService.catchBadResponse);
  }

  searchMovies(pattern: string) {
    return <Observable<[Movie[], number]>>this.http
      .get(omdbapi + '?s=' + pattern)
      .map(res => this.extractData<[Movie[], Number]>(res))
      .catch(this.exceptionService.catchBadResponse);

  }

  getMovie(title: string) {
    title = title.replace(/([ ])/g, '%20');
    return <Observable<Movie>>this.http
      .get(`${omdbapi}?t=${title}&plot=full`)
      .map(res => res = res.json())
      .catch(this.exceptionService.catchBadResponse);
  }
}
