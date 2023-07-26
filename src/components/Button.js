

import React from 'react'

function Button({ children }) {
    return (
        <button className='text-[16px] leading-[24px] text-white px-[16px] py-[8px] bg-primary rounded-[6px]'> {children} </button>
    )
}

export default Button