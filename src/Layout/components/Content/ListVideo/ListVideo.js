import VideoItem from './VideoItem/VideoItem';
import { POST_DATA } from '@app/data/Data';
function ListVideo() {
    return (
        <>
            {POST_DATA.map((item, index) => (
                <VideoItem key={index} data={item} />
            ))}
        </>
    );
}
export default ListVideo;
