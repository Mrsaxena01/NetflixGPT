import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import MovieListShimmer from './MovieListShimmer';

const Recommended = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovie);
    const popularMovie = useSelector((store) => store.movies?.popularMovies);
    const topRatedMovie = useSelector((store)=>store.movies?.topRatedMovies);
    const upcomingMovie = useSelector((store) => store.movies?.upcomingMovies);

    if (
        !movies?.length ||
        !popularMovie?.length ||
        !topRatedMovie?.length ||
        !upcomingMovie?.length
    ) {
        return <MovieListShimmer />;
    }

    return (
        <div className="relative p-6 lg:mt-[-200px] z-50">
            <MovieList title="Now Playing" movies={movies} />
            <MovieList title="Popular" movies={popularMovie} />
            <MovieList title="Top Rated" movies={topRatedMovie} />
            <MovieList title="Upcoming" movies={upcomingMovie} />
        </div>
    );
};

export default Recommended;
