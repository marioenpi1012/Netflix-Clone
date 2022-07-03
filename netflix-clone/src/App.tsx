import './App.css';
import Nav from './components/Nav'
import {Route, useLocation} from 'react-router-dom'
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
const { AnimatePresence } =  require('framer-motion/dist/framer-motion');

interface movieInfo{
  open:Boolean,
  movie:{}
}


const App:React.FC = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  console.log(location.pathname)
  const {
    dispatchTopRatedMovies, dispatchActionMovies, dispatchAnimationMovies, 
    dispatchPopularMovies,dispatchLatestMovies,dispatchUpcomingMovies,
    dispatchComedyMovies, dispatchHorrorMovies, dispatchRomanceMovies, 
    dispatchAdventureMovies
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


  const GetTrending = async () =>{
    if(location.pathname === '/home/Trending'){
      const all = []
      for(let i = 1; i< 21; i++){
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&page=${i}`)
        const trendingData:{results:{},page:number} = await response.json()
        all.push(trendingData.results)
      }
      setTitle('Trending')
      setShowAllCategory(all)
    }
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
    const trendingData = await response.json()
    setTrending(trendingData.results)
  }

  const GetTopRating = async () =>{
    if(location.pathname === '/home/topRated'){
      const all = []
      for(let i = 1; i < 21; i++ ){
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${i}`)
        const topRatedData:{results:{},page:number} = await response.json()
        all.push(topRatedData.results)
      }
      setTitle('Top rated')
      setShowAllCategory(all)
    }else{
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&`)
      const topRatedData = await response.json()
      setTopRated(topRatedData.results)
      dispatchTopRatedMovies(topRatedData.results)
    }
    
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
        [index:number]:[{}]
      }
    }
    
    const movies:movies = {page:1,results:{0:[{}]}}
    allMovies?.map((MOVIES)=>{
        MOVIES.results.map((movie:Movie, i:number)=>{
            if(location.pathname === '/home/action'){
              if(movie.genre_ids.includes(18)){//18 number for action
                // movies.results(movie)
                  if(movies.results[i].length < 20 && all.length< 20){
                    movies.results[i].push(movie)
                    console.log(movies)
                  }
                  else{
                    all.push(movies)
                  }
              }
              console.log({all})
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
