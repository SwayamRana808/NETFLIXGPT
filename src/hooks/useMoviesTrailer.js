import { useDispatch } from "react-redux";
import { addTrailerId } from "../utils/movies";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
const useMoviesTariler=(props)=>{
    const dispatch=useDispatch();
    const getMovieVideo=async()=>{
        const data =await fetch('https://api.themoviedb.org/3/movie/'+props.movieid+'/videos?language=en-US', API_OPTIONS);
        const json= await data.json()
        const trailer=json.results.filter((video)=>video.type=="Trailer")
        const video=trailer.length!==0?trailer[0]:json.results[0]
        console.log(video)
        dispatch(addTrailerId(video.key))
    }
    useEffect(()=>{
        getMovieVideo()
         
    },[])
}
export default useMoviesTariler;