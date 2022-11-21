import { MoviesTypes } from "../../action-types";
import initialState from "../initialState";
import Props from "../Props";

const upcomingMoviesReducer = (state = initialState, {type,payload}:Props)=>{
    switch(type){
        case MoviesTypes.FETCH_UPCOMING_MOVIES_REQUEST:
            return {
                ...state,
                loading:true,
                error:'',
                data:[]
            }
        case MoviesTypes.FETCH_UPCOMING_MOVIES_SUCCESS:
            return {
                ...state,
                loading:false,
                error:'',
                data:payload
            }
        case MoviesTypes.FETCH_UPCOMING_MOVIES_ERROR:
            return {
                ...state,
                loading:false,
                error:payload,
                data:[]
            }
        default:
            return state
    }
}

export default upcomingMoviesReducer