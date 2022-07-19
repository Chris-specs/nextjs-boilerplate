import axios from 'axios';

const apiInstance = axios.create({
    baseURL: '/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

apiInstance.interceptors.request.use((req) => {
    req.headers.token = `${localStorage.getItem('token') ?? ''}`;
    return req;
});

apiInstance.interceptors.response.use(res => {
    return res;
}, async (error) => {
    const { response: { status } } = error;

    if (status === 401 && !window.location.pathname.includes('/login')) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return;
    }
    return Promise.reject(error)
})

export default apiInstance;
