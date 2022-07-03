import { combineReducers } from "redux";
import moviesReducer from './moviesReducer'
import movieInfoReducer from "./movieInfoReducer";
const reducers = combineReducers({
    movies: moviesReducer,
    movieInfo: movieInfoReducer
})

export default reducers;
// export type State = ReturnType<typeof reducers>
export type RootState = ReturnType<typeof reducers>