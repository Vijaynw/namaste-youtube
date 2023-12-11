import React from 'react'
import { Link } from 'react-router-dom'
import format from '../utils/conversion'

const VideoCard  = ({title,image,videoURL}) => {
  // console.log(statistics)

  // console.log(viewCount,likeCount,favoriteCount,commentCount)
  // const formatedNum = format(viewCount)

  return (
    <div className='border w-2/12 p-2 shadow-lg m-2'>
     <Link to={'watch?v='+videoURL}>
      <img src={image} alt="" />
      <h2>{title}</h2>

      {/* <li>{likeCount}</li>
      <li>{favoriteCount}</li>
      <li>{commentCount}</li> */}
     </Link>
        
        </div>
  )
}

export default VideoCard 