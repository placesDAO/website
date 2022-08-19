import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { MintButton } from './MintButton'

export const MintSection = () => {
	const { status } = useAccount()

	return (
		<div>
			{status === 'connected' ? <MintButton /> : null}
			<ConnectButton />
		</div>
	)
}
