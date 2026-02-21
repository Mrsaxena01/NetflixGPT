import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovie: null,
        trailerVideo: null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null
    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovie = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovie : (state, action ) =>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovie : (state, action) =>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovie : (state, action)=>{
            state.upcomingMovies = action.payload;
        }
    },
});

export const {
    addNowPlayingMovie,
    addTrailerVideo,
    addPopularMovie,
    addTopRatedMovie,
    addUpcomingMovie,
} = movieSlice.actions; 

export default movieSlice.reducer;