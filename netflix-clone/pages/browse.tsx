import {useState, useEffect} from 'react'
import HomePage from '../components/Home';
import {useDispatch, useSelector,} from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators, tvActionCreators} from '../redux/index' 
import { RootState } from '../redux/reducer';
import MovieInfo from '../components/MovieInfo';
import {NextPage} from 'next'
import {AnimatePresence} from 'framer-motion'
import Router,  {useRouter} from 'next/router'
import {useRetrieveData} from '../components/hooks/useRetrieveData'
import React from 'react';
import { genresList } from '../dispatchConfig'
interface movieInfo{
    open:Boolean,
    movie:{}
}
type Props ={
    data:any,
    data1:any,
}

const App:NextPage<Props> = () => {
    const dispatch = useDispatch()
    const [genres, setGenres] = useState<any | null>([])
    const rows:any = useRetrieveData('movies')
    // Router.router?.push('/movieInfo')
    // const movieInfo:movieInfo = useSelector((state :RootState) => state.movieInfo)
    useEffect(()=>{
        setGenres(genresList)
    })
    console.log({genres})
    return (
        <>
            <HomePage genres={genres}  />
        </>
    );
}


//teamomadrecitha
export default App;
