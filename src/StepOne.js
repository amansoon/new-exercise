import React, { useState, useEffect } from 'react'
import Input from './components/Input'
import Label from './components/Label'
import FormField from './components/FormField'
import Button from './components/Button'
import FormLayout from './components/FormLayout'
import ErrorMessage from './components/ErrorMessage'
import { useAppContext } from './contexts/appContext'

function StepOne() {
  const { step, data, dispatch } = useAppContext()
  const [error, setError] = useState({})

  const handleTitle = (value) => {
    dispatch({type: 'SET_DATA', payload: {...data, title: value}})
  }

  const handleCompany = (value) => {
    dispatch({type: 'SET_DATA', payload: {...data, company: value}})
  }

  const handleIndustry = (value) => {
    dispatch({type: 'SET_DATA', payload: {...data, industry: value}})
  }

  const handleRemoteType = (value) => {
    dispatch({type: 'SET_DATA', payload: {...data, remoteType: value}})
  }

  const handleLocation = (value) => {
    dispatch({type: 'SET_DATA', payload: {...data, location: value}})
  
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
      dispatch({type: 'SET_STEP', payload: 2})
    }

  }

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
          <Input type={'text'} placehoder={'ex. Google'} value={data.company} onChange={handleCompany} />
          {error.field === 'company' && <ErrorMessage> {error.message} </ErrorMessage>}
        </FormField>

        <FormField>
          <Label required={true}> Industry  </Label>
          <Input type={'text'} placehoder={'ex. Information Technology '} value={data.industry} onChange={handleIndustry} />
          {error.field === 'industry' && <ErrorMessage> {error.message} </ErrorMessage>}
        </FormField>

        <div className='flex gap-[24px] w-full'>
          <FormField>
            <Label> Remote type  </Label>
            <Input type={'text'} placehoder={'ex. In-office '} value={data.remoteType} onChange={handleRemoteType} />
          </FormField>
          <FormField>
            <Label> Location  </Label>
            <Input type={'text'} placehoder={'ex. Chennai '} value={data.location} onChange={handleLocation} />
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