import '../styles/index.css'

import { AppProps } from 'next/app'

import Navbar from '../components/layout/Navbar'
import useLoadTheme from '@src/hooks/useLoadTheme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useLoadTheme()
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
