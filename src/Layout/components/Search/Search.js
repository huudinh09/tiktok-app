import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Search.module.scss'
import Wrapper from '../../../components/Popper/Wrapper'
import AccountItem from '../../../components/AccountItem/AccountItem';
import useDebounce from '../../../hooks/useDebounce'
import * as searchServices from '../../../apiServices/searchServices';

const cx = classNames.bind(styles)
function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [searchValue,setSearchValue] = useState('')
    const [showResult,setShowResult] = useState(true)
    const [loading,setLoading] = useState(false)

    const refInput = useRef()

    const debounce = useDebounce(searchValue, 700)

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounce);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounce]);

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
                        {searchResult.map((item, index) => (
                            <AccountItem data={item} key={index} />
                        ))}
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
            {!!searchValue && !loading ?
                <button 
                    className={cx('clear', 'icon')}
                    onClick={handleClearSearchValue}
                >
                    <i className="fa-solid fa-circle-xmark"></i>
                </button>: ''
            }
            {loading && 
                <button className={cx('loading', 'icon')}>
                    <i className="fa-solid fa-circle-notch"></i>
                </button>
            }
            <span className={cx('split-line')}></span>
            <button className={cx('btn-search')}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>  
        </Tippy>
    );
}
export default Search;