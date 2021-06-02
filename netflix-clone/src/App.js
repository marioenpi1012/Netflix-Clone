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
function App() {
  const API_KEY = '5b253dd539029d7320fb78861a237b91'

  const [trending, setTrending] = useState([])
  const [topRated, setTopRated] = useState([])
  const [tvOnAir, setTvOnAir] = useState([])  
  const [tvPopular, setTvPopular] = useState([])  
  const [tvTopRated, setTvTopRated] = useState([])  

  useEffect(() => {
    GetTrending()
    GetTopRating()
    GetTvShowsOnAir()
    GetTvShowsPopular()
    GetTvShowsTopRated()
  },[])


  const GetTrending = async () =>{
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
    const trendingData = await response.json()
    setTrending(trendingData.results)
    console.log(trending)
  }

  const GetTopRating = async () =>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
    const topRatedData = await response.json()
    setTopRated(topRatedData.results)
    console.log(topRated)
  }
  const GetTvShowsOnAir = async () =>{
    const response  = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`)
    const tvOnAirData = await response.json()
    setTvOnAir(tvOnAirData.results)
    console.log(tvOnAir)
  }
  const GetTvShowsPopular = async () =>{
    const response  = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
    const tvPopularData = await response.json()
    setTvPopular(tvPopularData.results)
    console.log(tvPopular)
  }
  const GetTvShowsTopRated = async () =>{
    const response  = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`)
    const tvTopRatedData = await response.json()
    setTvTopRated(tvTopRatedData.results)
    console.log(tvTopRated)
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
        <Movies />
        </Route>
        
      </div>
    </Router>
  );
}

export default App;
