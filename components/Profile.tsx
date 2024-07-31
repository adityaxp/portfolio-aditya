'use client'
import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {useTheme} from 'next-themes'

const Profile = () => {
  const {theme, resolvedTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? resolvedTheme : theme

  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: {delay: 1, duration: 0.4, ease: 'easeIn'}
        }}
      >
        {/* image */}
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {delay: 1.4, duration: 0.4, ease: 'easeInOut'}
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/images/profile.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke={currentTheme === 'light' ? '#000' : '#ededed'}
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray: '500 10 0 0'}}
            animate={{
              rotate: [120, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Profile
