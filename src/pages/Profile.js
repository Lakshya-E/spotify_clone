import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Navigation from '../components/Main/Navigation';
import Hero from '../components/Main/Hero';

import { getTopArtist } from '../utils/userDataFetch';
import Card from '../components/UI/Card';
import CardWrapper from '../components/UI/CardWrapper';

const Profile = () => {

  const userData = useSelector(state => state.user.user);
  const token = useSelector(state => state.token.token);
  // console.log(userData);
  // console.log(token[0][1]);

  const [topArtist, setTopArtist] = useState();

  useEffect(() => {
    getTopArtist(token).then(items => {
      // console.log(items)
      setTopArtist(items)
    })
  }, [])

  // console.log('top', topArtist);

  const profileData = {
    title: 'Profile',
    user: userData.display_name,
    image: userData.images[0].url,
    followers: userData.followers.total,
    isProfile: true
  }

  return (
    <div>
      <Navigation />
      <Hero data={{ ...profileData }} />
      <CardWrapper title={'Top Artists this month'} titleDesc={'only visible to you'} >
        {topArtist?.slice(0, 6).map(artist => {
          return (
            <Card data={artist} isProfile={true} desc={"Artist"} />
          )
        })}
      </CardWrapper>
    </div>
  )
}

export default Profile
