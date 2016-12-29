export interface Product {
    _id: number;
    title: string,
    description: string,
    price: number;
    quantity: number;
    category: category,
    isConfigurable: Boolean,
    images: [URL],    
    color: String
}

enum category {
    'mug', 't-shirt', 'poster', 'gadgets', 'toys', 'costumes', 'books'
}