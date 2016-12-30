import { Component, OnInit } from '@angular/core';

import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character/character.service';

@Component({
    moduleId: module.id,
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
    characters: Character[];
    filterProp: string[];
    searchText: string;

    constructor(private _characterService: CharacterService) { }

    ngOnInit() {
        this.filterProp = ['name', 'homeland'];
        this.searchText = '';
        this._characterService.getCharacters()
            .subscribe((data: any) => {
                this.characters = data.body
            });
    }
}