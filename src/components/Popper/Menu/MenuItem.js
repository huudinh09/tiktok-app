
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'

import Button from '../../Button/Button';
const cx = classNames.bind(styles)
function MenuItem({data, onClick}) {
    return (
        <Button onClick={onClick} className={cx('menu-item')} leftIcon={data.icon} to={data.to}>{data.title}</Button>
    );
}
export default MenuItem;