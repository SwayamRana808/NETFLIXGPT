import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle';
import Videobackground from './Videobackground';
import Secondarycontainer from './Secondarycontainer';
const Maincontainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
    if(movies==null)return;
    const random=Math.floor(Math.random() * (movies.length-1));
    const mainMovie=movies[random];
    const {original_title,overview,id}=mainMovie;
    console.log(mainMovie);
  return (

    <div className='relative'> 
        <Videobackground movieid={id}/>
        
        <Videotitle title={original_title} overview={overview}/>
  
    </div>
  )
}

export default Maincontainer