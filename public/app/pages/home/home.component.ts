import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery/gallery.service';

@Component({
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // private fullPath: string = 'http://cdn.wallpapersafari.com/0/6/73bG4e.jpg';
  fullPath: string = 'static/app/assets/imgs/rougeone.png'

  private topImages: any[];

  constructor(private galleryService: GalleryService) {

  }

  ngOnInit() {
    this.galleryService.getTopImages()
      .subscribe(x => this.topImages = x)
  }

}