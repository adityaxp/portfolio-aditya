'use client'

import {FiSun, FiMoon} from 'react-icons/fi'
import {useState, useEffect} from 'react'
import {useTheme} from 'next-themes'
import Image from 'next/image'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const {setTheme, resolvedTheme} = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    )

  if (resolvedTheme === 'dark') {
    return (
      <div className="border w-[50px] h-[50px] flex items-center justify-center rounded-full hover:bg-[#27272c]">
        <FiSun
          className="w-[24px] h-[24px] text-white hover:text-offwhite"
          onClick={() => setTheme('light')}
        />
      </div>
    )
  }

  if (resolvedTheme === 'light') {
    return (
      <div className="border w-[50px] h-[50px] flex items-center justify-center rounded-full hover:bg-accent-hover">
        <FiMoon
          className="w-[24px] h-[24px] text-black hover:text-black/50"
          onClick={() => setTheme('dark')}
        />
      </div>
    )
  }
}
