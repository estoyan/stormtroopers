import { Component, OnInit } from '@angular/core';
import { PublicatonsService } from '../../../services/publications/publications.service';
import { ToastService } from '../../../services/shared/toast.service';
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
  public firstItemToShow: number;
  public lastItemToShow: number;

  public sortCriteria: string;
  public filterProp: Array<string>;
  public searchText: String;
  public sortProp: Array<Object>;


  constructor(
    private _publicationService: PublicatonsService,
    private _toastService: ToastService
  ) {
    this.sortCriteria = 'createdAt false';
    this.filterProp = ['title'];
    this.sortProp = [
      {
        queryParam: 'createdAt false',
        displayValue: 'Newest'
      },
      {
        queryParam: 'createdAt true',
        displayValue: 'Oldest'
      },
      {
        queryParam: 'overalRating true',
        displayValue: 'Rating: Low to High'
      },
      {
        queryParam: 'overalRating false',
        displayValue: 'Rating: High to Low'
      }
    ];
    this.searchText = '';
    this.firstItemToShow = 0;
    this.lastItemToShow = this.itemsPerPage;
  }

  filterChanged(searchText: string) {
    this.searchText = searchText;
  }

  sortCollection(sortCriteria: string) {
    this.sortCriteria = sortCriteria;

  }

  ngOnInit() {
    this._publicationService.getAllPublications()
      .subscribe(x => {

        for (let publication of x) {
          let ratingSum = 0;
          for (let rate of publication.rating) {
            ratingSum += rate.rate;
          }
          publication['overalRating'] = ratingSum / publication.rating.length;
        }
        this.totalPublications = x.length;
        this.publications = x;
      },
      err => this._toastService.activate(err, false));
  }

  public pageChanged(event: any): void {
    this.firstItemToShow = (event.page - 1) * this.itemsPerPage;
    this.lastItemToShow = this.firstItemToShow + this.itemsPerPage;
  }
}
