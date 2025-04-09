import { AuthActionTypes } from '../actions/types';

const initialState = {
    username: null,
    authHeader: null,
    error: null,
    isAuthenticated: false,
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                username: null,
                authHeader: null,
                error: null,
                isAuthenticated: false,
            };
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                authHeader: action.payload.authHeader,
                error: null,
                isAuthenticated: true,
            };
        case AuthActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                username: null,
                authHeader: null,
                error: action.payload,
                isAuthenticated: false,
            };
        case AuthActionTypes.LOGOUT_SUCCESS:
            return initialState;
        case AuthActionTypes.LOGOUT_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
