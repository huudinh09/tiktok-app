import classNames from 'classnames/bind';

import styles from './DiscoveryMenu.module.scss';
import Button from '@app/components/Button/Button';
// import { MusicIcon, HashtagIcon } from '@app/components/Icon';
const cx = classNames.bind(styles);
function DiscoveryMenu() {
    const discoverList = [
        {
            type: 'hashtag',
            title: 'suthatla',
            icon: <i className="fa-solid fa-hashtag"></i>,
        },
        {
            type: 'hashtag',
            title: 'mackedoi',
            icon: <i className="fa-solid fa-hashtag"></i>,
        },
        {
            type: 'hashtag',
            title: 'sansangthaydoi',
            icon: <i className="fa-solid fa-hashtag"></i>,
        },
        {
            type: 'music',
            title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
            icon: <i className="fa-solid fa-music"></i>,
        },
        {
            type: 'music',
            title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
            icon: <i className="fa-solid fa-music"></i>,
        },
        {
            type: 'music',
            title: 'Thiên Thần Tình Yêu - RICKY STAR',
            icon: <i className="fa-solid fa-music"></i>,
        },
        {
            type: 'hashtag',
            title: '7749hieuung',
            icon: <i className="fa-solid fa-hashtag"></i>,
        },
        {
            type: 'hashtag',
            title: 'genzlife',
            icon: <i className="fa-solid fa-hashtag"></i>,
        },
        {
            type: 'music',
            title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
            icon: <i className="fa-solid fa-music"></i>,
        },
        {
            type: 'music',
            title: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
            icon: <i className="fa-solid fa-music"></i>,
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <p className={cx('header-title')}>Discover</p>
            {discoverList.map((item, index) => (
                <Button
                    key={index}
                    className={cx('btn')}
                    classItem={{
                        title: cx('titleDiscover'),
                        icon: cx('iconDiscover'),
                    }}
                    rounded
                    text
                    small
                    leftIcon={item.icon}
                >
                    {item.title}
                </Button>
            ))}
        </div>
    );
}
export default DiscoveryMenu;
