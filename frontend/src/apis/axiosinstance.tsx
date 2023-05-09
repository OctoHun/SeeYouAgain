import axios, { AxiosInstance } from 'axios';

function getCookie(name: string) {
    const cookie = document.cookie;

    const matches = cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const interceptors = (instance: AxiosInstance) => {
    instance.interceptors.request.use(
        config => {
            // const token = getCookie('accessToken');
            const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjgzNjA5MjY5LCJleHAiOjE2ODM2OTU2Njl9.MfNtTxez3-0IRh6i0lz6aH4xZkN4u3CgGm7TPsiOjYI';
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        },
        error => Promise.reject(error.response),
    );
    return instance;
};

const BASE_URL = 'http://k8c101.p.ssafy.io:8000';
// const BASE_URL = 'http://localhost:8000';

const axiosApi = (url: string, options?: object) => {
    const instance = axios.create({ baseURL: url, ...options });
    return instance;
};

const axiosAuthApi = (url: string, options?: object) => {
    const instance = axios.create({ baseURL: url, ...options });
    interceptors(instance);
    return instance;
};

export const axBase = axiosApi(BASE_URL);
export const axAuth = axiosAuthApi(BASE_URL);
