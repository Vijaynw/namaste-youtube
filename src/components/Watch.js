import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Watch = () => {

  const [serch]=useSearchParams()
  console.log(serch.get('v'))
  return (
    <div className='p-4 m-4'>
      <div className='p-4 bg-slate-400'>

      <iframe width="1200" height="550" className='rounded-xl shadow-lg' 
      src={"https://www.youtube.com/embed/"+serch.get('v')+"?&autoPlay=1&mute=1&controls=1"}
      title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
      </div>
      </div>
  )
}

export default Watch