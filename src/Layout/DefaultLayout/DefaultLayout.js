import classNames from 'classnames/bind';
import { useWindowScroll } from 'react-use';
import { useEffect, useState } from 'react';

import styles from './DefaultLayout.module.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import { ToTopIcon, XIcon, PCIcon, MobileIcon } from '@app/components/Icon';
import Button from '@app/components/Button/Button';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const [styleBtnScrollTop, setStyleBtnScrollTop] = useState({ transform: 'translateY(50px)' });
    const [styleBtnGetApp, setStyleBtnGetApp] = useState({ transform: 'translateY(0px)' });
    const [styleMenuGetApp, setStyleMenuGetApp] = useState({});

    const { y: pageYOffset } = useWindowScroll();

    useEffect(() => {
        if (pageYOffset > 10) {
            setStyleBtnScrollTop({});
            setStyleBtnGetApp({ transform: 'translateY(-38px)' });
        } else {
            setStyleBtnScrollTop({ transform: 'translateY(50px)' });
            setStyleBtnGetApp({ transform: 'translateY(0px)' });
        }
    }, [pageYOffset]);

    const onScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleShowMenuGetApp = () => {
        if (JSON.stringify(styleBtnScrollTop) === '{}') {
            setStyleMenuGetApp({ transform: 'scale(1) translateY(-40px)' });
            setStyleBtnGetApp({ transform: 'scale(0)' });
        } else {
            setStyleBtnGetApp({ transform: 'scale(0) ' });
            setStyleMenuGetApp({ transform: 'scale(1)' });
        }
    };

    const handleHideMenuGetApp = () => {
        if (JSON.stringify(styleBtnScrollTop) === '{}') {
            setStyleMenuGetApp({ transform: 'scale(0) translateY(-40px)' });
            setStyleBtnGetApp({ transform: 'scale(1) translateY(-38px)' });
        } else {
            setStyleMenuGetApp({ transform: 'scale(0)' });
            setStyleBtnGetApp({ transform: 'scale(1)' });
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    <Content />
                </div>
            </div>
            <div style={styleBtnGetApp} className={cx('btn-wrapper')}>
                <Button
                    onClick={handleShowMenuGetApp}
                    classItem={{ title: cx('title-get-app') }}
                    className={cx('btn-get-app')}
                    rounded
                    text
                    small
                >
                    Get app
                </Button>
            </div>
            <div style={styleBtnScrollTop} onClick={onScroll} className={cx('btnScrollTop')}>
                <ToTopIcon />
            </div>
            <div style={styleMenuGetApp} className={cx('get-app-menu')}>
                <div className={cx('get-app-button')}>
                    <Button className={cx('btn')} classItem={{ title: cx('title-get-app-menu') }} leftIcon={<PCIcon />}>
                        Get TikTok for desktop
                    </Button>
                    <div className={cx('get-app-menu-line')}></div>
                    <Button className={cx('btn-after', 'btn')} leftIcon={<MobileIcon />}>
                        Get TikTok App
                    </Button>
                </div>
                <div onClick={handleHideMenuGetApp} className={cx('close-icon')}>
                    <XIcon />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
