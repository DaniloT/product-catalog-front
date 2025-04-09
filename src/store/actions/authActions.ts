import { getAuthCookie } from '../../utils/authCookie';
import { AuthActionTypes } from './types';

// Action creator for login request
export const loginRequest = (credentials: { username: string; password: string }) => ({
    type: AuthActionTypes.LOGIN_REQUEST,
    payload: credentials,
});

// Action creator for login success
export const loginSuccess = (data: { username: string, authHeader: string }) => ({
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: data,
});

// Action creator for login failure
export const loginFailed = (message: string) => ({
    type: AuthActionTypes.LOGIN_FAILURE,
    payload: message,
});

// Action creator for logout request
export const logoutRequest = () => ({
    type: AuthActionTypes.LOGOUT_REQUEST,
});

// Action creator for logout success
export const logoutSuccess = () => ({
    type: AuthActionTypes.LOGOUT_SUCCESS,
});

// Action creator for logout failure
export const logoutFailure = (error: string) => ({
    type: AuthActionTypes.LOGOUT_FAILURE,
    payload: error,
});

// Action creator for auto login
export const autoLogin = () => (dispatch: any) => {
    const authHeader = getAuthCookie();
    if (!authHeader) return;

    // Decode the authHeader to extract username (assuming it's Basic auth: "Basic base64(username:password)")
    const base64Credentials = authHeader.split(' ')[1];
    let username: string | null = null;
    try {
        const decoded = atob(base64Credentials);
        username = decoded.split(':')[0];
    } catch (error) {
        console.error('Failed to decode credentials', error);
    }

    if (username) {
        dispatch({
            type: AuthActionTypes.LOGIN_SUCCESS,
            payload: {
                username,
                authHeader,
            },
        });
    }
};
