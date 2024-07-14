'use client'

import { DaoCard } from '@/components/dao-card'

function App() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Find out how different DAOs are managing their power and distributing funds.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DaoCard dao="QiDAO" token="QI" spent={50} remaining={100} showButton={true} />
        <DaoCard dao="GenkiDAO" token="GNK" spent={200} remaining={100} showButton={true} />
        <DaoCard dao="SaiDAO" token="SAI" spent={230} remaining={10} showButton={true} />
      </div>
    </div>
  )
}


export default App
