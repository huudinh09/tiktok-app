import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Search.module.scss'
import Wrapper from '../../../components/Popper/Wrapper'
import AccountItem from '../../../components/AccountItem/AccountItem';
const cx = classNames.bind(styles)
function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [searchValue,setSearchValue] = useState('')
    //import {useState} from 'react
    const [showResult,setShowResult] = useState(true)

    const refInput = useRef()

    useEffect(()=>{
        setTimeout(() =>{
            setSearchResult([1])
        }, 0)
    },[])

    const handleClearSearchValue = () => {
        setSearchValue('')
        setSearchResult([])
        refInput.current.focus();
    }

    const handleClickOutSideResult = () => {
        setShowResult(false)
    }
    return (
        <Tippy
            placement='bottom'
            interactive={true}
            visible = {searchResult.length > 0 && showResult}
            render={attrs => (
                <Wrapper>
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <h4 className={cx('search-lable')}>Accounts</h4>
                        <AccountItem/>
                        <AccountItem/>
                        <AccountItem/>
                        <AccountItem/>
                    </div>
                </Wrapper>
            )}
            onClickOutside={handleClickOutSideResult}
        >
        <div className={cx('search')}>
            <input 
                ref={refInput}
                value={searchValue}
                placeholder='Search accounts and videos' 
                spellCheck='false'
                onChange={e => setSearchValue(e.target.value)}
                onFocus={() => setShowResult(true)}
            />
            {!!searchValue &&
                <button 
                    className={cx('clear', 'icon')}
                    onClick={handleClearSearchValue}
                >
                    <i className="fa-solid fa-circle-xmark"></i>
                </button>
            }
            {/* <button className={cx('loading', 'icon')}>
                <i className="fa-solid fa-spinner"></i>
            </button> */}
            <span className={cx('split-line')}></span>
            <button className={cx('btn-search')}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>  
        </Tippy>
    );
}
export default Search;