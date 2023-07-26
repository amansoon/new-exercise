import React, { useEffect, useState } from 'react'
import Input from './components/Input'
import Label from './components/Label'
import FormField from './components/FormField'
import Button from './components/Button'
import FormLayout from './components/FormLayout'
import Radio from './components/Radio'
import { useFormContext } from './contexts/formContext'

function StepTwo() {
  const { step, data, setData } = useFormContext()
  const [applyType, setApplyType] = useState(null)

  const handleExperienceMin = (value) => {
    setData({ ...data, experienceMin: value })
  }

  const handleExperienceMax = (value) => {
    setData({ ...data, experienceMax: value })
  }

  const handleSalaryMin = (value) => {
    setData({ ...data, salaryMin: value })
  }

  const handleSalaryMax = (value) => {
    setData({ ...data, salaryMax: value })
  }

  const handleTotalEmployees = (value) => {
    setData({ ...data, totalEmployees: value })
  }

  const handleApplyType = (value) => {
    setData({ ...data, applyType: value })
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <FormLayout title={'Create a Job'} step={step}>
      <form onSubmit={handleSubmit}></form>
      <FormField>
        <Label> Experience  </Label>
        <div className='w-full flex gap-[24px]'>
          <Input type={'text'} placehoder={'Minimum'} onChange={handleExperienceMin} />
          <Input type={'text'} placehoder={'Maximum'} onChange={handleExperienceMax} />
        </div>
      </FormField>

      <FormField>
        <Label> Salary  </Label>
        <div className='w-full flex gap-[24px]'>
          <Input type={'text'} placehoder={'Minimum'} onChange={handleSalaryMin} />
          <Input type={'text'} placehoder={'Maximum'} onChange={handleSalaryMax} />
        </div>
      </FormField>

      <FormField>
        <Label> Total employees  </Label>
        <Input type={'number'} placehoder={'ex. 100'} onChange={handleTotalEmployees} />
      </FormField>

      <FormField>
        <Label> Apply type  </Label>
        <div className='flex gap-[16px]'>
          <Radio name="apply_type" label={'Quick apply'} value='quick_apply' onChange={handleApplyType} />
          <Radio name="apply_type" label={'External apply'} value='external_apply' onChange={handleApplyType} />
        </div>
      </FormField>

      <footer className='flex justify-end'>
        <Button type='primary'> Save </Button>
      </footer>

    </FormLayout>
  )
}

export default StepTwo