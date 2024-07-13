'use client'

import { useAccount} from 'wagmi'

function App() {
  const account = useAccount()

  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>
      </div>
    </>
  )
}

export default App
