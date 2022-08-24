declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_APP_ENIRONMENT: 'development' | 'production'
			NEXT_PUBLIC_WEB3_NETWORK: 'local' | 'testnet' | 'mainnet'
			NEXT_PUBLIC_WEB3_INFURA_ID: string
			NEXT_PUBLIC_WEB3_PLACES_CONTRACT_ADDRESS: string
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
