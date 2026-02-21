
import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const useTrailer = (id) => {
    const dispatch = useDispatch();
    
      const getTrailer = async () => {
          try {
              const response = await fetch(
                  `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
                  API_OPTIONS
              );
              const data = await response.json();

              const trailers = data?.results?.filter(
                  (video) => video.type === 'Trailer'
              );

              const trailer = trailers?.length
                  ? trailers[0]
                  : data?.results?.[0];

              if (trailer) {
                  dispatch(addTrailerVideo(trailer));
              }
          } catch (error) {
              console.error('Failed to fetch trailer', error);
          }
      };

      useEffect(() => {
          if (id) getTrailer();
      }, [id]);
}

export default useTrailer