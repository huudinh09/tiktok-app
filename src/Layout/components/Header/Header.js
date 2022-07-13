import classNames from 'classnames/bind';
import TippyNormal from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';

import routeConfig from '@app/config/routes';
import styles from './Header.module.scss';
import Search from '../Search/Search';
import image from '@app/assets/image/index';
import Button from '@app/components/Button/Button';
import Menu from '@app/components/Popper/Menu/Menu';
import Image from '@app/components/Image/Image';
import { CoinIcon, LanguageIcon, LogoutIcon, SettingIcon } from '@app/components/Icon';
const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English (England)',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'kor',
                    title: '한국인 (Korea)',
                },
                {
                    type: 'language',
                    code: 'jap',
                    title: '日本 (Japan)',
                },
                {
                    type: 'language',
                    code: 'chi',
                    title: '中国人 (China)',
                },
                {
                    type: 'language',
                    code: 'fra',
                    title: 'Français (France)',
                },
            ],
        },
    },
    {
        icon: <i className="fa-regular fa-circle-question"></i>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <i className="fa-regular fa-keyboard"></i>,
        title: 'Keyboard shortcuts',
    },
];

const USER_MENU = [
    {
        icon: <i className="fa-regular fa-user"></i>,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <CoinIcon />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <SettingIcon />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEM,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        separate: true,
    },
];
function Header() {
    const curruntUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routeConfig.home} className={cx('logo')}>
                    <Image src={image.logo} alt="logo" />
                </Link>
                <Search />
                <div className={cx('action')}>
                    {curruntUser ? (
                        <>
                            <Button text>
                                <i className="fa-solid fa-plus"></i> Upload
                            </Button>
                            <TippyNormal content="Message">
                                <button className={cx('action-icon', 'plane')}>
                                    <i className="fa-regular fa-paper-plane"></i>
                                </button>
                            </TippyNormal>
                            <TippyNormal content="Inbox">
                                <button className={cx('action-icon')}>
                                    <i className="fa-regular fa-envelope"></i>
                                </button>
                            </TippyNormal>
                        </>
                    ) : (
                        <>
                            <Button text>
                                <i className="fa-solid fa-plus"></i> Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={curruntUser ? USER_MENU : MENU_ITEM} onChange={handleMenuChange}>
                        {curruntUser ? (
                            <Image className={cx('user-avatar')} alt="huudinh09" src={image.userAvatar} />
                        ) : (
                            <button className={cx('more-btn')}>
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
