import * as React from 'react'

import {cn} from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({className, ...props}, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-xl border border-black dark:border-white/10 focus:border-black/40 dark:focus:border-accent font-light dark:text-white dark:bg-primary px-4 py-5 text-base outline-none dark:placeholder:text-white/60',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export {Textarea}
