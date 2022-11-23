import '../styles/global.scss'
import { Provider } from 'react-redux'
import {store} from '../redux/store'
import React from 'react'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'

const MyApp = ({ Component, pageProps}:AppProps) =>{
    return (
        <Provider store={store}>
            <Layout>
                <Head>
                    <link rel='shortcut icon' href='/favicon.ico' sizes='12x12' />
                    <meta name="google-site-verification" content="kpN-Cre4tK0fWTdFAkvv9hKbMVHr5F4ATjGiiYWJ8kk" />
                </Head>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp

