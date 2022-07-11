import classNames from 'classnames/bind';
import styles from './Live.module.scss'

const cx = classNames.bind(styles)
function Live() {
    return (
        <h2 className={cx('wrapper')}>Live Page</h2>
    );
}
export default Live;