import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PublicatonsService } from '../../../services/publications/publications.service';
import { ToastService } from '../../../services/shared/toast.service';

@Component({
    moduleId: module.id,
    templateUrl: './publication-create.component.html',
    styleUrls: ['./publication-create.component.css']
})

export class PublicationCreateComponent {
    publication = {
        title: '',
        imageUrl: ''
    }

    constructor(
        private _publicationsService: PublicatonsService,
        private _toastService: ToastService,
        private _router: Router
    ) { }

    onSubmit() {
        this._publicationsService.addPublication(this.publication.title, this.publication.imageUrl)
            .subscribe(data => {
                this._toastService.activate('Successfully added publication!', true)
                this._router.navigate(['publications']);
            });
    }
}