import React from 'react'
import MainContainer from './MainContainer'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='grid grid-flow-col '>
      {/* Body */}
        <div className='col-span-1 borde'>

        <SideBar />
        </div>
      <div className='border col-span-10'>
        {/* <MainContainer /> */}
        <Outlet />

      </div>
    </div>
  )
}

export default Body