/*************************************
 * ████░░░░░░░░░░░░░░░░░░░░░░░░░████ *
 * ██░░░░░░░██████░░██████░░░░░░░░██ *
 * ░░░░░░░██████████████████░░░░░░░░ *
 * ░░░░░████████      ████████░░░░░░ *
 * ░░░░░██████  ██████  ██████░░░░░░ *
 * ░░░░░██████  ██████  ██████░░░░░░ *
 * ░░░░░░░████  ██████  ████░░░░░░░░ *
 * ░░░░░░░░░████      ████░░░░░░░░░░ *
 * ░░░░░░░░░░░██████████░░░░░░░░░░░░ *
 * ░░░░░░░░░░░░░██████░░░░░░░░░░░░░░ *
 * ██░░░░░░░░░░░░░██░░░░░░░░░░░░░░██ *
 * ████░░░░░░░░░░░░░░░░░░░░░░░░░████ *
 *************************************/

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const ContractStats = dynamic(
	// @ts-ignore Not sure why typing is off.
	() => import('../components/ContractStats').then((mod) => mod.ContractStats),
	{ loading: () => <p>loading contract stats…</p>, ssr: false },
)

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>
					PlacesDAO | an open atlas curated by the world and stored on chain
				</title>
				<meta
					content="Places is an experiment to establish geographic locations as non-fungible tokens on the Ethereum blockchain. The project aims to create long-term value by curating an ever-growing collection of specific places, submitted and verified by our community, for the purpose of providing them an immutable home on chain."
					name="description"
				/>
				<meta
					content="PlacesDAO | an open atlas curated by the world and stored on chain"
					property="og:title"
				/>
				<meta
					content="Places is an experiment to establish geographic locations as non-fungible tokens on the Ethereum blockchain. The project aims to create long-term value by curating an ever-growing collection of specific places, submitted and verified by our community, for the purpose of providing them an immutable home on chain."
					property="og:description"
				/>
				<meta content="/images/og.png" property="og:image" />
				<meta
					content="PlacesDAO | an open atlas curated by the world and stored on chain"
					property="twitter:title"
				/>
				<meta
					content="Places is an experiment to establish geographic locations as non-fungible tokens on the Ethereum blockchain. The project aims to create long-term value by curating an ever-growing collection of specific places, submitted and verified by our community, for the purpose of providing them an immutable home on chain."
					property="twitter:description"
				/>
				<meta property="og:type" content="website" />
				<meta content="summary_large_image" name="twitter:card" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link
					href="images/favicon.ico"
					rel="shortcut icon"
					type="image/x-icon"
				/>
			</Head>
			<div className="confidential">
				<div>¡CONFIDENTIAL DRAFT — DO NOT SHARE!</div>
			</div>
			<div className="nav">
				<div className="nav-wrapper">
					<div className="nav-pin"></div>
					<div className="nav-title">Places</div>
					<div className="nav-items">
						<a
							href="https://placesdao.notion.site/Welcome-to-Places-f8fb9b0c0e1a44d9afbc0fae278c0f6b"
							className="nav-item-link"
						>
							Intro
						</a>
						<a href="http://twitter.com/placesDAO" className="nav-item-link">
							Twitter
						</a>
						<a href="#" className="nav-item-link">
							{' '}
							{/* TODO Discord Nav Item Link */}
							Discord
						</a>
						<a href="#" className="nav-item-link">
							Etherscan
						</a>{' '}
						{/* TODO Etherscan Nav Item Link */}
						<a href="#" className="nav-item-link">
							Places.eth
						</a>{' '}
						{/* TODO Places.eth Nav Item Link */}
					</div>
				</div>
			</div>
			<div className="header">
				<div className="header-content">
					<div className="logo"></div>
					<h1>
						an open atlas
						<br />
						curated by the world
						<br />
						and stored on chain
					</h1>
				</div>
			</div>
			<div className="main wrapper">
				<div className="intro">
					<h2>
						Places is an experiment to establish geographic locations as
						non-fungible tokens on the Ethereum blockchain. The project aims to
						create long-term value by curating an ever-growing collection of
						specific places, submitted and verified by our community, for the
						purpose of providing them an immutable home on chain.
					</h2>
				</div>
				<div className="drop-details">
					<div className="detail-icon">
						<Image
							src="/images/brooklyn_bridge.svg"
							loading="lazy"
							width="32"
							height="32"
							alt="Brooklyn Bridge icon"
							className="detail-icon-img"
						/>
					</div>
					<h3 className="callout">the first drop</h3>
					<h4 className="detail-hd">Brooklyn</h4>
					<p>
						Home to vibrant communities, notable landmarks, and some of the best
						eateries in the world, our Brooklyn drop includes 500 unique
						locations ready to mint. This inaugural drop includes places like
						Nighthawk Cinema in Park Slope, the Parachute Jump in Coney Island,
						and La Superior in Williamsburg.{' '}
						<strong>
							You won&#x27;t know which Place you&#x27;re getting until you
							mint.
						</strong>
					</p>
					<p>
						Remember, this is still an experiment. Contract is not audited. You
						DO NOT have to be in or from the drop area to mint. Mint at your own
						risk. And have fun. If it&#x27;s not fun, don&#x27;t do it.
					</p>
					<p>
						<a href="https://etherscan.io/address/0xC9CA129DC3a299aF68A215d85771630aec4C3C2b#code">
							0xC9CA129DC3a299aF68A215d85771630aec4C3C2b
						</a>
					</p>
					<ContractStats />
				</div>
				<div className="details">
					<div className="detail-item">
						<h3 className="detail-hd">What in the world?!</h3>
						<div className="detail-content">
							<p>
								Each Place represents a named real-world geographic location
								with associated place information. This includes neighborhood,
								street address, locality, a 3D geographic coordinate with
								altitude, and categorical attributes such as{' '}
								<span className="tag">Tacos</span>,{' '}
								<span className="tag">Live Music</span>, or{' '}
								<span className="tag">Historical Landmark</span>. Each of these
								attributes are stored natively on chain where they can be
								referenced and remixed by creators.
							</p>
							<div className="sample-token-set">
								<div className="sample-token">
									<Image
										src="/images/place-parachute_jump.svg"
										loading="lazy"
										width="520"
										height="520"
										alt="Sample Place Token: Parachute Jump"
										className="sample-token-svg"
									/>
								</div>
								<div className="sample-token">
									<Image
										src="/images/place-la_superior.svg"
										loading="lazy"
										width="520"
										height="520"
										alt="Sample Place Token: La Superior"
										className="sample-token-svg"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="detail-item">
						<h3 className="detail-hd">Why on-chain?</h3>
						<div className="detail-content">
							<p>
								Most of the world’s mapping and place data is controlled by
								large corporations. It is costly to license or laden with
								restrictive rights.
							</p>
							<p>
								Places provides a permanent, decentralized, and immutable record
								of a given place and empowers creators to make art, games, maps,
								tools, systems, and visualizations.
							</p>
							<p>
								<span className="text-highlight">
									Places and their attributes are stored directly on the
									Ethereum blockchain
								</span>{' '}
								and do not point to IPFS or other networks.
							</p>
						</div>
					</div>
					<div className="detail-item">
						<h3 className="detail-hd">The Drops</h3>
						<div className="detail-content">
							<p>
								Places will be released in small drops inspired by specific
								neighborhoods, communities, or themes. By seeding each drop
								around a specific locale or community, Places is able to provide
								an interesting mix of representative locations in a
								geographically dense arrangement. This provides a unique and
								compelling canvas for artists and developers.
							</p>
							<p>
								The first Places drop is Brooklyn. Of course, you can imagine
								locales such as Austin, Paris, Miami, Los Angeles, Manhattan,
								London, Sydney, Tokyo, and more are on the Places radar. The
								ends of the earth are literally the limit.
							</p>
						</div>
					</div>
					<div className="detail-item">
						<h3 className="detail-hd">Minting Places</h3>
						<div className="detail-content">
							<p>
								In addition to gas, there is a nominal (in ETH terms) fee to
								mint a place (more on that below 👇). Mint fees are set from
								drop to drop. Upon each successful mint the next available
								Places ERC-721 token will be transferred to the minter. Only one
								place may be minted at a time, and you never know what place
								you’ll receive. Certain drops may also limit the total number of
								Places a wallet address is able to mint.{' '}
								<span className="text-highlight">
									The Places contract is NOT audited so mint at your own risk.
								</span>
							</p>
							<p>
								For now, new drops can be minted from the Places contract
								directly. In the future we hope to offer wallet connect minting
								from this website.
							</p>
							<p>
								Places Contract: <a href="#">0x0000000000000000000000FIXTHIS</a>
							</p>
						</div>
					</div>
					<div className="detail-item">
						<h3 className="detail-hd">PlacesDAO, Proceeds, + Placehodlers</h3>
						<div className="detail-content">
							<p>
								Immutably storing geographic information on-chain will require a
								meaningful investment of resources over time.
							</p>
							<p>
								To that end, the PlacesDAO treasury receives 75% of ETH proceeds
								from each drop. The treasury will be used to fund contract fees
								for future drops. In this way a virtuous cycle can fuel
								expansion of Places to new neighborhoods and cities. PlacesDAO
								also aims to fund projects that benefit the Places ecosystem as
								a whole.
							</p>
							<p>
								The remaining 25% ETH is transferred via contract to a unique
								Neighborhood treasury (defined per each drop) where it will be
								disbursed to one or more local projects at the decision of
								PlacesDAO. Here&#x27;s{' '}
								<a href="https://placesdao.notion.site/Neighborhood-Grants-0514a53a3d874fc088cb9dc9f9d6334b">
									how neighborhood grants will work
								</a>
								.
							</p>
							<p>
								Each Place token is an irrevocable member of PlacesDAO. As the
								project grows and membership diversifies, DAO members
								(Placehodlers?) will become the primary governing body of the
								Places project.{' '}
							</p>
							<div className="detail-callout">
								<h4 className="detail-hd">
									Some ideas PlacesDAO is interested in funding…
								</h4>
								<ul role="list" className="detail-list">
									<li>An API for searching and discovering Places</li>
									<li>
										A tool or marketplace for trading Places, especially as the
										project grows to many neighborhoods and communities
									</li>
									<li>PFP + Places remixes</li>
									<li>
										Systems that provide verifiable proof-of-location,
										proof-of-sale, or proof-of-attendance at Places
									</li>
									<li>Systems for routing and waypoint navigation</li>
									<li>Augmented reality experiences at Places</li>
									<li>List-building dapp for guides and tours</li>
									<li>
										Derivative place tokens that can be minted and claimed by
										verified IRL place owners
									</li>
									<li>Generative geographic visualizations</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="detail-item">
						<h3 className="detail-hd">“Grounders” + Rewards</h3>
						<div className="detail-content">
							<p>
								The “Grounders”* are the team at{' '}
								<a
									href="https://twitter.com/gowalla"
									target="_blank"
									rel="noreferrer"
								>
									Gowalla
								</a>
								, a gaming company exploring the space where our digital and
								physical worlds collide. Grounders believe in the power of
								communities working together and are responsible for creating
								and seeding the Places project. Gowalla’s own products plan to
								support Places as a protocal.
							</p>
							<p>
								Because 100% of the ETH proceeds from Places are divided between
								the PlacesDAO and neighborhood treasuries, Gowalla has chosen to
								receive Place tokens as compensation. Every 20th Place
								(beginning with a random ID for each drop) will be automatically
								minted and sent to the Grounders multisig.
							</p>
							<p>
								* = tip o’ the hat to{' '}
								<a href="http://nouns.wtf">Nouns project</a> for the naming
								inspiration.
							</p>
						</div>
					</div>
					<div className="detail-item">
						<h3 className="detail-hd">Can I build with Places?</h3>
						<div className="detail-content">
							<p>
								Unequivocally, yes! Places are{' '}
								<a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
									public domain
								</a>{' '}
								and you’re invited to use them however you want.
							</p>
							<p>
								Here is{' '}
								<a href="https://placesdao.notion.site/Project-Ideas-cf4bd84defb14d7d8961bcbb255d5c1e">
									a running list of ideas
								</a>{' '}
								gathered by our community.
							</p>
						</div>
					</div>
				</div>
			</div>
			<footer className="footer">
				<div className="footer-link-set">
					<a href="http://twitter.com/placesDAO" className="footer-link">
						Twitter
					</a>
					<a href="#" className="footer-link">
						Discord
					</a>
					{/* TODO Discord Footer Link */}
					<a href="#" className="footer-link">
						Etherscan
					</a>
					{/* TODO Etherscan Footer Link */}
				</div>
			</footer>
		</>
	)
}

export default Home
