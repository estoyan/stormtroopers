import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequesterService } from '../shared/requester.service';
import { Publication } from '../../models/publication.model';

@Injectable()
export class PublicatonsService {
    private topImages: string = '/api/topimages';

    constructor(private _requester: RequesterService) {

    }

    getTopImages(): Observable<Publication[]> {
        return this._requester
            .getJson<Publication[]>(this.topImages);
    }
}