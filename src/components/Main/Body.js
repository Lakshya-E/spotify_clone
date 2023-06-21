import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navigation from './Navigation'
import HomeHero from './HomeHero'
import { getRecentlyPlayed } from '../../utils/userDataFetch'

const Body = () => {

  const [recentlyPlayed, setRecentlyPlayed] = useState();
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    getRecentlyPlayed(token);
  },[])

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
