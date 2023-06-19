import React from 'react'
// import 

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';

const BodyNav = () => {
  return (
    <div className='flex justify-between p-4'>
      <div>
        <ArrowBackIosIcon className='mx-4' />
        <ArrowForwardIosIcon />
      </div>
      <div className='flex'>
        <p className='border bg-white text-black font-medium rounded-2xl px-2 py-[2px] mr-4'>Explore Premium</p>
        <span className='rounded-full px-1 bg-gray-600'>
            <PersonIcon />
        </span>
      </div>
    </div>
  )
}

export default BodyNav
