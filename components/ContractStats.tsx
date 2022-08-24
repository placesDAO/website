import { useContractReads } from 'wagmi'
import { BigNumberish, utils } from 'ethers'
import { placesABI } from '../lib/places-abi'

export const ContractStats = () => {
	const { data, isLoading, isError } = useContractReads({
		contracts: [
			{
				addressOrName: process.env.NEXT_PUBLIC_WEB3_PLACES_CONTRACT_ADDRESS,
				contractInterface: placesABI,
				functionName: 'totalSupply',
			},
			{
				addressOrName: process.env.NEXT_PUBLIC_WEB3_PLACES_CONTRACT_ADDRESS,
				contractInterface: placesABI,
				functionName: 'getPlaceSupply',
			},
			{
				addressOrName: process.env.NEXT_PUBLIC_WEB3_PLACES_CONTRACT_ADDRESS,
				contractInterface: placesABI,
				functionName: 'getMintFeeInWei',
			},
		],
		watch: true,
	})

	// Just inifintely load on error for now.
	if (isLoading || isError) return <p>Loading Places Stats</p>

	return (
		<>
			<p style={{ marginBottom: '0' }}>
				{utils.formatEther(data?.[2] as BigNumberish)}
				{` `}
				ETH
			</p>
			<p>
				{`${data?.[0]}`} / {`${data?.[1]}`} minted
			</p>
		</>
	)
}
