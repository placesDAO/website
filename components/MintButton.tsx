import {
	usePrepareContractWrite,
	useContractWrite,
	useWaitForTransaction,
} from 'wagmi'
import { utils, errors } from 'ethers'
import { placesABI } from '../lib/places-abi'

// This error is coming up during dev and not sure it's applicable to
// other environments (including other networks, wallets etc).
// Seems OK to ignore (at least for now), `write` ends up being a
// function and is the true check for enabling the mint button.
const ANNOYING_SIGNER_GET_ADDRESS_ERROR =
	'contract.signer.getAddress is not a function'
// I think our contract enforces a minimum cost so when using
// the usePrepareContractWrite the call is erroring out. Typically
// the price should be fetched from the contract in this step I believe.
const MINIUM_COST = '0.05'

interface EthersError extends Error {
	reason: string
	code: keyof typeof errors
}

const MintingError = ({ error }: { error: EthersError | Error | null }) => {
	if (!error) return null
	if (error.message === ANNOYING_SIGNER_GET_ADDRESS_ERROR) return null

	if (!('reason' in error)) return null

	return <div className="error-message">⚠️ {error?.reason}</div>
}

export const MintButton = () => {
	const { config, error: prepError } = usePrepareContractWrite({
		addressOrName: process.env.NEXT_PUBLIC_WEB3_PLACES_CONTRACT_ADDRESS,
		contractInterface: placesABI,
		functionName: 'mint',
		args: {
			value: utils.parseEther(MINIUM_COST),
		},
	})

	const { data, write, error } = useContractWrite(config)

	const { isLoading, isSuccess } = useWaitForTransaction({
		hash: data?.hash,
	})

	return (
		<>
			<div>
				<button
					className="button"
					type="button"
					disabled={!write}
					onClick={() => write?.()}
				>
					{isLoading ? 'Minting a Place of your own…' : 'Mint Place'}
				</button>
				<MintingError error={prepError ?? error} />
			</div>
			{isSuccess ? (
				<>
					You minted
					<div>
						<a href={`https://etherscan.io/tx/${data?.hash}`}>
							Etherscan ${data?.hash}
						</a>
					</div>
				</>
			) : null}
		</>
	)
}
