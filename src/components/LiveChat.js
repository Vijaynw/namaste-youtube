import React, { useEffect } from 'react'
import { addMessage } from '../utils/chatSlice'
import { useDispatch, useSelector } from 'react-redux'
import { generate } from '../utils/helper'

const LiveChat = () => {
const dispatch =useDispatch()
const chatMessage = useSelector((store)=>store.chat.message)

    useEffect(()=>{
       const t= setInterval(()=>{
        dispatch(addMessage({
            name:generate(),
        }))
        },1000)
        return(()=> clearInterval(t))
    },[])
  return (
    <div>

        {

            chatMessage.map((m,i)=>{
                return(
                    <div key={i}>
                    <div className='flex mt-2'>
                    <img className='w-5' src="https://yt3.ggpht.com/J3u3Ur0yv_eh75URRCU8QmMp8ikDBNsUY7uZx6L6eSxUrIIu8SFjB7h8s_-AFL1JJmTdxTZL9Q=s68-c-k-c0x00ffffff-no-rj" alt="" />
                    <h1 className='font-bold ml-2'>{m.name}</h1>
                    </div>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default LiveChat