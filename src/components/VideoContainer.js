import React, { useEffect,useState } from 'react'
import VideoCard from './VideoCard '
import { YOUTUBE_VIDEO_APi } from '../utils/consts'

const VideoContainer = () => {

const [videos,setVideos]=useState([])
    
    const getdata = async () =>{

        const data = await fetch(YOUTUBE_VIDEO_APi)
        const json = await data.json()

        console.log(json)
        setVideos(json.items)
        // console.log(videos)
    }
    useEffect(()=>{
        getdata()
    },[])

  return (
    <div className='flex flex-wrap p-5 m-2 justify-start'>
        {/* VideoContainer */}
        {
          videos.map( video =>  <VideoCard key={video.id} title={video.snippet.title} image={video.snippet.thumbnails.standard.url} videoURL={video.id} statistics={video.statistics}/> )
        }
       
    </div>
  )
}

export default VideoContainer