import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Publication } from '../../models/publication.model';

@Component({
  moduleId: module.id,
  selector: 'st-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})

export class PublicationListComponent {
  @Input() publication: Publication;

  constructor() { }
}