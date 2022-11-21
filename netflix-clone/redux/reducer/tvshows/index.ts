import { combineReducers } from "redux";

import trendingTvShowsReducer from "./trending.reducer";
import actionTvShowsReducer from "./action.reducer";
import animationTvShowsReducer from "./animation.reducer";
import comedyTvShowsReducer from "./comedy.reducer";
import crimeTvShowsReducer from "./crime.reducer";
import documentaryTvShowsReducer from "./documentary.reducer";

export default combineReducers({
    trendingTvShows:trendingTvShowsReducer,
    actionTvShows:actionTvShowsReducer,
    animationTvShows:animationTvShowsReducer,
    comedyTvShows:comedyTvShowsReducer,
    crimeTvShows:crimeTvShowsReducer,
    documentaryTvShows:documentaryTvShowsReducer
})