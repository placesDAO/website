import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

export { RainbowKitProvider } from '@rainbow-me/rainbowkit'
export { WagmiConfig } from 'wagmi'

type Web3NetworkOptions = typeof process.env.NEXT_PUBLIC_WEB3_NETWORK

const CHAINS_BY_NETWORK = {
	local: [chain.localhost],
	testnet: [chain.rinkeby, chain.goerli],
	mainnet: [chain.mainnet],
}

const providerByNetwork = ({
	infuraId: apiKey,
	network = 'local',
}: {
	infuraId: string
	network: Web3NetworkOptions
}) => {
	const lookup = {
		local: [
			jsonRpcProvider({
				rpc: () => ({
					http: 'http://localhost:9454',
					webSocket: 'ws://localhost:9454',
				}),
			}),
		],
		testnet: [infuraProvider({ apiKey }), publicProvider()],
		mainnet: [infuraProvider({ apiKey }), publicProvider()],
	}

	return lookup[network]
}

export const createWeb3Kit = ({
	infuraId,
	network,
}: {
	infuraId: string
	network: Web3NetworkOptions
}) => {
	console.log({ infuraId, network })
	const { chains, provider } = configureChains(
		CHAINS_BY_NETWORK[network],
		providerByNetwork({ infuraId, network }),
	)

	const { connectors } = getDefaultWallets({
		appName: 'Outsiders',
		chains,
	})

	console.log('wagmiClient', {
		infuraId,
		network,
		connectors,
		provider,
	})

	const wagmiClient = createClient({
		autoConnect: true,
		connectors,
		provider,
	})

	return { wagmiClient, chains }
}

// export const { chains, provider } = configureChains(
// 	[chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
// 	[alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()],
// )

// export const { connectors } = getDefaultWallets({
// 	appName: 'PlacesDAO',
// 	chains,
// })

// export const wagmiClient = createClient({
// 	autoConnect: true,
// 	connectors,
// 	provider,
// })
