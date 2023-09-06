import VideoItem from './VideoItem/VideoItem';
import { POST_DATA } from '@app/data/Data';
function ListVideo() {
    return (
        <>
            {POST_DATA.map((item) => (
                <VideoItem key={item.id} data={item} id={item.id} />
            ))}
        </>
    );
}
export default ListVideo;
