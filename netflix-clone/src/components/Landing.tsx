import React,{useEffect} from 'react'
import { FaPlay, FaInfoCircle  } from "react-icons/fa";
import Carousel from './Carousel';
import style from '../styles/Landing.module.scss'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
const { motion } = require('framer-motion/dist/framer-motion');

type Props = {
    genres:[],
    imageConfig:{
        secure_base_url:string,
        backdrop_sizes:[
            size:string,
            size1:string,
            size2:string,
            size3:string
        ]
    };
    data:[]
    CarouselTitle:string,
}
interface movie {
        title:string,
        name:string,
        overview:string,
        backdrop_path:string,
        id:number,
    } 

const Landing:React.FC<Props> = ({genres,imageConfig, data, CarouselTitle,}) => {
    const dispatch = useDispatch()
    const {dispatchMovieInfo} = bindActionCreators(actionCreators, dispatch)
    const [index,setIndex] = useState<number>(0)
    const Click = (movie:movie) =>{
        dispatchMovieInfo(true, movie)
    }
    useEffect(() => {
        if(data.length < index){
            setIndex(index + 1)
        }else{
            setIndex(0)
        }
    }, [index])
    return (
        <>
        {
            data?.map((movie:movie, i:number)=>(
                i === index &&
                <div key={i} className={style.Landing} style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}>
                <div className={style.container}>
                    <div className={style.title}>{movie.title ? movie.title : movie.name}</div>
                    <div className={style.description}>
                        {movie.overview}
                    </div>
                    <div className={style.btns}>
                        <motion.button
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                            > 
                            <FaPlay/> Play
                        </motion.button>
                        <motion.button
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                            onClick={()=>Click(movie)}
                            > 
                            <FaInfoCircle/> More Info
                        </motion.button>
                    </div>
                </div>
                <div className={style.banner}></div>
                <div className={style.carouselWrapper}>
                    <Carousel data={data} genres={genres} category="Trending" carouselTitle={CarouselTitle} imageConfig={imageConfig}/>
                </div>
            </div>
                ))
            }
        </>
    )
}

export default Landing
