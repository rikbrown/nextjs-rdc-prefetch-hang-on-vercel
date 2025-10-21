import { connection } from 'next/server'
import { Suspense } from 'react'

export default function DynamicPageWithSuspense() {
  return <Suspense fallback={<>In Fallback</>}>
    <SuspendingComponent/>
  </Suspense>

}

async function SuspendingComponent() {
  await connection()
  await new Promise(resolve => setTimeout(resolve, 1000))
  return <div>Dynamic Page Using Suspense fully loaded</div>
}