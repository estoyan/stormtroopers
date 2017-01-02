import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { ProductsService } from "../../services/products/products.service";
import { ToastService } from '../../services/shared/toast.service';
import { AuthService } from '../../services/authentication/auth.service'


@Component({
    moduleId: module.id,
    selector: 'modal-product',
    templateUrl: './product-details-modal.component.html',
    styleUrls: ['./product-details-modal.component.css']

})
export class ProductDetailsModalComponent implements OnInit {
    @ViewChild('childModal') public childModal: ModalDirective;
    @Input() product: number;

    public isLogedIn: boolean;

    constructor(private _productService: ProductsService, private _authService: AuthService, private _toasterService: ToastService) {

    }

    public showChildModal(): void {
        this.childModal.show();
    }

    public hideChildModal(): void {
        this.childModal.hide();
    }

    addToBascket(event: any) {
        event[0].preventDefault();
        let product = event[1];
        this._productService.addProductToBasket(product)
            .subscribe(data => {
                this._toasterService.activate('Product was added to basket!', true)
            });
    }

    ngOnInit() {
        this.isLogedIn = this._authService.isLoggedIn();
    }
}