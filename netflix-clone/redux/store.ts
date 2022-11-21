import thunk from 'redux-thunk'
import thunkMiddleware from 'redux-thunk';
import reducers from './reducer/index'
import { configureStore, PreloadedState } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
const preloadedState = {}
export const store = configureStore({
    reducer:reducers,
    // middleware:[thunkMiddleware, thunk],
    preloadedState
})

// Infer the `RootState` and `AppDispatch` types from the store itself

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch : ()=> AppDispatch = useDispatch
export default {store}
