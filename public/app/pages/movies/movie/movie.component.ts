import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {} from '@angular/core'


import {Movie } from '../../../models/movie.model';
@Component({
    moduleId: module.id,
     selector: 'app-movie',
    templateUrl: './movie.componenet.html',
    //styleUrl: './style.component.css
})
export class MovieComponent {
    @Input() movie: Movie;
    private title: any;
    constructor(    private route: ActivatedRoute,
  private router: Router) {
        
    }
    ngOnInit() {
  this.route.params
    // (+) converts string 'id' to a number
    // .map((params: any) =>{})
    .subscribe();
}
//  @Input() movie: Movie;
};
// ngOnInit(){

// }    