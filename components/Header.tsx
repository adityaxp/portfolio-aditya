import React from 'react'
import Link from 'next/link'
import {NavBar} from './NavBar'
import {Button} from './ui/button'
import {MobileNavBar} from './MobileNavBar'

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Aditya<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <NavBar />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNavBar />
        </div>
      </div>
    </header>
  )
}
