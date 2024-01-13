import React from 'react'
import { useSelector } from 'react-redux';
import useMoviesTariler from '../hooks/useMoviesTrailer';
const Videobackground = (props) => {
    useMoviesTariler(props)
     
  const dataTrailer=useSelector(state=>state.movies.trailerid)
  
  return (!dataTrailer?<div></div>:(
    <div className='bg-gradient-to-r from-black'> 
    <iframe  className='w-screen aspect-video absolute top-0 z-[-1] ' src={'https://www.youtube.com/embed/'+dataTrailer+'?si=vBdodCgrR6RfUhdS&autoplay=1&mute=1&loop=1&playlist='+dataTrailer} 
    title="YouTube video player"  
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     >
    </iframe>
    </div>
  ))
}

export default Videobackground