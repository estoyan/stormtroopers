export interface Product {
    _id: number;
    name: string,
    description: string,
    price: number;
    quantity: number;
    category: category,
    isConfigurable: Boolean,
    imageUrl: string,    
    color: String
}

enum category {
    'mug', 't-shirt', 'poster', 'gadgets', 'toys', 'costumes', 'books'
}