import './App.css';
import Nav from './components/Nav'
import {Route, useLocation, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import TopRated from './components/TopRated';
import TvShows from './components/TvShows';
import HomePage from './components/HomePage';
import Movies from './components/Movies';
import ShowAll  from './components/ShowAll';
import {useDispatch, useSelector,} from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from './redux/index' 
import { RootState } from './redux/reducer';
import MovieInfo from './components/MovieInfo';
import { SIGILL } from 'node:constants';
const { AnimatePresence } =  require('framer-motion/dist/framer-motion');

interface movieInfo{
  open:Boolean,
  movie:{}
}


const App:React.FC = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const category = useParams()
  const {
    dispatchTopRatedMovies, dispatchActionMovies, dispatchAnimationMovies, 
    dispatchPopularMovies,dispatchLatestMovies,dispatchUpcomingMovies,
    dispatchComedyMovies, dispatchHorrorMovies, dispatchRomanceMovies, 
    dispatchAdventureMovies,dispatchTrendingMovies
  } = bindActionCreators(actionCreators, dispatch)
  const movieInfo:movieInfo = useSelector((state :RootState) => state.movieInfo)
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
  
  
  const [trending, setTrending]  = useState<any | null>([])
  const [topRated, setTopRated] = useState<any | null>([])
  const [tvOnAir, setTvOnAir] = useState<any | null>([]) 
  const [tvPopular, setTvPopular] = useState<any | null>([]) 
  const [tvTopRated, setTvTopRated] = useState<any | null>([]) 
  const [movies, setMovies] = useState<any | null>([])
  const [imagesConfiguration, setImagesConfiguration] = useState<imageProp>()
  const [genres, setGenres] = useState<any | null>([])
  const [showAll, setShowAll] = useState<any | null>([])
  const [showAllCategory, setShowAllCategory] = useState<any | null>([])
  const [title,setTitle] = useState('')

  useEffect(()=>{
    if(location.pathname === '/home/topRated'){
      setShowAllCategory(topRated)
      setTitle('Top rated')
    }
    else if(location.pathname === '/home/Trending'){
      setShowAllCategory(trending)
      setTitle('Trending')
    }
  },[location.pathname || showAllCategory])
  useEffect(() => {
    GetTrending()
    GetTopRating()
    GetTvShowsOnAir()
    GetTvShowsPopular()
    GetTvShowsTopRated()
    GetMovies()
    GetImagesConfiguration()
    GetGenres()
    GetAllMoviesCategory()
  },[])

  const getArrayOfMovies = (data:any) =>{
    const arrOfMovies:any[] = []
    data?.map((movies:[])=>{ 
      movies?.map((movie:{})=>{
        arrOfMovies.push(movie)
      })
    })
    return arrOfMovies
  }
  const GetTrending = async () =>{
      const all = []
      for(let i = 1; i< 10; i++){
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&page=${i}`)
        const trendingData = await response.json()
        if(trendingData.page === 1){
          dispatchTrendingMovies(trendingData.results)
        }else if(trendingData.page === i){
          all.push(trendingData.results)
        }
      }
      setTrending(getArrayOfMovies(all))
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
    const trendingData = await response.json()
    setTrending(trendingData.results)
  }

  const GetTopRating = async () =>{
    const all = []
    for(let i = 1; i < 10; i++ ){
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${i}`)
      const topRatedData = await response.json()
      if(topRatedData.page === 1){
        dispatchTopRatedMovies(topRatedData.results)
      }else if(topRatedData.page === i){
        all.push(topRatedData.results)
      }
    }
    setTopRated(getArrayOfMovies(all))
    // setShowAllCategory(getArrayOfMovies(topRated))
    console.log('--- Trending function ---')
    console.log({topRated})
    
  }
  const GetTvShowsOnAir = async () =>{
    const response  = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`)
    const tvOnAirData = await response.json()
    setTvOnAir(tvOnAirData.results)
  }
  const GetTvShowsPopular = async () =>{
    const response  = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
    const tvPopularData = await response.json()
    setTvPopular(tvPopularData.results)
  }
  const GetTvShowsTopRated = async () =>{
    const response  = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`)
    const tvTopRatedData = await response.json()
    setTvTopRated(tvTopRatedData.results)
  }
  const GetMovies = async () =>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
    const moviesData = await response.json()
    setMovies(moviesData.results)
  }
  const GetGenres = async () =>{
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    const genresData = await response.json()
    setGenres(genresData.genres)
  }
  const GetImagesConfiguration = async () =>{
    const response = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`)
    const imageData = await response.json()
    setImagesConfiguration(imageData.images)
  }
  
  const GetAllMoviesCategory = async ()=>{
    interface MOVIES{
      dates:{},
      page:number,
      results:[]
    }
    const allMovies = [];
    const actionMovies:any  = []
    const comedyMovies:any  = []
    const horrorMovies:any  = []
    const romanceMovies:any  = []
    const adventureMovies:any  = []
    const animationMovies:any  = []
    for(let i = 1; i< 21; i++){
      const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${i}`)
      const responseData:{results:[], page:number} = await response.json()
      allMovies.push(responseData)
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
    interface Genre{
        id:number,
        name:string
    }  
    const all:any = []
    interface movies{
      page:number,
      results:{
        [i:number]:Array<{}>
      }
    }
    
    let index:number = 0
    let page:number = 1
    const moviesObj = {
      [index]:{}
    }
    const movies:movies = {page:page,results:{[index]:[]}}
    allMovies?.map((MOVIES, i:number)=>{
        MOVIES.results.map((movie:Movie, j:number)=>{
            if(location.pathname === '/home/action'){
              if(movie.genre_ids.includes(18) && all.length < 200){//18 number for action
                all.push(movie)
              }
              setShowAllCategory(all)
              setTitle('Action')
            }
            if(movie.genre_ids.includes(18) && actionMovies.length < 20){//18 number for action
              actionMovies.push(movie)
            }
            else if(movie.genre_ids.includes(16) && animationMovies.length < 20){//16 number for animation
              animationMovies.push(movie)
            }
            else if(movie.genre_ids.includes(35) && comedyMovies.length < 20){//35 number for comedy
              comedyMovies.push(movie)
            }
            else if(movie.genre_ids.includes(27) && horrorMovies.length < 20){//27 number for horror
              horrorMovies.push(movie)
            }
            else if(movie.genre_ids.includes(10749) && romanceMovies.length < 20){//10749 number for romance
              romanceMovies.push(movie)
            }
            else if(movie.genre_ids.includes(12) && adventureMovies.length < 20){//12 number for adventure
              adventureMovies.push(movie)
            }
          })
        })
        
        console.log('working', moviesObj)
        console.log(movies)
        
    setShowAll(allMovies)
    dispatchActionMovies(actionMovies)
    dispatchAnimationMovies(animationMovies)
    dispatchAdventureMovies(adventureMovies)
    dispatchComedyMovies(comedyMovies)
    dispatchHorrorMovies(horrorMovies)
    dispatchRomanceMovies(romanceMovies)
  }
  return (
      <div className="App">
        {<AnimatePresence>
          { movieInfo.open && <MovieInfo  genres={genres} image={imagesConfiguration} />}
        </AnimatePresence>}
        <Nav />
        <Route exact path='/'>
          <HomePage imageConfig={imagesConfiguration} genres={genres} data={trending} CarouselTitle='Trending'  />
        </Route>
        <Route exact path='/tv-shows'>
          <TvShows data={tvOnAir} tvPopular={tvPopular} topRated={tvTopRated} imageConfig={imagesConfiguration} genres={genres} carouselTitle=""/>
        </Route>
        <Route exact path='/movies' >
          <Movies imageConfig={imagesConfiguration} genres={genres} data={movies} />
        </Route>
        <Route path={`/:location/:category`}>
          <ShowAll data={showAllCategory} title={title} genres={genres} imageConfig={imagesConfiguration} />
        </Route>
        {
          //   <Route path='/movie_info'>
          //   <MovieInfo  />
          // </Route>
        }
        
      </div>
  );
}

export default App;
