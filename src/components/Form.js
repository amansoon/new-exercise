import React from 'react'
import FormTitle from './FormTitle'

function Form({ children, title, step }) {
    return (
        <Form className='p-[32px] w-[550px] min-h-[400px] border border-[#E6E6E6] rounded-[10px] bg-card-color'>
            <div className='font-medium flex justify-between mb-[24px]'>
                <h1 className='text-[20px]'> {title} </h1>
                <div className='text-[16px]'> Step {step}  </div>
            </div>
            {children}
        </Form>
    )
}

export default Form