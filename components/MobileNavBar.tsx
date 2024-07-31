'use client'

import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {CiMenuFries} from 'react-icons/ci'
import ThemeSwitch from './ui/theme-switch'
import Image from 'next/image'
import logo from '@/public/assets/images/logo.png'
import logoDark from '@/public/assets/images/logo-dark.png'

import {useTheme} from 'next-themes'

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

export const MobileNavBar = () => {
  const {theme} = useTheme()

  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-black dark:text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-white dark:bg-primary">
        {/* logo */}
        <div className="flex mt-32 mb-35 items-center justify-center text-2x1">
          <Link href="/">
            <Image
              src={theme === 'light' ? logo : logoDark}
              width={180}
              height={120}
              alt="logo"
            />
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <SheetClose asChild key={index}>
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
              </SheetClose>
            )
          })}
          <ThemeSwitch />
        </nav>
      </SheetContent>
    </Sheet>
  )
}
