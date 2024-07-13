'use client'

import { createWeb3Modal } from '@web3modal/wagmi/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode, useState } from 'react'
import { WagmiProvider } from 'wagmi'

import { getConfig } from '@/wagmi'

const config = getConfig()

createWeb3Modal({
  wagmiConfig: config,
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || '98c91f41fde1e35bbd1840d31155e924',
})

export function Providers(props: {
  children: ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
