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
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P,IP> &{
    getLayout?:(page:ReactElement) =>ReactNode
}
type AppPropsWithLayout = AppProps & {
    Component:NextPageWithLayout
}
const MyApp = ({ Component, pageProps}:AppProps) =>{
    const  usePrevRoute = () =>{
        const { asPath } = useRouter()
        const ref = useRef<string | null>(null)

        useEffect(()=>{
            ref.current = asPath
        },[asPath])

        return ref.current
    }
    console.log(usePrevRoute())
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp

