import React, { useEffect,useState } from 'react'
import VideoCard from './VideoCard '
import { API_KEY, YOUTUBE_VIDEO_APi } from '../utils/consts'
// import { topTenCountries } from '../utils/consts'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
const VideoContainer = () => {

const [videos,setVideos]=useState([])
const [region,setRegion]=useState('IN')
// const data = useSelector((store)=>store.region) 
const [data] =useSearchParams()

// console.log(data)  
const getRegion =()=>{
  setRegion(data.get('reg_code'))

}
    const getdata = async () =>{
        if (!region) return null
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode="+region+"&maxResults=50&key="+API_KEY
      )
        const json = await data.json()
        // const tmdbResults = await Promise.all(promiseArray);
        console.log(json)
        setVideos(json.items)
        // console.log(videos)
    }
    useEffect(()=>{
      // getRegion()
        getdata()
    },[])

  return (
    <div className='flex flex-wrap justify-center m-auto'>
        {/* VideoContainer */}
        {
          videos.map( video =>  <VideoCard key={video.id} title={video.snippet.title} 
            image={video.snippet.thumbnails.standard.url} videoURL={video.id} statistics={video.statistics} viewCount={video.statistics.viewCount}  id={video.id}/> )
        }
       
    </div>
  )
}

export default VideoContainer