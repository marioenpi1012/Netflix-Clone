import {myProps}  from 'myProps'
import React from 'react'
import Carousel from './Carousel'
import Head from 'next/head'
import Landing from './Landing'
import { RootState } from '../redux/reducer';
import {useSelector} from 'react-redux'
import { useRetrieveCategory } from './hooks/useRetrieveCategory'
import { useRetrieveData } from './hooks/useRetrieveData'
interface props{
    title:string,
    genre:string,
    selector:any,
    id:number
}
const TvShows:React.FC = () => {
    const tvShows:[props] = useRetrieveData('tvshows')
    return (
        <div className='TvShows'>
            <Head>
                <title>TV Shows</title>
            </Head>
            {tvShows && tvShows.map(props =>(
                props.id === 0 &&
                <Landing 
                    key={props.id} 
                    props={props} 
                    />
            ))}
            {tvShows && tvShows.map(props =>(
                <Carousel key={props.id} props={props} />
            ))
            }
        </div>
    )
}

export default TvShows
