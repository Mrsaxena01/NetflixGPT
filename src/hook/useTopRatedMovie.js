import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import {  addTopRatedMovie } from '../utils/movieSlice';

const useTopRatedMovie = () => {
    const dispatch = useDispatch();

    const getTopRatedMovie = async () => {
        const response = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
            API_OPTIONS
        );

        const data = await response.json();
        dispatch(addTopRatedMovie(data?.results));
    };

    useEffect(() => {
        getTopRatedMovie();
    }, []);
};

export default useTopRatedMovie;
