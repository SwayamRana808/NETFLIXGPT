import React from 'react'
import { useSelector } from 'react-redux';
import useMoviesTrailer from '../hooks/useMoviesTrailer';
import Secondarycontainer from './Secondarycontainer';
const Videobackground = (props) => {
    useMoviesTrailer(props)
     
  const dataTrailer=useSelector(state=>state.movies.trailerid)
  
  return (!dataTrailer?<div></div>:(
    <div className='absolute top-0 z-[-1]'>
    <div className='bg-gradient-to-r from-black  z-[-1] '> 
    <iframe  className='w-[99vw] aspect-video ' src={'https://www.youtube.com/embed/'+dataTrailer+'?si=vBdodCgrR6RfUhdS&autoplay=1&mute=1&loop=1&playlist='+dataTrailer+'&controls=0&showinfo=0'} 
    title="YouTube video player"  
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     >
    </iframe>
    </div>
    <Secondarycontainer/>
    </div>
  ))
}

export default Videobackground