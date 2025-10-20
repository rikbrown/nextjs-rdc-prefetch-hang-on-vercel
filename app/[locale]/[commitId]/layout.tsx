export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <html><body data-global-layout>
    <header>Global Layout</header>
    {children}
  </body></html>
}