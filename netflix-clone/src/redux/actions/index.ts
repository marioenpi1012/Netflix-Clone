import {ActionType} from '../action-types/index'

interface moviesAction{
    type:ActionType.TOPRATED | ActionType.ACTION | ActionType.ANIMATION | ActionType.ADVENTURE | ActionType.COMEDY | ActionType.HORROR | ActionType.ROMANCE 
    | ActionType.POPULAR | ActionType.UPCOMING | ActionType.LATEST | ActionType.TRENDING,
    payload:[]
}
interface movieInfo{
    type:ActionType.OPEN,
    payload:{
        open:Boolean,
        movie:{}
    }
}

export type action = moviesAction | movieInfo
