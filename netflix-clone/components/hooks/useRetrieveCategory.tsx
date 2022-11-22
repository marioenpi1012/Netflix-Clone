import { AppDispatch } from "../../redux/store";
import {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import { fetchMoviesData, fetchTvShowsData } from '../../dispatchConfig';

export const useRetrieveCategory = (sliceUrl:any,categoryName:any,page:number)=>{
    const dispatch = useDispatch<AppDispatch>()
    const [category,setCategory] =  useState<any>()
    useEffect(()=>{
        let selectedArr = null
        switch(sliceUrl){
            case 'browse':
            case 'movies':
                selectedArr = fetchMoviesData;
                break;
            case 'tvShows':
                selectedArr = fetchTvShowsData;
                break;
            default:
                break
        }
        const data :any = selectedArr?.find(el => el.genre === categoryName);
        dispatch(data.thunk(`${data.url}&page=${page}`))
        setCategory(data)
        
        console.log('hook', {data})
    },[dispatch, categoryName, sliceUrl, page])
    return category
}