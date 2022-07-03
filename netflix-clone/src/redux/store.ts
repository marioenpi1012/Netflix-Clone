import {applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducer/index'
import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './reducer/moviesReducer'
import { useDispatch } from 'react-redux'

const preloadedState = {}
export const store = configureStore({
    reducer:reducers,
    middleware:[thunk],
    preloadedState
})

// Infer the `RootState` and `AppDispatch` types from the store itself

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch : (movies:[])=> AppDispatch = useDispatch
