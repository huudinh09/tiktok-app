import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Menu.module.scss'
import Wrapper from "../Wrapper";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles)
function Menu({children, items=[]}) {
    const renderItems = () => {
        return items.map((item, index) => (
                <MenuItem key={index} data={item}/>        
        ))
    }
    return (
        <Tippy
            placement='bottom-start'
            interactive={true}
            delay= {[0,1000]}
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <Wrapper className={cx('menu-popper')}>
                        {renderItems()}
                    </Wrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;

