import { ActionType } from '../action-types'

interface TRENDING  {
    type:ActionType.FETCH_TRENDING_TV_SHOWS_REQUEST | ActionType.FETCH_TRENDING_TV_SHOWS_SUCCESS | ActionType.FETCH_TRENDING_TV_SHOWS_ERROR,
    payload?: any
}
interface ACTION {
    type:ActionType.FETCH_ACTION_TV_SHOWS_REQUEST | ActionType.FETCH_ACTION_TV_SHOWS_SUCCESS | ActionType.FETCH_ACTION_TV_SHOWS_ERROR,
    payload?: any
}
interface ANIMATION {
    type: ActionType.FETCH_ANIMATION_TV_SHOWS_REQUEST | ActionType.FETCH_ANIMATION_TV_SHOWS_SUCCESS | ActionType.FETCH_ANIMATION_TV_SHOWS_ERROR,
    payload?: any
}
interface COMEDY {
    type: ActionType.FETCH_COMEDY_TV_SHOWS_REQUEST | ActionType.FETCH_COMEDY_TV_SHOWS_SUCCESS | ActionType.FETCH_COMEDY_TV_SHOWS_ERROR,
    payload ? : any
}

interface CRIME {
    type: ActionType.FETCH_CRIME_TV_SHOWS_REQUEST | ActionType.FETCH_CRIME_TV_SHOWS_SUCCESS | ActionType.FETCH_CRIME_TV_SHOWS_ERROR ,
    payload?: any
}
interface DOCUMENTARY{
    type:ActionType.FETCH_DOCUMENTARY_TV_SHOWS_REQUEST | ActionType.FETCH_DOCUMENTARY_TV_SHOWS_SUCCESS | ActionType.FETCH_DOCUMENTARY_TV_SHOWS_ERROR ,
    payload: any
}

export type tvShowsAction =  TRENDING | ACTION |  ANIMATION | COMEDY | CRIME | DOCUMENTARY 

