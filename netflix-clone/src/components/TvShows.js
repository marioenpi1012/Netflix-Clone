import React from 'react'
import Carousel from './Carousel'
import HomePage from './HomePage'
import Landing from './Landing'
import {Helmet} from 'react-helmet'

const TvShows = ({data, tvPopular, topRated}) => {
    console.log(data)
    return (
        <div className='TvShows'>
        <Helmet>
            <title>TV Shows</title>
        </Helmet>
            <HomePage data={data} CarouselTitle='On Air' />
            <div className="TvPopular">
                <div className="title"> Tv Shows Popular </div>
                <Carousel data={tvPopular} />
            </div>
            <div className="TvTopRated">
                <div className="title">Tv Shows Top Rated</div>
                <Carousel data={topRated} />
            </div>
        </div>
    )
}

export default TvShows
