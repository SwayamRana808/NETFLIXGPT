import React,{ useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import {addUser,removeUser} from "../utils/userSlice"
import { addNowPlayingMovies, addTrailerId } from '../utils/movies';

const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate();
  useEffect(()=>{
    const unsubsribe=onAuthStateChanged(auth, (user) => { //event listner
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} =auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        dispatch(addTrailerId(null))
        dispatch(addNowPlayingMovies(null))
        navigate("/")
        // ...
      }
    });
    return ()=>unsubsribe();
   },[])
  return (
    <div className='absolute w-[120px] sm:w-[170px] md:w-[200px] z-[2] m-[10px] sm:m-[30px] '> 
    <img   src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
    </div>
  )
}

export default Header