import classNames from 'classnames/bind';
import TippyNormal from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { MENU_ITEM, USER_MENU } from '@app/data/Data';
import routeConfig from '@app/config/routes';
import styles from './Header.module.scss';
import Search from '../Search/Search';
import image from '@app/assets/image/index';
import Button from '@app/components/Button/Button';
import Menu from '@app/components/Popper/Menu/Menu';
import Image from '@app/components/Image/Image';
const cx = classNames.bind(styles);

function Header() {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(true);

    const curruntUser = user;

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
