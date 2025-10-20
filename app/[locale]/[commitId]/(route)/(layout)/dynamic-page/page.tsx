import { connection } from 'next/server'

export default async function DynamicPage() {
  await connection()
  await new Promise(resolve => setTimeout(resolve, 1000))
  return <div>Dynamic Page after 1 second</div>
}