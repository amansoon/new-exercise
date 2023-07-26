

import React from 'react'
import Input from './components/Input'
import Label from './components/Label'
import FormField from './components/FormField'
import Button from './components/Button'
import Form from './components/Form'

function StepOne() {
  return (
    <Form title={'Create a Job'} step={1}>
      <FormField>
        <Label> Job title </Label>
        <Input type={'text'} placehoder={'ex. UX designer'} />
      </FormField>

      <FormField>
        <Label> Company name </Label>
        <Input type={'text'} placehoder={'ex. Google'} />
      </FormField>

      <FormField>
        <Label> Industry  </Label>
        <Input type={'text'} placehoder={'ex. Information Technology '} />
      </FormField>


      <div className='flex gap-[24px] w-full'>
        <FormField>
          <Label> Remote type  </Label>
          <Input type={'text'} placehoder={'ex. In-office '} />
        </FormField>
        <FormField>
          <Label> Location  </Label>
          <Input type={'text'} placehoder={'ex. Chennai '} />
        </FormField>
      </div>

      <footer className='flex justify-end'>
        <Button> Next </Button>
      </footer>

    </Form>
  )
}

export default StepOne