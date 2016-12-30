import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { RequesterService } from '../shared/requester.service';

import { Character } from '../../models/character.model';

const LOGIN_URL = '/api/characters';

@Injectable()
export class CharacterService {
    constructor(private _requester: RequesterService) { }

    getCharacters(): Observable<Character[]> {
        return this._requester
            .getJson<Character[]>(LOGIN_URL);
    }
}
