import { useEffect, useState } from 'react'
import Web3 from 'web3'

import contractAbi from '../contract-abi.json'

const PLACES_CONTRACT_ADDRESS = '0x4C1965D8388deFf39a977a89BDF317A9A1DC40b5'

const web3 = new Web3()
web3.eth.setProvider(
	'wss://mainnet.infura.io/ws/v3/865185249fa646ceadb4b51b09fe39a4',
)
const contract = new web3.eth.Contract(
	contractAbi as any,
	PLACES_CONTRACT_ADDRESS,
)

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
			<p>Mint Fee: {mintFee !== null ? mintFee : 'loading balance…'} ETH</p>
			<p>
				{totalSupply !== null ? totalSupply : 'loading available supply…'} /{' '}
				{placeSupply !== null ? placeSupply : 'loading total supply…'} minted
			</p>
		</>
	)
}
