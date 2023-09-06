import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import ListVideo from './ListVideo/ListVideo';
import axios from 'axios';
const cx = classNames.bind(styles);
function Content() {
    axios
        .get(
            `http://api.openweathermap.org/geo/1.0/reverse?lat=10.0137967&lon=105.8349009&limit=5&appid=fd77f3b365ea11a2ed8e15742c823d3d/`,
        )
        .then((res) => {
            console.log(res.data);
        });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('videolist')}>
                <ListVideo />
            </div>
        </div>
    );
}
export default Content;
