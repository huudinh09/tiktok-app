import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

const AccountItem = forwardRef(({ data, classItem = {} }, ref) => {
    return (
        <Link ref={ref} to={`/@${data.nickname}`} className={cx('wrapper', { [classItem.wrapper]: classItem.wrapper })}>
            <img
                className={cx('avatar', { [classItem.avatar]: classItem.avatar })}
                src={data.avatar}
                alt={data.nickname}
            />
            <div className={cx('info', { [classItem.info]: classItem.info })}>
                <h4 className={cx('name', { [classItem.label]: classItem.label })}>
                    <span>{data.full_name}</span>
                    {data.tick && <i className="fa-solid fa-circle-check"></i>}
                </h4>
                <span className={cx('username', { [classItem.nickname]: classItem.nickname })}>{data.nickname}</span>
            </div>
        </Link>
    );
});

export default AccountItem;
