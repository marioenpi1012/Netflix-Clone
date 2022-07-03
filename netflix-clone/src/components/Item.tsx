import React , {useState} from 'react'
import style from '../styles/Item.module.scss'
import { FaLessThan, FaGreaterThan, FaPlayCircle, FaPlay, FaAngleDown, FaPlus  } from "react-icons/fa"
import MovieInfo from './MovieInfo'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../redux'
const {motion} = require('framer-motion/dist/framer-motion')
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
    genres:[],
    imageConfig:any,
    data?:[],
    

}
const Item:React.FC<Props> = ({genres, movie, imageConfig}) => {
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
    const {dispatchMovieInfo} = bindActionCreators(actionCreators, dispatch)

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
        dispatchMovieInfo(true, movie)
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
                                        onClick={()=>handleClick(movie.id)}
                                        >
                                        <FaAngleDown className={style.infoBtnIcon} />
                                    </motion.div>
                                </div>
                                <div className={style.infoTitle}>
                                    {movie.title ? movie.title : movie.name}
                                </div>
                                <div className={style.genres}>
                                    {
                                        genres.map((genre:Genre)=>(
                                            movie.genre_ids.includes(genre.id) && <div key={genre.id} >{genre.name}</div>
                                            ))
                                        }
                                </div>
                            </motion.div>
                            <img src={`${imageConfig?.secure_base_url}${imageConfig?.backdrop_sizes[2]}/${movie.backdrop_path ?? movie.poster_path}`} />
                        </motion.div>
        </>
    )
}

export default Item
