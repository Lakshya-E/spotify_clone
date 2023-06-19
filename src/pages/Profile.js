import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Navigation from '../components/Main/Navigation';
import Hero from '../components/Main/Hero';

import { getTopArtist } from '../utils/userDataFetch';

const Profile = () => {

    const userData = useSelector(state => state.user.user);
    const token = useSelector(state => state.token.token);
    // console.log(userData);
    // console.log(token[0][1]);

    const [topArtist, setTopArtist] = useState();

    useEffect(() => {
      getTopArtist(token).then(items => {
        console.log(items)
      })
      // console.log('data', data);
    }, [])

    // console.log(topArtist);

    const propsData = {
        title: 'Profile',
        user: userData.display_name,
        image: userData.images[0].url,
        followers: userData.followers.total,
        isProfile: true
    }

  return (
    <div>
      <Navigation />
      <Hero data={propsData} />
    </div>
  )
}

export default Profile
