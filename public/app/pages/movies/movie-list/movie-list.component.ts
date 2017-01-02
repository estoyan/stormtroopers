import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { MovieService } from '../../../services/movies/movie.service';
import { FormControl } from '@angular/forms';

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
  filter = new FormControl();

  constructor(private movieService: MovieService) {
    this.movies = [];
    this.detailedMovies = [];
    this.filter.valueChanges
      .debounceTime(400)
      .subscribe(filter => this.searchMovie(filter));
        // .movieService.search(term).then(items => this.items = items));
  }
  getMovies(page = 1) {
    this.movies = [];
    this.movieService.getMovies(page)
      .subscribe(newMovies => {
        this.totalMovies = newMovies[1];
        for (let newMovie of newMovies[0]) {
          this.getMovie(newMovie.Title);
        }
        // above code is making multiple http requests TODO check if it is ok
        // otherwise we miss movie Plots. Bellow  is the simple query.
        // this.movies.push(...newMovies[0]); 

      },
      error => {
        console.log('error occurred here');
        console.log(error);
      });
  }

  private getMovie(title: string) {
    this.movieService.getMovie(title)
      .subscribe(movie => {
        this.movies.push(movie);
      });
  }

  searchMovie(filter: string) {
    this.movies = [];
    this.movieService.searchMovies(filter)
      .subscribe(newMovies => {
        this.totalMovies = newMovies[1];
        for (let newMovie of newMovies[0]) {
          this.getMovie(newMovie.Title);
        }
      },
      error => {
        console.log('error occurred here');
        console.log(error);
      });

  }

  ngOnInit() {
    this.getMovies();
  }
  public pageChanged(event: any): void {
    this.getMovies(event.page)
  }
}
