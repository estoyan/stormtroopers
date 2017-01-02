import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'st-filter',
    templateUrl: 'filter.component.html',
    styleUrls: ['./filter.component.css']
})

export class FilterComponent {
    @Output() changed: EventEmitter<string>;
    filter: string;

    constructor() {
        this.changed = new EventEmitter<string>();

    }

    filterChanged(event: any) {
        event.preventDefault();
        this.changed.emit(this.filter);
    }
}
