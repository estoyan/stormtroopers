export interface Product {
    _id: number;
    title: string;
    description: string;
    price: number;
    quantity: number;
    category: category;
    isConfigurable: boolean;
    imageUrl: string;
    color: string;
}

enum category {
    'mug', 't-shirt', 'poster', 'gadgets', 'toys', 'costumes', 'books'
}
