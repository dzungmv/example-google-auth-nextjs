import Image from 'next/image';

import { auth } from '@/components/firebase/config';

import styles from './header.module.scss';

const Tooltip = ({ ref, data }) => {
    console.log('auth', auth);
    return (
        <div className={styles.wrapperTooltip}>
            <div className='personal'>
                <Image
                    src={data?.photoURL}
                    alt='avatar'
                    width='0'
                    height='0'
                    fill={false}
                    sizes='100vw'
                    priority
                />

                <div className='personal-info'>
                    <p>{data?.displayName}</p>
                    <span>{data?.email}</span>
                </div>
            </div>

            <div className='tippy-content'>
                <div
                    className='tippy-content-item'
                    onClick={() => auth.signOut()}>
                    <div className='tippy-content-item-label'>
                        <i className='fa-solid fa-right-from-bracket'></i>
                    </div>
                    <span>Log out</span>
                </div>
            </div>
        </div>
    );
};

export default Tooltip;
