import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'st-sort',
    templateUrl: './sort.component.html',
    styleUrls: ['./sort.component.css']
})
export class SortComponent {
    @Input() sortProp: Array<string>;
    @Output() sort: EventEmitter<string>;
    sortCriteria: string;

    constructor() {
        this.sort = new EventEmitter<string>();
    }

    sortCollection(event: any) {
        // event.preventDefault();
        this.sort.emit(this.sortCriteria);
    }
}
