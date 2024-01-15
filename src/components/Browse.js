import React from 'react'
import Header from './Header'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
 import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
const Browse = () => {
  useNowPlayingMovies()
  useTopRatedMovies()
  usePopularMovies()
  useUpcomingMovies()
  const handleSignout=()=>{
  
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/")
      // dispatch(removeUser()) //no need already changed from auth change
      
    }).catch((error) => {
      // An error happened.
    });

  }
  return (
    <div className=' relative h-[15vh] sm:h-[30vh] '>
    <div className='absolute z-[0] bg-gradient-to-b from-black/90 h-[100%] w-[100%] '></div>
    <div className='relative '>
    <Header/>
    
    <button onClick={handleSignout} type="button" className="m-[10px] sm:m-[40px] text-white right-[10px] absolute  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Out</button>
    </div>
    <div className='relative'>
    <Maincontainer/>
    
    </div>
    </div>
  )
}

export default Browse