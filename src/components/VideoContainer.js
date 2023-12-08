import React, { useEffect } from 'react'
import VideoCard from './VideoCard '
import { YOUTUBE_VIDEO_APi } from '../utils/consts'

const VideoContainer = () => {


    const getdata = async () =>{

        const data = await fetch(YOUTUBE_VIDEO_APi)
        const json = await data.json()

        console.log(json)
    }
    useEffect(()=>{
        getdata()
    },[])

  return (
    <div>VideoContainer
        <VideoCard />
    </div>
  )
}

export default VideoContainer