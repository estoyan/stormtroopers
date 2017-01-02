import { Component, Input } from '@angular/core';
import { Publication } from '../../models/publication.model';

@Component({
  moduleId: module.id,
  selector: 'st-publication-overview',
  templateUrl: './publication-overview.component.html',
  styleUrls: ['./publication-overview.component.css']
})

export class PublicationOverviewComponent {
  @Input() publication: Publication;

  constructor() { }
}
