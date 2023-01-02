import axios from 'axios';

const api = axios.create({
    baseURL: 'https://hm-home.onrender.com'
});

export default api;