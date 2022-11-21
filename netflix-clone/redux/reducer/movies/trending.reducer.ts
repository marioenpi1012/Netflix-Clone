import { MoviesTypes } from "../../action-types";
import initialState from "../initialState";
import Props from "../Props";

const trendingMoviesReducer = (state = initialState, {type, payload}:Props)=>{
    switch(type){
        case MoviesTypes.FETCH_TRENDING_MOVIES_REQUEST:
            return {
                ...state,
                loading:true,
                error:'',
                data:[]
            }
        case MoviesTypes.FETCH_TRENDING_MOVIES_SUCCESS:
            return {
                ...state,
                data:payload,
                loading:false,
                error:''
            }
        case MoviesTypes.FETCH_TRENDING_MOVIES_ERROR:
            return{
                ...state,
                data:[],
                loading:false,
                error:payload
            }
        default:
            return state
    }
}

export default trendingMoviesReducer