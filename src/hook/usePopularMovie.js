import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovie } from '../utils/movieSlice';

const usePopularMovie = () => {

    const dispatch = useDispatch();
 
    const getPopularMovie = async () =>{
  const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS
  );

  const data = await response.json();
        dispatch(addPopularMovie(data?.results));
    }

    useEffect(()=>{
        getPopularMovie()
    }, [])


}

export default usePopularMovie