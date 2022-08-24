import { PlacesConnectButton } from '../lib/web3'
import { useAccount } from 'wagmi'
import { MintButton } from './MintButton'

export const MintSection = () => {
	const { status } = useAccount()

	return (
		<div className="v-stack">
			<PlacesConnectButton />
			{status === 'connected' ? <MintButton /> : null}
		</div>
	)
}
