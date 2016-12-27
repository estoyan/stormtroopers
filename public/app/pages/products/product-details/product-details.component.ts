// import { Component } from '@angular/core';
// import { Router, ActivatedRoute, Params } from '@angular/router';
//my implementataion above!

import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// import { slideInDownAnimation } from '../animations';

// import { Hero, HeroService }  from './hero.service';


@Component({
  moduleId: module.id,
  templateUrl: './product-details.component.html'
})

// export class ProductDetailsComponent {
//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//   ){

//   }
// }

export class ProductDetailsComponent implements OnInit {
  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';

  // hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => params['id'])
      .subscribe((id) =>console.log(id));
  }

  gotoHeroes() {
    // let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['', { id: "heroId", foo: 'foo' }]);
  }
}