import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    if (!movies || movies.length === 0) return null;

    return (
        <div className="px-6 ">
            <h1 className="my-6 text-2xl font-bold text-white">{title}</h1>

            <div className=" overflow-x-auto overflow-y-hidden  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="container flex gap-4">
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="flex-shrink-0 snap-start card"
                        >
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
