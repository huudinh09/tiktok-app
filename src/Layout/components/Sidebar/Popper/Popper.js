import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Popper.module.scss';
import Button from '../../../../components/Button/Button';
const cx = classNames.bind(styles);
function Popper({ children, data }) {
    return (
        <div>
            <Tippy
                offset={[-20, -10]}
                placement="bottom"
                delay={[700, 500]}
                interactive={true}
                render={(attrs) => (
                    <div className={cx('wrapper')}>
                        <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                        <Button primary className={cx('btn-follow')}>
                            Follow
                        </Button>
                        <div className={cx('info')}>
                            <span>{data.full_name}</span>
                            <i className="fa-solid fa-circle-check"></i>
                        </div>
                        <p className={cx('nickname')}>{data.nickname}</p>
                        <div className={cx('info-folow')}>
                            <div className={cx('num-follow')}>
                                <span className={cx('num')}>4.1M</span>
                                <span className={cx('title')}>Followers</span>
                            </div>
                            <div className={cx('num-like')}>
                                <span className={cx('num')}>257.9M</span>
                                <span className={cx('title')}>Likes</span>
                            </div>
                        </div>
                    </div>
                )}
                // onClickOutside={}
            >
                {children}
            </Tippy>
        </div>
    );
}
export default Popper;
