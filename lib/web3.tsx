import { getDefaultWallets, ConnectButton } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

export {
	RainbowKitProvider,
	darkTheme,
	lightTheme,
} from '@rainbow-me/rainbowkit'
export { WagmiConfig } from 'wagmi'

export const PlacesConnectButton = () => {
	return (
		<ConnectButton.Custom>
			{({
				account,
				chain,
				openAccountModal,
				openChainModal,
				openConnectModal,
				authenticationStatus,
				mounted,
			}) => {
				// Note: If your app doesn't use authentication, you
				// can remove all 'authenticationStatus' checks
				const ready = mounted && authenticationStatus !== 'loading'
				const connected =
					ready &&
					account &&
					chain &&
					(!authenticationStatus || authenticationStatus === 'authenticated')

				return (
					<div
						{...(!ready && {
							'aria-hidden': true,
							style: {
								opacity: 0,
								pointerEvents: 'none',
								userSelect: 'none',
							},
						})}
					>
						{(() => {
							if (!connected) {
								return (
									<button
										onClick={openConnectModal}
										type="button"
										className="button"
									>
										Connect Wallet
									</button>
								)
							}

							if (chain.unsupported) {
								return (
									<button
										onClick={openChainModal}
										type="button"
										className="button"
									>
										Wrong network
									</button>
								)
							}

							return (
								<div style={{ display: 'flex', gap: 12 }}>
									<button
										onClick={openChainModal}
										style={{ display: 'flex', alignItems: 'center' }}
										type="button"
										className="button"
									>
										{chain.hasIcon && (
											<div
												style={{
													background: chain.iconBackground,
													width: 12,
													height: 12,
													borderRadius: 999,
													overflow: 'hidden',
													marginRight: 4,
												}}
											>
												{chain.iconUrl && (
													<img
														alt={chain.name ?? 'Chain icon'}
														src={chain.iconUrl}
														style={{ width: 12, height: 12 }}
													/>
												)}
											</div>
										)}
										{chain.name}
									</button>

									<button
										onClick={openAccountModal}
										type="button"
										className="button"
									>
										{account.displayName}
										{account.displayBalance
											? ` (${account.displayBalance})`
											: ''}
									</button>
								</div>
							)
						})()}
					</div>
				)
			}}
		</ConnectButton.Custom>
	)
}

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
					http: 'http://127.0.0.1:9545/',
					webSocket: 'ws://127.0.0.1:9545/',
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
	const { chains, provider } = configureChains(
		CHAINS_BY_NETWORK[network],
		providerByNetwork({ infuraId, network }),
	)

	const { connectors } = getDefaultWallets({
		appName: 'Places',
		chains,
	})

	// console.log('wagmiClient', {
	// 	infuraId,
	// 	network,
	// 	connectors,
	// 	provider,
	// 	chains,
	// })

	const wagmiClient = createClient({
		autoConnect: true,
		connectors,
		provider,
	})

	return { wagmiClient, chains }
}
