import { connection } from 'next/server'

export default async function DynamicRoute() {
  const data = await getData()
  return <div>Dynamic: {data.text}</div>
}

async function getData() {
  await connection()
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    text: `Promise resolved after 1 second`
  }
}
