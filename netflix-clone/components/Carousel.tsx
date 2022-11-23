import { FaLessThan, FaGreaterThan  } from "react-icons/fa";
import { useState, useRef} from 'react'
import {myProps} from 'myProps'
import Link from 'next/link'
import style from  '../styles/Carousel.module.scss'
import Item from "./Item";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {useRouter} from 'next/router'
// Swiper
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Navigation, Pagination]);
interface state{
    loading:Boolean,
    error:string,
    data:[]
}
type props ={
    props:{
            title:string,
            genre:string,
            selector:any,
            id:number
    }
}
const Carousel: React.FC<myProps & props> = ({props}) => {
    const state :state= useSelector(props.selector)
    const {title, genre} = props
    const {loading, error, data} = state
    const [hasBeenClicked, setHasBeenClicked] = useState(false)
    const { pathname } = useRouter()
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
                duration:0.6,
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
    // Swiper Config
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const width = 390
    const customSwiperParams = {
        observer: true,
        observeParents: true,
		navigation: {
			prevEl: navigationPrevRef.current,
			nextEl: navigationNextRef.current,
		},
		breakpoints:{
			1378: { slidesPerView: 6, slidesPerGroup: 6 },
			998: { slidesPerView: 4, slidesPerGroup: 4 },
			625: { slidesPerView: 3, slidesPerGroup: 3 },
			330: { slidesPerView: 2, slidesPerGroup: 2 },
			0: { slidesPerView: 1.5, slidesPerGroup: 1.5 }
		},
		// loopAdditionalSlides: width >= 1378 ? 5 : width >= 998 ? 3 : width >= 625 ? 2 : 2,
		pagination: true,
		loop:false,
		grabCursor: false,
		draggable: false,
		preventClicksPropagation: true,
		preventClicks: true,
		slideToClickedSlide: false,
		allowTouchMove: true
    }
    return (
        <div className={style.slider} >
            {
                !loading &&
            <Link  href='#'>
                <motion.div variants={hoverMotion} initial="rest" animate='rest' whileHover='hover' className={style.title}>
                    {title} <motion.div variants={textMotion}> <span>show all</span> </motion.div>
                </motion.div>
            </Link>
            }

            {
            !loading && !error && (
            <div className={style.Carousel} >
                <div 
                    className={style.prev} 
                    ref={navigationPrevRef}
                    // style={hasBeenClicked ? {opacity:1} : {opacity:0}}
                    >
                    <FaLessThan />
                </div>
                <div 
                    className={style.next} 
                    ref={navigationNextRef} 
                    onClick={()=>setHasBeenClicked(true)}
                    >
                    <FaGreaterThan />
                </div>
                <Swiper 
                    {...customSwiperParams}
                    className={style.list}
                    // onBeforeInit={(swiper)=>{
                    //     swiper.params.navigation = {
                    //         nextEl:navigationNextRef.current,
                    //         prevEl:navigationPrevRef.current
                    //     }
                    //     }}
                    >
                    {
                    !loading &&
                        data &&    
                    data?.map((movie:any) =>(
                            <SwiperSlide key={movie.id}
                            >
                                <Item key={movie.id} data={data} movie={movie}  />
                            </SwiperSlide>
                        
                        ))
                        
                    }
                </Swiper>
            </div>
            )
            }
        
        </div>
    )
}




export default Carousel
