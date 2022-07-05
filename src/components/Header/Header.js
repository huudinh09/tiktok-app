import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import image from '../../assets/image/index'
import {Link} from 'react-router-dom'
const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to='/' className={cx('logo')}>
                    <img src={image.logo} alt='logo'/>
                </Link>
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
                <div className={cx('action')}>asdasdasdasd</div>
            </div>
        </header>
    );
}

export default Header;