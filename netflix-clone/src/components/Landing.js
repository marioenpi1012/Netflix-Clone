import React from 'react'
import { FaPlay, FaInfoCircle  } from "react-icons/fa";
import {NavLink} from 'react-router-dom'
import Carousel from './Carousel';
import MovieInfo from './MovieInfo';

const Landing = ({title, description, image, data, CarouselTitle, name}) => {
    const Click = () =>{
        MovieInfo.bind(data)
    }
    return (
        <div className='Landing' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${image})`}}>
            <div className="container">
                <div className="title">{title ? title : name}</div>
                <div className="description">
                    {description}
                </div>
                <div className="btns">
                <button> <FaPlay/> Play</button>
                <button onClick={Click}> <FaInfoCircle/> More Info</button>
                    
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
