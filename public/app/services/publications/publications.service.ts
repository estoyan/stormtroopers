import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequesterService } from '../shared/requester.service';
import { Publication } from '../../models/publication.model';

const TOP_IMAGES_URL = '/api/topimages';
const IMAGES_URL = '/api/images';

@Injectable()
export class PublicatonsService {
    constructor(private _requester: RequesterService) {

    }

    getTopImages(): Observable<Publication[]> {
        return this._requester
            .getJson<Publication[]>(TOP_IMAGES_URL);
    }

    getAllImages(): Observable<Publication[]> {
        return this._requester
            .getJson<Publication[]>(IMAGES_URL);
    }
}