import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import styles from './VideoItem.module.scss';
import { FlagIcon, MuteIcon, PauseIcon, PlayIcon, VolumIcon } from '@app/components/Icon';

const cx = classNames.bind(styles);
function Video({ src = '', id }) {
    const [showBtnPlay, setShowBtnPlay] = useState(true);
    const [seekTimeValue, setSeekTimeValue] = useState(0);
    const [styleSelector, setStyleSelector] = useState({});
    const [styleSelector1, setStyleSelector1] = useState({});
    const [styleProgress, setStyleProgress] = useState({});
    const [styleProgress1, setStyleProgress1] = useState({});
    const [videoDuration, setVideoDuration] = useState(0);
    const [seekVolumeValue, setSeekVolumeValue] = useState(0);

    const videoRef = useRef();
    const timeLineRef = useRef();

    const { ref, inView, entry } = useInView({
        threshold: 1,
    });

    useEffect(() => {
        if (inView) {
            handlePlay();
            console.log(videoDuration);
        } else {
            if (videoRef.current.play) {
                handlePause();
            }
        }
    }, [inView]);

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

    const handlePlay = () => {
        const video = videoRef.current;
        setVideoDuration(Math.round({ video }.video.duration));
        setShowBtnPlay(false);
        video.play();
    };

    const handlePause = () => {
        const video = videoRef.current;
        video.pause();
        setShowBtnPlay(true);
    };
    const handleVolum = () => {
        const video = videoRef.current;
        setSeekVolumeValue(0);
        video.muted = true;
    };
    const handleMute = () => {
        const video = videoRef.current;
        video.muted = false;
        video.volume = 0.5;
        setSeekVolumeValue(0.5);
        setStyleSelector1({ left: 0.5 * 100 + '%' });
        setStyleProgress1({ width: 0.5 * 100 + '%' });
    };

    const handleChangeVolume = (e) => {
        videoRef.current.volume = e.target.value;
        setSeekVolumeValue(e.target.value);
    };

    const handleChangeSeekValue = (e) => {
        videoRef.current.currentTime = e.target.value;
        setSeekTimeValue(e.target.value);
    };

    const handleChangeSeekThumb = (e) => {
        setStyleSelector({ left: (e.target.value * 100) / videoDuration + '%' });
        setStyleProgress({ width: (e.target.value * 100) / videoDuration + '%' });
    };

    const handleChangeSeekThumbVolume = (e) => {
        setStyleSelector1({ left: e.target.value * 100 + '%' });
        setStyleProgress1({ width: e.target.value * 100 + '%' });
    };

    const handleOnPlay = () => {
        const video = videoRef.current;
        if (video.currentTime < video.duration) {
            setInterval(() => {
                setSeekTimeValue((prev) => {
                    setStyleSelector({ left: (video.currentTime * 100) / videoDuration + '%' });
                    setStyleProgress({ width: (video.currentTime * 100) / videoDuration + '%' });
                    return video.currentTime;
                }, 1000);
            });
        }
    };

    return (
        <div className={cx('video-card')}>
            <div className={cx('btn-report')}>
                <FlagIcon className={cx('flag')} />
                <span>Report</span>
            </div>
            <div className={cx('seek-time-wrapper')}>
                <div className={cx('seek')}>
                    <input
                        ref={timeLineRef}
                        onInput={handleChangeSeekThumb}
                        className={cx('seek-input')}
                        type="range"
                        min="0"
                        max={videoDuration.toString()}
                        onChange={handleChangeSeekValue}
                        value={seekTimeValue}
                    />
                    <div style={styleSelector} className={cx('selector')}>
                        <div className={cx('seek-thumb')}></div>
                    </div>
                    <div style={styleProgress} className={cx('seek-progress')}></div>
                </div>
                <div className={cx('time-value')}>
                    {processTime(Math.round(seekTimeValue))}/{processTime(videoDuration)}
                </div>
            </div>
            <div className={cx('video-container')}>
                <div ref={ref}>
                    <video
                        ref={videoRef}
                        onPlay={handleOnPlay}
                        className={cx('video')}
                        id="video"
                        loop
                        src={src}
                        muted={true}
                    ></video>
                </div>
                {showBtnPlay ? (
                    <div onClick={handlePlay} className={cx('btn-play')}>
                        <PlayIcon />
                    </div>
                ) : (
                    <div onClick={handlePause} className={cx('btn-pause')}>
                        <PauseIcon />
                    </div>
                )}
                {seekVolumeValue === 0 ? (
                    <div onClick={handleMute} className={cx('btn-mute')}>
                        <MuteIcon />
                    </div>
                ) : (
                    <div onClick={handleVolum} className={cx('btn-volum')}>
                        <VolumIcon />
                        <div className={cx('seek-volume-wrapper')}>
                            <div className={cx('seek')}>
                                <input
                                    onInput={handleChangeSeekThumbVolume}
                                    className={cx('seek-input')}
                                    type="range"
                                    min="0"
                                    max="1"
                                    step={0.1}
                                    onChange={handleChangeVolume}
                                    value={seekVolumeValue}
                                />
                                <div style={styleSelector1} className={cx('selector')}>
                                    <div className={cx('seek-thumb')}></div>
                                </div>
                                <div style={styleProgress1} className={cx('seek-progress')}></div>
                            </div>
                        </div>
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
