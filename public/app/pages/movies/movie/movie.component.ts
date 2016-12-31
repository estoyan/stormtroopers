import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { } from '@angular/core'


import { Movie } from '../../../models/movie.model';
import { MovieService } from '../../../services/movies/movie.service';

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    templateUrl: './movie.componenet.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent {
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
