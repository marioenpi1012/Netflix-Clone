import { MovieInfoType } from '../action-types'

export const movieInfoOpen = (movie:{}) =>({
    type:MovieInfoType.MOVIE_INFO_OPEN,
    payload:movie
})
export const movieInfoClose = () =>({
    type:MovieInfoType.MOVIE_INFO_CLOSE
})