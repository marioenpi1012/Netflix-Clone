import '../styles/global.scss'
import { Provider } from 'react-redux'
import Nav from '../components/Nav'
import {store} from '../redux/store'
import React, { useEffect, useRef } from 'react'
import { RootState } from '../redux/reducer'
import { useSelector } from 'react-redux'
import type { ReactElement, ReactNode} from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import Head from 'next/head'

const MyApp = ({ Component, pageProps}:AppProps) =>{
    return (
        <Provider store={store}>
            <Layout>
                <Head>
                    <link rel='shortcut icon' href='/favicon.ico' sizes='12x12' />
                </Head>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp

