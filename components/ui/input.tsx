import * as React from 'react'

import {cn} from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, type, ...props}, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-[48px] rounded-xl border border-black dark:border-white/10 focus:border-black/40 dark:focus:border-accent font-light dark:text-white dark:bg-primary px-4 py-5 text-base outline-none dark:placeholder:text-white/60',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export {Input}
