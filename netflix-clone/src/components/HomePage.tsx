import React from 'react'
import Landing from './Landing'
import style from '../styles/Landing.module.scss'
import { Key } from 'node:readline'
import {useLocation} from 'react-router-dom'
import Carousel from './Carousel'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducer'
type Props = {
    CarouselTitle:string,
    imageConfig:any,
    genres:[],
    data:[],
}
interface Location{
    state:unknown;
    key:Key
}
const HomePage:React.FC<Props> = ({CarouselTitle, data, imageConfig, genres}) => {
    interface movie {
        title:string,
        name:string,
        overview:string,
        backdrop_path:string,
        id:number,
    }  
    const state = useSelector((state:RootState) => state.movies)
    const location = useLocation()
    return (
        <div className={style.HomePage}>
                <Landing
                    CarouselTitle={CarouselTitle}
                    data={data}
                    imageConfig={imageConfig}
                    genres={genres}
                />
                <Carousel imageConfig={imageConfig} genres={genres} data={state.topRated} carouselTitle="Top rated" category="topRated"/>
                <Carousel imageConfig={imageConfig} genres={genres} data={state.action} carouselTitle="Action" category="action"/>
                <Carousel imageConfig={imageConfig} genres={genres} data={state.animation} carouselTitle="Animation"/>
                <Carousel imageConfig={imageConfig} genres={genres} data={state.comedy} carouselTitle="Comedy"/>
                <Carousel imageConfig={imageConfig} genres={genres} data={state.horror} carouselTitle="Horror"/>
                <Carousel imageConfig={imageConfig} genres={genres} data={state.romance} carouselTitle="Romance"/>
                <Carousel imageConfig={imageConfig} genres={genres} data={state.adventure} carouselTitle="Adventure"/>
        </div>
    )
}

export default HomePage
