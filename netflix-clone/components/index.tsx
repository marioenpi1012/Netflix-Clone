// import Head from 'next/head'
// import HomePage from './Home'
// import {useState, useEffect} from 'react'
// import { useDispatch } from 'react-redux'
// import {actionCreators} from '../redux/index' 
// import { bindActionCreators } from 'redux';
// import { useRouter } from 'next/router'
// import type {NextPage}
// from 'next'
// type imageProp = {
//     secure_base_url: string,
//     backdrop_sizes: [size: string,
//     size1: string,
//     size2: string,
//     size3: string]
// }

// const Home: NextPage = () => {
//     const API_KEY = '5b253dd539029d7320fb78861a237b91'
//     const [trending, setTrending] = useState < any | null > ([])
//     const [imagesConfiguration, setImagesConfiguration] = useState<imageProp>()
//     const [genres, setGenres] = useState < any | null > ([])
//     const [showAll, setShowAll] = useState < any | null > ([])
//     const [showAllCategory, setShowAllCategory] = useState < any | null > ([])
//     const [title, setTitle] = useState('')
//     const [topRated, setTopRated] = useState < any | null > ([])
//     const [tvOnAir, setTvOnAir] = useState < any | null > ([])
//     const [tvPopular, setTvPopular] = useState < any | null > ([])
//     const [tvTopRated, setTvTopRated] = useState < any | null > ([])
//     const [movies, setMovies] = useState < any | null > ([])
//     const dispatch = useDispatch()
//     const location = useRouter()
//     const {
//         dispatchTopRatedMovies, dispatchActionMovies, dispatchAnimationMovies, 
//         dispatchPopularMovies,dispatchLatestMovies,dispatchUpcomingMovies,
//         dispatchComedyMovies, dispatchHorrorMovies, dispatchRomanceMovies, 
//         dispatchAdventureMovies,dispatchTrendingMovies
//     } = bindActionCreators(actionCreators, dispatch)

//     useEffect(() => {
//         GetGenres()
//         GetImagesConfiguration()
//         GetMoviesTrending()
//         GetTopRating()
//         GetTvShowsOnAir()
//         GetTvShowsPopular()
//         GetTvShowsTopRated()
//     }, [])
//     const getArrayOfMovies = (data : any) => {
//         const arrOfMovies: any[] = []
//         data
//             ?.map((movies
//             : []) => {
//                 movies
//                     ?.map((movie
//                     : {}) => {
//                         arrOfMovies.push(movie)
//                     })
//             })
//         return arrOfMovies
//     }
//     const GetTopRating = async () =>{
//         const all:any = []
//         for(let i = 1; i < 10; i++ ){
//             const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${i}`)
//             const topRatedData = await response.json()
//             if(topRatedData.page === 1){
//                 dispatchTopRatedMovies(topRatedData.results)
//             }else if(topRatedData.page === i){
//                 all.push(topRatedData.results)
//             }
//         }
//         setTopRated(getArrayOfMovies(all))
//         // setShowAllCategory(getArrayOfMovies(topRated))
//         console.log('--- Trending function ---')
//         console.log({topRated})
//     }
//     const GetTvShowsOnAir = async () => {
//         const response = await fetch(
//             `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`
//         )
//         const tvOnAirData = await response.json()
//         setTvOnAir(tvOnAirData.results)
//     }
//     const GetTvShowsPopular = async () => {
//         const response = await fetch(
//             `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`
//         )
//         const tvPopularData = await response.json()
//         setTvPopular(tvPopularData.results)
//     }
//     const GetTvShowsTopRated = async () => {
//         const response = await fetch(
//             `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`
//         )
//         const tvTopRatedData = await response.json()
//         setTvTopRated(tvTopRatedData.results)
//     }

//     const GetImagesConfiguration = async () => {
//         const response = await fetch(
//             `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
//         )
//         const imageData = await response.json()
//         setImagesConfiguration(imageData.images)
//     }
//     const GetGenres = async () => {
//         const response = await fetch(
//             `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
//         )
//         const genresData = await response.json()
//         setGenres(genresData.genres)
//     }
//     const GetMoviesTrending = async () => {
//         const response = await fetch(
//             `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
//         )
//         const trendingData = await response.json()
//         setTrending(trendingData.results)
//     }
//     return (
//         <>  
//             <Head><title> NetFake</title></Head> 
//             < HomePage data={trending} genres={genres} imageConfig={imagesConfiguration} CarouselTitle = 'Trending'/> 
//         </>
//     )
// }

// export default Home