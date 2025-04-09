import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

// Function to encode username and password in base64
const encodeBasicAuth = (username: string, password: string) => {
    const credentials = `${username}:${password}`;
    return 'Basic ' + btoa(credentials);
};

// Function to call the login API (basic authentication)
// Since it's basic authentication, it uses the username and password in a test request to verify
export const loginApi = async (username: string, password: string) => {
    try {
        const authHeader = encodeBasicAuth(username, password);

        await axios.get(
            `${BASE_URL}/products`,
            {
                headers: {
                    Authorization: authHeader,
                },
            }
        ).catch(function (error) {
            if (error.response.status === 401) {
                throw new Error('Incorrect username or password.');
            } else {
                throw new Error(error.message);
            }
        });

        return { username, authHeader };
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message || 'Login failed.');
        } else {
            throw new Error('Login failed.');
        }
    }
};
