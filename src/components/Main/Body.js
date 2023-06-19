import React from 'react'
import Navigation from './Navigation'
// import BodyHero from './BodyHero'
// import Songs from './Songs'

const Body = () => {
  return (
    <div className='relative rounded-md'>
      {/* <div className='absolute top-0 right-0 left-0 h-[50vh] w-full bg-gradient-to-b from-[#E78780] to-[#121212]'></div> */}
      <div className='backdrop-blur-3xl'>
        <Navigation />
        {/* <BodyHero /> */}
      </div>
      <div className='backdrop-blur-0'>
        {/* <Songs /> */}
      </div>
    </div>
  )
}

export default Body
