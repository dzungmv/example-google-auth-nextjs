'use client';

import { useContext, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';
import Link from 'next/link';
import Tippy from '@tippyjs/react';

import { AuthContext } from '@/components/common/AuthProvider';
import styles from './header.module.scss';
import Tooltip from './content.tooltip';

const Header = () => {
    const { user } = useContext(AuthContext);

    const toolTipRef = useRef(null);

    console.log(user);

    return (
        <section className={styles.wrapperHeader}>
            <div className='container'>
                <div className='header-left'>
                    <Link href='/' className='header-left-logo'>
                        <Player
                            src={
                                'https://assets4.lottiefiles.com/packages/lf20_hylaaytn.json' ??
                                ''
                            }
                            autoplay
                            loop
                            style={{
                                width: '50px',
                                height: '50px',
                            }}
                        />
                        <h1 className='logo'>Notes app</h1>
                    </Link>
                </div>

                <div className='header-right'>
                    <Tippy
                        ref={toolTipRef}
                        content={<Tooltip data={user} />}
                        trigger='click'
                        interactive
                        placement='bottom'>
                        <div className='header-right-avatar'>
                            <Image
                                src={user?.photoURL}
                                alt='avatar'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                                priority
                            />
                        </div>
                    </Tippy>
                </div>
            </div>
        </section>
    );
};

export default Header;
