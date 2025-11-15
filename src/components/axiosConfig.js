import axios from 'axios';

// 1. Set the Base URL to LOCALHOST for consistency with the React environment.
// This matches your Node.js API running on port 5001.
const BASE_URL = 'https://portfolio-backend-csn6.onrender.com';

// 2. CRITICAL: Instruct the browser to attach the httpOnly cookie on all cross-origin requests.
axios.defaults.withCredentials = true;

// Create an instance for use across the application
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;