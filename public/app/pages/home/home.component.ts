import { Component, OnInit } from '@angular/core';
import { PublicatonsService } from '../../services/publications/publications.service';

@Component({
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fullPath: string = 'static/app/assets/imgs/rougeone.png'

  private topImages: any[];

  constructor(private galleryService: PublicatonsService) {

  }

  ngOnInit() {
    this.galleryService.getTopImages()
      .subscribe(x => this.topImages = x)
  }

}