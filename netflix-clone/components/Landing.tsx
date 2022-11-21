import React,{useEffect} from 'react'
import { FaPlay, FaInfoCircle  } from "react-icons/fa";
import Carousel from './Carousel';
import style from '../styles/Landing.module.scss'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {imageUrl} from '../requests'
import {motion} from 'framer-motion'
import { useSelector } from 'react-redux';
import { movieInfoOpen } from '../redux/actions-creator/movieInfo.Actions';
import useTruncate from './hooks/useTruncate';
type Props = {
    genres?:[],
    props:{
        genre:string,
        id:number,
        selector:any,
        title:string,
    }
}
interface movie {
        title:string,
        name:string,
        overview:string,
        backdrop_path:string,
        id:number,
} 
interface state {
    loading:Boolean,
    error:string,
    data:[]
}

const Landing:React.FC<Props> = ({genres, props}) => {
    const state:state = useSelector(props.selector)
    const {loading, error, data} = state
    console.log({props})
    const dispatch = useDispatch()
    // const {dispatchMovieInfo} = bindActionCreators(actionCreators, dispatch)
    const [index,setIndex] = useState<number>(0)
    const Click = (movie:movie) =>{
        dispatch(movieInfoOpen(movie))
    }
    console.log(props)
    const {title, genre} = props
    useEffect(() => {
        // if(data.length < index){
        //     setIndex(index + 1)
        // }else{
        //     setIndex(0)
        // }
    }, [index])
    return (
        <>
        {
            loading === false &&
            data?.map((movie:movie, i:number)=>(
                i === index &&
                <div key={i} className={style.Landing} style={{backgroundImage:`url(${imageUrl}${movie.backdrop_path})`}}>
                <div className={style.container}>
                    <div className={style.title}>{movie.title ? movie.title : movie.name}</div>
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
                    <div className={style.description}>
                        {useTruncate(movie.overview, 150)}
                    </div>
                </div>
                <div className={style.banner}></div>
                <div className={style.bannerShadow}></div>
            </div>
                ))
            }
        </>
    )
}

export default Landing
