import React from 'react'
import Input from './components/Input'
import Label from './components/Label'
import FormField from './components/FormField'
import Button from './components/Button'
import FormLayout from './components/FormLayout'
import Radio from './components/Radio'
import { postJob, updateJob } from './mutations'
import { useAppContext } from './contexts/appContext'

function StepTwo() {
  const { step, data, jobs, isEditing, dispatch } = useAppContext()


  const handleExperienceMin = (value) => {
    dispatch({ type: 'SET_DATA', payload: { ...data, experienceMin: value } })
  }

  const handleExperienceMax = (value) => {
    dispatch({ type: 'SET_DATA', payload: { ...data, experienceMax: value } })
  }

  const handleSalaryMin = (value) => {
    dispatch({ type: 'SET_DATA', payload: { ...data, salaryMin: value } })
  }

  const handleSalaryMax = (value) => {
    dispatch({ type: 'SET_DATA', payload: { ...data, salaryMax: value } })
  }

  const handleTotalEmployees = (value) => {
    dispatch({ type: 'SET_DATA', payload: { ...data, totalEmployees: value } })
  }

  const handleApplyType = (value) => {
    dispatch({ type: 'SET_DATA', payload: { ...data, applyType: value } })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      updateJobPost()
    }
    else {
      createJobPost()
    }
  }

  const createJobPost = async () => {
    try {
      const res = await postJob(data)
      if (res.status === 201) {
        alert('New Job posted successfully')
        dispatch({ type: 'ADD_JOB', payload: [...jobs, res.data] })
      }
      else {
        alert(res.statusText)
      }
    }
    catch (err) {
      // console.log(err)
    }
  }


  const updateJobPost = async () => {
    try {
      const res = await updateJob(data, data.id)
      if (res.status === 200) {
        const updatedJobs = jobs.map((job) => {
          if (job.id === res.data.id) {
            return res.data
          }
          else {
            return job
          }
        })
        dispatch({ type: 'EDIT_JOB', payload: updatedJobs })
      }
    }
    catch (err) {
      console.log('update job error', err)
    }
  }


  return (
    <FormLayout title={'Create a Job'} step={step}>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label> Experience  </Label>
          <div className='w-full flex gap-[24px]'>
            <Input type={'text'} placehoder={'Minimum'} value={data.experienceMin} onChange={handleExperienceMin} />
            <Input type={'text'} placehoder={'Maximum'} value={data.experienceMax} onChange={handleExperienceMax} />
          </div>
        </FormField>

        <FormField>
          <Label> Salary  </Label>
          <div className='w-full flex gap-[24px]'>
            <Input type={'text'} placehoder={'Minimum'} value={data.salaryMin} onChange={handleSalaryMin} />
            <Input type={'text'} placehoder={'Maximum'} value={data.salaryMax} onChange={handleSalaryMax} />
          </div>
        </FormField>

        <FormField>
          <Label> Total employees  </Label>
          <Input type={'number'} placehoder={'ex. 100'} value={data.totalEmployees} onChange={handleTotalEmployees} />
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

      </form>

    </FormLayout>
  )
}

export default StepTwo