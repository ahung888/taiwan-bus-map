import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import Head from 'next/head'
import { setDevice } from '../../store'

const Layout = ({children}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof window !== undefined) {
      const handleResize = () => {
        dispatch(setDevice({ width: window.innerWidth, height: window.innerHeight }))
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Taiwan Bus Map</title>
        <meta name="description" content="Taiwan Bus Map" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css' rel='stylesheet' />
      </Head>
      {children}
    </>
  )
}

export default Layout