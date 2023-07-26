

import React from 'react'
import JobCard from './JobCard'

function JobList() {
  const jobs = [1, 2, 3, 4]
  return (
    <div className='grid grid-cols-2 gap-6'>
        {jobs.map((job, index) => {
           return <JobCard key={index} />
        })}
    </div>
  )
}

export default JobList