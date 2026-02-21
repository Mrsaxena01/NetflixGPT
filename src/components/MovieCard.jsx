import React from 'react'
import { IMAGE_CDN } from '../utils/constant'

const MovieCard = ({movie}) => {
  return (
      <div>
          <img src={IMAGE_CDN + movie.poster_path} alt={movie.title} className='rounded-lg' />
      </div>
  );
}

export default MovieCard