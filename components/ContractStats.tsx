import { useEffect, useState } from 'react'
import Web3 from 'web3'

import contractAbi from '../contract-abi.json'

const PLACES_CONTRACT_ADDRESS = '0xC9CA129DC3a299aF68A215d85771630aec4C3C2b'
const PREVIOUS_MINT_COUNT = 500

const web3 = new Web3()
web3.eth.setProvider(process.env.NEXT_PUBLIC_PROVIDER_ADDRESS as string)
const contract = new web3.eth.Contract(
	contractAbi as any,
	PLACES_CONTRACT_ADDRESS,
)

// const getCurrentTotalSupply = (totalSupply: number) => {
// 	if (totalSupply >= PREVIOUS_MINT_COUNT)
// 		return totalSupply - PREVIOUS_MINT_COUNT

// 	return totalSupply
// }

// const getCurrentPlaceSupply = (placeSupply: number) => {
// 	if (placeSupply >= PREVIOUS_MINT_COUNT)
// 		return placeSupply - PREVIOUS_MINT_COUNT

// 	return placeSupply
// }

export const ContractStats = () => {
	const [totalSupply, setTotalSupply] = useState<number | null>(null)
	const [placeSupply, setPlaceSupply] = useState<number | null>(null)
	const [mintFee, setMintFee] = useState<string | null>(null)

	useEffect(() => {
		contract.methods.totalSupply().call().then(setTotalSupply)
		contract.methods.getPlaceSupply().call().then(setPlaceSupply)
		contract.methods.getMintFeeInWei().call().then(setMintFee)
	}, [])

	return (
		<>
			<p>
				Mint Fee:{' '}
				{mintFee !== null
					? web3.utils.fromWei(mintFee, 'ether')
					: 'loading balance…'}{' '}
				ETH
			</p>
			<p>
				{totalSupply !== null ? totalSupply : 'loading available supply…'} /{' '}
				{placeSupply !== null ? placeSupply : 'loading total supply…'} minted
			</p>
		</>
	)
}
