import { Product } from './product.model';

export interface Order {
    product: Product;
    state: string;
    quantity: number;
    total: number;
    _id: string;
    color: string;
    cateogry: string;
}
