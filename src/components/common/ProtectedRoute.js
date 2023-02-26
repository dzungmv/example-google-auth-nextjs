'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { AuthContext } from './AuthProvider';

export default function ProtectedRoute({ children }) {
    const router = useRouter();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!localStorage.getItem('accessToken')) {
            router.push('/login');
        }
    }, []);

    if (!user) {
        return <p>Loading</p>;
    }
    return children;
}
