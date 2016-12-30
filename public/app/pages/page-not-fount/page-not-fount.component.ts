import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  template: `
    <div class="row">
      <div class="col-md-12 text-center">
        <h2>Opps! It's Vaider's private place. You are not supposed to be here!</h2>
      </div>
      <div class="col-md-6 col-md-offset-3 col-xs-6 col-xs-offset-3 text-center">
        <img src="http://wallpapercave.com/wp/9nkg2PZ.png" alt="stormtrooper image"  class="img-responsive">
      </div>
    </div>
  `,
  styles: [
    `h2 {
      color: gold;
    }
    img {
      width: 600px;
    }`
  ]
})
export class PageNotFoundComponent { }
