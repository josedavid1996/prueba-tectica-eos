import { useEffect } from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'

import 'aos/dist/aos.css'
import Aos from 'aos'

import Navbar from '../components/layout/Navbar'

import useLoadTheme from '@src/hooks/useLoadTheme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useLoadTheme()

  useEffect(() => {
    Aos.init({
      // once: false,
      offset: 10,
      duration: 1000,
      delay: 500
    })
  }, [])
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
