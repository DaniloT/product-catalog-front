import { all } from 'redux-saga/effects';
import watchLoginRequest from './authSaga';
import watchProductActions from './productSaga';

export default function* rootSaga() {
    yield all([
        watchLoginRequest(),
        watchProductActions(),
    ]);
}
