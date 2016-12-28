import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RequesterService } from '../shared/requester.service';
import { LocalStorageService } from '../shared/local-storage.service';

import { Publication } from '../../models/publication.model';
import { Comment } from '../../models/comment.model';

const TOP_PUBLICATIONS_URL = 'api/publications/top';
const PUBLICATIONS_URL = 'api/publications';

@Injectable()
export class PublicatonsService {
    constructor(
        private _requester: RequesterService,
        private _localeStorageService: LocalStorageService
    ) { }

    getTopPublications(): Observable<Publication[]> {
        return this._requester
            .getJson<Publication[]>(TOP_PUBLICATIONS_URL);
    }

    getAllPublications(): Observable<Publication[]> {
        return this._requester
            .getJson<Publication[]>(PUBLICATIONS_URL);
    }

    getPublicationById(id: string): Observable<Publication> {
        let imageByIdUrl = PUBLICATIONS_URL + `/${id}`;
        return this._requester
            .getJson<Publication>(imageByIdUrl);
    }

    addComment(comment: Comment) {

    }
}