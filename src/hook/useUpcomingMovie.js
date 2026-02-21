import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUpcomingMovie } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constant';

const useUpcomingMovie = () => {
     const dispatch = useDispatch();

     const getUpcomingMovie = async () => {
         const response = await fetch(
             'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' ,API_OPTIONS
         );

         const data = await response.json();
         dispatch(addUpcomingMovie(data?.results));
     };

     useEffect(() => {
         getUpcomingMovie();
     }, []);

}

export default useUpcomingMovie