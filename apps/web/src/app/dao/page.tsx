'use client'

import { useSearchParams } from 'next/navigation'
import { BreadCrumbs } from '@/components/breadcrumbs'
import { DaoCard } from '@/components/dao-card'
import { FlowCard } from '@/components/flow-card'

function DaoPage() {
    const search = useSearchParams()
    const dao = search.get('dao')
    if (!dao) {
        return <div>No DAO found</div>
    }
  return (
    <div>
        <BreadCrumbs name={dao} />
        <div className="flex flex-col gap-4">
            <h1>{dao}</h1>
            <p>Check on the blasting power transmission for all grantees.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <DaoCard dao={dao} token="QIx" spent={50} remaining={100} showButton={false} />
            <FlowCard className="md:col-span-2" />
        </div>
    </div>
  )
}

export default DaoPage
