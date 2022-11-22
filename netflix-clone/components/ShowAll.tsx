import React, { ReactPortal } from 'react'
import style from '../styles/ShowAll.module.scss'
import Item from './Item'
import {useRouter} from 'next/router'
type Props = {
    data?:[],
    genres:[],
    imageConfig:any,
    title?:string
    // movies:{
    //     movies:any[]
    // }
}
interface movies{
    movies:{movies:any[]}[]
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
interface genres{
    genres:[]
}
interface location{
    state:string
}
const ShowAll:React.FC<Props> = ({title, data, genres}) => {
    console.log(data)
    return (
        <div className={style.showAll}>
            <div className={style.title}>{title}</div>
            <div className={style.items}>
                {
                    data?.map((movie:Movie)=>(
                        <Item key={movie.id} movie={movie}  />
                    ))
                }
            </div>
        </div>
    )
}

export default ShowAll
