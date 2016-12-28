import { Component, OnInit } from '@angular/core';
import { PublicatonsService } from '../../../services/publications/publications.service';
import { Publication } from '../../../models/publication.model';

@Component({
  moduleId: module.id,
  templateUrl: './publication-list-page.component.html',
  styleUrls: ['./publication-list-page.component.css']
})

export class PublicationListPageComponent implements OnInit {
  publications: Publication[] = [];

  constructor(private _publicationService: PublicatonsService) { }

  ngOnInit() {
    this._publicationService.getAllPublications()
      .subscribe(x => this.publications = x);
  }

  setNewRate(event: any) {
    console.log('new Rate is: ', event);
  }
}