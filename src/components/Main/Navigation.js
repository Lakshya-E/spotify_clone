import React from 'react'
import { useSelector } from 'react-redux';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';

const Navigation = () => {

    const user = useSelector(state=> state.user.user);
    // console.log("user", user)

    const userAvatar = user?.images[0]?.url;
    // console.log(userAvatar);

  return (
    <div className='flex justify-between p-4'>
      <div>
        <ArrowBackIosIcon className='mx-4' />
        <ArrowForwardIosIcon />
      </div>
      <div className='flex'>
        <p className='border bg-white text-black font-medium rounded-2xl px-2 py-[2px] mr-4'>Explore Premium</p>
        <span className='rounded-full px-1 bg-gray-600'>
            {userAvatar && <img className='h-full w-full' src={userAvatar} />}
            {!userAvatar && <PersonIcon />}
        </span>
      </div>
    </div>
  )
}

export default Navigation
