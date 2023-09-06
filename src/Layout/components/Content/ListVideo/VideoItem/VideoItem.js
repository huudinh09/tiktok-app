import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './VideoItem.module.scss';
import image from '@app/assets/image';
import videos from '@app/assets/video';
import { ArrowDownIcon, ArrowIcon, CommentIcon, HeartActiveIcon, HeartIcon, ShareIcon } from '@app/components/Icon';
import Image from '@app/components/Image/Image';
import Video from './Video';
import Button from '@app/components/Button/Button';
import ButtonAction from '../ButtonAction/ButtonAction';
import { ACTION_SHARE } from '@app/data/Data';

const cx = classNames.bind(styles);
function VideoItem({ data, id }) {
    const [isFollow, setIsFollow] = useState(true);
    const [isLiked, setIsLiked] = useState(false);
    const [likeIconStyle, setLikeIconStyle] = useState({});
    const [dataAction, setDataAction] = useState(ACTION_SHARE.slice(0, 5));
    const [showBtnShowMoreAction, setShowBtnShowMoreAction] = useState(true);
    const [actionListStyle, setActionListStyle] = useState({});
    const handleClickFollow = () => {
        setIsFollow(false);
    };

    const handleClickUnfollw = () => {
        setIsFollow(true);
    };

    const handleShowMoreAction = () => {
        setDataAction(ACTION_SHARE);
        setShowBtnShowMoreAction(false);
        setActionListStyle({ height: '448px' });
    };

    const handleHideAcctionShare = () => {
        setDataAction(ACTION_SHARE.slice(0, 5));
        setShowBtnShowMoreAction(true);
        setActionListStyle({});
    };

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikeIconStyle({});
    };
    return (
        <div className={cx('wrapper')}>
            <Image src={image.videoAvatarUser} alt="logo" className={cx('avatar')} />
            <div className={cx('info')}>
                <div className={cx('account-info')}>
                    <h3 className={cx('account-name')}>{data.name}</h3>
                    {data.tick && <i className="fa-solid fa-circle-check"></i>}
                    <p className={cx('account-nickname')}>{data.nickname}</p>
                </div>
                {isFollow ? (
                    <Button onClick={handleClickFollow} outline small className={cx('btn-follow')}>
                        Follow
                    </Button>
                ) : (
                    <Button onClick={handleClickUnfollw} outline small text className={cx('btn-follow')}>
                        Following
                    </Button>
                )}
                <p className={cx('video-desc')}>{data.desc}</p>
                <div className={cx('hashtag')}>
                    {data.hashtag.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
                <div className={cx('video-music')}>
                    <i className="fa-solid fa-music"></i>
                    <span>{data.music}</span>
                </div>
                <div className={cx('video-wrapper')}>
                    <Video id={id} src={videos[data.videoSrc]} />
                    <div className={cx('action-menu')}>
                        <ButtonAction onClick={handleLike} num={data.like}>
                            {isLiked ? (
                                <HeartActiveIcon
                                    style={likeIconStyle}
                                    className={cx('icon', 'heart-icon')}
                                    height="24px"
                                    width="24px"
                                />
                            ) : (
                                <HeartIcon className={cx('icon')} height="24px" width="24px" />
                            )}
                        </ButtonAction>
                        <ButtonAction num={data.coment}>
                            <CommentIcon className={cx('icon')} height="24px" width="24px" />
                        </ButtonAction>
                        <Tippy
                            delay={[0, 700]}
                            interactive
                            zIndex={1}
                            render={(attrs) => (
                                <div className={cx('action-menu-wrapper')}>
                                    <div
                                        style={actionListStyle}
                                        className={cx('menu-share-list')}
                                        tabIndex="-1"
                                        {...attrs}
                                    >
                                        {dataAction.map((item, index) => (
                                            <Link to={item.to} key={index} className={cx('btn-action-share')}>
                                                {item.icon}
                                                <span className={cx('action-title')}>{item.title}</span>
                                            </Link>
                                        ))}
                                        {showBtnShowMoreAction && (
                                            <button
                                                onClick={handleShowMoreAction}
                                                className={cx('btn-show-more-action')}
                                            >
                                                <ArrowDownIcon />
                                            </button>
                                        )}
                                    </div>
                                    <ArrowIcon className={cx('arrow')} />
                                </div>
                            )}
                            onHide={handleHideAcctionShare}
                        >
                            <ButtonAction num={data.share}>
                                <ShareIcon className={cx('icon')} height="24px" width="24px" />
                            </ButtonAction>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default VideoItem;
