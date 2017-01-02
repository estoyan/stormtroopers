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
    totalCharacters: number;
    currentPage: number = 1;
    maxSize: number = 10;
    itemsPerPage: number = 5;
    firstItemToShow: number;
    lastItemToShow: number;


    constructor(private _characterService: CharacterService) { }

    ngOnInit() {
        this.filterProp = ['name', 'homeland'];
        this.searchText = '';
        this.firstItemToShow = 0;
        this.lastItemToShow = this.itemsPerPage;
        this._characterService.getCharacters()
            .subscribe((data: any) => {
                this.totalCharacters = data.body.length;
                this.characters = data.body;
            });
    }

    filterChanged(searchText: string) {
        this.searchText = searchText;
    }
    pageChanged(event: any): void {
        this.firstItemToShow = (event.page - 1) * this.itemsPerPage;
        this.lastItemToShow = this.firstItemToShow + this.itemsPerPage;
    }
}
