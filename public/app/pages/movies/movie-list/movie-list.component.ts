import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import { InfiniteScroll } from '../../../../../node_modules/angular2-infinite-scroll/angular2-infinite-scroll.d';
import { Movie } from '../../../models/movie.model';
import { MovieService } from '../../../services/movies/movie.service';

@Component({
  moduleId: module.id,
  selector: 'movie-list',
  // directives: [InfiniteScroll],
  templateUrl: './movie-list.component.html',
  styleUrls: ['movie-list.component.css']
})
export class MovieListComponent implements OnDestroy, OnInit {
  public movies: Movie[];
  public detailedMovies: Movie[];
  constructor(private movieService: MovieService) {
    this.movies = [];
    this.detailedMovies=[]
  }
  getMovies() {
    // this.movies = [];
    this.movieService.getMovies()
      .subscribe(newMovies => {
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
      },
      () => {
        console.log('movie retrieval completed');
      });
  }
  getMovie(title:string) {
    this.movieService.getMovie(title)
      .subscribe(movie => {
        this.movies.push(movie);
      });
  }

  ngOnDestroy() {
    // this.dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    // componentHandler.upgradeDom();
    this.getMovie('Rogue One');
    this.getMovies();
    // this.dbResetSubscription = this.vehicleService.onDbReset
    //   .subscribe(() => this.getVehicles());
  }
}

//   private dbResetSubscription: Subscription;

//   vehicles: Vehicle[];
//   filteredVehicles = this.vehicles;
//   @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;

//   constructor(
//     private filterService: FilterTextService,
//     private vehicleService: VehicleService) { }

//   filterChanged(searchText: string) {
//     this.filteredVehicles = this.filterService.filter(searchText, ['id', 'name', 'type'], this.vehicles);
//   }

//   trackByVehicles(index: number, vehicle: Vehicle) {
//     return vehicle.id;
//   }
// }

