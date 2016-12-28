import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { } from '@angular/core'


import { Movie } from '../../../models/movie.model';
import { MovieService } from '../../../services/movies/movie.service';

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'app-movie',
    templateUrl: './movie.componenet.html',
    //styleUrl: './style.component.css
})
export class MovieComponent {
    // @Input() movie: Movie;
     movie: Movie;
    constructor(private route: ActivatedRoute,
        private router: Router,
        private service: MovieService) {

    }
    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.service.getMovie(params['title']))
            .subscribe((m: Movie) => this.movie = m);
    }
};
