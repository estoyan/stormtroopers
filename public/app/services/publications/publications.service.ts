import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RequesterService } from '../shared/requester.service';
import { LocalStorageService } from '../shared/local-storage.service';

import { Publication } from '../../models/publication.model';
import { Comment } from '../../models/comment.model';

const TOP_PUBLICATIONS_URL = 'api/publications/top';
const PUBLICATIONS_URL = 'api/publications';
const RATE_PUBLICATION = '/api/ratepublication';
const PUBLICATION_COMMENT_URL = '/api/publication/comment';
const PUBLICATION_URL = 'api/publication';

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

    rateProduct(publicationId: string, rate: number): Observable<Publication> {
        let currentUser = this._localeStorageService.getUser().username;

        let infoAsString = `id=${publicationId}&username=${currentUser}&rate=${rate}`;
        return this._requester
            .postAuthorized(RATE_PUBLICATION, infoAsString);
    }

    addComment(publicationId: string, comment: Comment): Observable<Object> {
        let bodyObj: any = comment;
        bodyObj.id = publicationId;
        let body = this._requester.createBody(bodyObj);

        return this._requester.postAuthorized(PUBLICATION_COMMENT_URL, body);
    }

    addPublication(title: string, imageUrl: string): Observable<Object> {
        let publication = {
                title,
                imageUrl
            },
            body = this._requester.createBody(publication);

        return this._requester.postAuthorized(PUBLICATION_URL, body);
    }
}