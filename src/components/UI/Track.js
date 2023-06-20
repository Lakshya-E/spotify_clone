import React from 'react'

const Track = (props) => {
  return (
    <div className='flex items-center justify-between mx-2 hover:bg-gray-800 p-2 rounded-md ease-in-out duration-200 cursor-pointer'>
      <div className='max-w-[500px] flex-grow flex items-center'>
        <p className='mr-2'>1</p>
        <img 
            className='h-[40px] w-[40px]'
            src={props.image} 
            alt='img' 
        />
        <div className='ml-2'>
            <p className='text-base'>{props.name}</p>
            <p className='text-gray-400 text-sm'>{props.artist}</p>
        </div>
      </div>
      <div className='text-center text-sm text-gray-400'>{props.album}</div>
      {/* conditional div */}
      {props.date && <div>Conditional div</div>}
      <div>
        {/* like icon */}
        <p className='text-sm text-gray-400'>{props.time}</p>
      </div>
    </div>
  )
}

export default Track

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKaHco5meT_jpREmB40Yg2QmuHovQe9BZpEsmY4pM9ZA&usqp=CAU&ec=48665698