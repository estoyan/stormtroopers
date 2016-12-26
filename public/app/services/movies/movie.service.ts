import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Movie } from '../../models/movie.model';
import { ExceptionService } from '../shared/exception.service';
// import { CONFIG, ExceptionService, MessageService, SpinnerService } from '../../core';

let omdbapi = 'http://www.omdbapi.com/';
let starWarsmoviesSearch = '?s=%22Star%20Wars%22&type=movie';

@Injectable()
export class MovieService {
  // onDbReset = this.messageService.state;

  constructor(private http: Http,
    private exceptionService: ExceptionService)
  // private messageService: MessageService,
  // private spinnerService: SpinnerService)
  {
    // this.messageService.state.subscribe(state => this.getVehicles());
  }
  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    var results: Movie[];
    if (body.Search) {
      results = body && body.Search || {};;
    } else {
      results = body;
    }
    var total: Number = body && body.totalResults || {};
    return [results, total];
  }

  getMovies() {
    // this.spinnerService.show();
    return <Observable<[Movie[], Number]>>this.http
      .get(omdbapi + starWarsmoviesSearch)
      .map(res => this.extractData<[Movie[], Number]>(res))
      .catch(this.exceptionService.catchBadResponse);
    //   .finally(() => this.spinnerService.hide());
  }



  getMovie(title: string) {
    // this.spinnerService.show();
    title = title.replace(/([ ])/g, '%20');

    console.log(`${omdbapi}/?t=${title}&plot=full`);
    return <Observable<Movie>>this.http
      .get(`${omdbapi}?t=${title}&plot=full`)
      .map(res => this.extractData<[Movie[], Number]>(res))
      .catch(this.exceptionService.catchBadResponse);
    //   .finally(() => this.spinnerService.hide());
  }

}