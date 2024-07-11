'use client'
import React from 'react'
import { Button } from './ui/button'
import { FiDownload } from 'react-icons/fi'
import SocialsItem from './SocialsItem'
import Profile from './Profile'

const HeroSection = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <button className="mb-5 px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span className="text-l">Software Developer</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
            <h1 className="h1 mb-6">
              Hello I{"'"}m <br />
              <span className="text-accent h1">Aditya Balsane</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              As a software developer, I excel at crafting elegant digital
              experiences and am proficient in a wide range of programming
              languages and technologies.
            </p>
            {/* resume and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 text-accent hover:text-primary"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <SocialsItem
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover: transition-all duration-500"
              />
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 xl:ml-5">
            <Profile />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
