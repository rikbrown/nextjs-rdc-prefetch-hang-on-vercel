import { RouterPush } from '@/app/components/RouterPush'
import Link from 'next/link'

export default async function Layout({ children }: { children: React.ReactNode }) {
  return <html data-layout><body>
    <header>Layout</header>
    <nav>
      <Link prefetch href="/en/static-page">link (prefetch=true) to static</Link> | 
      <Link prefetch href="/en/dynamic-page-1">link (prefetch=true) to dynamic-page-1</Link> |
      <Link href="/en/dynamic-page-2">link (prefetch=auto) to dynamic-page-2</Link> |
      <Link prefetch={false} href="/en/dynamic-page-3">link (prefetch=false) to dynamic-page-3</Link> |
      <Link prefetch href="/en/dynamic-page-with-suspense">link (prefetch=true) to dynamic-with-suspense</Link> |
      <RouterPush href="/en/dynamic-page">router.push to dynamic1</RouterPush>
    </nav>
    <p>Children:</p>
    <div data-layout-children style={{ paddingLeft: '20px' }}>
      {children}
    </div>
  </body></html>
}

export async function generateStaticParams() {
  return [{
    locale: 'en',
  }]
}