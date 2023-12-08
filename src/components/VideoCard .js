import React from 'react'
import { Link } from 'react-router-dom'
const VideoCard  = ({title,image,videoURL}) => {
  return (
    <div className='border w-2/12 p-2 shadow-lg'>
     <Link to={'watch?v='+videoURL}>
      <img src={image} alt="" />
      <h2>{title}</h2>
        VideoCard 
     </Link>
        
        </div>
  )
}

export default VideoCard 