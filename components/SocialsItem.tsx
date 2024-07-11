import Link from 'next/link'
import path from 'path'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/adityaxp',
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/adityabalsane/',
  },
  {
    icon: <FaEnvelope />,
    path: 'mailto:adityabalsane.devmail@gmail.com',
  },
]

const SocialsItem = ({ containerStyles, iconStyles }: any) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default SocialsItem
