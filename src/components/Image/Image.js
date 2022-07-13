import { useState } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';
import image from '@app/assets/image/index';
import { forwardRef } from 'react';

const Image = forwardRef(({ classname, src, alt, fallback = image.noImage, ...pros }, ref) => {
    //import {useState} from 'react
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(fallback);
    };
    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, classname)}
            src={fallBack || src}
            alt={alt}
            onError={handleError}
            {...pros}
        />
    );
});
export default Image;
