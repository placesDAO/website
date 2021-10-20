import { useEffect, useState } from 'react'
import Web3 from 'web3'

import contractAbi from '../contract-abi.dev.json'

const PLACES_CONTRACT_ADDRESS = '0xA2d5b3C437e70BF1d61e647fa391E1C67f92EcdA'

const web3 = new Web3()
web3.eth.setProvider(
	'wss://rinkeby.infura.io/ws/v3/865185249fa646ceadb4b51b09fe39a4',
)
const contract = new web3.eth.Contract(
	contractAbi as any,
	PLACES_CONTRACT_ADDRESS,
)

export const ContractStats = () => {
	const [supply, setSupply] = useState<number | null>(null)
	const [price, setPrice] = useState<string | null>(null)

	useEffect(() => {
		contract.methods.totalSupply().call().then(setSupply)
		contract.methods.getMintFeeInWei().call().then(setPrice)
	}, [])

	return (
		<>
			<p>Mint Fee: {price !== null ? price : 'loading balance…'} ETH</p>
			<p>{supply ? supply : 'loading supply…'} / 500 minted</p>
		</>
	)
}
