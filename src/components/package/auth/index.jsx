'use client';
import Image from 'next/image';
import { Player } from '@lottiefiles/react-lottie-player';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { auth } from '@/components/firebase/config';
import { AuthContext } from '@/components/common/AuthProvider';

import styles from './login.module.scss';

const LoginPage = () => {
    const router = useRouter();

    const { user } = useContext(AuthContext);
    const handleLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const res = await signInWithPopup(auth, provider);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    if (user?.uid) {
        router.push('/');
    }
    return (
        <div className={styles.wrapperLogin}>
            <div className='login-container'>
                <div className='login-left'>
                    <h3 className='login-left-hi'>
                        Hi, stranger
                        <span
                            style={{
                                display: 'inline-block',
                                width: '100px',
                                height: '100px',
                            }}>
                            <Player
                                src={
                                    'https://assets1.lottiefiles.com/packages/lf20_myejiggj.json'
                                }
                                autoplay
                                loop
                            />
                        </span>
                    </h3>
                    <h2 className='login-left-title'>Wellcome to Notes app</h2>
                    <p className='login-left-desc'>
                        Notes is the best place to jot down quick thoughts or to
                        save longer notes filled with checklists, images, web
                        links, scanned documents, handwritten notes, ...{' '}
                    </p>

                    <button onClick={handleLoginWithGoogle}>
                        <i className='fa-brands fa-google'></i>
                        Login with google
                    </button>
                </div>
                <div className='login-right'>
                    <Image
                        src='https://jungjung261.blob.core.windows.net/nextjs-project/notes_app/hero-login.png'
                        alt='Login Image'
                        width='0'
                        height='0'
                        sizes='100vw'
                        fill={false}
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
