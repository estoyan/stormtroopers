import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequesterService } from '../shared/requester.service';
import { Publication } from '../../models/publication.model';

const TopImagesUlrl = '/api/topimages';
const ImagesUrl = '/api/images';

@Injectable()
export class PublicatonsService {
    constructor(private _requester: RequesterService) {

    }

    getTopImages(): Observable<Publication[]> {
        return this._requester
            .getJson<Publication[]>(TopImagesUlrl);
    }

    getAllImages(): Observable<Publication[]> {
        return this._requester
            .getJson<Publication[]>(ImagesUrl);
    }
}