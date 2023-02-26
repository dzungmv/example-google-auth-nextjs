'use client';

import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/components/firebase/config';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onIdTokenChanged((user) => {
            if (user?.uid) {
                setUser(user);
                localStorage.setItem('accessToken', user.accessToken);
                return;
            }

            setUser({});
            localStorage.clear();
            router.push('/login');
        });

        return () => unsubscribe();
    }, [auth]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}
