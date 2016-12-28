import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { RequesterService } from '../shared/requester.service';
import { LocalStorageService } from '../shared/local-storage.service';

import { Publication } from '../../models/publication.model';
import { Comment } from '../../models/comment.model';

const TOP_IMAGES_URL = '/api/topimages';
const IMAGES_URL = '/api/images';
const RATE_PUBLICATION = '/api/ratepublication';

@Injectable()
export class PublicatonsService {
    constructor(
        private _requester: RequesterService,
        private _localeStorageService: LocalStorageService
    ) { }

    getTopImages(): Observable<Publication[]> {
        return this._requester
            .getJson<Publication[]>(TOP_IMAGES_URL);
    }

    getAllImages(): Observable<Publication[]> {
        return this._requester
            .getJson<Publication[]>(IMAGES_URL);
    }

    getPublicationById(id: string): Observable<Publication> {
        let imageByIdUrl = IMAGES_URL + `/${id}`;
        return this._requester
            .getJson<Publication>(imageByIdUrl);
    }

    rateProduct(publicationId: string, rate: number): Observable<Object> {
        let currentUser = this._localeStorageService.getUser().username;
        let headers = new Headers();
        headers.append('Authorization', `JWT ${this._localeStorageService.getToken()}`);
        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        let infoAsString = `id=${publicationId}&username=${currentUser}&rate=${rate}`;
        return this._requester
            .post(RATE_PUBLICATION, infoAsString, headers);
    }

    addComment(comment: Comment) {

    }
}