import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import {Link} from 'react-router-dom'

import styles from './Header.module.scss'
import image from '../../assets/image/index'
import Wrapper from '../Popper/Wrapper'
import AccountItem from '../AccountItem/AccountItem';
import Button from '../Button/Button';
import Menu from '../Popper/Menu/Menu';
const cx = classNames.bind(styles)

const MENU_ITEM = [
    {
        icon: <i className="fa-solid fa-earth-asia"></i>,
        title: 'English'
    },
    {
        icon: <i className="fa-regular fa-circle-question"></i>,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <i className="fa-regular fa-keyboard"></i>,
        title: 'Keyboard shortcuts'
    }
]
function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(()=>{
        setTimeout(() =>{
            setSearchResult([1])
        }, 0)
    },[])
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to='/' className={cx('logo')}>
                    <img src={image.logo} alt='logo'/>
                </Link>
                <Tippy
                    placement='bottom'
                    interactive={true}
                    visible = {searchResult.length > 0}
                    render={attrs => (
                        <Wrapper>
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <h4 className={cx('search-lable')}>Accounts</h4>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                            </div>
                        </Wrapper>
                    )}
                >
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck='false'/>
                    <button className={cx('clear', 'icon')}>
                        <i className="fa-solid fa-circle-xmark"></i>
                    </button>
                    <button className={cx('loading', 'icon')}>
                        <i className="fa-solid fa-spinner"></i>
                    </button>
                    <span className={cx('split-line')}></span>
                    <button className={cx('btn-search')}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>  
                </Tippy>
                <div className={cx('action')}>
                        <Button text ><i className="fa-solid fa-plus"></i> Upload</Button>
                        <Button primary >Log in</Button>
                        
                <Menu items={MENU_ITEM }>
                    <button className={cx('more-btn')}>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;