import '../styles/index.css'

import { AppProps } from 'next/app'

import Navbar from '../components/layout/Navbar'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
