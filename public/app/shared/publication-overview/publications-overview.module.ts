import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PipeModule } from '../../pipes/pipe.module';
import { StarsModule } from '../../shared/stars/stars.module';

import { PublicationOverviewComponent } from './publication-overview.component';

@NgModule({
  imports: [RouterModule, PipeModule, StarsModule],
  exports: [PublicationOverviewComponent],
  declarations: [PublicationOverviewComponent],
  providers: []
})
export class PublicationsOverviewModule { }
