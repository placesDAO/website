import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import { placesABI } from '../lib/places-abi'

// This error is coming up during dev and not sure it's applicable to
// other environments (including other networks, wallets etc).
// Seems OK to ignore (at least for now), `write` ends up being a
// function and is the true check for enabling the mint button.
const ANNOYING_SIGNER_GET_ADDRESS_ERROR =
	'contract.signer.getAddress is not a function'

export const MintButton = () => {
	const { config, error } = usePrepareContractWrite({
		addressOrName: process.env.NEXT_PUBLIC_WEB3_PLACES_CONTRACT_ADDRESS,
		contractInterface: placesABI,
		functionName: 'mint',
	})

	const { write } = useContractWrite(config)

	// TODO: provide some visual feedback for transaction processing

	return (
		<>
			<button className="button" disabled={!write} onClick={() => write?.()}>
				Mint Place
			</button>
			{error && error.message !== ANNOYING_SIGNER_GET_ADDRESS_ERROR && (
				<div>An error occurred preparing the transaction: {error.message}</div>
			)}
		</>
	)
}
