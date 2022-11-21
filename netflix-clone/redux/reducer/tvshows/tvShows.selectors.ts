import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

export const selectTrendingTvShows = (state:RootState) => state.tvShows.trendingTvShows
export const selectActionTvShows = (state:RootState) => state.tvShows.actionTvShows
export const selectAnimationTvShows = (state:RootState) => state.tvShows.animationTvShows
export const selectComedyTvShows = (state:RootState)=>state.tvShows.comedyTvShows
export const selectCrimeTvShows = (state:RootState) => state.tvShows.crimeTvShows
export const selectDocumentaryTvShows = (state:RootState) => state.tvShows.documentaryTvShows

export const selectTrendingTvShowsSelector = createSelector(
    [selectTrendingTvShows],
    trendingTvShows =>trendingTvShows.data
)
export const selectActionTvShowsSelector = createSelector(
    [selectActionTvShows],
    actionTvShows =>actionTvShows.data
)
export const selectAnimationTvShowsSelector = createSelector(
    [selectAnimationTvShows],
    animationTvShows =>animationTvShows.data
)
export const selectComedyTvShowsSelector = createSelector(
    [selectComedyTvShows],
    comedyTvShows =>comedyTvShows.data
)
export const selectCrimeTvShowsSelector = createSelector(
    [selectCrimeTvShows],
    crimeTvShows =>crimeTvShows.data
)
export const selectDocumentaryTvShowsSelector = createSelector(
    [selectDocumentaryTvShows],
    documentaryTvShows =>documentaryTvShows.data
)
