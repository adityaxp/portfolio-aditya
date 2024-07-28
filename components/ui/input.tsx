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
          'flex h-[48px] rounded-xl border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base outline-none placeholder:text-white/60',
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
