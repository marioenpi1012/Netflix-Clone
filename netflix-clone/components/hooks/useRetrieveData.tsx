import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {fetchMoviesData, fetchTvShowsData} from  '../../dispatchConfig'
import {AppDispatch} from '../../redux/store'

export const useRetrieveData = (type:string) =>{
    const dispatch = useDispatch<AppDispatch>()
    const [data,setData]= useState<any>()
    
    useEffect(()=>{
        let selectedArr = null
        switch(type){
            case "movies":
            case 'browse':
                selectedArr = fetchMoviesData;
                break
            case 'tvshows':
                selectedArr = fetchTvShowsData;
                break;
            default:
                break;
        }
        const isPage = true
        const items  = selectedArr?.map(el =>{
            console.log(el)
            dispatch(el.thunk(el.url, isPage))
            return{
                id:el.id,
                title:el.title,
                genre:el.genre,
                selector:el.selector
            }
        })
        setData(items)
    },[type,dispatch])
    return data
}
