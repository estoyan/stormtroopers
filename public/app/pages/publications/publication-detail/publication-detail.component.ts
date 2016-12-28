import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PublicatonsService } from '../../../services/publications/publications.service';
import { Publication } from '../../../models/publication.model';

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    templateUrl: './publication-detail.component.html',
    styleUrls: ['./publication-detail.component.css']
})

export class PublicationDetailComponent implements OnInit {
    publication: Publication;

    constructor(
        private _publicationService: PublicatonsService,
        private _route: ActivatedRoute, ) { }

    ngOnInit() {
        this._route.params
            .switchMap((params: Params) => this._publicationService.getPublicationById(params['id']))
            .subscribe((p: Publication) => this.publication = p);
    }

    setNewRate(event: any) {
        console.log('new Rate is: ', event);
    }
}