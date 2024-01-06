import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import VideoCard from './VideoCard '
import { suggestions } from '../utils/suggestion'
import LiveChat from './LiveChat'
import { addMessage } from '../utils/chatSlice'
import { useDispatch } from 'react-redux'
import CommentsContainer from './CommentsContainer'
const Watch = () => {
  const [serch]=useSearchParams()
  const [liveMessage,setLiveMessage]=useState("")
  const [data] = useSearchParams()
  console.log(data.get('id'))


const dispatch =useDispatch()
  return (
<div>

    <div className='flex flex-row'>
   
      <iframe width="1100" height="650" className='rounded-xl shadow-lg' 
      src={"https://www.youtube.com/embed/"+serch.get('v')+"?&autoPlay=1&mute=1&controls=1"}
      title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen>
      </iframe>

   <div>

    <div className='flex bg-gray-200 ml-4 h-[650px] w-[350px] overflow-scroll flex-col-reverse'>
    <LiveChat />
    </div>
    <form onSubmit={(e)=>{
      e.preventDefault()
      dispatch(addMessage({
        name:liveMessage
      }))
      setLiveMessage("")
    }}>
      <input type="text" value={liveMessage} onChange={(e)=>{
        setLiveMessage(e.target.value)
      }} className='bg-gray' /> 
      <button className='p-2 m-2 bg-slate-300 rounded-lg' onClick={()=>{
        dispatch(addMessage({
          name:liveMessage
        }))
      }}>Send</button>

    </form>
      </div>
  </div>

     
     


      <div className=' w-screen'>
        <h1 className='p-2 m-2 font-bold'>Comments</h1>
        <CommentsContainer/>
      </div>

      </div>
  )
}

export default Watch