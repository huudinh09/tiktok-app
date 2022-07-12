import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import MenuItem from './Menu/MenuItem';
import Menu from './Menu/Menu';
import routes from '../../../config/routes';
import {
    HomeIcon,
    HomeActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    FollowingIcon,
    FollowingActiveIcon,
} from '../../../components/Icon/index';
import ListAccount from './ListAccount/ListAccount';
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
            <ListAccount popperOver={true} headerTitle="Suggested accounts" />
            <ListAccount numofFollowingAccount="5" headerTitle="Following accounts" />
        </div>
    );
}

export default Sidebar;
