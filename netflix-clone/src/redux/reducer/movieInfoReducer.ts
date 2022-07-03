import { ActionType } from '../action-types'
import {action} from '../actions/index'

interface initState{
    open:false,
    movie:{}
    
}
const initial:initState ={
    open:false,
    movie:<{}>{}
}
const movieInfoReducer = (state:initState = initial, action:action) =>{
    switch(action.type){
        case ActionType.OPEN:
            return {
                ...state,
                open:action.payload.open,
                movie:action.payload.movie,
            }
        default:
            return state
    }
}

export default movieInfoReducer