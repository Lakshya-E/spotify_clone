import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Navigation from '../components/Main/Navigation';
import Hero from '../components/Main/Hero';

import { getTopArtist, getTopTracks, getUserPlaylist, getArtistsName } from '../utils/userDataFetch';
import Card from '../components/UI/Card';
import CardWrapper from '../components/UI/CardWrapper';
import Track from '../components/UI/Track';

const Profile = () => {

  const userData = useSelector(state => state.user.user);
  const token = useSelector(state => state.token.token);

  const [topArtist, setTopArtist] = useState();
  const [playlists, setPlaylists] = useState();
  const [topTracks, setTopTracks] = useState();

  useEffect(() => {
    getTopArtist(token).then(items => {
      setTopArtist(items)
    })
    getUserPlaylist(userData.id, token).then(items => {
      setPlaylists(items);
    })
    getTopTracks(token).then(items => {
      setTopTracks(items);
    }) 
  }, [userData, token])

  // console.log(topTracks);

  const profileData = {
    title: 'Profile',
    user: userData?.display_name,
    image: userData?.images[0].url,
    followers: userData?.followers.total,
    isProfile: true
  }

  return (
    <div>
      <Navigation />
      <Hero data={{ ...profileData }} />
      <CardWrapper title={'Top Artists this month'} titleDesc={'only visible to you'} >
        {topArtist?.slice(0, 6).map(artist => {
          return (
            <Card 
              image={artist.images[0].url} 
              name={artist.name}
              isProfile={true} 
              desc={"Artist"} 
            />
          )
        })}
      </CardWrapper>
      <CardWrapper notFlex={true} title={'Top Artists this month'} titleDesc={'only visible to you'} >
        {topTracks?.slice(0,4).map(track => {
          return (
            <Track 
              key={track.id}
              name={track.name.slice(0,35)}
              image={track.album.images[0]?.url}
              album={track.album.name}
              time={new Date(track.duration_ms).toISOString().slice(15,19)}
              artist={getArtistsName(track)}
            />
          )
        })}
      </CardWrapper>
      <CardWrapper title={'Your Playlists'} >
        {playlists?.slice(0,6).map(playlist => {
          return (
            <Card 
              image={playlist.images[0].url}
              name={playlist.name.slice(0,16)}
              isProfile={false} 
              desc={`by ${userData.display_name}`} 
            />
          )
        })}
      </CardWrapper>
    </div>
  )
}

export default Profile
