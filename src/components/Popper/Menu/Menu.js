import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Menu.module.scss';
import Wrapper from '../Wrapper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }, ...passpros) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                        if (item.action === 'log-out') {
                            alert('a');
                        }
                    }}
                />
            );
        });
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const handleHideMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            // {...passpros}
            placement="bottom-end"
            interactive={true}
            hideOnClick={hideOnClick}
            delay={[0, 700]}
            offset={[12, 8]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <Wrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header onBack={handleBack} title="Language" />}
                        <div className={cx('menu-body')}> {renderItems()}</div>
                    </Wrapper>
                </div>
            )}
            onHide={handleHideMenu}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
