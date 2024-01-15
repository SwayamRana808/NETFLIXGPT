import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => {
  console.log(props.list)
  return props.list &&(
    <div className=''>
    <p className='text-white relative font-medium p-[10px] sm:text-[25px]  '>{props.name}</p>
    <div className='overflow-x-scroll flex w-[99vw] containerScroll '>
  
    {props.list.map((res,id)=>{
        return <MovieCard key={id}  info={res}/>
    })}
      
 
    </div></div>
  )
}

export default MovieList