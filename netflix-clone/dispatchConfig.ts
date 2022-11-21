import request from "./requests";
import * as moviesSelector from './redux/reducer/movies/movies.selectors'
import * as tvShowsSelector from './redux/reducer/tvshows/tvShows.selectors'
import { 
    fetchActionMoviesAsync,
    fetchAdventureMoviesAsync,
    fetchAnimationMoviesAsync,
    fetchComedyMoviesAsync,
    fetchHorrorMoviesAsync,
    fetchRomanceMoviesAsync,
    fetchTopRatedMoviesAsync, fetchTrendingMoviesAsync, fetchUpcomingMoviesAsync,
} from "./redux/actions-creator";
import { fetchActionTvShowsAsync, fetchAnimationTvShowsAsync, fetchComedyTvShowsAsync, fetchCrimeTvShowsAsync, fetchDocumentaryTvShowsAsync, fetchTrendingTvShowsAsync } from "./redux/actions-creator/tvShowsActions";
const {
	// Movies
    fetchTopRatedMovies,
    fetchTrendingMovies,
    fetchActionMovies,
    fetchAdventureMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchAnimationMovies,
	// Tv Shows
	fetchTrendingTvShows,
	fetchActionAdventureTvShows,
	fetchAnimationTvShows,
	fetchComedyTvShows,
	fetchCrimeTvShows,
	fetchDocumentaryTvShows
} = request;

export const fetchMoviesData = [
    {
        id:0,
        thunk:fetchTrendingMoviesAsync,
        url:fetchTrendingMovies,
        title:'Trending',
        genre:'trending',
        selector:moviesSelector.selectTrendingMovies
    },
    {
        id:1,
        thunk:fetchTopRatedMoviesAsync,
        url:fetchTopRatedMovies,
        title:'Top rated',
        genre:'topRated',
        selector:moviesSelector.selectTopRatedMovies
    },
    {
        id:2,
        thunk:fetchActionMoviesAsync,
        url:fetchActionMovies,
        title:'Action',
        genre:'action',
        selector:moviesSelector.selectActionMovies
    },
    {
        id:3,
        thunk:fetchAdventureMoviesAsync,
        url:fetchAdventureMovies,
        title:'Adventure',
        genre:'adventure',
        selector:moviesSelector.selectAdventureMovies
    },
    {
        id:4,
        thunk:fetchComedyMoviesAsync,
        url:fetchComedyMovies,
        title:'Comedy',
        genre:'comedy',
        selector:moviesSelector.selectComedyMovies
    },
    {
        id:5,
        thunk:fetchHorrorMoviesAsync,
        url:fetchHorrorMovies,
        title:'Horror',
        genre:'horror',
        selector:moviesSelector.selectHorrorMovies
    },
    {
        id:6,
        thunk:fetchRomanceMoviesAsync,
        url:fetchRomanceMovies,
        title:'Romance',
        genre:'romance',
        selector:moviesSelector.selectRomanceMovies
    },
    {
        id:7,
        thunk:fetchAnimationMoviesAsync,
        url:fetchAnimationMovies,
        title:'Animation',
        genre:'animation',
        selector:moviesSelector.selectAnimationMovies
    },
    
]
export const fetchTvShowsData = [
	{
		id:0,
		thunk:fetchTrendingTvShowsAsync,
		url:fetchTrendingTvShows,
		title:'Trending',
		genre:'trending',
		selector:tvShowsSelector.selectTrendingTvShows
	},
	{
		id:1,
		thunk:fetchActionTvShowsAsync,
		url:fetchActionAdventureTvShows,
		title: 'Action & Adventure',
		genre:'action',
		selector:tvShowsSelector.selectActionTvShows
	},
	{
		id:2,
		thunk:fetchAnimationTvShowsAsync,
		url:fetchAnimationTvShows,
		title:'Animation',
		genre:'animation',
		selector:tvShowsSelector.selectAnimationTvShows
	},
	{
		id:3,
		thunk:fetchComedyTvShowsAsync,
		url:fetchComedyTvShows,
		title:'Comedy',
		genre:'comedy',
		selector:tvShowsSelector.selectComedyTvShows
	},
	{
		id:4,
		thunk:fetchCrimeTvShowsAsync,
		url:fetchCrimeTvShows,
		title:'Crime',
		genre:'crime',
		selector:tvShowsSelector.selectCrimeTvShows
	},
	{
		id:5,
		thunk:fetchDocumentaryTvShowsAsync,
		url:fetchDocumentaryTvShows,
		title:'Documentaries',
		genre:'documentary',
		selector:tvShowsSelector.selectDocumentaryTvShows
	}
]
export const genresList = [
	{
		id: 28,
		name: "Action",
	},
	{
		id: 12,
		name: "Adventure",
	},
	{
		id: 16,
		name: "Animation",
	},
	{
		id: 35,
		name: "Comedy",
	},
	{
		id: 80,
		name: "Crime",
	},
	{
		id: 99,
		name: "Documentary",
	},
	{
		id: 18,
		name: "Drama",
	},
	{
		id: 10751,
		name: "Family",
	},
	{
		id: 14,
		name: "Fantasy",
	},
	{
		id: 36,
		name: "History",
	},
	{
		id: 27,
		name: "Horror",
	},
	{
		id: 10402,
		name: "Music",
	},
	{
		id: 9648,
		name: "Mystery",
	},
	{
		id: 10749,
		name: "Romance",
	},
	{
		id: 878,
		name: "Science Fiction",
	},
	{
		id: 10770,
		name: "TV Movie",
	},
	{
		id: 53,
		name: "Thriller",
	},
	{
		id: 10752,
		name: "War",
	},
	{
		id: 37,
		name: "Western",
	},
	{
		id: 10759,
		name: "Action & Adventure",
	},
	{
		id: 10762,
		name: "Kids",
	},
	{
		id: 10763,
		name: "News",
	},
	{
		id: 10764,
		name: "Reality",
	},
	{
		id: 10765,
		name: "Sci-Fi & Fantasy",
	},
	{
		id: 10766,
		name: "Soap",
	},
	{
		id: 10767,
		name: "Talk",
	},
	{
		id: 10768,
		name: "War & Politics",
	},
];
