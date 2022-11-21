import React from "react";
import { useSelector } from "react-redux";
import { useRetrieveCategory } from "../components/hooks/useRetrieveCategory";

const Movies  = () =>{
    const page = 1
    const url = 'movies'
    const categoryName = 'trending'
    const categoryData = useRetrieveCategory(url, categoryName, page)
    const preventUndefinedSelector = () => undefined
    const selector = categoryData ? categoryData.selector : preventUndefinedSelector
    const selectedGenre = useSelector(selector)
    console.log(selectedGenre)
    return (
        <div>Movies</div>
    )
}

export default Movies