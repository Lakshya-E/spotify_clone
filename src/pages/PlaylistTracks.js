import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPlayListDetails } from '../utils/userDataFetch';

import Navigation from '../components/Main/Navigation';
import Hero from '../components/Main/Hero';

const PlaylistTracks = () => {

    const params = useParams();
    const playlistId = params.id;
    const token = useSelector(state => state.token.token);

    const [playlistDetails, setPlaylistDetails] = useState();

    useEffect(() => {
        getPlayListDetails(playlistId, token).then(item => setPlaylistDetails(item));
    },[params.id])

    // DEBUGGER
    // console.log(playlistDetails);

    const data = {
        image: playlistDetails?.images[0]?.url,
        user: playlistDetails?.name,
        isProfile: false
    }

  return (      
    <div>
      <Navigation />
      <Hero data={data} />
    </div>
  )
}

export default PlaylistTracks;
