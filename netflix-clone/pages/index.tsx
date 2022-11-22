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
  const [genres, setGenres] = useState<any | null>([])
  
    return (
      <div>
        <HomePage genres={genres}  />
      </div>
  );
}



export default App;
