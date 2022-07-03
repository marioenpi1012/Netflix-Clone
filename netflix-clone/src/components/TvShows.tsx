import { myProps } from 'myProps'
import React from 'react'
import Carousel from './Carousel'
import HomePage from './HomePage'
import {Helmet} from 'react-helmet'
import {useLocation} from 'react-router-dom'
import Landing from './Landing'
type newProps ={
    tvPopular:[],
    topRated:[]
}
type extraProps= newProps & myProps

const TvShows:React.FC<extraProps> = ({data, tvPopular, topRated, imageConfig, genres, carouselTitle}) => {
    const location = useLocation()
    return (
        <div className='TvShows'>
        <Helmet>
            <title>TV Shows</title>
        </Helmet>
            <Landing data={data} CarouselTitle='On Air' imageConfig={imageConfig} genres={genres}  />
            <div className="TvPopular">
                <Carousel data={tvPopular} imageConfig={imageConfig} genres={genres} carouselTitle="Tv Shows Popular" />
            </div>
            <div className="TvTopRated">
                <Carousel imageConfig={imageConfig} genres={genres} data={topRated} carouselTitle="Top rated" />
            </div>
        </div>
    )
}

export default TvShows
