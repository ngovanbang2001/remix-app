import React from 'react'

export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={(props.className ?? '') + ' inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm transition hover:brightness-95 focus:outline-none'}
    >
      {children}
    </button>
  )
}