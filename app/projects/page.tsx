'use client'
import {motion} from 'framer-motion'
import React, {useState} from 'react'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import {BsGithub} from 'react-icons/bs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import Link from 'next/link'
import {PiVideoLight} from 'react-icons/pi'
import SliderButtons from '@/components/SliderButtons'

import ProjectCarousel from '@/components/ui/Carousel'
import {projectData} from '@/constants/projects'

const Project = () => {
  const [index, setIndex] = useState(0)
  const [project, setproject] = useState(projectData[index])

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 0.5, duration: 0.4, ease: 'easeIn'}
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="indent-20 underline hover:underline-offset-4 dark:hover:text-accent" />
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[60%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-4 h-[50%]">
              <h2 className="text-[32px] mt-5 font-bold text-primary hover:text-accent-hover text-stroke-1 dark:text-white dark:hover:text-offblack leading-none transition-all duration-500 capitalize">
                {project.id}. {project.title}
              </h2>
              <div className="dark:text-white/60">{project.description}</div>
              <ul className="flex gap-2 xl:w-full w-[40%]">
                {project.stack.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="xl:text-sm text-xs hover:scale-105 text-accent dark:text-accent-hover bg-[#27272c] p-2 rounded-xl border-"
                    >
                      {item.name}
                      {index !== project.stack.length - 1}
                    </div>
                  )
                })}
              </ul>
              <div className="border border-lightblack dark:border-white/20 "></div>
              <div className="flex items-center gap-4">
                {project.video !== '' ? (
                  <Link
                    href={project.video}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[60px] h-[60px] rounded-full border border-lightblack dark:border-none dark:bg-white/5 flex justify-center items-center group my-3">
                          <PiVideoLight className="dark:text-white text-3xl hover:text-lightblack dark:hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>Video Demo</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}
                <Link
                  href={project.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full border border-lightblack dark:border-none dark:bg-white/5 flex justify-center items-center group my-3">
                        <BsGithub className="dark:text-white text-3xl hover:text-lightblack dark:hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Github Repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
              <SliderButtons
                containerStyles="flex gap-4 justify-center"
                btnStyles="border dark:border-none bg-accent hover:bg-accent-hover text-primary text-[22px] w-[34px] h-[34px] flex justify-center items-center transition-all rounded-2xl"
                iconsStyles=""
                index={index}
                setIndex={setIndex}
                setproject={setproject}
              />
            </div>
          </div>
          <div className="w-full sm:w-[50%] xl:w-[40%]">
            <div className="relative group flex justify-center items-center xl:bg-pink-50/5 xl:rounded-none rounded-xl">
              <div className="w-full">
                <ProjectCarousel images={project.images} id={project.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Project
