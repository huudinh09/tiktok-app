import classNames from "classnames/bind";
import {Link} from 'react-router-dom'

import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem(pros) {
    return (
        <Link to={`/@${pros.data.nickname}`} className={cx('wrapper')}>
            <img 
                className={cx('avatar')} 
                src ={pros.data.avatar}
                alt={pros.data.nickname}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{pros.data.full_name}</span>
                    {pros.data.tick &&
                        <i className="fa-solid fa-circle-check"></i>
                    }
                </h4>
                <span className={cx('username')}>{pros.data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;