import { useSelector } from 'react-redux'
import { useState } from 'react'
import { RootState } from '../redux/reducer'
import TvShows from '../components/TvShows'
import React from 'react'
const API_KEY = '5b253dd539029d7320fb78861a237b91'
type imageProp = {
    secure_base_url:string,
    backdrop_sizes:[
        size:string,
        size1:string,
        size2:string,
        size3:string
    ]
}
const tv_shows = () => {
    const tvTrending = useSelector((state:RootState) => state.tvShows)
    const [imagesConfiguration, setImagesConfiguration] = useState<imageProp>()
    const [genres, setGenres] = useState<any | null>([])

    console.log({tvTrending})
    
    return (
        <>
            <TvShows />
        </>
    )
}

export default tv_shows