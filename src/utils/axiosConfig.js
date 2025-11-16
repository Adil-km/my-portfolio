import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BLOG_URL;

axios.defaults.withCredentials = true;

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;