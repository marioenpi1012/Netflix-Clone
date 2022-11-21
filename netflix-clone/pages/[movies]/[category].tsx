import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useRetrieveCategory } from "../../components/hooks/useRetrieveCategory"
import React, { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import Item from "../../components/Item"
import Style from '../../styles/movieList.module.scss';
import useLazyLoad from '../../components/hooks/useLazyLoad'
// const lazyLoading = lazy(()=> import('../../components/Item'))
interface category{
        genre:string,
        id:number,
        selector:any,
        title:string
        
}
interface Movie {
    name:string,
    title:string,
    id:number;
    backdrop_path:string;
    overview:string,
    genre_ids:any[],
    poster_path:string
} 
interface state{
    error:string,
    loading:Boolean,
    data:[]
}
const movieCategory : NextPage = () => {
    const [page,setPage] = useState(2)
    const router = useRouter()
    let url = router.query.movies
    const categoryData = router.query.category
    const category:category = useRetrieveCategory(url, categoryData, page)
    const preventUndefinedSelector = () => undefined;
    const selector = category ? category.selector : preventUndefinedSelector
    const state:state  = useSelector(selector)
    const handleLoadMore = () => setPage(page => page + 1)
    const [endPageRef, isIntersecting] = useLazyLoad(handleLoadMore)
    const location = useRouter()
    const {query} = useRouter()
    console.log({query})
    console.log({location}, {url},location.query)

    
    return (
        <div 
            className={Style.movieList}
        >
            {category ? (
            <>
            <div className={Style.title}>{category?.title}</div>
            <div className={Style.list}>
                {
                    state?.data.map((movie:Movie)=>(
                        <div className={Style.item}>
                        <Item 
                            key={movie.id} 
                            movie={movie} 
                            />
                        </div>
                        ))
                    }
                <div 
                    className={`${Style.endPage} ${isIntersecting ? 'intersected' : null}` } 
                    ref={endPageRef} 
                    />
            </div>
        </>
        )
        : <div>loading...</div>
                        }
        </div>
    )
}

export default movieCategory