import { Product } from './product.model';

export interface Order {
    product: Product;
    state: string;
    quantity: number;
    total: number;
    color: string;
    cateogry: string;
}
