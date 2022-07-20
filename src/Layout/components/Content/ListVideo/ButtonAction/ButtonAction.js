import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import styles from './ButtonAction.module.scss';

const cx = classNames.bind(styles);
const ButtonAction = forwardRef(({ children, num }, ref) => {
    return (
        <button ref={ref} className={cx('btn-action')}>
            <span className={cx('action-icon')}>{children}</span>
            <strong className={cx('num-action')}>{num}</strong>
        </button>
    );
});
export default ButtonAction;
