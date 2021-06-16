import './App.css';
import Nav from './components/Nav'
import {HashRouter as Router, Route} from 'react-router-dom'
import Landing from './components/Landing';
import {useState, useEffect} from 'react'
import Carousel from './components/Carousel';
import TopRated from './components/TopRated';
import TvShows from './components/TvShows';
import HomePage from './components/HomePage';
import Movies from './components/Movies';
import MovieInfo from './components/MovieInfo';
function App() {
  const API_KEY = '5b253dd539029d7320fb78861a237b91'

  const [trending, setTrending] = useState([])
  const [topRated, setTopRated] = useState([])
  const [tvOnAir, setTvOnAir] = useState([])  
  const [tvPopular, setTvPopular] = useState([])  
  const [tvTopRated, setTvTopRated] = useState([])  
  const [movies, setMovies] = useState([])

  useEffect(() => {
    GetTrending()
    GetTopRating()
    GetTvShowsOnAir()
    GetTvShowsPopular()
    GetTvShowsTopRated()
    GetMovies()
  },[])


  const GetTrending = async () =>{
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
    const trendingData = await response.json()
    setTrending(trendingData.results)
    console.log(trendingData)
  }

  const GetTopRating = async () =>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
    const topRatedData = await response.json()
    setTopRated(topRatedData.results)
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
    console.log(movies)
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path='/' exact>
          <HomePage data={trending} CarouselTitle='Trending'  />
          <TopRated data={topRated} /> 
        </Route>
        <Route path='/tv-shows'>
          <TvShows data={tvOnAir} tvPopular={tvPopular} topRated={tvTopRated} />
        </Route>
        <Route  path='/movies' >
          <Movies data={movies} />
        </Route>
        <Route path='/movie_info'>
          <MovieInfo  />
        </Route>
        
      </div>
    </Router>
  );
}

export default App;
