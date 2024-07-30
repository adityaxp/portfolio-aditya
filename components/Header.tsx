import React from 'react'
import Link from 'next/link'
import {NavBar} from './NavBar'
import {Button} from './ui/button'
import {MobileNavBar} from './MobileNavBar'
import ThemeSwitch from './ui/theme-switch'
import Image from 'next/image'
import logo from '@/public/assets/images/logo.png'

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} width={180} height={120} alt="logo" />
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-7">
          <NavBar />
          <Link href="/contact">
            <Button className="border hover:border-black bg-black dark:bg-white text-white dark:text-black hover:text-black">
              Hire me
            </Button>
          </Link>
          <ThemeSwitch />
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNavBar />
        </div>
      </div>
    </header>
  )
}
