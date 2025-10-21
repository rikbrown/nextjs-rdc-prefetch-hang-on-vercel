'use client'

import { useRouter } from 'next/navigation'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  href: string
}>

export function RouterPush({ href, children } : Props) {
  const router = useRouter()
  function push() {
    router.push(href)
  }

  return <button onClick={push}>{children}</button>
}