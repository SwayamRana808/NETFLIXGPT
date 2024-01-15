 
  import { useDispatch } from "react-redux";
  import { useEffect } from "react";
  import { API_OPTIONS } from "../utils/constants";
  import { addNowPlayingMovies } from '../utils/movies';
  const useNowPlayingMovies=()=>{
    
    const dispatch=useDispatch()
    const fetchNowMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)
      const response=await data.json()
      console.log(response,"dfgfd")
      dispatch(addNowPlayingMovies(response.results))
    }
    useEffect(()=>{
      fetchNowMovies()
    },[])
  }
  export default useNowPlayingMovies;