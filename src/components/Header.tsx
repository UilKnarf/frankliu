'use client'

import { usePathname } from 'next/navigation'
import { ModeToggle } from './mode-toggle'
import Nav from './navigation'
import Section from './Section'
import { NAV_ITEMS } from '@/lib/constants'

export default function Header({
  className,
}: {
  className: string
}): JSX.Element {
  const path = usePathname()
  const navPaths = NAV_ITEMS.map((item) => item.pageLink)
  navPaths.push('/')

  const notBlogPost = navPaths.includes(path)

  return (
    <>
      <div className={className}>
        <div className='flex justify-between text-sm min-w-max items-center'>
          <Nav />
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
      {notBlogPost && (
        <Section title='Home'>
          <h4 className='font-medium'>Frank Liu</h4>
        </Section>
      )}
    </>
  )
}
