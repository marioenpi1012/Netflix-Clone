import { TvShowsTypes } from "../../action-types";
import initialState from '../initialState'
import Props from '../Props'

const actionTvShowsReducer = (state = initialState, {type,payload}:Props)=>{
    switch(type){
        case TvShowsTypes.FETCH_ACTION_TV_SHOWS_REQUEST:
            return {
                ...state,
                loading:true,
                error:'',
                data:[]
            }
        case TvShowsTypes.FETCH_ACTION_TV_SHOWS_SUCCESS:
            return {
                ...state,
                loading:false,
                error:'',
                data:payload
            }
        case TvShowsTypes.FETCH_ACTION_TV_SHOWS_ERROR:
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

export default actionTvShowsReducer