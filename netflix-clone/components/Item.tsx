import React , {useState} from 'react'
import style from '../styles/Item.module.scss'
import { FaLessThan, FaGreaterThan, FaPlayCircle, FaPlay, FaAngleDown, FaPlus  } from "react-icons/fa"
import MovieInfo from './MovieInfo'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../redux'
import {imageUrl} from '../requests'
// const {motion} = require('framer-motion/dist/framer-motion')
import {motion} from 'framer-motion'
import Image from 'next/image'
import { genresList } from '../dispatchConfig'
import { movieInfoOpen } from '../redux/actions-creator/movieInfo.Actions'
import Router from 'next/router'

type Props = {
    movie:{
        title:string,
        name:string,
        backdrop_path:string,
        overview:string,
        genre_ids:any[],
        id:number,
        poster_path:string
    },
    data?:[],
}
const Item:React.FC<Props> = ({movie}) => {
    interface movie{
        title:string,
        name:string,
        backdrop_path:string,
        overview:string,
        genre_ids:any[],
        id:number,
        poster_path:string
    }
    interface Genre{
    id:number,
    name:string
    }  
    const dispatch = useDispatch()

    const hoverVariants = {
        initial:{
            scale:1,
            transition:{
                duration:1,
                type:"tween",
                ese:"easeOut"
            }
        },
        hover:{
            scale:1.1, 
            margin:"0% 1%",
            zIndex:1,
            transition:{
                duration:1,
                type:"tween",
                ease:"easeIn",
            }
        }
    }
    const infoMotion ={
        rest:{
            opacity:0,
            y:50,
            transition:{
                ease:"easeOut",
                duration:0.4,
                type:"tween", 
            }
            
        },
        hover:{
            opacity:1,
            y:0,
            transition:{
                duration:0.4,
                type:"tween",
                ease:"easeIn",
                staggerChildren:0.05,
                delayChildren:0.5
            }
        }
    }
    const handleClick = (id:number) =>{
        console.log(id)
        dispatch(movieInfoOpen({...movie}))
        // Router.router?.push('/movieInfo')
        // setMovieInfo(true)
        // setMovieId(id)
    }
    return (
        <>  
            <motion.div 
                        className={style.item} 
                        variants={hoverVariants} 
                        // ref={item}
                        key={movie.id}
                        data-title={movie.title}
                        data-description={movie.overview}
                        initial='rest'
                        whileHover="hover"
                        animate='rest'
                        onClick={()=>handleClick(movie.id)}
                        >        
                            <motion.div 
                                className={style.info}
                                variants={infoMotion}
                                >
                                <div className={style.icons}>
                                    <motion.div
                                        className={style.play}
                                        whileTap={{scale:0.9}}
                                        whileHover={{scale:1.1}}
                                        >
                                        <FaPlay />
                                    </motion.div>
                                    <motion.div
                                        className={style.add}
                                        whileTap={{scale:0.9}}
                                        whileHover={{scale:1.1}}
                                        >
                                        <FaPlus/>
                                    </motion.div>
                                    <motion.div
                                        className={style.toggleModal}
                                        whileTap={{scale:0.9}}
                                        whileHover={{scale:1.1}}
                                       
                                        >
                                        <FaAngleDown className={style.infoBtnIcon} />
                                    </motion.div>
                                </div>
                                <div className={style.infoTitle}>
                                    {movie.title ? movie.title : movie.name}
                                </div>
                                <div className={style.genres}>
                                    {
                                        // genres.map((genre:Genre)=>(
                                        //     movie.genre_ids.includes(genre.id) && <div key={genre.id} >{genre.name}</div>
                                        //     ))
                                        }
                                </div>
                            </motion.div>
                            <img src={`${imageUrl}/${movie.backdrop_path ?? movie.poster_path}`} width='100px' height='100px' />
                        </motion.div>
        </>
    )
}

export default Item
