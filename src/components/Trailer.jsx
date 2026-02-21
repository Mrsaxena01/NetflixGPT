import { useSelector } from 'react-redux';
import useTrailer from '../hook/useTrailer';

const Trailer = ({ id }) => {
    useTrailer(id);
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    if (!trailerVideo) return null;

    return (
        <div className="relative w-screen h-screen overflow-hidden aspect-video opacity-40 trailer ">
            <iframe
                className="absolute top-0 left-0 object-cover lg:w-screen  lg:-top-20 aspect-video"
                src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&modestbranding=1&rel=0&iv_load_policy=3`}
                title="YouTube video player"
                allow="autoplay; fullscreen"
            ></iframe>
        </div>
    );
};

export default Trailer;
