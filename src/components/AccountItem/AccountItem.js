import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img 
                className={cx('avatar')} 
                src ='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2e53c9b20da646a360ccf6c26859882b~c5_100x100.jpeg?x-expires=1657155600&x-signature=M5Snp3hPF43LuyALpg0tS8sNEec%3D' 
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hữu Dinh</span>
                    <i className="fa-solid fa-circle-check"></i>
                </h4>
                <span className={cx('username')}>huudinh09</span>
            </div>
        </div>
    );
}

export default AccountItem;