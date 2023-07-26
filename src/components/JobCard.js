

import React from 'react'
import netflixLogo from '../assets/netflixLogo.svg'
import Button from './Button'
import DeleteIcon from '../icons/DeleteIcon'
import EditIcon from '../icons/EditIcon'


function JobCard({ job }) {
   return (
      <div className='max-w-[830px] min-h-[320px] flex px-[24px] py-[16px] bg-card rounded-[10px]'>
         <div className='flex w-full gap-[8px]'>
            <div>
               <img src={netflixLogo} />
            </div>
            <div className='flex flex-col'>
               <h3 className='text-[24px] text-dark'> UX UI  </h3>
               <div> Great Vibes - Information Technology </div>
               <div className='text-[#4D4D4D] mb-[24px]'> Chennai, Tamilnadu, India {'In-office'} </div>
               <div className='mb-[8px]'>  Part-Time (9.00 am - 5.00 pm IST) </div>
               <div className='mb-[8px]'>Experience (1 - 2 years)</div>
               <div className='mb-[8px]'> INR (₹) 30,000 - 50,000 / Month </div>
               <div className='mb-[24px]'> 51-100 employees </div>
               <div className='flex '>
                  <Button type={'primary'}> Apply Now </Button>
               </div>
            </div>
         </div>
         <div className='flex items-start justify-end gap-2'>
            <Button type={'danger'}> Delete </Button>
            <Button type={'warning'}> <EditIcon /> </Button>
         </div>
      </div>
   )
}

export default JobCard