import Cookies from 'js-cookie';

const COOKIE_KEY = 'authHeader';

// Save the authHeader in a cookie for 7 days.
export const setAuthCookie = (authHeader: string): void => {
    Cookies.set(COOKIE_KEY, authHeader, { expires: 7, secure: false });
};

// Retrieve the authHeader from the cookie
export const getAuthCookie = (): string | undefined => {
    return Cookies.get(COOKIE_KEY);
};

// Remove the authHeader cookie
export const removeAuthCookie = (): void => {
    Cookies.remove(COOKIE_KEY);
};
