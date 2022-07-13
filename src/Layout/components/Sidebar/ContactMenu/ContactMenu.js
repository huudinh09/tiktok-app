import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './ContactMenu.module.scss';
import config from '@app/config/routes';
const cx = classNames.bind(styles);
function ContactMenu() {
    const contactLinkList = [
        {
            title: 'About',
            to: config.home,
        },
        {
            title: 'Tiktok Browse',
            to: config.home,
        },
        {
            title: 'Newsroom',
            to: config.home,
        },
        {
            title: 'Contact',
            to: config.home,
        },
        {
            title: 'Careers',
            to: config.home,
        },
        {
            title: 'ByteDance',
            to: config.home,
        },
    ];
    const programLinkList = [
        {
            title: 'TikTok for Good',
            to: config.home,
        },
        {
            title: 'Advertise',
            to: config.home,
        },
        {
            title: 'Developers',
            to: config.home,
        },
        {
            title: 'Transparency',
            to: config.home,
        },
        {
            title: 'TikTok Rewards',
            to: config.home,
        },
    ];
    const utlisLinkList = [
        {
            title: 'Help',
            to: config.home,
        },
        {
            title: 'Safety',
            to: config.home,
        },
        {
            title: 'Terms',
            to: config.home,
        },
        {
            title: 'Privacy',
            to: config.home,
        },
        {
            title: 'Creator Portal',
            to: config.home,
        },
        {
            title: 'Community Guldellness',
            to: config.home,
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contact-links')}>
                {contactLinkList.map((item, index) => (
                    <NavLink key={index} className={cx('label')} to={item.to}>
                        {item.title}
                    </NavLink>
                ))}
            </div>
            <div className={cx('contact-links')}>
                {programLinkList.map((item, index) => (
                    <NavLink key={index} className={cx('label')} to={item.to}>
                        {item.title}
                    </NavLink>
                ))}
            </div>
            <div className={cx('contact-links')}>
                {utlisLinkList.map((item, index) => (
                    <NavLink key={index} className={cx('label')} to={item.to}>
                        {item.title}
                    </NavLink>
                ))}
            </div>
            <div>
                <p className={cx('copy-right')}>© 2022 TikTok</p>
            </div>
        </div>
    );
}
export default ContactMenu;
