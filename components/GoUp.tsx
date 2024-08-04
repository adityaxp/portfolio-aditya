'use client'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import {FaChevronUp} from 'react-icons/fa'
const GoUp = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrollPercentage = (scrollPosition / windowHeight) * 100

      if (scrollPercentage > 20) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`hidden  w-[50px] h-[50px] drop-shadow-xl rounded-2xl bg-black dark:bg-white fixed right-10 bottom-10 ${
        isVisible ? 'xl:block' : 'hidden'
      }`}
    >
      <Link href="/" className="flex h-full items-center justify-center">
        <FaChevronUp className="w-[20px] h-[20px] text-white dark:text-black" />
      </Link>
    </div>
  )
}

export default GoUp
