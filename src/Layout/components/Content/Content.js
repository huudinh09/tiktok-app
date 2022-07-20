import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import ListVideo from './ListVideo/ListVideo';

const cx = classNames.bind(styles);
function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('videolist')}>
                <ListVideo />
            </div>
        </div>
    );
}
export default Content;
