import React from 'react'

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(function Input(props, ref) {
  return (
    <input
      ref={ref}
      {...props}
      className={(props.className ?? '') + ' block w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-offset-1'}
    />
  )
})