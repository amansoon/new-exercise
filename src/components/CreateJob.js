

import React from 'react'
import StepOne from '../StepOne'
import StepTwo from '../StepTwo'
import { useAppContext } from '../contexts/appContext'


function CreateJob() {
    const { step } = useAppContext()

    return (
        <div className='fixed inset-0 w-full min-h-[100vh] overflow-auto  flex justify-center items-center bg-gray-400/60'>
            {step === 1 && <StepOne />}
            {step === 2 && <StepTwo />}
        </div>
    )
}

export default CreateJob