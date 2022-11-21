import { combineReducers } from "redux";

import topRatedMoviesReducer from "./topRated.reducer";
import trendingMoviesReducer from './trending.reducer';
import actionMoviesReducer from './action.reducer'
import adventureMoviesReducer from './adventure.reducer'
import comedyMoviesReducer from './comedy.reducer'
import horrorMoviesReducer from './horror.reducer'
import romanceMoviesReducer from './romance.reducer'
import animationMoviesReducer from './animation.reducer'
import upcomingMoviesReducer from './upcoming.reducer'
import latestMoviesReducer from './latest.reducer'

export default combineReducers({
    topRatedMovies:topRatedMoviesReducer,
    trendingMovies:trendingMoviesReducer,
    actionMovies:actionMoviesReducer,
    adventureMovies:adventureMoviesReducer,
    comedyMovies:comedyMoviesReducer,
    horrorMovies:horrorMoviesReducer,
    romanceMovies:romanceMoviesReducer,
    animationMovies:animationMoviesReducer,
    upcomingMovies:upcomingMoviesReducer,
    latestMovies:latestMoviesReducer
})