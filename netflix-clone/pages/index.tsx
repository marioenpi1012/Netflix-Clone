import {useState, useEffect} from 'react'
import HomePage from '../components/Home';
import {useDispatch, useSelector,} from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators, tvActionCreators} from '../redux/index' 
import { RootState } from '../redux/reducer';
import MovieInfo from '../components/MovieInfo';
import {NextPage} from 'next'
import {AnimatePresence} from 'framer-motion'
import {useRouter, } from 'next/router'
import {useRetrieveData} from '../components/hooks/useRetrieveData'
import React from 'react';
import Router from 'next/router';
import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'
interface movieInfo{
  open:Boolean,
  movie:{}
}
type Props ={
  data:any,
  data1:any,
}

const App:NextPage<Props> = () => {
  const dispatch = useDispatch()
  const [genres, setGenres] = useState<any | null>([])
  const rows:[] = useRetrieveData('movies')
  // const movieInfo:movieInfo = useSelector((state :RootState) => state.movieInfo)

  console.log({rows})
  // Page layout 
  const Page :NextPageWithLayout = () =>{
    return <div></div>
  }
    return (
      <div>
        <AnimatePresence>
          {/* { movieInfo.open && <MovieInfo  genres={genres} />} */}
        </AnimatePresence>
        <HomePage genres={genres}  />
      </div>
  );
}



export default App;
