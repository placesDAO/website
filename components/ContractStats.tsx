import { useEffect, useState } from 'react'
import Web3 from 'web3'

import contractAbi from '../contract-abi.dev.json'

const PLACES_CONTRACT_ADDRESS = '0xf0a62Fd8a5888eEFed99736cb59c627B8FADEfCc'

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
	const [balance, setBalance] = useState<string | null>(null)

	useEffect(() => {
		contract.methods.totalSupply().call().then(setSupply)
		web3.eth.getBalance(PLACES_CONTRACT_ADDRESS).then(setBalance)
	}, [])

	return (
		<>
			<p>
				Mint Fee:{' '}
				{balance ? web3.utils.fromWei(balance, 'ether') : 'loading balance…'}{' '}
				ETH
			</p>
			<p>{supply ? supply : 'loading supply…'} / 500 minted</p>
		</>
	)
}
