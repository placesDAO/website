import '@rainbow-me/rainbowkit/styles.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { mapPinAscii } from '../ascii/map-pin'
import { RainbowKitProvider, WagmiConfig, createWeb3Kit } from '../lib/web3'

function MyApp({ Component, pageProps }: AppProps) {
	console.log(mapPinAscii, 'font-family: mono')

	const { wagmiClient, chains } = createWeb3Kit({
		infuraId: process.env.NEXT_PUBLIC_WEB3_INFURA_ID,
		network: process.env.NEXT_PUBLIC_WEB3_NETWORK,
	})

	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains}>
				<Component {...pageProps} />
			</RainbowKitProvider>
		</WagmiConfig>
	)
}
export default MyApp
