import React from 'react'
import {Helmet} from 'react-helmet'
import HomePage from './HomePage'
import {useParams} from 'react-router-dom'
import Landing from './Landing'
type Props = {
    data:[],
    imageConfig:any,
    genres:[]
}
const Movies: React.FC<Props> = ({data, imageConfig, genres}) => {
    const category = useParams()
    console.log(category)
    return (
        <>
            <Helmet>
                <title>Movies</title>
            </Helmet>
            <Landing imageConfig={imageConfig} genres={genres} CarouselTitle='Movies' data={data} />
        </>
    )
}

export default Movies
