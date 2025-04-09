import { Product } from '../../types';

export enum AuthActionTypes {
    LOGIN_REQUEST = 'LOGIN_REQUEST',
    LOGOUT_REQUEST = 'LOGOUT_REQUEST',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
    LOGOUT = 'LOGOUT',
    LOGOUT_FAILURE = 'LOGOUT_FAILURE',
}

export enum ProductActionTypes {
    FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
    FETCH_PRODUCT_BY_ID = 'FETCH_PRODUCT_BY_ID',
    FETCH_PRODUCT_BY_ID_SUCCESS = 'FETCH_PRODUCT_BY_ID_SUCCESS',
    FETCH_PRODUCT_BY_ID_FAILURE = 'FETCH_PRODUCT_BY_ID_FAILURE',
    CREATE_PRODUCT = 'CREATE_PRODUCT',
    CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS',
    CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
    DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS',
    UPDATE_PRODUCT = 'UPDATE_PRODUCT',
    UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS',
    UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE',
    SET_PAGE = 'SET_PAGE',
    CLEAR_SELECTED_PRODUCT = 'CLEAR_SELECTED_PRODUCT',
}

// Action Interfaces
export interface FetchProductsRequestAction {
    type: ProductActionTypes.FETCH_PRODUCTS_REQUEST;
    payload: { page: number; size: number };
}

export interface FetchProductsSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: {
        products: Product[];
        totalPages: number;
    };
}

export interface FetchProductsFailureAction {
    type: ProductActionTypes.FETCH_PRODUCTS_FAILURE;
    payload: string;
}

export interface FetchProductByIdAction {
    type: ProductActionTypes.FETCH_PRODUCT_BY_ID;
    payload: Product;
}

export interface CreateProductAction {
    type: ProductActionTypes.CREATE_PRODUCT;
    payload: any;
}

export interface CreateProductSuccessAction {
    type: ProductActionTypes.CREATE_PRODUCT_SUCCESS;
}

export interface CreateProductFailureAction {
    type: ProductActionTypes.CREATE_PRODUCT_FAILURE;
    payload: string;
}

export interface SetPageAction {
    type: ProductActionTypes.SET_PAGE;
    payload: number;
}

export interface FetchProductByIdSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCT_BY_ID_SUCCESS;
    payload: Product;
}

export interface FetchProductByIdFailureAction {
    type: ProductActionTypes.FETCH_PRODUCT_BY_ID_FAILURE;
    payload: string;
}

export interface ClearSelectedProductAction {
    type: ProductActionTypes.CLEAR_SELECTED_PRODUCT;
    payload: any;
}

export interface UpdateProductAction {
    type: ProductActionTypes.UPDATE_PRODUCT;
    payload: any;
}

export interface UpdateProductSuccessAction {
    type: ProductActionTypes.UPDATE_PRODUCT_SUCCESS;
    payload: any;
}

export interface UpdateProductFailureAction {
    type: ProductActionTypes.UPDATE_PRODUCT_FAILURE;
    payload: any;
}

export type ProductActions =
    | FetchProductsRequestAction
    | FetchProductsSuccessAction
    | FetchProductsFailureAction
    | FetchProductByIdAction
    | FetchProductByIdSuccessAction
    | FetchProductByIdFailureAction
    | CreateProductAction
    | CreateProductSuccessAction
    | CreateProductFailureAction
    | SetPageAction
    | ClearSelectedProductAction
    | UpdateProductAction
    | UpdateProductFailureAction
    | UpdateProductSuccessAction;
