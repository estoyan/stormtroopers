import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PublicatonsService } from '../../../services/publications/publications.service';
import { LocalStorageService } from '../../../services/shared/local-storage.service';

import { Publication } from '../../../models/publication.model';
import { Comment } from '../../../models/comment.model';

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    templateUrl: './publication-detail.component.html',
    styleUrls: ['./publication-detail.component.css']
})

export class PublicationDetailComponent implements OnInit {
    private _username: string;

    publication: Publication;

    constructor(
        private _publicationService: PublicatonsService,
        private _route: ActivatedRoute,
        private _localeStorageService: LocalStorageService
    ) { }

    ngOnInit() {
        this._route.params
            .switchMap((params: Params) => this._publicationService.getPublicationById(params['id']))
            .subscribe((p: Publication) => this.publication = p);

        this._username = this._localeStorageService.getUser().username;
    }

    addComment(content: string) {
        let comment: Comment = { username: this._username, content };
        this._publicationService.addComment(comment);
        this.publication.comments.push(comment);
    }
}