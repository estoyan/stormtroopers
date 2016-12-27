import { Component, OnInit } from '@angular/core';
import { PublicatonsService } from '../../../services/publications/publications.service';
import { Publication } from '../../../models/publication.model';

@Component({
    moduleId: module.id,
    templateUrl: './publication-detail.component.html',
    styleUrls: ['']
})

export class PublicationDetailComponent implements OnInit {
    publication: Publication;

    constructor(private _publicationService: PublicatonsService) { }

    ngOnInit() {
    }

    setNewRate(event: any) {
        console.log('new Rate is: ', event);
    }
}