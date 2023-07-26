
import React from 'react'

function Label({ text, children }) {
  return (
    <label htmlFor="" className='text-[14px] font-medium'> {children} </label>
  )
}

export default Label