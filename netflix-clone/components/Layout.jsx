import Nav from "./Nav"
import React from 'react'
import { RootState } from "../redux/reducer"
import { useSelector } from "react-redux"
import MovieInfo from "./MovieInfo"
import Head from 'next/head'
const Layout = ({children}) =>{
    const movieInfo = useSelector((state) => state.movieInfo)
    const genres = []
    console.log(movieInfo.open)
    return  (
        <>
            
            <Nav />
            {movieInfo.open && <MovieInfo genres={genres} />}
            <>
                {children}
            </>
            
        </>
        )
}

export default Layout