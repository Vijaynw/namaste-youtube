import React, { useEffect, useRef, useState } from 'react'
// import { Suggestion } from '@testing-library/react'
import { suggestions } from '../utils/suggestion'
import { Link } from 'react-router-dom'
import { topTenCountries } from '../utils/consts'
import { useSelector } from 'react-redux'
import { addRegion } from '../utils/regionSlice'
import { useDispatch } from 'react-redux'
const ButtonList = () => {

  const dispatch =useDispatch()
  // console.log(suggestions)
  const data = useSelector((store)=>store.region)
  const [region,setregion]=useState()
  console.log(data)
  const btn =useRef(null)
  // console.log(btn.current)
  const handle = ()=>{

    dispatch(addRegion(btn.current.value))
    setregion(btn.current.value)
    console.log(btn.current.value)
}
// const setRegion =()=>{
// dispatch(addRegion(btn.current.value))
// }

useEffect(()=>{
    // setRegion()
  },[region])
  // console.log(data)
  return (
    <div className='flex'>
        {/* ButtonList */}
        <ul className='flex flex-wrap '>
            {/* <li className='p-2 mx-2 mt-2 rounded-lg border'>Videos</li> */}
           {
             topTenCountries.map((e)=>  <Link to={'/?reg_code='+e.code} ref={btn} onClick={handle} value={e.code} className='p-2 mx-2 mt-2 rounded-lg border'>{e.name}</Link>
            )
           }
        </ul>
    </div>
  )
}

export default ButtonList