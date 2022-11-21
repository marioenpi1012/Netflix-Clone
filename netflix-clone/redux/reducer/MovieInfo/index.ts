import { MovieInfoType } from '../../action-types'

const initialState = {
    open : false,
    movie: {}
}

const movieInfoReducer = (state = initialState, action:any )=>{
    switch(action.type){
        case MovieInfoType.MOVIE_INFO_OPEN:
            return {
                ...state,
                open:true,
                movie:{...action.payload}
            }
        case MovieInfoType.MOVIE_INFO_CLOSE:
            return {
                ...state,
                open:false,
                movie:{}
            }
        default:
            return state
    }
}
export default movieInfoReducer