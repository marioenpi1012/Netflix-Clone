import {useState, useEffect} from 'react'
import HomePage from '../components/Home';
import {NextPage} from 'next'
import Head from 'next/head'
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
            <Head>
                <title>Narflix</title>
            </Head>
            <HomePage genres={genres}  />
        </>
    );
}


//teamomadrecitha
export default App;
