import React from 'react'
import { FaPlay, FaPlus } from 'react-icons/fa'
import style from '../styles/MovieInfo.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/reducer/index'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../redux'
import {motion} from 'framer-motion'
import {imageUrl} from '../requests'
import { movieInfoClose } from '../redux/actions-creator/movieInfo.Actions';
import { FaTimes } from 'react-icons/fa'
type Props ={
    genres: [];
}
interface Movie{
    backdrop_path:string,
    poster_path:string,
    title:string,
    name:string,
    overview:string,
    genre_ids:any[],
    release_date:string,
    vote_average:number,
    first_air_date:number,
    original_language:string,
    id:number
}
interface Genre{
    id:number,
    name:string
}
interface state{
    open:Boolean,
    movie:Movie
}
const MovieInfo: React.FC<Props> = ({
    genres ,
}) => {
    const dispatch = useDispatch()
    const state:state = useSelector((state: RootState) => state.movieInfo)
    const {backdrop_path,title,overview,genre_ids,name,release_date,first_air_date,vote_average,original_language, poster_path} = state.movie

    const variants = {
        hidden:{
            opacity:0,
            y:50
        },
        start:{
            opacity:1,
            y:0,
            transition:{
                type:"spring",
                stiffness:100,
                duration:0.5
            }
        },
        end:{
            opacity:0,
            y:50,
            transition:{
                type:"spring",
                duration:1
            }
        }

    }
    const handleClick = () =>{
        dispatch(movieInfoClose())
    }
    return (
                <motion.div 
                    key="MovieInfo"
                    className={style.MovieInfo}
                    variants={variants}
                    initial="hidden"
                    animate="start"
                    exit="hidden"
                    >
                <div className={style.container}>
                    <motion.div 
                        className={style.close}
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}
                        onClick={handleClick}
                        >
                        <FaTimes />
                    </motion.div>
                    <div className={style.image}>
                        <img src={`${imageUrl}/${backdrop_path ?? poster_path}`}  />
                        <div className={style.image__shadow}></div>
                        <div className={style.btns}>
                            <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className={style.play}>
                                <FaPlay /> Play
                            </motion.button>
                            <motion.div className={style.add} whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
                                <FaPlus />
                            </motion.div>
                        </div>
                    </div>
                    <div className={style.info}>
                        <div className={style.movieInfo}>
                            <div className={style.title}>
                                {title ?? name}
                            </div>
                            <div className={style.description}>
                            {overview}
                            </div>
                    </div>
                    <hr className={style.line}></hr>
                    <div className={style.generalInfo}>
                        <div className={style.title__container}>
                            Info on <span className={style.title}>{title}</span>
                        </div>
                        <div className={style.movie__info}>
                            <div className={style.title}>Genres:</div>
                            {
                                genres.map((genre:Genre)=>(
                                    genre_ids?.includes(genre.id) && <span className={style.description} key={genre.id} > { genre.name }</span> 
                                    ))
                            }
                        </div>
                        <div className={style.movie__info}>
                            {
                                release_date ? (
                                    <>
                                        <div className={style.title}>Release Date:</div>
                                        <span className={style.description}>{release_date}</span>
                                    </>
                                    ) 
                                : (
                                    <>
                                        <div>First air date :</div> 
                                        <span>{first_air_date}</span>
                                    </>
                                )        
                            }
                        </div>
                        <div className={style.movie__info}>
                            <div className={style.title}>Average vote:</div>
                            <span className={style.description}>{vote_average}</span>
                        </div>
                        <div className={style.movie__info}>
                            <div className={style.title}>Original language</div>
                            <span className={style.description}>{original_language}</span>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </motion.div>
    )
}

export default MovieInfo