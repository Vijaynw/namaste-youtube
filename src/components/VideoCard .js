import React from 'react'
import { Link } from 'react-router-dom'
import format from '../utils/conversion'

const VideoCard  = ({title,image,videoURL,viewCount,favoriteCount,commentCount,id}) => {
  // console.log(statistics)

  // console.log(viewCount,likeCount,favoriteCount,commentCount)
  const formatedNum = format(viewCount)

  return (
    <div className='border w-2/12 p-2 shadow-lg m-2'>
     <Link to={'watch?v='+videoURL+'&id='+id}>
      <div className='h-[280px]'>

      <img src={image} alt="" />
      <h2>{title}</h2>
      </div>
      <div>

      <li>{viewCount}</li>
      {/* <li>{favoriteCount}</li>
      <li>{commentCount}</li>  */}
      </div>
     </Link>
        
        </div>
  )
}

export default VideoCard 