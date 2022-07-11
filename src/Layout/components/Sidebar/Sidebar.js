import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss'
import MenuItem from './Menu/MenuItem';
import Menu from './Menu/Menu';
import routes from '../../../config/routes';
import {HomeIcon, HomeActiveIcon, LiveIcon, LiveActiveIcon, FollowingIcon, FollowingActiveIcon} from '../../../components/Icon/index'

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem 
                    title='For you'
                    to={routes.home}
                    icon={<HomeIcon/>}
                    activeIcon={<HomeActiveIcon/>}
                />
                <MenuItem 
                    title='Following'
                    to={routes.following}
                    icon={<FollowingIcon/>}
                    activeIcon={<FollowingActiveIcon/>}
                />
                <MenuItem 
                    title='LIVE'
                    to={routes.live}
                    icon={<LiveIcon/>}
                    activeIcon={<LiveActiveIcon/>}
                />
            </Menu>
        </div>
    );
}

export default Sidebar;