import React from 'react'
import {Helmet} from 'react-helmet'
import HomePage from './HomePage'
const Movies = ({data}) => {
    return (
        <div className='Movies'>
            <Helmet>
                <title>Movies</title>
            </Helmet>
            <HomePage CarouselTitle='Movies' data={data} />
        </div>
    )
}

export default Movies
