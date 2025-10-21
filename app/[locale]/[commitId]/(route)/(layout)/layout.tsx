import Link from 'next/link'
import { connection } from 'next/server'

export default async function Layout({ children }: { children: React.ReactNode }) {
  await connection()
  return <div data-dynamic-nested-layout>
    <header>Dynamic Nested Layout (
      <Link prefetch href="/en/123/static-page">link to static</Link> | 
      <Link prefetch href="/en/123/dynamic-page">link to dynamic</Link>) |
      <Link href="/en/123/dynamic-page-auto-prefetch">link to dynamic (auto pre-fetched)</Link>) |
      <Link prefetch={false} href="/en/123/dynamic-page-no-prefetch">link to dynamic (not pre-fetched)</Link>)
    </header>
    {children}
  </div>
}

export async function generateStaticParams() {
  return [{
    locale: 'en',
    commitId: '123',
  }]
}