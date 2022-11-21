import { combineReducers } from "redux";
import movies from './movies'
import tvShows from './tvshows'
import movieInfo from './MovieInfo'
const reducers = combineReducers({
    movies: movies,
    tvShows:tvShows,
    movieInfo: movieInfo
})

export default reducers;
// export type State = ReturnType<typeof reducers>
export type RootState = ReturnType<typeof reducers>