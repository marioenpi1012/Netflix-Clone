type API_KEY = {
    API_KEY:string | undefined
}
// const API_KEY = process.env.API_KEY;
const API_KEY = "5b253dd539029d7320fb78861a237b91"
const {api} = process.env
console.log({api})
export const imageUrl = 'https://image.tmdb.org/t/p/original'

const request = {   
    
    fetchTrendingAll:`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
    // Movies
    fetchTrendingMovies:`/trending/movie/week?api_key=${API_KEY}`,
    fetchTopRatedMovies:`/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchAnimationMovies:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchAdventureMovies:`/discover/movie?api_key=${API_KEY}&with_genres=12`,
    // Tv Shows
    fetchTrendingTvShows: `/trending/tv/week?api_key=${API_KEY}`,
	fetchActionAdventureTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
	fetchAnimationTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
	fetchComedyTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
	fetchCrimeTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
	fetchDocumentaryTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
}

export default request