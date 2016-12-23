import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequesterService } from '../shared/requester.service';
import { Publication } from '../../models/publication.model';

@Injectable()
export class PublicatonsService {
    private topImages: string = '/api/topimages';

    constructor(private requester: RequesterService) {

    }

    getTopImages(): Observable<Publication[]> {
        return this.requester
            .getJson<Publication[]>(this.topImages);
    }
}