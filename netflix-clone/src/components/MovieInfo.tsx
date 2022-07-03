import React from 'react'
import { FaPlay, FaPlus } from 'react-icons/fa'
import style from '../styles/MovieInfo.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/reducer/index'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../redux'
const {motion} =  require('framer-motion/dist/framer-motion')
type Props ={
    genres: [];
    image:any,
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
    image, 
}) => {
    const dispatch = useDispatch()
    const {dispatchMovieInfo} = bindActionCreators(actionCreators, dispatch) 
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
        dispatchMovieInfo(false, {})
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
                        X
                    </motion.div>
                    <div className={style.image}>
                        <img src={`${image.secure_base_url}${backdrop_path ? image.backdrop_sizes[3] : 'original'}/${backdrop_path ?? poster_path}`}  />
                        <div className={style.btns}>
                            <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className={style.play}>
                                <FaPlay /> Play
                            </motion.button>
                            <motion.div className={style.add} whileHover={{scale:1.1}} whileTap={{scale:0.9}}assName={style.add}>
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
                        <div className={style.title}>
                        Info on {title}
                        </div>
                        <div className={style.genres}>
                        genres : 
                        {
                            genres.map((genre:Genre)=>(
                                genre_ids?.includes(genre.id) && <div key={genre.id} > { genre.name }</div> 
                                ))
                            }
                        </div>
                        <div className={style.releaseDate}>
                            {
                                release_date ? `Release date: ${release_date}` : `First air date: ${first_air_date}`
                            }
                        </div>
                        <div className={style.averageVote}>
                            Average vote : {vote_average}
                        </div>
                        <div className={style.originalLanguage}>
                            Original language : {original_language}
                        </div>
                    </div>
                    </div>
                    
                </div>
            </motion.div>
    )
}

export default MovieInfo