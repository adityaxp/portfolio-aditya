'use client'
import React from 'react'
import {Button} from './ui/button'
import {FiDownload} from 'react-icons/fi'
import SocialsItem from './SocialsItem'
import Profile from './Profile'
import {Highlight} from '@/components/ui/hero-highlight'
import {motion} from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <button className="mb-5 px-4 py-2  backdrop-blur-sm border hover:bg-accent-hover  border-black dark:border-white mx-auto text-center rounded-full relative mt-4">
              <span className="text-l dark:hover:text-black text-black dark:text-white ">
                Software Developer
              </span>
            </button>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0]
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1]
              }}
              className="h2 mb-6 text-white text-stroke-3 dark:text-white/80"
            >
              Hello I{"'"}m <br />
              <span className="h1 text-black dark:text-white hover:text-accent-hover">
                Aditya Balsane
              </span>
            </motion.h1>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0]
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1]
              }}
              className="max-w-[510px] mb-9 dark:text-white/80"
            >
              With a passion for development,
              <Highlight className="text-white dark:text-black px-2">
                I excel at crafting elegant digital experiences and am adept in
                handling a wide range of technologies and workflows.
              </Highlight>
            </motion.h1>
            {/* resume and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 text-white hover:bg-transparent hover:text-primary"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <SocialsItem
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-black hover:bg-accent-hover dark:border-accent rounded-full flex justify-center items-center dark:text-accent text-base dark:hover:bg-accent dark:hover:text-primary hover:transition-all duration-500"
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
