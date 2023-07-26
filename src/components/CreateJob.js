

import React, { createContext, useState } from 'react'
import StepOne from '../StepOne'
import StepTwo from '../StepTwo'
import { formContext } from '../contexts/formContext'


function CreateJob() {
    const [step, setStep] = useState(1)
    const [data, setData] = useState({
        // step 1
        title: '',
        company: '',
        industry: '',
        remoteType: '',
        location: '',
        // step 2
        experienceMin: '',
        experienceMax: '',
        salaryMin: '',
        salaryMax: '',
        totalEmployees: '',
        applyType: '',
    })

    return (
        <div className='fixed inset-0 w-full h-[100vh] flex justify-center items-center bg-gray-500/75'>
            <formContext.Provider value={{ step, setStep, data, setData }}>
                {step === 1 && <StepOne />}
                {step === 2 && <StepTwo />}
            </formContext.Provider>
        </div>
    )
}

export default CreateJob