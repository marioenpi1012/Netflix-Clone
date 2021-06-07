import React from 'react'
import Landing from './Landing'
import {Helmet} from 'react-helmet'
const HomePage = ({CarouselTitle, data}) => {
    return (
        <div className='HomePage'>
        
            {
            data.filter((Element, index) => index == 0 ).map(trend => (
                    <Landing
                    title={trend.title}
                    name={trend.name}
                    description={trend.overview}
                    image={trend.backdrop_path}
                    CarouselTitle={CarouselTitle}
                    data={data}

                />
            ))
            }
        </div>
    )
}

export default HomePage
