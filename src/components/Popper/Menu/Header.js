import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
function Header({title, onBack}) {
    return (
        <header className={cx('header')}>
            <button onClick={onBack} className={cx('back-btn')}>
                <i className="fa-solid fa-caret-left"></i>
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}
export default Header;