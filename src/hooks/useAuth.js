// Common
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// Services
import { auth } from '@services/auth';

const useAuth = () => {
    const router = useRouter();

    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const updater = () => {
            setIsAuth(localStorage.getItem('token') !== null);
            setUser(JSON.parse(localStorage.getItem('user')));
        }
        updater();
        return () => { };
    }, []);

    const authReq = async (form) => {
        try {
            const response = await auth(form);
            localStorage.setItem('user', JSON.stringify(response.data.data));
            localStorage.setItem('token', JSON.stringify(response.data.token));
            router.replace('/home');
        } catch (error) {
            setError(error.response.data);
        } finally {
            setLoading(false);
        }
    };

    const logoutReq = async () => {
        try {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            router.replace('/');
        } catch (error) {
            setError(error.response.data);
        }
    };

    return {
        user,
        isAuth,
        authReq,
        logoutReq,
        loading,
        error,
    };
};

export default useAuth;