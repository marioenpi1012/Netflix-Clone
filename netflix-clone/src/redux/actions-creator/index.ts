import { ActionType } from "../action-types"
import { Dispatch } from "redux"
import { action } from "../actions/index"

export const dispatchTopRatedMovies = (movies:[] = []) =>{
    return (dispatch:Dispatch<action>)=>{
        dispatch({
            type:ActionType.TOPRATED,
            payload:movies
        })
    }
}
export const dispatchActionMovies = (movies:[] = []) =>{
    return (dispatch:Dispatch<action>)=>{
        dispatch({
            type:ActionType.ACTION,
            payload:movies
        })
    }
}
export const dispatchPopularMovies = (movies:[] = []) =>{
    return (dispatch:Dispatch<action>)=>{
        dispatch({
            type:ActionType.POPULAR,
            payload:movies
        })
    }
}
export const dispatchLatestMovies = (movies:[] = []) =>{
    return (dispatch:Dispatch<action>)=>{
        dispatch({
            type:ActionType.LATEST,
            payload:movies
        })
    }
}
export const dispatchUpcomingMovies = (movies:[] = []) =>{
    return (dispatch:Dispatch<action>)=>{
        dispatch({
            type:ActionType.UPCOMING,
            payload:movies
        })
    }
}
export const dispatchAnimationMovies = (movies:[] = []) =>{
    return (dispatch:Dispatch<action>)=>{
        dispatch({
            type:ActionType.ANIMATION,
            payload:movies
        })
    }
}

export const dispatchRomanceMovies = (movies:[] = []) =>{
    return (dispatch:Dispatch<action>)=>{
        dispatch({
            type:ActionType.ROMANCE,
            payload:movies
        })
    }
}
export const dispatchHorrorMovies = (movies:[] = []) =>{
    return (dispatch:Dispatch<action>)=>{
        dispatch({
            type:ActionType.HORROR,
            payload:movies
        })
    }
}
export const dispatchAdventureMovies = (movies:[] = []) =>{
    return (dispatch:Dispatch<action>)=>{
        dispatch({
            type:ActionType.ADVENTURE,
            payload:movies
        })
    }
}
export const dispatchComedyMovies = (movies:[] = []) =>{
    return (dispatch:Dispatch<action>)=>{
        dispatch({
            type:ActionType.COMEDY,
            payload:movies
        })
    }
}
export const dispatchMovieInfo = (open:Boolean, movie:{} = {}) =>{
    return (dispatch:Dispatch<action>)=>{
        dispatch({
            type:ActionType.OPEN,
            payload:{
                open,
                movie
            }
        })
    }
}


