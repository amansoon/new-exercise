import React, { useState, useEffect } from 'react'
import Input from './components/Input'
import Label from './components/Label'
import FormField from './components/FormField'
import Button from './components/Button'
import FormLayout from './components/FormLayout'
import { useFormContext } from './contexts/formContext'
import ErrorMessage from './components/ErrorMessage'


const initialErrors = {
  title: null,
  company: null,
  industry: null,
  remoteType: null,
  location: null,
}


function StepOne() {
  const { step, setStep, data, setData } = useFormContext()

  const [error, setError] = useState({})

  const handleTitle = (value) => {
    setData({ ...data, title: value })
  }

  const handleCompany = (value) => {
    setData({ ...data, company: value })
  }

  const handleIndustry = (value) => {
    setData({ ...data, industry: value })
  }

  const handleRemoteType = (value) => {
    setData({ ...data, remoteType: value })
  }

  const handleLocation = (value) => {
    setData({ ...data, location: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (data.title.trim() === '') {
      setError({ field: 'title', message: 'Title is required' })
    }
    else if (data.company.trim() === '') {
      setError({ field: 'company', message: 'Company is required' })

    }
    else if (data.industry.trim() === '') {
      setError({ field: 'industry', message: 'Industry is required' })
    }
    else {
      setError({})
      setStep(2)
    }

  }



  useEffect(() => {
    console.log(data)
  }, [data])


  return (
    <FormLayout title='Create a Job' step={step}>
      <form onSubmit={handleSubmit}>

        <FormField>
          <Label required={true}> Job title </Label>
          <Input type={'text'} placehoder={'ex. UX designer'} value={data.title} onChange={handleTitle} />
          {error.field === 'title' && <ErrorMessage> {error.message} </ErrorMessage>}
        </FormField>

        <FormField>
          <Label required={true}> Company name </Label>
          <Input type={'text'} placehoder={'ex. Google'} onChange={handleCompany} />
          {error.field === 'company' && <ErrorMessage> {error.message} </ErrorMessage>}
        </FormField>

        <FormField>
          <Label required={true}> Industry  </Label>
          <Input type={'text'} placehoder={'ex. Information Technology '} onChange={handleIndustry} />
          {error.field === 'industry' && <ErrorMessage> {error.message} </ErrorMessage>}
        </FormField>

        <div className='flex gap-[24px] w-full'>
          <FormField>
            <Label> Remote type  </Label>
            <Input type={'text'} placehoder={'ex. In-office '} onChange={handleRemoteType} />
          </FormField>
          <FormField>
            <Label> Location  </Label>
            <Input type={'text'} placehoder={'ex. Chennai '} onChange={handleLocation} />
          </FormField>
        </div>

        <footer className='flex justify-end'>
          <Button type='primary'> Next </Button>
        </footer>

      </form>

    </FormLayout>
  )
}

export default StepOne