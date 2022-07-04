import { ActionType } from '../action-types'
import {action} from '../actions/index'

interface initState{
    topRated:[],
    action:[],
    animation:[],
    comedy:[],
    horror:[],
    romance:[],
    popular:[],
    latest:[],
    upcoming:[],
    adventure:[],
    trending:[]
    
}
const init:initState ={
    topRated:[],
    action:[],
    popular:[],
    latest:[],
    upcoming:[],
    animation:[],
    comedy:[],
    horror:[],
    romance:[],
    adventure:[],
    trending:[]

}
const moviesReducer = (state:initState = init, action:action) =>{
    switch(action.type){
        case ActionType.TOPRATED:
            return {
                ...state,
                topRated:action.payload,
            }
        case ActionType.ACTION:
            return {
                ...state,
                action:action.payload,
            }
        case ActionType.POPULAR:
            return {
                ...state,
                popular:action.payload,
            }
        case ActionType.LATEST:
            return {
                ...state,
                latest:action.payload,
            }
        case ActionType.UPCOMING:
            return {
                ...state,
                upcoming:action.payload,
            }
        case ActionType.ANIMATION:
            return {
                ...state,
                animation:action.payload,
            }
        case ActionType.COMEDY:
            return {
                ...state,
                comedy:action.payload,
            }
        case ActionType.HORROR:
            return {
                ...state,
                horror:action.payload,
            }
        case ActionType.ROMANCE:
            return {
                ...state,
                romance:action.payload,
            }
        case ActionType.ADVENTURE:
            return {
                ...state,
                adventure:action.payload,
            }
        case ActionType.TRENDING:
            return {
                ...state,
                trending:action.payload,
            }
        default:
            return state
    }
}

export default moviesReducer