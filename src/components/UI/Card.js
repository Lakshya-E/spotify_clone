import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className='bg-[#1d1d1d] rounded-md m-2'>
        {/* artist image */}
        <div className='p-2'>
            <img 
                className={`${props.isProfile ? 'rounded-full': ''}`}
                src={props.data.images[0].url} 
            />
        </div>
        {/* artist details */}
        <div className='p-2'>
            <p>{props.data.name}</p>
            <p>{props.desc}</p>
        </div>

    </div>
  )
}

export default Card
