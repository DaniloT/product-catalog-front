import { takeEvery, call, put, select, takeLatest } from 'redux-saga/effects';
import {
    createProduct,
    fetchProductsRequest,
    deleteProduct,
    fetchProductsSuccess,
    fetchProductsFailure,
    createProductFailure,
    createProductSuccess,
    setPage,
    fetchProductById,
    fetchProductByIdSuccess,
    fetchProductByIdFailure,
    updateProduct,
    updateProductSuccess,
    updateProductFailure,
} from '../actions/productActions';
import {
    fetchProductsApi,
    deleteProductApi,
    createProductApi,
    fetchProductByIdApi,
    updateProductApi,
} from '../../api';

import { toast } from 'react-toastify';
import { ProductActionTypes } from '../actions/types';

// Selector to get the authHeader from Redux state
const selectAuthHeader = (state: any) => state.auth.authHeader;

// --- Create Product Saga ---
function* createProductSaga(action: ReturnType<typeof createProduct>): Generator<any, void, any> {
    try {
        const authHeader = yield select(selectAuthHeader);
        if (!authHeader) throw new Error('No authentication header found');

        yield call(createProductApi, action.payload, authHeader);
        yield put(createProductSuccess());
        yield put(fetchProductsRequest(1));
        toast.success('Product created successfully!');
    } catch (e) {
        yield put(createProductFailure('Failed to create product'));
        toast.error('Failed to create product');
    }
}

// --- Fetch Products Saga ---
function* fetchProductsSaga(action: ReturnType<typeof fetchProductsRequest>): Generator<any, void, any> {
    try {
        const authHeader = yield select(selectAuthHeader);
        if (!authHeader) throw new Error('No authentication header found');

        const response = yield call(fetchProductsApi, action.payload.page, authHeader);

        const { content, totalPages } = response;

        yield put(fetchProductsSuccess(content, totalPages));
    } catch (e) {
        yield put(fetchProductsFailure('Failed to fetch products'));
        toast.error('Failed to fetch products');
    }
}

// --- Fetch Product by ID Saga ---
function* fetchProductByIdSaga(action: ReturnType<typeof fetchProductById>): Generator<any, void, any> {
    try {
        const authHeader = yield select(selectAuthHeader);
        if (!authHeader) throw new Error('No authentication header found');

        const response = yield call(fetchProductByIdApi, action.payload, authHeader);

        yield put(fetchProductByIdSuccess(response));
    } catch (e) {
        yield put(fetchProductByIdFailure('Failed to fetch product'));
        toast.error('Failed to fetch product');
    }
}

// --- Delete Product Saga ---
function* deleteProductSaga(action: ReturnType<typeof deleteProduct>): Generator<any, void, any> {
    try {
        const authHeader = yield select(selectAuthHeader);
        if (!authHeader) throw new Error('No authentication header found');

        yield call(deleteProductApi, action.payload, authHeader);
        yield put({ type: 'DELETE_PRODUCT_SUCCESS', payload: action.payload });
        toast.success('Product deleted successfully!');
    } catch (e) {
        yield put({ type: 'DELETE_PRODUCT_FAILED' });
        toast.error('Failed to delete product');
    }
}

// --- Update Product Saga ---
function* updateProductSaga(action: ReturnType<typeof updateProduct>): Generator<any, void, any> {
    try {
        const authHeader = yield select(selectAuthHeader);
        if (!authHeader) throw new Error('No authentication header found');

        yield call(updateProductApi, action.payload, authHeader);
        yield put(updateProductSuccess());
        yield put(fetchProductsRequest(1));
        toast.success('Product updated successfully!');
    } catch (e) {
        yield put(updateProductFailure('Failed to update product'));
        toast.error('Failed to update product');
    }
}

function* onDeleteProductSuccess(): Generator<any, void, any> {
    yield put(fetchProductsRequest(0));
    yield put(setPage(1));
}

// Root Product Saga
function* productSaga() {
    yield takeLatest(ProductActionTypes.FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
    yield takeEvery(ProductActionTypes.CREATE_PRODUCT, createProductSaga);
    yield takeEvery(ProductActionTypes.DELETE_PRODUCT, deleteProductSaga);
    yield takeEvery(ProductActionTypes.FETCH_PRODUCT_BY_ID, fetchProductByIdSaga);
    yield takeEvery(ProductActionTypes.UPDATE_PRODUCT, updateProductSaga);
    yield takeEvery(ProductActionTypes.DELETE_PRODUCT_SUCCESS, onDeleteProductSuccess);
}

export default productSaga;
