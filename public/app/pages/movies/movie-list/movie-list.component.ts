import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { MovieService } from '../../../services/movies/movie.service';
import {ToastService } from'../../../services/shared/toast.service'

@Component({
  moduleId: module.id,
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  public movies: Movie[];
  public detailedMovies: Movie[];
  public totalMovies: number;
  public currentPage: number = 1;
  public maxSize: number = 5;
  public searchText = '';

  constructor(private _movieService: MovieService,  private _toasterService: ToastService) {
    this.movies = [];
    this.detailedMovies = [];
   }
  getMovies(page = 1) {
    this.movies = [];
    this._movieService.getMovies(page)
      .subscribe(newMovies => {
        this.totalMovies = newMovies[1];
        for (let newMovie of newMovies[0]) {
          this.getMovie(newMovie.Title);
        }
      },
      error => {
        this._toasterService.activate('Movies cannot be retireved at the moment', false);
      });
  }

  private getMovie(title: string) {
    this._movieService.getMovie(title)
      .subscribe(movie => {
        this.movies.push(movie);
      });
  }

  ngOnInit() {
    this.getMovies();
  }
  public pageChanged(event: any): void {
    this.getMovies(event.page);
  }
}
