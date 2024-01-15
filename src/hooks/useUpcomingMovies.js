import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from '../utils/movies';
const useUpcomingMovies=()=>{
  
  const dispatch=useDispatch()
  const fetchNowMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS)
    const response=await data.json()
    dispatch(addUpcomingMovies(response.results))
  }
  useEffect(()=>{
    fetchNowMovies()
  },[])
}
export default useUpcomingMovies;