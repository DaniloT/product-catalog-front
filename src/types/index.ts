export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export interface PaginatedProductResponse {
    content: Product[];
    totalPages: number;
    totalElements: number;
    number: number;
    size: number;
    first: boolean;
    last: boolean;
}
