import React from "react"
import MovieInfo from "../components/MovieInfo"
import { genresList } from "../dispatchConfig"

const Modal = () =>{
    const genres:any = []
    return(
        <>
            <MovieInfo genres={genres} />
        </>
    )
}

export default Modal