import {MovieInfoType, MoviesTypes , TvShowsTypes} from '../action-types'

type Props = {
    type:MovieInfoType | MoviesTypes | TvShowsTypes,
    payload?:any
}

export default Props