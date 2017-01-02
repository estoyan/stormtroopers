import { Product } from './product.model';
import { PaymentMethod } from './payment-method.enum';

export interface Order {
    product: Product;
    state: string;
    quantity: number;
    total: number;
    _id: string;
    color: string;
    cateogry: string;
    deliveryDetails: {
        firstname: string;
        lastname: string;
        phoneNumber: string;
        address: string;
        paymentMethod: PaymentMethod;
    };
}
