import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import TippyNormal from '@tippyjs/react';
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
        title: 'English',
        children:{
            title: 'language',
            data:[
                {
                    type: 'language',
                    code: 'en',
                    title: 'English (England)'
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng việt (Việt Nam)'
                },
                {
                    type: 'language',
                    code: 'kor',
                    title: '한국인 (Korea)'
                },
                {
                    type: 'language',
                    code: 'jap',
                    title: '日本 (Japan)'
                },
                {
                    type: 'language',
                    code: 'chi',
                    title: '中国人 (China)'
                },
                {
                    type: 'language',
                    code: 'fra',
                    title: 'Français (France)'
                },
            ]
        }
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

const USER_MENU = [
    {
        icon: <i className="fa-regular fa-user"></i>,
        title: 'View profile',
        to: '/profile'
    },
    {
        icon: <i className="fa-solid fa-coins"></i>,
        title: 'Get coins',
        to: '/coin'
    },
    {
        icon: <i className="fa-solid fa-gear"></i>,
        title: 'Setting',
        to: '/setting'
    },
    ...MENU_ITEM,
    {
        icon: <i className="fa-solid fa-right-from-bracket"></i>,
        title: 'Log out',
        separate: true
    },
]
function Header() {
    const [searchResult, setSearchResult] = useState([])

    const curruntUser = true
    useEffect(()=>{
        setTimeout(() =>{
            setSearchResult([])
        }, 0)
    },[])

    const handleMenuChange = (menuItem) =>{
        switch (menuItem.type){
            case 'language': 
             //handle change language
                break
            default:
        }
    }
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
                    {curruntUser ? 
                    <>
                        <Button text ><i className="fa-solid fa-plus"></i> Upload</Button>
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
                    :
                    <>
                        <Button text ><i className="fa-solid fa-plus"></i> Upload</Button>
                        <Button primary >Log in</Button>     
                        
                    </>
                    }
                    <Menu items={curruntUser ? USER_MENU : MENU_ITEM } onChange={handleMenuChange}>
                    {curruntUser ?
                        <img className={cx('user-avatar')} alt='huudinh09' src={image.userAvatar}/>
                    :
                        <button className={cx('more-btn')}>
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                    }
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;