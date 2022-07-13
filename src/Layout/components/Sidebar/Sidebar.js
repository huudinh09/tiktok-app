import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import MenuItem from './Menu/MenuItem';
import Menu from './Menu/Menu';
import routes from '@app/config/routes';
import {
    HomeIcon,
    HomeActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    FollowingIcon,
    FollowingActiveIcon,
} from '@app/components/Icon/index';
import ListAccount from './ListAccount/ListAccount';
import DiscoveryMenu from './DiscoveryMenu/DiscoveryMenu';
import ContactMenu from './ContactMenu/ContactMenu';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                />
                <MenuItem title="LIVE" to={routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <Menu>
                <ListAccount popperOver={true} headerTitle="Suggested accounts" />
            </Menu>
            <Menu>
                <ListAccount numofFollowingAccount="5" headerTitle="Following accounts" />
            </Menu>
            <Menu>
                <DiscoveryMenu />
            </Menu>
            <Menu>
                <ContactMenu />
            </Menu>
        </div>
    );
}

export default Sidebar;
