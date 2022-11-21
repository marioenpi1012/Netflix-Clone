import { TvShowsTypes } from "../action-types"
import axios from '../../axios'
import { AppDispatch } from "../store"
import { error, category, element } from './props'

// TRENDING ACTIONS 
export const fetchTrendingTvShowsRequest = () =>({
    type:TvShowsTypes.FETCH_TRENDING_TV_SHOWS_REQUEST
})
export const fetchTrendingTvShowsSuccess = (trending:category)=>{
    return {
        type:TvShowsTypes.FETCH_TRENDING_TV_SHOWS_SUCCESS,
        payload:trending
    }
}
export const fetchTrendingTvShowsError = (error:error) =>{
    return {
        type:TvShowsTypes.FETCH_TRENDING_TV_SHOWS_ERROR,
        payload:error
    }
}
export const fetchTrendingTvShowsAsync = (fetchUrl:string) =>{
    return(dispatch:AppDispatch)=>{
        dispatch(fetchTrendingTvShowsRequest())
        axios
            .get(fetchUrl)
            .then(res =>{
                const trending = res.data.results.map((el:element)=>({
                    ...el
                }))
                dispatch(fetchTrendingTvShowsSuccess(trending))
                return trending
            })
            .catch(err =>{
                dispatch(fetchTrendingTvShowsError(err.message))
            })
    }
}

// ACTION Tv Shows ACTIONS
export const fetchActionTvShowsRequest = () => ({
    type:TvShowsTypes.FETCH_ACTION_TV_SHOWS_REQUEST
})
export const fetchActionTvShowsSuccess = (action:category)=>{
    return {
        type:TvShowsTypes.FETCH_ACTION_TV_SHOWS_SUCCESS,
        payload: action
    }
}
export const fetchActionTvShowsError = (error:error) =>{
    return{
        type:TvShowsTypes.FETCH_ACTION_TV_SHOWS_ERROR,
        payload:error
    }
}
export const fetchActionTvShowsAsync = (fetchUrl:string) =>{
    return(dispatch:AppDispatch)=>{
        dispatch(fetchActionTvShowsRequest())
        axios   
            .get(fetchUrl)
            .then(res =>{
                const action = res.data.results.map((el:element)=>({
                    ...el
                }))
                dispatch(fetchActionTvShowsSuccess(action))
                return action
            })
            .catch(err =>{
                dispatch(fetchActionTvShowsError(err.message))
            })
    }
}
// ANIMATION TV SHOWS ACTIONS
export const fetchAnimationTvShowsRequest = () =>({
    type:TvShowsTypes.FETCH_ANIMATION_TV_SHOWS_REQUEST
})
export const fetchAnimationTvShowsSuccess = (animation:category) =>{
    return {
        type:TvShowsTypes.FETCH_ANIMATION_TV_SHOWS_SUCCESS,
        payload:animation
    }
}
export const fetchAnimationTvShowsError = (error:error) =>{
    return {
        type:TvShowsTypes.FETCH_ANIMATION_TV_SHOWS_ERROR,
        payload:error
    }
}
export const fetchAnimationTvShowsAsync = (fetchUrl:string) =>{
    return(dispatch:AppDispatch) =>{
        dispatch(fetchAnimationTvShowsRequest())
        axios
            .get(fetchUrl)
            .then(res => {
                const animation = res.data.results.map((el:element) =>({
                    ...el
                }))
                dispatch(fetchAnimationTvShowsSuccess(animation))
                return animation
            })
            .catch(err => {
                dispatch(fetchAnimationTvShowsError(err.message))
            })
    }
}
// COMEDY TV SHOWS ACTIONS
export const fetchComedyTvShowsRequest = () => ({
    type:TvShowsTypes.FETCH_COMEDY_TV_SHOWS_REQUEST
})
export const fetchComedyTvShowsSuccess = (comedy:category) =>{
    return {
        type:TvShowsTypes.FETCH_COMEDY_TV_SHOWS_SUCCESS,
        payload:comedy
    }
}
export const fetchComedyTvShowsError = (error:error) =>{
    return {
        type:TvShowsTypes.FETCH_COMEDY_TV_SHOWS_ERROR,
        payload:error
    }
}
export const fetchComedyTvShowsAsync = (fetchUrl:string) =>{
    return (dispatch:AppDispatch)=>{
        dispatch(fetchComedyTvShowsRequest())
        axios   
            .get(fetchUrl)
            .then(res =>{
                const comedy = res.data.results.map((el:element)=>({
                    ...el
                }))
                dispatch(fetchComedyTvShowsSuccess(comedy))
                return comedy
            })
            .catch(err =>{
                dispatch(fetchComedyTvShowsError(err.message))
            })
    }
}
// CRIME
export const fetchCrimeTvShowsRequest = () =>({
    type:TvShowsTypes.FETCH_CRIME_TV_SHOWS_REQUEST
})
export const fetchCrimeTvShowsSuccess = (crime:category) =>{
    return{
        type:TvShowsTypes.FETCH_CRIME_TV_SHOWS_SUCCESS,
        payload:crime
    }
}
export const fetchCrimeTvShowsError = (error : error) =>{
    return {
        type:TvShowsTypes.FETCH_CRIME_TV_SHOWS_ERROR,
        payload:error
    }
}
export const fetchCrimeTvShowsAsync = (fetchUrl:string) =>{
    return(dispatch:AppDispatch)=>{
        dispatch(fetchCrimeTvShowsRequest())
        axios
            .get(fetchUrl)
            .then(res =>{
                const crime = res.data.results.map((el:element)=>({
                    ...el
                }))
                dispatch(fetchCrimeTvShowsSuccess(crime))
                return crime
            })
            .catch(err =>{
                dispatch(fetchCrimeTvShowsError(err.message))
            })
    }    
}
// DOCUMENTARY  
export const fetchDocumentaryTvShowsRequest = () =>({
    type:TvShowsTypes.FETCH_DOCUMENTARY_TV_SHOWS_REQUEST
})
export const fetchDocumentaryTvShowsSuccess = (documentary:category) =>{
    return {
        type:TvShowsTypes.FETCH_DOCUMENTARY_TV_SHOWS_SUCCESS,
        payload:documentary
    }
}
export const fetchDocumentaryTvShowsError = (error:error) =>{
    return {
        type:TvShowsTypes.FETCH_DOCUMENTARY_TV_SHOWS_ERROR,
        payload:error
    }
}
export const fetchDocumentaryTvShowsAsync = (fetchUrl:string) =>{
    return (dispatch:AppDispatch)=>{
        dispatch(fetchDocumentaryTvShowsRequest())
        axios
            .get(fetchUrl)
            .then(res =>{
                const documentary = res.data.results.map((el:element)=>({
                    ...el
                }))
                dispatch(fetchDocumentaryTvShowsSuccess(documentary))
                return documentary
            })
            .catch(err => {
                dispatch(fetchDocumentaryTvShowsError(err.message))
            })
    }
}