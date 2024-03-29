import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from '../utils/movies';
const useTopRatedMovies=()=>{
  
  const dispatch=useDispatch()
  const fetchNowMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS)
    const response=await data.json()
    dispatch(addTopRatedMovies(response.results))
  }
  useEffect(()=>{
    fetchNowMovies()
  },[])
}
export default useTopRatedMovies;