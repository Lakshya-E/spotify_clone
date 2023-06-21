import React from 'react'
import Navigation from './Navigation'
import HomeHero from './HomeHero'

const Body = () => {
  return (
    <div className='rounded-md'>
      
        {/* Navigation */}
        <Navigation />
        
        {/* <Home Hero Section/> */}
        <HomeHero />

        {/* Recently Played */}

        {/* Fav Artists */}
      
    </div>
  )
}

export default Body
