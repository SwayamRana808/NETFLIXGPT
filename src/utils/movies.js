import {createSlice} from "@reduxjs/toolkit"
const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        PopularMovies:null,
        trailerid:null,
        TopRatedMovies:null,
        UpcomingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerId:(state,action)=>{
            state.trailerid=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.UpcomingMovies=action.payload;
        }
    }
})
export const {addNowPlayingMovies,addTrailerId,addPopularMovies,addTopRatedMovies,addUpcomingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;