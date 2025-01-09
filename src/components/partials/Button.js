import React from 'react'

export default function Button({ children, onClick, className, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`h-fit w-fit py-2 px-4 border border-line text-white rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
