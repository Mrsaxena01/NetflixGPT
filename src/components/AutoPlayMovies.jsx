import React from 'react';
import Trailer from './Trailer';
import TrailerInfo from './TrailerInfo';
import { useSelector } from 'react-redux';
import TrailerShimmer from './TrailerShimmer';

const AutoPlayMovies = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovie);
    if(!movies) return <TrailerShimmer />;
    
    const mainMovie = movies[0];
    
    return (
        <div className="relative w-full h-screen overflow-hidden ">
            <Trailer id={mainMovie?.id} />
            <TrailerInfo
                title={mainMovie?.original_title}
                overview={mainMovie?.overview}
            />
        </div>
    );
};

export default AutoPlayMovies;
