import classNames from "classnames/bind";
import {Link} from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)
function Button({
    rightIcon,
    leftIcon,
    onClick, 
    href, 
    small = false,
    large = false,
    outline = false,
    text = false ,
    primary= false, 
    rounded = false,
    disable=false,
    to, 
    children, 
    className,
    ...passPros
}) {
    let Comp = 'button'

    const pros = {onClick, ...passPros}

    if(disable){
        Object.keys(pros).forEach(key=>{
            if(key.startsWith('on') && typeof pros[key] === 'function'){
                delete pros[key]
            }
        })
    }

    if(to){
        pros.to = to
        Comp = Link
    }
    else if(href){
        pros.href = href
        Comp = 'a'
    }
    const classes = cx('wrapper', {[className]: className, primary, outline, large, small, text, disable, rounded, })
    return (
        <Comp className={classes} {...pros}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;