import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export const axiosWithAuth = (authHeader: string) => {
    if (!authHeader) {
        throw new Error('No authentication header found');
    }

    // Create and return axios instance with Authorization header
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: authHeader,
        },
    });
};
