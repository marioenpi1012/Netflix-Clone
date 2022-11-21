import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const selectTopRatedMovies  = (state:RootState )=> state.movies.topRatedMovies
export const selectTrendingMovies = (state:RootState) => state.movies.trendingMovies
export const selectActionMovies = (state:RootState) => state.movies.actionMovies
export const selectAnimationMovies = (state:RootState) => state.movies.animationMovies
export const selectAdventureMovies = (state:RootState) => state.movies.adventureMovies
export const selectHorrorMovies = (state:RootState) => state.movies.horrorMovies
// export const selectPopularMovies = (state:RootState) => state.movies.popularMovies
export const selectLatestMovies = (state:RootState) => state.movies.latestMovies
export const selectRomanceMovies = (state:RootState) => state.movies.romanceMovies
export const selectComedyMovies = (state:RootState) => state.movies.comedyMovies
export const selectUpcomingMovies = (state:RootState) => state.movies.upcomingMovies

export const selectTopRatedMoviesSelector = createSelector(
    [selectTopRatedMovies],
    topRatedMovies => topRatedMovies.data
)
export const selectTrendingMoviesSelector = createSelector(
    [selectTrendingMovies],
    trendingMovies => trendingMovies.data
)
export const selectActionMoviesSelector = createSelector(
    [selectActionMovies],
    actionMovies => actionMovies.data
)
export const selectAnimationMoviesSelector = createSelector(
    [selectAnimationMovies],
    animationMovies => animationMovies.data
)
export const selectAdventureMoviesSelector = createSelector(
    [selectAdventureMovies],
    adventureMovies => adventureMovies.data
)
export const selectHorrorMoviesSelector = createSelector(
    [selectHorrorMovies],
    horrorMovies => horrorMovies.data
)
export const selectLatestMoviesSelector = createSelector(
    [selectLatestMovies],
    latestMovies => latestMovies.data
)
export const selectRomanceMoviesSelector = createSelector(
    [selectRomanceMovies],
    romanceMovies => romanceMovies.data
)
export const selectComedyMoviesSelector = createSelector(
    [selectComedyMovies],
    comedyMovies => comedyMovies.data
)
export const selectUpcomingMoviesSelector = createSelector(
    [selectUpcomingMovies],
    upcomingMovies => upcomingMovies.data
)