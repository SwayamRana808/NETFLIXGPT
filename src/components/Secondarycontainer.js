import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import Footer from './Footer'
const Secondarycontainer = () => {
 const data =useSelector(state=>state.movies)
 
 console.log(data.UpcomingMovies);
  return data&&(
    <div>
    <div className='bg-black  mt-[0] sm:mt-[-65px] lg:mt-[-178px] z-[500]'>
    <MovieList name={"NOW PLAYING MOVIES"} list={data.nowPlayingMovies}/>
    <MovieList name={"UPCOMING MOVIES"} list={data.UpcomingMovies}/> 
    <MovieList name={"TOP RATED MOVIES"} list={data.TopRatedMovies}/> 
    <MovieList name={"POPULAR MOVIES"} list={data.PopularMovies}/> 
    
    </div>
    <Footer/>
    </div>
    
  )
}

export default Secondarycontainer