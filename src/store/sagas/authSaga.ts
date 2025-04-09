import { all, call, put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFailed, logoutSuccess, logoutFailure } from '../actions/authActions';
import { AuthActionTypes } from '../actions/types';
import { loginApi } from '../../api/authApi';
import { setAuthCookie, removeAuthCookie, getAuthCookie } from '../../utils/authCookie';

function* loginSaga(action: any): Generator<any, void, any> {
    try {
        const { username, password } = action.payload;
        const response = yield call(loginApi, username, password);
        yield call(setAuthCookie, response.authHeader);
        yield put(loginSuccess({
            username: response.username,
            authHeader: response.authHeader,
        }));
    } catch (error: unknown) {
        if (error instanceof Error) {
            yield put(loginFailed(error.message));
        } else {
            yield put(loginFailed('An unknown error occurred'));
        }
    }
}

function* logoutSaga(): Generator<any, void, any> {
    try {
        yield put(logoutSuccess());
        yield call(removeAuthCookie);
        window.location.href = '/login';
    } catch (error: unknown) {
        if (error instanceof Error) {
            yield put(logoutFailure(error.message));
        } else {
            yield put(logoutFailure('Unknown logout error.'));
        }
    }
}

function* autoLoginSaga(): Generator<any, void, any> {
    const authHeader = yield call(getAuthCookie);
    if (!authHeader) return;

    // Decode the authHeader to extract username
    const base64Credentials = authHeader.split(' ')[1];
    let username: any = null;
    let password: any = null;
    try {
        const decoded = atob(base64Credentials);
        username = decoded.split(':')[0];
        password = decoded.split(':')[1];
    } catch (error) {
        console.error('Failed to decode credentials', error);
    }
    try {
        const response = yield call(loginApi, username, password);
        yield put(loginSuccess({
            username: response.username,
            authHeader: response.authHeader,
        }));
    } catch (error: unknown) {
        if (error instanceof Error) {
            yield put(loginFailed(error.message));
        } else {
            yield put(loginFailed('An unknown error occurred'));
        }
    }
}

function* watchLoginRequest() {
    yield takeLatest(AuthActionTypes.LOGIN_REQUEST, loginSaga);
}

function* watchLogoutRequest() {
    yield takeLatest(AuthActionTypes.LOGOUT_REQUEST, logoutSaga);
}

export default function* authSaga() {
    yield call(autoLoginSaga);
    yield all([
        watchLoginRequest(),
        watchLogoutRequest(),
    ]);
}
