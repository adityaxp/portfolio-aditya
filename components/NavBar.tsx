'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

const links = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'about Me',
    path: '/aboutMe'
  },
  {
    name: 'projects',
    path: '/projects'
  },
  {
    name: 'contact',
    path: '/contact'
  }
]

export const NavBar = () => {
  const pathname = usePathname()
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              'text-black dark:text-white border-b-2 border-black dark:border-white'
            } capitalize font-medium text-black dark:text-white hover:text-black transition-all`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}
