import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({info}) => {
  return (
    <div className='text-white shrink-0 ml-[15px] hover:ml-[5px]'><img className='h-[100px] sm:h-[300px] w-[70px] sm:w-[210px] hover:sm:h-[310px]  hover:sm:w-[220px] ' src={IMG_CDN+info.poster_path} /></div>
  )
}

export default MovieCard