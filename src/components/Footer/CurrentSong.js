import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { trackSliceActions } from '../../store/track-slice';
import { getArtistsName, getCurrentlyPlayingSong } from '../../utils/userDataFetch';

const CurrentSong = () => {

    const token = useSelector(state => state.token.token);
    // const dispatch = useDispatch();
    // const [currentTrack, setCurrentTrack] = useState();

    // useEffect(() => {
    //     getCurrentlyPlayingSong(token).then(items => {
    //         console.log('from currentSong', items);
    //         setCurrentTrack(items);
    //     })
    // },[])

    // if(currentTrack){
    //     dispatch
    // }

    const [currentSong, setCurrentSong] = useState();

    useEffect(() => {
        getCurrentlyPlayingSong(token).then(items => {
            setCurrentSong(items);
        })
    }, [])

    // DEBUGGER
    console.log('from current song', getArtistsName(currentSong?.item));

  return (
    <div className='flex items-center'>

        {/* imaage */}
      <div className='h-[55px] w-[55px]'>
        <img 
            className='h-full w-full'
            src={currentSong?.item?.album?.images[0]?.url} 
        />
      </div>

      {/* song details */}
      <div className='mx-2'>

            {/* Song name */}
            <p className='text-sm'>{currentSong?.item?.name}</p>
            {/* artists */}
            <p className='text-xs text-gray-400'>{getArtistsName(currentSong?.item)}</p>

      </div>

    </div>
  )
}

export default CurrentSong
