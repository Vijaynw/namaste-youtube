import React from 'react'
import MainContainer from './MainContainer'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='grid grid-flow-col '>
    
        <div className='flex'>
        <SideBar />
        <Outlet />

      </div>
    </div>
  )
}

export default Body