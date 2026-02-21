import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovie } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constant';

const useNowPlayingMovie = () => {

     const dispatch = useDispatch();

     const getNowPlayingMovie = async () => {
         const response = await fetch(
             'https://api.themoviedb.org/3/movie/now_playing?&page=1',
             API_OPTIONS
         );

         const data = await response.json();
         dispatch(addNowPlayingMovie(data.results));
     };

     useEffect(() => {
         getNowPlayingMovie();
     }, []);
  
}

export default useNowPlayingMovie