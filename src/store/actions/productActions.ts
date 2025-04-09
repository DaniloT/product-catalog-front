import { Product } from "../../types";
import { ProductActionTypes } from "./types";

// Action Creators
export const fetchProductsRequest = (page: number, size: number = 10) => ({
    type: ProductActionTypes.FETCH_PRODUCTS_REQUEST,
    payload: { page, size },
});

export const fetchProductsSuccess = (products: Product[], totalPages: number) => ({
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: { products, totalPages },
});

export const fetchProductsFailure = (error: string) => ({
    type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
    payload: error,
});

export const setPage = (page: number) => ({
    type: ProductActionTypes.SET_PAGE,
    payload: page,
});

export const fetchProductById = (id: number) => ({
    type: ProductActionTypes.FETCH_PRODUCT_BY_ID,
    payload: id,
});

export const fetchProductByIdSuccess = (product: Product) => ({
    type: ProductActionTypes.FETCH_PRODUCT_BY_ID_SUCCESS,
    payload: product,
});

export const fetchProductByIdFailure = (error: string) => ({
    type: ProductActionTypes.FETCH_PRODUCT_BY_ID_FAILURE,
    payload: error,
});

export const createProduct = (productData: any) => ({
    type: ProductActionTypes.CREATE_PRODUCT,
    payload: productData,
});

export const createProductSuccess = () => ({
    type: ProductActionTypes.CREATE_PRODUCT_SUCCESS,
});

export const createProductFailure = (error: string) => ({
    type: ProductActionTypes.CREATE_PRODUCT_FAILURE,
    payload: error,
});

export const deleteProduct = (id: number) => ({
    type: ProductActionTypes.DELETE_PRODUCT,
    payload: id,
});

export const updateProduct = (product: Product) => ({
    type: ProductActionTypes.UPDATE_PRODUCT,
    payload: product,
});

export const updateProductSuccess = () => ({
    type: ProductActionTypes.UPDATE_PRODUCT_SUCCESS,
});

export const updateProductFailure = (error: string) => ({
    type: ProductActionTypes.UPDATE_PRODUCT_FAILURE,
    payload: error,
});

export const clearSelectedProduct = () => ({
    type: ProductActionTypes.CLEAR_SELECTED_PRODUCT,
});


