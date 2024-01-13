import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle';
import Videobackground from './Videobackground';
const Maincontainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
    if(movies==null)return;
    const mainMovie=movies[0];
    const {original_title,overview,id}=mainMovie;
    console.log(mainMovie);
  return (

    <div> 
        <Videobackground movieid={id}/>
        <Videotitle title={original_title} overview={overview}/>
  
    </div>
  )
}

export default Maincontainer