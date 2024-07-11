'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { BsGithub } from 'react-icons/bs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import Link from 'next/link'
import { PiVideoLight } from 'react-icons/pi'
import Image from 'next/image'
import SliderButtons from '@/components/SliderButtons'

const projectData = [
  {
    category: 'Mobile Developement',
    title: 'LawSage',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus dolorem sapiente beatae quaerat quam cum, tenetur obcaecati dolorum commodi. Reiciendis nisi tempore repellendus voluptas maxime ex quasi debitis sit.',
    stack: [
      { name: 'React Native' },
      { name: 'llama.cpp' },
      { name: 'Transformers' },
      { name: 'ChromaDB' },
      { name: 'FastAPI' },
    ],
    content: [],
    image:
      'https://cubanvr.com/wp-content/uploads/2023/07/ai-image-generators.webp',
    github: 'https://github.com/adityaxp/LawSageApp',
    video:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/videos%2FLawsageDemo.mp4?alt=media&token=48fa838c-de12-485f-9c85-e8975a8e2c34',
  },
  {
    category: 'Mobile Developement',
    title: 'DécorHub',
    description:
      'DécorHub is a React Native application tailored for an elevated shopping experience in luxurious furniture. ',
    stack: [
      { name: 'React Native' },
      { name: 'Formik & Yup' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'MongoDB' },
      { name: 'Stripe' },
    ],
    content: [],
    image: 'https://github.com/adityaxp/DecorHub/raw/master/Images/4.jpeg',
    github: 'https://github.com/adityaxp/DecorHub.git',
    video:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
  },
]

const Project = () => {
  const [project, setproject] = useState(projectData[0])
  const [index, setIndex] = useState(1)

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex
    setproject(projectData[currentIndex])
    setIndex(currentIndex + 1)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[60%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-4 h-[50%]">
              <h2 className="text-[32px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize">
                {index}. {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <p className="sm:text-center text-white hover:text-accent">
                Tech stack:{' '}
              </p>
              <ul className="xl:flex gap-4 w-full bg-[#27272c] px-3 py-3 rounded-xl">
                {project.stack.map((item, index) => {
                  return (
                    <p key={index} className="text-l text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </p>
                  )
                })}
              </ul>
              <div className="border border-white/20 "></div>
              <div className="flex items-center gap-4">
                <Link href={project.video}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group my-3">
                        <PiVideoLight className="text-white text-3xl hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Video Demo</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group my-3">
                        <BsGithub className="text-white text-3xl hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Github repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[50%] xl:w-[40%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projectData.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <SliderButtons
                containerStyles="flex gap-3 absolute right-0 bottom-0 z-20 justify-between w-max justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-xl"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Project
