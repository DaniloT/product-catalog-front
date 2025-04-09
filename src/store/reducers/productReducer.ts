import { Product } from '../../types';
import {
    ProductActions,
    ProductActionTypes,
} from '../actions/types';

interface ProductState {
    items: {
        content: Product[];
        totalPages: number;
    };
    loading: boolean;
    createLoading: boolean;
    createError: string | null;
    updateError: string | null;
    selectedProduct: Product | null;
    page: number;
}

const initialState: ProductState = {
    items: {
        content: [],
        totalPages: 0,
    },
    loading: false,
    createLoading: false,
    createError: null,
    updateError: null,
    selectedProduct: null,
    page: 1,
};

const productReducer = (state = initialState, action: ProductActions): ProductState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCTS_REQUEST:
            return { ...state, loading: true };

        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: {
                    content: state.page === 1 ? action.payload.products :
                        [...state.items.content, ...action.payload.products],
                    totalPages: action.payload.totalPages,
                },
            };

        case ProductActionTypes.FETCH_PRODUCTS_FAILURE:
            return { ...state, loading: false };

        case ProductActionTypes.CREATE_PRODUCT:
            return { ...state, createLoading: true, createError: null };

        case ProductActionTypes.CREATE_PRODUCT_SUCCESS:
            return { ...state, createLoading: false };

        case ProductActionTypes.CREATE_PRODUCT_FAILURE:
            return { ...state, createLoading: false, createError: action.payload };

        case ProductActionTypes.SET_PAGE:
            return { ...state, page: action.payload };

        case ProductActionTypes.FETCH_PRODUCT_BY_ID:
            return { ...state, selectedProduct: null };

        case ProductActionTypes.FETCH_PRODUCT_BY_ID_SUCCESS:
            return { ...state, selectedProduct: action.payload };

        case ProductActionTypes.FETCH_PRODUCT_BY_ID_FAILURE:
            return { ...state, selectedProduct: null };

        case ProductActionTypes.CLEAR_SELECTED_PRODUCT:
            return { ...state, selectedProduct: null };

        case ProductActionTypes.UPDATE_PRODUCT:
            return { ...state, loading: true, updateError: null };

        case ProductActionTypes.UPDATE_PRODUCT_SUCCESS:
            return { ...state, loading: false };

        case ProductActionTypes.UPDATE_PRODUCT_FAILURE:
            return { ...state, loading: false, updateError: action.payload };

        default:
            return state;
    }
};

export default productReducer;
