import React from 'react'
import { FaPlay, FaInfoCircle  } from "react-icons/fa";
import Carousel from './Carousel';

const Landing = ({title, description, image, data, CarouselTitle}) => {
    return (
        <div className='Landing' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${image})`}}>
            <div className="container">
                <div className="title">{title}</div>
                <div className="description">
                    {description}
                </div>
                <div className="btns">
                    <button> <FaPlay/> Play</button>
                    <button> <FaInfoCircle/> More Info</button>
                </div>
            </div>
            <div className="carousel-wrapper">
                <div className="title">{CarouselTitle}</div>
                    <Carousel data={data} />
            </div>
            
        </div>
    )
}

export default Landing
