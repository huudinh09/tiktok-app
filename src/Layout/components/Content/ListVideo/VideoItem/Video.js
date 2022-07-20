import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './VideoItem.module.scss';
import { FlagIcon, MuteIcon, PauseIcon, PlayIcon, VolumIcon } from '@app/components/Icon';
// import Image from '@app/components/Image/Image';

const cx = classNames.bind(styles);
function Video({ src = '' }) {
    const [showBtnPlay, setShowBtnPlay] = useState(false);
    const [showBtnPause, setShowBtnPause] = useState(true);
    const [showBtnMute, setShowBtnMute] = useState(false);
    const [showBtnVolum, setShowBtnVolum] = useState(true);
    const [seekTimeValue, setSeekTimeValue] = useState(0);
    const [styleSelector, setStyleSelector] = useState({});
    const [styleProgress, setStyleProgress] = useState({});
    const [videoDuration, setVideoDuration] = useState(0);

    // const [videos, setVideos] = useState(null);
    // const [btnPlays, setBtnPlays] = useState(null);

    // useEffect(() => {
    //     const videos = document.querySelectorAll(`.${cx('video')}`);
    //     const btnPlays = document.querySelectorAll(`.${cx('btn-pause')}`);
    //     setVideos(videos);
    //     setBtnPlays(btnPlays);
    //     console.log(ref);
    // }, []);

    useEffect(() => {
        const videos = document.querySelectorAll(`.${cx('video')}`);
        const id = setTimeout(() => {
            setSeekTimeValue(videos[0].currentTime);
            setVideoDuration(videos[0].duration);
            if (seekTimeValue === videos[0].duration) {
                clearTimeout(id);
            }
        }, 1000);
    });
    const processNum = (num) => {
        num = num.toString();
        if (num.length === 1) {
            num = '0' + num;
        } else {
            return num;
        }
        return num;
    };
    const processTime = (time) => {
        // console.log('before', time);
        // time = time.toFixed(1);
        time = time.toString();
        let timeSecond = time.slice(time.toString().length - 1, time.toString().length);
        timeSecond = parseInt(timeSecond);
        time = parseInt(time);
        if (parseInt(timeSecond) > 5) {
            time = time.toFixed(0);
        } else {
            time = Math.floor(time);
        }
        let minutes = parseInt(time / 60, 10);
        let seconds = time % 60;

        let videoDuration = processNum(minutes) + ':' + processNum(seconds);
        // setVideoDuration(videoDuration);
        return videoDuration;
    };

    const handlePlay = (e) => {
        const videos = document.querySelectorAll(`.${cx('video')}`);
        console.log(e.target.parentElement.id);
        videos[0].play();
        setShowBtnPlay(false);
        setShowBtnPause(true);
    };

    const handlePause = () => {
        const videos = document.querySelectorAll(`.${cx('video')}`);
        // console.log(videos);
        videos[0].pause();
        setShowBtnPause(false);
        setShowBtnPlay(true);
    };
    const handleVolum = () => {
        setShowBtnVolum(false);
        setShowBtnMute(true);
    };
    const handleMute = () => {
        setShowBtnMute(false);
        setShowBtnVolum(true);
    };

    const handleChangeSeekValue = (e) => {
        setSeekTimeValue(e.target.value);
    };

    const handleChangeSeekThumb = (e) => {
        setStyleSelector({ left: e.target.value + '%' });
        setStyleProgress({ width: e.target.value + '%' });
    };

    return (
        <div className={cx('video-card')}>
            {/* <div className={cx('video-image')}>
                <Image src="" alt="" />
            </div> */}

            <div className={cx('btn-report')}>
                <FlagIcon className={cx('flag')} />
                <span>Report</span>
            </div>
            <div className={cx('seek-time-wrapper')}>
                <div className={cx('seek')}>
                    <input
                        onInput={handleChangeSeekThumb}
                        className={cx('seek-input')}
                        type="range"
                        min="0"
                        max="100"
                        onChange={handleChangeSeekValue}
                        value={seekTimeValue}
                    />
                    <div style={styleSelector} className={cx('selector')}>
                        <div className={cx('seek-thumb')}></div>
                    </div>
                    <div style={styleProgress} className={cx('seek-progress')}></div>
                </div>
                <div className={cx('time-value')}>
                    {processTime(seekTimeValue)}/{processTime(videoDuration)}
                </div>
            </div>
            <div className={cx('video-container')}>
                <video muted={showBtnMute} className={cx('video')} id="video" src={src}></video>
                {showBtnPlay && (
                    <div onClick={(e) => handlePlay(e)} className={cx('btn-play')}>
                        <PlayIcon />
                    </div>
                )}
                {showBtnPause && (
                    <div onClick={handlePause} className={cx('btn-pause')}>
                        <PauseIcon />
                    </div>
                )}
                {showBtnMute && (
                    <div onClick={handleMute} className={cx('btn-mute')}>
                        <MuteIcon />
                    </div>
                )}
                {showBtnVolum && (
                    <div onClick={handleVolum} className={cx('btn-volum')}>
                        <VolumIcon />
                    </div>
                )}
                <div className={cx('btn-report')}>
                    <FlagIcon className={cx('flag')} />
                    <span>Report</span>
                </div>
            </div>
        </div>
    );
}
export default Video;
