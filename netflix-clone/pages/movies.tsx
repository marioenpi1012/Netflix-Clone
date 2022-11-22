import React from 'react'
import Landing from '../components/Landing'
import { useRetrieveData } from '../components/hooks/useRetrieveData'
import Carousel from '../components/Carousel'
import Head from 'next/head'
type Props = {
    imageConfig?:any,
    genres:[]
}
interface props{
    title:string,
    genre:string,
    selector:any,
    id:number
}
const Movies: React.FC<Props> = ({genres}) => {
    const movies:[props] = useRetrieveData('movies');

    return (
        <div>
            <Head>
                <title>Narflix - Movies</title>
            </Head>
            {
                movies && movies.map((props:props) =>(
                    props.id === 0 &&
                        <Landing
                            key={props.id}
                            props={props}
                            />
                ))
            }
            {
                movies && movies.map(props =>(
                    <Carousel key={props.id} props={props} />
                ))
            }
        </div>
    )
}

export default Movies
