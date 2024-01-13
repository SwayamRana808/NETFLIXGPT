import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className=' absolute bg-gradient-to-r from-black/50 top-[8vh] md:top-[20vh] lg:top-[30vh]'>
    <div className=' md:m-[30px] lg:m-[50px] ml-[20px] sm:ml-[40px]'> 
     <h1 className='text-[20px] sm:text-[40px] text-white text-bold'>{title}</h1>
     <h3 className='w-[200px] text-[15px] line-clamp-2 sm:line-clamp-none sm:text-[18px] sm:w-[400px] text-white'>{overview}</h3>
     <button className=' rounded-lg px-[10px]  m-[10px] ml-[0] py-[3px] sm:px-[15px]  sm:m-[10px] sm:ml-[0] sm:py-[7px] bg-slate-600 text-white text-[12px] sm:text-[17px]'> Play ▶️</button>
     <button className=' rounded-lg px-[10px] sm:px-[15px] py-[3px] sm:py-[7px] border-[1px] border-black bg-white/80 text-black text-[12px] sm:text-[17px]'> Info ℹ️</button>
    </div>
    </div>
  )
}

export default Videotitle;