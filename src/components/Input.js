
import React from 'react'

function Input({ type, placehoder }) {
    return (
        <input className='text-[14px] leading-[20px] text-[#7A7A7A] px-[12px] py-[8px] border border-[#E6E6E6] outline-0 rounded-[5px]' type={type || 'text'} placeholder={placehoder}  />
    )
}

export default Input