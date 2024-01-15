import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from '../utils/movies';
const usePopularMovies=()=>{
  
  const dispatch=useDispatch()
  const fetchNowMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS)
    const response=await data.json()
    dispatch(addPopularMovies(response.results))
  }
  useEffect(()=>{
    fetchNowMovies()
  },[])
}
export default usePopularMovies;