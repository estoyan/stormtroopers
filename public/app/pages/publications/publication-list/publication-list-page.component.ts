import { Component, OnInit } from '@angular/core';
import { PublicatonsService } from '../../../services/publications/publications.service';
import { Publication } from '../../../models/publication.model';

@Component({
  moduleId: module.id,
  templateUrl: './publication-list-page.component.html',
  styleUrls: ['./publication-list-page.component.css']
})

export class PublicationListPageComponent implements OnInit {
  publications: Publication[];
  public totalPublications: number;
  public currentPage: number = 1;
  public maxSize: number = 10;
  public itemsPerPage: number = 5;
  public showedPublications: Publication[];

  constructor(private _publicationService: PublicatonsService) {
    // this.totalPublications = 11;
  }

  ngOnInit() {
    this._publicationService.getAllPublications()
      .subscribe(x => {
        this.totalPublications = x.length;
        this.publications = x;
        this.showedPublications = this.publications.slice(0, this.itemsPerPage);
      });
  }

  setNewRate(event: any) {
    console.log('new Rate is: ', event);
  }
  public pageChanged(event: any): void {
    let currentItem = (event.page-1) * this.itemsPerPage;
    this.showedPublications = this.publications.slice(currentItem, this.itemsPerPage + currentItem);
  }
}