import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';

import styles from './Popper.module.scss';
import Button from '@app/components/Button/Button';
import Image from '@app/components/Image/Image';

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
                        <Link to={`/@${data.nickname}`}>
                            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                        </Link>
                        <Button primary className={cx('btn-follow')}>
                            Follow
                        </Button>
                        <Link to={`/@${data.nickname}`} className={cx('info')}>
                            <span>{data.full_name}</span>
                            <i className="fa-solid fa-circle-check"></i>
                        </Link>
                        <Link to={`/@${data.nickname}`} className={cx('nickname')}>
                            {data.nickname}
                        </Link>
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
