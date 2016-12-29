export interface Product {
    _id: number;
    title: string,
    description: string,
    price: number;
    quantity: number;
    category: category,
    isConfigurable: boolean,
    images: [URL],    
    color: string
}

enum category {
    'mug', 't-shirt', 'poster', 'gadgets', 'toys', 'costumes', 'books'
}