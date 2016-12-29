import { Component, EventEmitter,Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'stormtroopers-filter-sort-text',
  templateUrl: 'filterSort.component.html',
  styleUrls: ['./filterSort.component.css']
    

  
})
export class FilterSortComponent {
  @Input() sortProp: Array<string>;
  @Output() changed: EventEmitter<string>;
  @Output() sort: EventEmitter<string>;

  filter: string;
  sortCriteria: string;

  constructor() {
    this.changed = new EventEmitter<string>();
    this.sort = new EventEmitter<string>();
    console.log(this.sortProp);
  }

  clear() {
    this.filter = '';
  }

  filterChanged(event: any) {
    event.preventDefault();
    console.log(`Filter Changed: ${this.filter}`);
    this.changed.emit(this.filter);
  }
  sortCollection(event: any) {
    // event.preventDefault();
      this.sort.emit(this.sortCriteria);
  }
}
