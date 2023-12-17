import React, { useEffect,useState } from 'react'
import VideoCard from './VideoCard '
import { useSelector } from 'react-redux'


const OptionVideoContainer = () => {

const [videos,setVideos]=useState([])
 const data = useSelector((store)=> store.option)
 console.log(data)
const getData =()=>{
    setVideos(data)
}

    useEffect(()=>{
        getData()
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

export default OptionVideoContainer