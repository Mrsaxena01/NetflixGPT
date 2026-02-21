import Header from './Header';
import AutoPlayMovies from './AutoPlayMovies';
import useNowPlayingMovie from '../hook/useNowPlayingMovie';
import Recommended from './Recommended';
import usePopularMovie from '../hook/usePopularMovie';
import useTopRatedMovie from '../hook/useTopRatedMovie';
import useUpcomingMovie from '../hook/useUpcomingMovie';
const Browse = () => {
    useNowPlayingMovie();
    usePopularMovie();
    useTopRatedMovie();
    useUpcomingMovie();
    return (
        <div className="w-full min-h-screen bg-black ">
            <Header />
            <AutoPlayMovies />
            <Recommended/>
        </div>
    );
};

export default Browse;
