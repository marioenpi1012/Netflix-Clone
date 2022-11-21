import { MoviesTypes  } from "../action-types"
import axios from '../../axios'
import {AppDispatch} from '../store'
import { error, category, element } from './props'

// TOP RATED ACTIONS
export const fetchTopRatedMoviesRequest = () =>({
    type:MoviesTypes.FETCH_TOP_RATED_MOVIES_REQUEST
}
)
export const fetchTopRatedMoviesSuccess = (topRated:category) =>{
    return{
        type:MoviesTypes.FETCH_TOP_RATED_MOVIES_SUCCESS,
        payload:topRated
    }
}
export const fetchTopRatedMoviesError = (error:error) =>{
    return{
        type:MoviesTypes.FETCH_TOP_RATED_MOVIES_ERROR,
        payload:error
    }
}
export const fetchTopRatedMoviesAsync  = (fetchUrl:string) =>{
    return (dispatch:AppDispatch)=>{
        dispatch(fetchTopRatedMoviesRequest())
        axios 
            .get(fetchUrl)
            .then(res =>{
                const topRated = res.data.results.map((el:element )=>({
                    ...el
                }))
                dispatch(fetchTopRatedMoviesSuccess(topRated));
                console.log({topRated})
                return topRated
            })
            .catch(err =>{
                console.log(err.message)
                dispatch(fetchTopRatedMoviesError(err.message))
            })
    }
}
// TRENDING ACTIONS
export const fetchTrendingMoviesRequest = () =>({
    type:MoviesTypes.FETCH_TRENDING_MOVIES_REQUEST
})

export const fetchTrendingMoviesSuccess = (trending:category, isPage? :any)=>{
    return{
        type: isPage 
            ? MoviesTypes.FETCH_TRENDING_MOVIES_SUCCESS
            : MoviesTypes.LOAD_MORE_TRENDING_MOVIES_SUCCESS,
        payload:trending
    }
}
export const fetchTrendingError = (error:error) =>{
    return{ 
        type:MoviesTypes.FETCH_TRENDING_MOVIES_ERROR,
        payload:error
    }
}
export const fetchTrendingMoviesAsync = (fetchUrl:string, isPage:any)=>{
    return(dispatch:AppDispatch)=>{
        dispatch(fetchTrendingMoviesRequest())
        axios
            .get(fetchUrl)
            .then(res =>{
                const trending = res.data.results.map((el:element)=>({
                    ...el
                }))
                if(isPage){
                    dispatch(fetchTrendingMoviesSuccess(trending, isPage))
                }else dispatch(fetchTrendingMoviesSuccess(trending))
                return trending
            })
            .catch(err =>{
                dispatch(fetchTrendingError(err.message))
            })
    }
}
// ACTION MOVIES ACTIONS
export const fetchActionMoviesRequest = () =>({
    type:MoviesTypes.FETCH_ACTION_MOVIES_REQUEST
})
export const fetchActionMoviesSuccess = (actionMovies:category)=>{
    return{
        type:MoviesTypes.FETCH_ACTION_MOVIES_SUCCESS,
        payload:actionMovies
    }
}
export const fetchActionMoviesError = (error:error)=>{
    return{
        type:MoviesTypes.FETCH_ACTION_MOVIES_ERROR,
        payload:error
    }
}
export const fetchActionMoviesAsync = (fetchUrl:string)=>{
    return (dispatch:AppDispatch) =>{
        dispatch(fetchActionMoviesRequest())
        axios
            .get(fetchUrl)
            .then(res =>{
                const actionMovies = res.data.results.map((el:element)=>({
                    ...el
                }))
                dispatch(fetchActionMoviesSuccess(actionMovies))
                return actionMovies
            })
            .catch(err =>{
                dispatch(fetchActionMoviesError(err.message))
            })
    }
}

// Adventure 
export const fetchAdventureMoviesRequest = () => ({
    type:MoviesTypes.FETCH_ADVENTURE_MOVIES_REQUEST
})
export const fetchAdventureMoviesSuccess = (adventureMovies:category) =>{
    return{
        type:MoviesTypes.FETCH_ADVENTURE_MOVIES_SUCCESS,
        payload:adventureMovies
    }
}
export const fetchAdventureMoviesError = (error:error) =>{
    return{
        type:MoviesTypes.FETCH_ADVENTURE_MOVIES_ERROR,
        error:error
    }
}
export const fetchAdventureMoviesAsync = (fetchUrl:string)=>{
    return(dispatch:AppDispatch) => {
        dispatch(fetchAdventureMoviesRequest())
        axios   
            .get(fetchUrl)
            .then(res =>{
                const adventureMovies = res.data.results.map((el:element)=>({
                    ...el
                }))
                dispatch(fetchAdventureMoviesSuccess(adventureMovies))
                return adventureMovies
            })
            .catch(err =>{
                dispatch(fetchAdventureMoviesError(err.message))
            })
    }
}

//  Comedy
export const fetchComedyMoviesRequest = () =>({
    type:MoviesTypes.FETCH_COMEDY_MOVIES_REQUEST
})
export const fetchComedyMoviesSuccess = (comedyMovies : category) =>{
    return {
        type:MoviesTypes.FETCH_COMEDY_MOVIES_SUCCESS,
        payload:comedyMovies
    }
}
export const fetchComedyMoviesError = (error :error) =>{
    return {
        type:MoviesTypes.FETCH_COMEDY_MOVIES_ERROR,
        payload:error
    }
}
export const fetchComedyMoviesAsync = (fetchUrl:string) =>{
    return(dispatch:AppDispatch)=>{
        dispatch(fetchComedyMoviesRequest())
        axios
            .get(fetchUrl)
            .then(res => {
                const comedyMovies = res.data.results.map((el:element) =>({
                    ...el
                }))
                dispatch(fetchComedyMoviesSuccess(comedyMovies))
                return comedyMovies
            })
            .catch(err =>{
                dispatch(fetchComedyMoviesError(err.message))
            })
    }
}
// Horror 
export const fetchHorrorMoviesRequest = () =>({
    type:MoviesTypes.FETCH_HORROR_MOVIES_REQUEST
})
export const fetchHorrorMoviesSuccess = (horrorMovies:category) =>{
    return {
        type:MoviesTypes.FETCH_HORROR_MOVIES_SUCCESS,
        payload:horrorMovies
    }
}
export const fetchHorrorMoviesError = (error : error) =>{
    return {
        type:MoviesTypes.FETCH_HORROR_MOVIES_ERROR,
        payload:error
    }
}
export const fetchHorrorMoviesAsync = (fetchUrl:string) =>{
    return(dispatch:AppDispatch)=>{
        dispatch(fetchHorrorMoviesRequest())
        axios
            .get(fetchUrl)
            .then(res =>{
                const horrorMovies = res.data.results.map((el:element)=>({
                    ...el
                }))
                dispatch(fetchHorrorMoviesSuccess(horrorMovies))
                return horrorMovies
            })
            .catch(err =>{
                dispatch(fetchHorrorMoviesError(err.message))
            })
    }
}

// Romance 
export const fetchRomanceMoviesRequest = () => ({
    type:MoviesTypes.FETCH_ROMANCE_MOVIES_REQUEST
})
export const fetchRomanceMoviesSuccess = (romanceMovies:category) =>{
    return {
        type:MoviesTypes.FETCH_ROMANCE_MOVIES_SUCCESS,
        payload:romanceMovies
    }
}
export const fetchRomanceMoviesError = (error :error) =>{
    return {
        type:MoviesTypes.FETCH_ROMANCE_MOVIES_ERROR,
        payload:error
    }
}
export const fetchRomanceMoviesAsync = (fetchUrl: string) => {
    return(dispatch:AppDispatch) =>{
        dispatch(fetchRomanceMoviesRequest())
        axios   
            .get(fetchUrl)
            .then(res =>{
                const romanceMovies = res.data.results.map((el:element)=>({
                    ...el
                }))
                dispatch(fetchRomanceMoviesSuccess(romanceMovies))
                return romanceMovies
            })
            .catch(err =>{
                dispatch(fetchRomanceMoviesError(err.message))
            })
    }
}
// Animation 
export const fetchAnimationMoviesRequest = () =>({
    type:MoviesTypes.FETCH_ANIMATION_MOVIES_REQUEST
})
export const fetchAnimationMoviesSuccess = (animationMovies:category) =>{
    return {
        type:MoviesTypes.FETCH_ANIMATION_MOVIES_SUCCESS,
        payload:animationMovies
    }
}
export const fetchAnimationMoviesError = (error:error) =>{
    return {
        type:MoviesTypes.FETCH_ANIMATION_MOVIES_ERROR,
        payload:error
    }
}
export const fetchAnimationMoviesAsync = (fetchUrl:string) =>{
    return (dispatch:AppDispatch)=>{
        dispatch(fetchAnimationMoviesRequest())
        axios
            .get(fetchUrl)
            .then(res => {
                const animationMovies = res.data.results.map((el:element) =>({
                    ...el
                }))
                dispatch(fetchAnimationMoviesSuccess(animationMovies))
                return animationMovies
            })
            .catch(err =>{
                dispatch(fetchAnimationMoviesError(err.message))
            })
    }
}

// Upcoming
export const fetchUpcomingMoviesRequest = () =>({
    type:MoviesTypes.FETCH_UPCOMING_MOVIES_REQUEST
})
export const fetchUpcomingMoviesSuccess = (upcomingMovies :category) =>{
    return {
        type:MoviesTypes.FETCH_UPCOMING_MOVIES_SUCCESS,
        payload:upcomingMovies
    }
}
export const fetchUpcomingMoviesError = (error:error) =>{
    return{
        type:MoviesTypes.FETCH_UPCOMING_MOVIES_ERROR,
        payload:error
    }
}
export const fetchUpcomingMoviesAsync = (fetchUrl : string) =>{
    return (dispatch:AppDispatch) =>{
        dispatch(fetchUpcomingMoviesRequest())
        axios
            .get(fetchUrl)
            .then(res => {
                const upcomingMovies = res.data.results.map((el:element)=>({
                    ...el
                }))
                dispatch(fetchUpcomingMoviesSuccess(upcomingMovies))
                return upcomingMovies
            })
            .catch(err =>{
                dispatch(fetchUpcomingMoviesError(err.message))
            })
    }
}