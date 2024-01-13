import {createSlice} from "@reduxjs/toolkit"
const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerid:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerId:(state,action)=>{
            state.trailerid=action.payload
        }
    }
})
export const {addNowPlayingMovies,addTrailerId}=moviesSlice.actions;
export default moviesSlice.reducer;