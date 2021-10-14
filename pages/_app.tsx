import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { mapPinAscii } from '../ascii/map-pin'

function MyApp({ Component, pageProps }: AppProps) {
	console.log(mapPinAscii, 'font-family: mono')
	return <Component {...pageProps} />
}
export default MyApp
