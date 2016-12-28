import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'

import { UserService } from '../../../services/shared/user.service';
import { User } from '../../../models/user.model';
import { Publication } from '../../../models/publication.model';
import { PublicationListComponent } from '../../../shared/publication-list/publication-list.component';

@Component({
    moduleId: module.id,
    templateUrl: './user-publications.component.html',
    styleUrls: ['./user-publications.component.css']
})

export class UserPublicationsComponent implements OnInit {
    @ViewChild('wrapper') publicationList: PublicationListComponent;
    publications: Publication[];

    constructor(private _router: Router,
        private _userService: UserService) {
    }

    ngOnInit() {
        this._userService.getUserPublications()
            .subscribe((publ: Publication[]) => this.publications = publ);
    }  
}