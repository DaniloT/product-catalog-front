import { axiosWithAuth } from './axiosWithAuth';
import { Product } from '../types';

// Fetch paginated products
export const fetchProductsApi = async (page: number, authHeader: string) => {
    const axios = axiosWithAuth(authHeader);
    try {
        const response = await axios.get(`/products?page=${page}&size=10&sort=name,asc`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch products');
    }
};

// Create a new product
export const createProductApi = async (productData: Product, authHeader: string) => {
    const axios = axiosWithAuth(authHeader);
    try {
        const response = await axios.post('/products', productData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create product');
    }
};

// Delete a product by ID
export const deleteProductApi = async (id: number, authHeader: string) => {
    const axios = axiosWithAuth(authHeader);
    try {
        const response = await axios.delete(`/products/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to delete product');
    }
};

// Fetch a single product by ID
export const fetchProductByIdApi = async (id: number, authHeader: string) => {
    const axios = axiosWithAuth(authHeader);
    try {
        const response = await axios.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch product');
    }
};

// Update a product
export const updateProductApi = async (productData: Product, authHeader: string) => {
    const axios = axiosWithAuth(authHeader);
    try {
        const response = await axios.put(`/products/${productData.id}`, productData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update product');
    }
};
