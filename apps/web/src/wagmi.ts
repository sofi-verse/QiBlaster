import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { injected, walletConnect, metaMask } from 'wagmi/connectors'

export function getConfig() {
  return createConfig({
    chains: [mainnet, sepolia],
    connectors: [
      // injected(),
      metaMask(),
      walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || '98c91f41fde1e35bbd1840d31155e924' }),
    ],
    ssr: true,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  })
}

declare module 'wagmi' {
  interface Register {
    config: ReturnType<typeof getConfig>
  }
}
