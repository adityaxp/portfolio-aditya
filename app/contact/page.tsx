'use client'

import React from 'react'

import {FaPhoneAlt, FaEnvelope, FaUser} from 'react-icons/fa'
import {motion} from 'framer-motion'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import {Button} from '@/components/ui/button'

const info = [
  {
    icon: <FaUser />,
    title: 'Name',
    description: 'Aditya (Ah-dith-yuh) Balsane'
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+91) 94032 99428'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'adityabalsane.devmail@gmail.com'
  }
]

const Contact = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 0.1, duration: 0.1, ease: 'easeIn'}
      }}
      className="py-2"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-2xl xl:hover:text-accent xl:text-white text-accent">
                Let{"'"}s work together
              </h3>
              <p>
                Please fill your contact details in the form below so I can get
                back to you promptly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message  here."
              />
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <motion.div
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
            className="flex-1 flex xl:items-baseline items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-md">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
