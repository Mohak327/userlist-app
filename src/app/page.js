'use client'
import { usePathname } from 'next/navigation'
import RouteMapper from './RouteMapper';

export default function Home() {
  const pathname = usePathname();
  return (
      <RouteMapper path={pathname} />
  )
}
