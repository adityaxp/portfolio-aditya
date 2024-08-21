'use client'
import {cn} from '@/lib/utils'
import AnimatedShinyText from './animated-shiny-text'

export function AnimatedShinyHeader() {
  return (
    <div className="flex items-center left-0 mb-6 justify-center xl:justify-start">
      <div
        className={cn(
          'group rounded-full border border-black/8 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
        )}
      >
        <div className="xl:block hidden">
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span className="select-none">✨ Software Developer </span>
          </AnimatedShinyText>
        </div>
        <div className="xl:hidden block p-2">
          <span className="select-none text-black dark:text-white">
            ✨ Software Developer
          </span>
        </div>
      </div>
    </div>
  )
}
