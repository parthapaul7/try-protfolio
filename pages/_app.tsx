import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
   <Navbar/> 
   <Component {...pageProps} />
  
  </div>
}

export default MyApp
