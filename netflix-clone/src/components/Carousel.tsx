import { FaLessThan, FaGreaterThan, FaPlayCircle, FaPlay, FaAngleDown, FaPlus  } from "react-icons/fa";
import {Children, useState, useRef, useEffect} from 'react'
import {myProps} from 'myProps'
import {NavLink, useLocation,} from 'react-router-dom'
import styled from 'styled-components'
import style from "../styles/Carousel.module.scss"
import MovieInfo from "./MovieInfo";
import Item from "./Item";
import ShowAll from "./ShowAll";
const  { motion } = require("framer-motion/dist/framer-motion");


const Carousel: React.FC<myProps> = ({data, imageConfig,category, genres, carouselTitle, locationName}) => {
    const carousel = useRef(null)
    const list = useRef(null)
    const [currentPage, setCurrentPage] = useState(0)
    const [touch, setTouch] = useState(false)
    const allCarousel = document.querySelectorAll(`.${style.Carousel}`)
    const [translateX, setTranslateX] = useState(0)
    const location = useLocation()
    useEffect(() => {
        if('ontouchstart' in document.documentElement){
        setTouch(!touch)
    }
    }, [])
    
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
    

    let page:number = 0
    allCarousel.forEach(carousel => {
        page = Math.ceil(carousel.scrollWidth / carousel.clientWidth)
    })
    const prev = () =>{
        // get the target parent element (carousel-btns) and the the previous sibling (Carousel)
        // const carousel = e.target.parentElement.previousSibling
        // carousel.scrollLeft -= carousel.offsetWidth
        // const prevBtn = document.getElementsByClassName('prev')
        if(currentPage > 0){
            setCurrentPage(currentPage - 1 )
        }
        setTranslateX(translateX + 100)
        // list.current.style.transform = `translateX(-${translateX}%)`
        // console.log('left',{translateX})
        
    }
    
    const next = (e:any) =>{
        // const carbtns = e.target.parentElement
        // const carousel = carbtns.previousSibling
        // // Get the children of Carousel (list) and then the children of list (item)
        // const movies = carousel.childNodes[0].children
        // // const page = carousel.scrollWidth / carousel.clientWidth
        // carousel.scrollLeft += (carousel.scrollWidth / movies.length ) + carousel.clientWidth - 500 
        const padding = 20
        setTranslateX(translateX - 100)
        // carousel.current.scrollLeft += carousel.current.offsetWidth - 140
        // list.current.style.transform = `translateX(-${translateX}%)`
        
        if( currentPage < page - 1){
            setCurrentPage(currentPage + 1)
        }
        
        
    }
    
    const hover  = (e:any) =>{
        setH(true)
    }
    const notHover = (e:any) =>{
        setH(false)
    }
    const [h, setH] = useState(false)
    const handleSetClick = (e:any) =>{
        setCurrentPage(e.target.getAttribute('data-index'))
    }
    if('ontouchstart' in document.documentElement){
    }else{
    }
    const textMotion = {
        rest:{
            opacity:0,
            x:-50,
            transition:{
                duration:1,
                type:"spring",
                // stiffness:100,
                // ese:"easeOut"
            }
        },
        hover:{
            x:0,
            opacity:1,
            transition:{
                duration:1,
                type:"spring",
                // stiffness:100,
            }
        }
    }
    const hoverMotion ={
        rest:{
            transition:{
                type:"spring", 
                duration:0.4,
                stiffness:100,
            }
            
        },
        hover:{
            transition:{
                duration:0.4,
                type:"spring",
                stiffness:100,
                staggerChildren:0.05,
                delayChildren:0.5
            }
        }
    }
    const click = () =>{
        ShowAll.bind(carouselTitle)
    }
    return (
        <>
        
        <div className={style.slider} onMouseEnter={hover} onMouseLeave={notHover}>
            <NavLink onClick={click} to={{pathname:`${location.pathname !== '/' ? `${location.pathname}/` : '/home/'}${category}`,state:`${carouselTitle}`}}>
                <motion.div variants={hoverMotion} initial="rest" animate='rest' whileHover='hover' className={style.title}>
                    {carouselTitle} <motion.div variants={textMotion}> <span>show all</span> </motion.div>
                </motion.div>
            </NavLink>
            
            <div className={style.dotsContainer}>
                {
                    [...Array(page)].map((e,i) =>{
                        return (
                            i === currentPage
                            ? <Current className={style.dots} key={i} />
                            : <span className={style.dots}  key={i} data-index={i} onClick={handleSetClick}/> 
                            )
                        })
                }
            </div>
            <div className={style.Carousel} ref={carousel}  >
                <motion.div 
                    className={style.list} 
                    ref={list} 
                    animate={{x:`${translateX}%`}}
                    transition={{type:"spring", stiffness:100}}
                    >
                    {data?.map((movie:movie, i:number) =>(
                        <>
                            <Item key={i} data={data} genres={genres} movie={movie} imageConfig={imageConfig} />
                        </>
                        
                        ))
                        
                    }
                </motion.div>
                
            </div>
            <div className={style.carouselBtns} style={h?{display:'contents'}:{display:'none'}}>
                <motion.div 
                    whileHover={{scale:1.1}} 
                    whileTap={{scale:0.9}} 
                    className={style.prev}  
                    onClick={prev} 
                    style={currentPage == 0  ? {display:'none'} : {}} 
                    >
                    <FaLessThan style={{pointerEvents:'none'}}/>
                </motion.div>
                <motion.div 
                    whileHover={{scale:1.1}} 
                    whileTap={{scale:0.9}} 
                    className={style.next}  
                    onClick={next}  >
                    <FaGreaterThan style={{pointerEvents:'none'}} />
                </motion.div>
            </div>
        </div>
    </>
    )
}
// const current page styles 
const Current =  styled.span `
    :before {
        content: " ";
        height: 5px;
        width: 20px;
        background: red;
        transition: background 0.3s ease;
    }
`
const prev = `
    transform :'translateX(-50%)
`



export default Carousel
