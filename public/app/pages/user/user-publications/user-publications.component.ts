import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user/user.service';
import { Publication } from '../../../models/publication.model';
import { PublicationsOverviewModule } from '../../../shared/publication-overview/publications-overview.module';

@Component({
    moduleId: module.id,
    templateUrl: './user-publications.component.html',
    styleUrls: ['./user-publications.component.css']
})

export class UserPublicationsComponent implements OnInit {
    @ViewChild('wrapper') publicationList: PublicationsOverviewModule;
    publications: Publication[];

    constructor(private _router: Router,
        private _userService: UserService) {
    }

    ngOnInit() {
        this._userService.getUserPublications()
            .subscribe((publ: Publication[]) => this.publications = publ);
    }
}
