import { connection } from 'next/server'

export default async function DynamicPage1() {
  await connection()
  await new Promise(resolve => setTimeout(resolve, 1000))
  return <div>Dynamic Page 1 loaded</div>
}