import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { RequesterService } from '../shared/requester.service';
import { LocalStorageService } from '../shared/local-storage.service';

import { Publication } from '../../models/publication.model';
import { Comment } from '../../models/comment.model';

const TOP_PUBLICATIONS_URL = 'api/publications/top';
const PUBLICATIONS_URL = 'api/publications';
const RATE_PUBLICATION = '/api/ratepublication';
const PUBLICATION_COMMENT_URL = '/api/publication/comment';

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

    rateProduct(publicationId: string, rate: number): Observable<Object> {
        let currentUser = this._localeStorageService.getUser().username;
        let headers = new Headers();
        headers.append('Authorization', `JWT ${this._localeStorageService.getToken()}`);

        let infoAsString = `id=${publicationId}&username=${currentUser}&rate=${rate}`;
        return this._requester
            .postEncoded(RATE_PUBLICATION, infoAsString, headers);
    }

    addComment(publicationId: string, comment: Comment): Observable<Object> {
        let headers = new Headers();
        headers.append('Authorization', `JWT ${this._localeStorageService.getToken()}`);

        let bodyObj: any = comment;
        bodyObj.id = publicationId;
        let body = this._requester.createBody(bodyObj);
        
        return this._requester.postEncoded(PUBLICATION_COMMENT_URL, body, headers);
    }
}