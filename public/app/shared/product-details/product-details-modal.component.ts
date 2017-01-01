import { Component, ViewChild, Input, AfterViewInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';


@Component({
    moduleId: module.id,
    selector: 'modal-product',
    templateUrl: './product-details-modal.component.html'
})
export class ProductDetailsModalComponent{
    @ViewChild('childModal') public childModal: ModalDirective;
    @Input() product: number;

    public showChildModal(): void {
    this.childModal.show();
}

    public hideChildModal(): void {
    this.childModal.hide();
}
}